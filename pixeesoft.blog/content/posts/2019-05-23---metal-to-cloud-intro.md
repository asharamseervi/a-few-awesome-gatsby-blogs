---
title: "Bare Metal to Cloud: Introduction"
date: "2019-05-23T14:00:00+00:00"
template: "post"
draft: false
slug: "/posts/bare-metal-cloud-intro/"
category: "Bare Metal to Cloud"
tags:
  - "Bare Metal"
  - "Cloud"
  - "Migration"
  - "SaaS"
description: "Introduction to a journey from bare metal to cloud."
---

# Welcome

![Bare Metal to Cloud Introduction](/media/bm2c/01-00-thumbnail.jpg)

Welcome to the very beginning of a series where we focus on the journey from bare metal to cloud. Let’s set the stage - what do we have and where do we want to take it?

The situation is that we have an IoT platform collecting constant streams of data from edge devices. The product is in MVP stage and has been running for a while on bare metal.

There is a saying “if it works, don’t touch it”. But we kind of do need to touch it, otherwise it will eventually stop working. Now don’t get me wrong - this isn’t one of the “if this event with 0.001% chance of occurring happens, then…”. No, the situation is - if we actually onboard new customers and significantly increase the load, we have no scaling capabilities in place. It’s just a computer sitting in a datacenter and if its limits are reached, funny things may start happening. And we don’t want that.

So - in comes the cloud. We will be using [GCP](https://cloud.google.com/) but the aim is to make as many components as vendor agnostic as possible - with the use of tools such as k8s and Terraform. Obviously some parts of the system will be more cost efficient if the vendor’s tools are used. Such as [Google Cloud Storage](https://cloud.google.com/storage/) or [Pub/Sub messaging](https://cloud.google.com/pubsub/). We don’t have the comparison for our use-case, but we’ll make those trade-offs once we get to them - we will evaluate the options and choose the most logical one.

The end result here is to have a full infrastructure as code for the entire system to be able to spin it up on-demand, whenever needed. Be it custom deployment for customers on their own private cloud infrastructure or running various integration and smoke tests when implementing new features. Or rewriting the old ones… 

# Architecture

What does the architecture actually look like?

![Platform architecture overview](/media/bm2c/01-00-architecture.jpg)

## 1. Authentication Service
This is undeniably the backbone of the whole system as it is a dependency for pretty much all other services. It’s written in PHP and uses MySQL database. 

## 2. API Resource Server
This is basically the main API that has all the information around the user’s edge devices and their settings. Also written in PHP with MySQL database. 

## 3. Billing Service
This is a service for calculating the price for the customer’s usage of the platform, which is also written in PHP, but uses MS SQL. Quite frankly, this component will be the first one to drop as there are now services such as Stripe through which we can outsource this functionality and get rid of the responsibility to maintain the codebase.

## 4. Data Eater and Data Feeder
Both of these components move the IoT data in their respective directions and are written in Python. Both of these components talk to MongoDB and Swift Object Storage, where all the IoT data is stored. Speaking of data - the last piece of the system are ML pipelines analyzing the data received from the edge devices. These are run periodically as CRON jobs along with other housekeeping scripts for old data removal.

## 5. Client Applications
Now, how does one get inside the system? The user can interact with it using a web client, an iOS application or an Android application. The clients talk to various parts of the system - namely the authentication and billing services, the API, and of course the data feeder.

# Documentation

The sad part is that there is very little documentation on how things interact between each other. There is developer documentation for crucial parts of the code, documentation for the components themselves, but not much with regards to deployment and interaction. There is no business overview or user stories defining the functionalities of the system. This whole journey will also serve as the creation of the missing documentation.

# Expectations

So how will this journey be structured? I have decided to take an agile approach, divide the work into sprints and check in with you for plannings, standups and restrospectives. I will share with you all the struggles and failures so that you can learn from my mistakes. Also whenever possible, I’ll share code snippets and examples so that you can better understand what is going on. Should there be a whole service or a library worth opensourcing, you’ll be the first one to know about it.

# Wrap up

Right now, I have a drawing board to get back to - because I need to plan the first sprint. Have you already migrated from bare metal to cloud? Is it something you might do in the near future? Let me know on any social platform - [facebook](https://www.facebook.com/pixeesoft), [twitter](https://www.twitter.com/pixeesoft) or [instagram](https://www.instagram.com/pixeesoft)!

This post is a rewrite of the contents of the video that was published on [YouTube](https://www.youtube.com/watch?v=4Ej9Mcdmzwk) and [Facebook](https://www.facebook.com/pixeesoft/videos/306926186914289)! 😎