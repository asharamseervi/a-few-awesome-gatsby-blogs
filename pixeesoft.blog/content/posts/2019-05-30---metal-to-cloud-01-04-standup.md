---
title: "Bare Metal to Cloud: 01x04 Standup"
date: "2019-05-30T16:00:00+00:00"
template: "post"
draft: false
slug: "/posts/bare-metal-cloud-01-04-standup/"
category: "Bare Metal to Cloud"
tags:
  - "Bare Metal"
  - "Cloud"
  - "Migration"
  - "Agile"
  - "Scrum"
  - "Standup"
  - "Docker"
  - "SELinux"
  - "Apache"
description: "Third standup in the sprint. We have successfully overcome the roadblocks mentioned during our previous standup and will share with you how!"
---

# Welcome

![Bare Metal to Cloud 01x04 Standup](/media/bm2c/01-04-thumbnail.jpg)

Welcome to the third standup in this 7 day sprint. We have successfully overcome the roadblocks mentioned during our previous standup and I will share with you how!

# Work Synchronization

So on our last standup we defined some blocking issues:
1. No access to two remaining repositories
2. No SSH access to the production machine
3. Dependency on internal CRM tool
4. MySQL being deployed on the same machine

The first two issues are strictly dependant on somebody else - somebody who has the access and can grant it to me. I have no control over that person’s time and so I have to hope that they can do it as soon as possible. Fortunately the repo access was quick. I still don’t have the SSH access, but with all the code, at least I can do some guess work.

Sometimes when a blocking issue is in your way for too long, you need to start meandering around it - not pretend like it’s not there - but work with it as a black box as soon as you unlock some parts that allow you to work around it. The reason I’m saying this is that the SSH access would allow me to check the structure of the deployment so that I could replicate it easily. But since I can’t look, I can at least try, because now I have all the code. The deployment is fairly traditional, but has some caveats.

## Auth Service Deployment Status
It is a standard LAMP deployment - Linux, Apache, MySQL, PHP. However the PHP is written as a custom REST API framework that has some dependencies from the system itself - it runs on CentOS and has multiple CRON maintainer jobs defined that need to run, otherwise the service won’t function properly.

Aside from that the documentation has an exhaustive description of the setup of SELinux, which is by default (and by design) disabled in docker containers.

So what did I spend my time on? Defining the Dockerfile combined with the guess work of how it actually runs. I faced multiple challenges with finding out how to approach the startup of the container - what should be the entrypoint and how should the services run in the container? One particularly juicy problem was starting the Apache server on the startup. If started as a service in CentOS, the container terminated immediately, so I had to resort to starting it up as the entrypoint of the container, running on foreground so that the container doesn’t stop immediately and is long-living.

There were some speed bumps along the way, for instance the documentation said that the Apache Web Server should have contents as defined in the README, so I did as it said. What it failed to point out was that it should be appended to the defaults - aha! Happy debugging!

# Updated Trello

![Updated tasks](/media/bm2c/01-04-tasks.jpg)

So there is the updated board - as you can see, not much has changed, but progress has been made. You may notice there is another task that wasn’t there before - and that is deploying the service in a VM “by hand”. At one point I was really desperate with regards to whether or not it is even possible to run in Docker, but now I have more insight and maybe this task will go to freezebox, or get deleted altogether.

Today and partly tomorrow as well, I will continue with the Dockerfile, hopefully finish the whole spinning up process sooner rather than later, because I’d like to get the whole codebase consolidated, close the git issue, add the Dockerfile and move on.

# Wrap up

So, that’s all for the standup, I’ll check in with you tomorrow on our next daily scrum. But let’s hear from you now - How do you go about discovering how an unknown codebase works? Do you tinker around or do you first read all available documentation? Let me know on any social platform - [facebook](https://www.facebook.com/pixeesoft), [twitter](https://www.twitter.com/pixeesoft) or [instagram](https://www.instagram.com/pixeesoft)!

This post is a rewrite of the contents of the video that was published on [YouTube](https://www.youtube.com/watch?v=ZVbOkMx1qAM) and [Facebook](https://www.facebook.com/pixeesoft/videos/1287433491434865)! 😎
