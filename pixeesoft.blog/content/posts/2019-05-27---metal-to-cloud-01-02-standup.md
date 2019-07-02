---
title: "Bare Metal to Cloud: 01x02 Standup"
date: "2019-05-27T16:00:00+00:00"
template: "post"
draft: false
slug: "/posts/bare-metal-cloud-01-02-standup/"
category: "Bare Metal to Cloud"
tags:
  - "Bare Metal"
  - "Cloud"
  - "Migration"
  - "Agile"
  - "Scrum"
  - "Standup"
  - "Auth"
  - "Git"
  - "Docker"
  - "MySQL"
description: "First standup in the sprint, defining the goals for the day."
---

# Welcome

![Bare Metal to Cloud 01x02 Standup](/media/bm2c/01-02-thumbnail.jpg)

Welcome to the first standup in this 7 day sprint. We’ll go through our scrum board, define today’s focus and describe the tackled tasks.

# Work Synchronization

Usually the Standup or Daily Scrum would begin with the synchronization of the team - what has happened between now and the last standup. This might be a bit meta, but in fact, I already have a lesson learned even though this is the first standup. I spent a significant amount of my weekend editing the sprint planning video. While some delays are to be expected - after all, I’m a programmer and not an editor - I frankly didn’t expect that much of a delay. Part of it is as well my lack of experience with [DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/) - which crashed on me two hours into editing and I learned that there wasn’t any autosave in place. Even though I don’t do any fancy color grading and 3D tracking effects, it does take time to cut the video and post-process the audio, so that it delivers the message and sounds OK. So despite the standups being short and to the point, the content delivery takes some time as well. I need to factor that in for the next sprint planning.

# Tasks for Today

![Tasks for today](/media/bm2c/01-02-tasks.jpg)

These are the three tasks I will occupy myself with:

1. Create a git repository for the Auth Service
2. Create a Docker container for the Auth Service
3. Create a DB for the Auth Service

Now all of these three tasks have their respective “definition of done”. Some of the steps may now seem as futile to define, but it helps for visibility. Everybody knows what needs to be done. There is no black box and magical engineering - full transparancy for better or worse.

## Git Repository

![Task 1](/media/bm2c/01-02-task-1.jpg)

The code for the Auth Service is stored in a SVN repository in on-premise infrastructure solution. While it was OK until now, if we want to step up our game, we need something that’s more robust and extensible. That’s where tools such as GitLab, BitBucket and GitHub come handy. For OSS I love GitHub. For private repositories I have been using BitBucket and enjoyed it very much, so I’ll stick with it for now. For clean slate purposes, I will initiate the repository with single commit and leave out the history - the history is still accessible in the SVN repo, but going onward, I think it won’t be needed as the project is in MVP stage. Last but not least - the installation guide should be transformed to a markdown formatted document as a README.

This shouldn’t take more than an hour.

## Docker Container

![Task 2](/media/bm2c/01-02-task-2.jpg)

In order to be able to debug and test the service in a reproducible manner, it’s important to containerize the code. That will allow for local testing and easy deployment. This step has some amount of unknown - some constants and URLs are hard-coded. What needs to be done to make sure they are overwritable on start? Once identified a Dockerfile should be in place with all necessary configurations. Secrets management etc can be further reviewed and extended at a later stage - when Kubernetes deployment is being handled. Also a Docker Compose file should be in place in order to spin up an ephemeral MySQL database in a container sideways for debugging purposes. All of this should be described in the README.

If everything goes well, this should take a maximum half a day.

## Database

![Task 3](/media/bm2c/01-02-task-3.jpg)

The third task is joined at the hip with the containerization of the service itself - one cannot be without the other. But basically the Auth Service has a .sql file describing the structure of the database. It would be great to have an automatic spin up of this database on demand for testing purposes, but also there should be a reproducible way how to spin it up in GCP, namely the Cloud SQL offering. I’m not sure if this can be done via Terraform or Ansible, but such tools should definitely be considered for later stage.

This task is hard to estimate, as it is “sort of” part of the containerization task, but it shouldn’t take more than half a day either.

Combined on paper the tasks are just slightly over one man/day, but the database and the docker task do overlap, so it should be doable, unless I face some major roadblocks.

# Wrap up

So, that’s all for the standup, I’ll check in with you tomorrow on our next daily scrum. But let’s hear from you now - What are you working on today? Are you facing any road blocks? Let me know on any social platform - [facebook](https://www.facebook.com/pixeesoft), [twitter](https://www.twitter.com/pixeesoft) or [instagram](https://www.instagram.com/pixeesoft)!

This post is a rewrite of the contents of the video that was published on [YouTube](https://www.youtube.com/watch?v=u_qft0jf3M0) and [Facebook](https://www.facebook.com/pixeesoft/videos/408685759716426)! 😎
