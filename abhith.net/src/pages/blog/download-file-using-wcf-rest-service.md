---
templateKey: blog-post
title: Download file using WCF REST Service
description: Download file using WCF Service
author: Abhith Rajan
authorURL: 'https://twitter.com/abhithrajan'
date: 2018-03-07T08:55:00.000Z
image: /img/florian-klauer-489-unsplash.jpg
tags:
  - wcf
  - rest
  - dotnet
---
Recently, We deployed a web application in a load balanced environment. And one of the features in the app was to download some data as excel and it was working fine in DEV (as usual) but keep failing in the PROD. When I checked it on the individual servers, all worked fine but not under SLB (Software Load Balancing).

So I reviewed the code and found out that there are two requests being sent, one after another, one for generating the file in the server and another one for fetching the generated file. Pretty bad implementation, right?
When is under load balanced environment, the first request may be served from one server and the second from another server. And there was no shared storage space (we used OSS). No sticky session either. So file generated in one server and it is being requested in another server which leads to 404.

To solve, We had to combine both, i.e generate the file and serve it on the same request. To do that, our code look like this,

#### Service Contract Interface

```cs
[WebGet(UriTemplate = "{cultureName}/download/{someId}")]
[OperationContract]
Stream GetReportByDate(string cultureName, string someId);
```

Of course it is a HTTP GET method. And the implementation looks like below,

```cs
public Stream GetReportByDate(string cultureName, string someId)
{
    try
    {
        ...
         // Generate file the usual way
        var filePath = SomeWayGenerateFileAndReturnFilePath();
        if (WebOperationContext.Current != null)
        {
            WebOperationContext.Current.OutgoingResponse.Headers["Content-Disposition"] =
        "attachment; filename=" + fileNameWithExtension;
             WebOperationContext.Current.OutgoingResponse.ContentType = "application/octet-stream";
        }
        return File.OpenRead(filePath);
    }
    catch (Exception exception)
    {
        throw new WebProtocolException(HttpStatusCode.InternalServerError, $"ERROR: Operation faild. {exception.Message}", exception.InnerException);
    }
}
```

Here **ContentType**  can be whatever it is, if you know it.  **application/octet-stream** is appropriate for entitites whose sole intended purpose is to be saved to disk.
If you only generates say PDF, then the content type part can be changed to,

```cs
WebOperationContext.Current.OutgoingResponse.Headers["Content-Disposition"]
  = "attachment; filename=MyFileName.pdf";
WebOperationContext.Current.OutgoingResponse.ContentType
  = "application/pdf";
```

That's it.
