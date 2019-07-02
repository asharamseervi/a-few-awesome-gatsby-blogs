---
title: "Bare Metal to Cloud: 01x05 Sprint Review"
date: "2019-06-24T12:00:00+00:00"
template: "post"
draft: false
slug: "/posts/bare-metal-cloud-01-05-review/"
category: "Bare Metal to Cloud"
tags:
  - "Bare Metal"
  - "Cloud"
  - "Migration"
  - "SaaS"
  - "Agile"
  - "Scrum"
  - "Review"
  - "Technical Debt"
description: "Our first ever sprint review - the review/retrospective of the first sprint in the series of migrating an existing application from bare metal to cloud."
---

# Welcome

![Bare Metal to Cloud 01x05 Review](/media/bm2c/01-05-thumbnail.jpg)

Welcome to the series on migrating our existing software from bare metal to cloud. This will be our last post in the first sprint, but also the very first sprint review! We have a LOT to cover, so let's get going!

# Sprint Recap

So for those that haven't read all the posts (or seen all the videos) a quick recap either by visiting the previous posts:

1. [Intro](https://www.pixeesoft.blog/posts/bare-metal-cloud-intro/)
2. [Planning](https://www.pixeesoft.blog/posts/bare-metal-cloud-01-01-planning/)
3. [Standup 1](https://www.pixeesoft.blog/posts/bare-metal-cloud-01-02-standup/)
4. [Standup 2](https://www.pixeesoft.blog/posts/bare-metal-cloud-01-03-standup/)
5. [Standup 3](https://www.pixeesoft.blog/posts/bare-metal-cloud-01-04-standup/)

or here is a short **TL;DR**:

## I. Scaling
We have a need to migrate existing software from bare metal to cloud. Why, you might ask - to be able to scale up with the customers without the need of constantly buying new hardware.

## II. Stack
The majority of the stack is a LAMP deployment. Thankfully it is a microservice oriented architecture, so it is possible to eventually drop a service here and there and put in a newer and fresher version.

## III. Documentation
There is some existing documentation, but lacks some key deployment and interaction parts. This point is the most painful one that prevented me from advancing further faster.

So in order to address all of these three major points, I have started working on bringing the application up-to-date with the latest technology trends. In order to track the progress and show you the lessons learned, I have opted to split the work into sprints and make videos and posts about it, just like this one. The first sprint was 7 working days in total. There were breaks in between, but all in all, it was 7 days spent on the work at hand.

# Tasks

Let's start with reminding ourselves what the board looked like at the end of our first sprint planning.

![Trello Sprint Tasks Selection Before](/media/bm2c/01-01-sprint.jpg)

As you can see, the board is optimistically filled with loads of tasks, rated (to my best knowledge) by their difficulty (or amount of effort). Here is the board after the sprint. 

![Trello Sprint Tasks Selection After](/media/bm2c/01-05-sprint.jpg)

At first glance it might seem like a failed sprint. That depends on your measure of success. Sure, if you have a customer waiting for the product, this would be a failure and you'd have to explain a lot of things. I'm not particularly in a rush, but I will explain to you why this happened. Also you may notice a task in Freezebox that looks almost identical to the one in the Sprint backlog. At one point I added this task as I started doubting that a Docker container would even be possible. But then I calmed down, found a solution and moved this task into the freezebox, from which I will simply delete it.

# Errors

There were three main errors that I made in the planning:

## I. Optimistic estimates
I was too optimistic with my task estimates. The majority of the tasks needed way more attention than I anticipated.

## II. Hidden subtasks
There were many subtasks that I didn't see coming and that had to be completed in order to finish the task I was working on.

> **Example:** Create a Docker container for the Auth Service. Seemed like a half a day of work. But there were obstacles. And frankly, I had some missing knowledge. I had to look up how CentOS works in a Docker container, particularly the SELinux part. I didn't have all the knowledge regarding the folder structure of our in-house PHP framework. That resulted in both in readjusting the size of the task and adding new tasks. You can imagine that messes up the schedule quite a bit.

# III. Video production
I underestimated the amount of work needed to make these videos. My idea was - I'll shoot two big videos each sprint - planning and review/retrospective. Those, I thought, would take a maximum one day. Then I'd shoot standup videos and put them together each day I'm working on the migration. But that's not sustainable, because even though, the standups are meant to be shorter, they still take about 75% of the day to make, which leaves me with 25% to code and then go overtime into the evening. And while I don't mind working late from time to time, it's just not great. So at one point during the sprint, I thought - I could do a standup video and then work for the rest of the day, plus the day after. Otherwise I wouldn't have anything interesting to report! But I still have a feeling a standup shouldn't take THAT long. It kind of defeats its purpose. 

So from now on, I will continue with the two videos per sprint on YouTube, but do a quick daily standup on Instagram and Facebook. Either using the IGTV + Facebook, or do an Instagram and Facebook Live sessions. I have to figure out the logistics and maybe play with it a little.

# Done

So which of the tasks did I finish? Mainly everything around the Authentication Service:

- I have access to all of the source code
- The whole project is now in a BitBucket git repository
- The service can be started locally using a docker container
- The service has a functional DB running in the GCP
- I have tested that user management works well - sign up, sign in and sign out.

You might be asking - did I accumulate any technical debt? Yes I did.
- The constants are semi-hard coded in the service. Some are in XML files and some are configurable in the database. I have noted it in the documentation so that we know in the future.
- The auth service now has hard coded constants that make it run only on localhost so for cloud deployment I will have to hard code in the proper domain or find a way how to inject it inside. 

Truth to be told, I am not keen on keeping this part of the application alive for too long. I feel like there are better open source solutions, or even Firebase that has authentication for free and frees you from the burden of running it yourself. This obviously poses you in a vendor lock-in so I'll analyze the situation and I'll let you know.

# The Good and The Bad

So what are the good outcomes of this sprint?

- I have the know-how of how the in-house developed PHP framework is deployed and how it works. I don't know all the nitty gritty details, but I have at least the 10.000 feet overview.
- I now better understand how CentOS operates in Docker and can reproduce that for the other services that are deployed in the same fashion.
- I have access to all the codebase and all the production servers. So I can finally immediately check the structure in production should I hesitate at some point where things go.

What are the bad outcomes?

- Obviously, I hoped to have way more done by now. But hopefully the learnings from this sprint will enable me to move faster.
- There is some technical debt, but it's well written down and tracked.
- The pace of videos as planned at first is not sustainable, so there will be changes.

# Conclusion

So there it is, our first sprint review. We went through the tasks, key takeaways, the good and the bad and some things to note in the future. But let's hear from you now - How do you go about doing sprint reviews and restrospectives? Do you focus more on the product, or on the people? Let me know on any social platform - [facebook](https://www.facebook.com/pixeesoft), [twitter](https://www.twitter.com/pixeesoft) or [instagram](https://www.instagram.com/pixeesoft)!

This post is a rewrite of the contents of the video that was published on [YouTube](https://www.youtube.com/watch?v=rF7IWvq6XXY) and [Facebook](https://www.facebook.com/pixeesoft/videos/454659305110321)! 😎


