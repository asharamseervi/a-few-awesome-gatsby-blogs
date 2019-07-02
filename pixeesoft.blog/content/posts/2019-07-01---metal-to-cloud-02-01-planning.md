---
title: "Bare Metal to Cloud: 02x01 Sprint Planning"
date: "2019-07-01T12:00:00+00:00"
template: "post"
draft: false
slug: "/posts/bare-metal-cloud-02-01-planning/"
category: "Bare Metal to Cloud"
tags:
  - "Bare Metal"
  - "Cloud"
  - "Migration"
  - "SaaS"
  - "Agile"
  - "Scrum"
  - "Planning"
description: "Second sprint planning on a journey from bare metal to cloud."
---

# Welcome

![Bare Metal to Cloud 02x01 Planning](/media/bm2c/02-01-thumbnail.jpg)

Welcome to the second sprint planning in the series. With the lessons learned from the last sprint, I’ll attempt to plan for the next sprint more accurately. We’ll do backlog refinement, planning and define our goal for the sprint and the deliverable we want to have by the end of it. Let’s get started!

> For those that haven't been following us since the beginning go check out the [introduction post](https://www.pixeesoft.blog/posts/bare-metal-cloud-intro/) to find out what this whole series is about! 😉

# Scrum Board

Alright, let’s start with our scrum board - we’ll keep using Trello, because of its drag and drop simplicity and various integrations.

![Sprint 1 Scrum Review](/media/bm2c/01-05-sprint.jpg)

As you can see, this is the board as we left it after our review. In order to move further, we need to do some refinement: 

1. Remove tasks from done and freezebox
2. Re-evaluate the effort of the tasks in the pipeline
3. Move undone tasks from the sprint back to the backlog
4. Add technical debt tasks
5. Add any subtasks that arose after the review

So let’s get started with the refinement!

![Sprint 2 Backlog Refinement](/media/bm2c/02-01-refinement.jpg)

As you can see, I have changed values for various tasks, due to previous experience with deploying the in-house PHP framework. Now you I’ve completed the refinement part and planning can begin. The next sprint will have **9 days of work**. So we need to find the ideal amount of work to be done. 

# Planning

As mentioned in [previous planning](https://www.pixeesoft.blog/posts/bare-metal-cloud-01-01-planning/), we are using the t-shirt size method - S/M/L meaning:

1. Small (= an hour of work)
2. Medium (= a half a day of work)
3. Large (= a day of work)

So back to our knapsack problem, but in fact the logical order of the tasks dictates the order in which they should be done. Only some tasks can be interchangeable in the order.

![Sprint 2 Tasks](/media/bm2c/02-01-tasks.jpg)

There, I think that’s about it. The main focus is clearly the API services:

| Name                                                 | Label | Assumed Size |
|------------------------------------------------------|-------|--------------|
| Deploy Auth Service to single VM                     | Ops   | Large        |
| Create git repository for Billing Service            | Ops   | Small        |
| Create container for Billing Service                 | Dev   | Large        |
| Create DB for Billing Service                        | Ops   | Medium       |
| Deploy Billing Service to single VM                  | Ops   | Large        |
| Create git repository for API Service                | Ops   | Small        |
| Create container for API Service                     | Dev   | Large        |
| Create DB for API Service                            | Ops   | Medium       |
| Deploy API Service to single VM                      | Ops   | Medium       |
| Create git repository for Data Eater and Data Feeder | Ops   | Small        |
| Create container for Data Eater                      | Dev   | Large        |
| Create container for Data Feeder                     | Dev   | Large        |

### Total: 7.8 man/days

# Wrap up

So, that's all for the planning, ready for action (again). But let's hear from you now - How do you do your sprint planning? Do you do backlog refinement in a separate meeting or do you do it as part of sprint review? Let me know on any social platform - [facebook](https://www.facebook.com/pixeesoft), [twitter](https://www.twitter.com/pixeesoft) or [instagram](https://www.instagram.com/pixeesoft)!

This post is a rewrite of the contents of the video that was published on [YouTube](https://www.youtube.com/watch?v=P1SXPjV39M0) and [Facebook](https://www.facebook.com/pixeesoft/videos/431709654337708)! 😎

