---
title: Event tracking with Google Analytics
author: Abhith Rajan
authorURL: http://twitter.com/abhithrajan
date: 2017-08-17T00:00:00.000Z
templateKey: blog-post
image: /img/2017-08-17-event-tracking-with-google-analytics-hero.jpg
description: >-
    When you want to get metrics related to user interactions on various parts of your website Google Analytics (ga)  event tracking can be helpful and is easy to integrate as well.
tags:
  - analytics
  - seo
---

I hope you have already added google analytics tracking script in your master page. If not see the page source of this page and check at the bottom of the page, there you can see some script which is provided by google analytics when we add a website (property) to our account in Google analytics which will track the page views etc for the whole website.

To add event tracking, we need to trigger the following function,

```js
ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
```

In which,**[eventCategory]** and **[eventAction]** are required fields.

Example usage follows,

```html
<a href="tel:1800123456" onclick="ga('send', 'event', 'Phone Call', 'Click/Touch', 'Contact Page');">1800123456</a>
```

The above code will track user interaction with the phone number. As you can see, here the **eventCategory** is "Phone Call", and **eventAction** is "Click/Touch". We can use the **eventLabel** field to improve the metrics by like here is assigned with value "Contact Page" so that we knows how much triggered from that page itself. And for other pages, we can have different eventLabel.
