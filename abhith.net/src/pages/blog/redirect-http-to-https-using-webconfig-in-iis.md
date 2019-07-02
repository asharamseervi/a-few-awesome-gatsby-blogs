---
title: Redirect HTTP to HTTPS using Web.Config in IIS
author: Abhith Rajan
authorURL: http://twitter.com/abhithrajan
date: "2017-09-25T00:00:00.000Z"
templateKey: blog-post
image: /img/web-config.png
description: >-
    Use IIS Rewrite rule to redirect all HTTP request to HTTPS.
tags:
  - iis
  - seo
  - web-config
  - rewrite-rule
  - aspnet
---

Add the below rewrite rule in your **Web.Config** under **system.webServer** section,

<pre style="font-family:Consolas;font-size:13;color:gainsboro;background:#1e1e1e;"><span style="color:gray;">&lt;</span><span style="color:#569cd6;">rewrite</span><span style="color:gray;">&gt;</span>
<span style="color:gray;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span><span style="color:#569cd6;">rules</span><span style="color:gray;">&gt;</span>
<span style="color:gray;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span><span style="color:#569cd6;">rule</span><span style="color:gray;">&nbsp;</span><span style="color:#92caf4;">name</span><span style="color:gray;">=</span><span style="color:gray;">&quot;</span><span style="color:#c8c8c8;">httpsredirect</span><span style="color:gray;">&quot;</span><span style="color:gray;">&nbsp;</span><span style="color:#92caf4;">stopProcessing</span><span style="color:gray;">=</span><span style="color:gray;">&quot;</span><span style="color:#c8c8c8;">true</span><span style="color:gray;">&quot;</span><span style="color:gray;">&gt;</span>
<span style="color:gray;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span><span style="color:#569cd6;">match</span><span style="color:gray;">&nbsp;</span><span style="color:#92caf4;">url</span><span style="color:gray;">=</span><span style="color:gray;">&quot;</span><span style="color:#c8c8c8;">(.*)</span><span style="color:gray;">&quot;</span><span style="color:gray;">&nbsp;/&gt;</span>
<span style="color:gray;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span><span style="color:#569cd6;">conditions</span><span style="color:gray;">&gt;</span>
<span style="color:gray;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span><span style="color:#569cd6;">add</span><span style="color:gray;">&nbsp;</span><span style="color:#92caf4;">input</span><span style="color:gray;">=</span><span style="color:gray;">&quot;</span><span style="color:#c8c8c8;">{HTTPS}</span><span style="color:gray;">&quot;</span><span style="color:gray;">&nbsp;</span><span style="color:#92caf4;">pattern</span><span style="color:gray;">=</span><span style="color:gray;">&quot;</span><span style="color:#c8c8c8;">off</span><span style="color:gray;">&quot;</span><span style="color:gray;">&nbsp;</span><span style="color:#92caf4;">ignoreCase</span><span style="color:gray;">=</span><span style="color:gray;">&quot;</span><span style="color:#c8c8c8;">true</span><span style="color:gray;">&quot;</span><span style="color:gray;">&nbsp;/&gt;</span>
<span style="color:gray;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span><span style="color:#569cd6;">conditions</span><span style="color:gray;">&gt;</span>
<span style="color:gray;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span><span style="color:#569cd6;">action</span><span style="color:gray;">&nbsp;</span><span style="color:#92caf4;">type</span><span style="color:gray;">=</span><span style="color:gray;">&quot;</span><span style="color:#c8c8c8;">Redirect</span><span style="color:gray;">&quot;</span><span style="color:gray;">&nbsp;</span><span style="color:#92caf4;">redirectType</span><span style="color:gray;">=</span><span style="color:gray;">&quot;</span><span style="color:#c8c8c8;">Permanent</span><span style="color:gray;">&quot;</span><span style="color:gray;">&nbsp;</span><span style="color:#92caf4;">url</span><span style="color:gray;">=</span><span style="color:gray;">&quot;</span><span style="color:#c8c8c8;">https://yourdomain.com/{R:1}</span><span style="color:gray;">&quot;</span><span style="color:gray;">&nbsp;/&gt;</span>
<span style="color:gray;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span><span style="color:#569cd6;">rule</span><span style="color:gray;">&gt;</span>
<span style="color:gray;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span><span style="color:#569cd6;">rules</span><span style="color:gray;">&gt;</span>
<span style="color:gray;">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span><span style="color:#569cd6;">rewrite</span><span style="color:gray;">&gt;</span></pre>

Replace the **yourdomain.com** with the actual domain name and you are good to go. If this isn't working, make sure that you installed the **URL Rewrite** module in the IIS.
