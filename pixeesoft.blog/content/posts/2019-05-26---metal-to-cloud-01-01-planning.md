---
title: "Bare Metal to Cloud: 01x01 Sprint Planning"
date: "2019-05-26T12:00:00+00:00"
template: "post"
draft: false
slug: "/posts/bare-metal-cloud-01-01-planning/"
category: "Bare Metal to Cloud"
tags:
  - "Bare Metal"
  - "Cloud"
  - "Migration"
  - "SaaS"
  - "Agile"
  - "Scrum"
  - "Planning"
description: "First sprint planning on a journey from bare metal to cloud."
---

# Welcome

![Bare Metal to Cloud 01x01 Planning](/media/bm2c/01-01-thumbnail.jpg)

Welcome to the first sprint planning in the series. I will be showing you which tools we use and we'll go through the first planning process. We'll define our goal for the sprint, the deliverable we want to have by the end of the sprint and the constraints we have to work with.

Just for the record the terms and phrases I will be using in this series are a combination of 
1. Personal experience working in companies where some agile was used.
2. [Essential Scrum by Kenneth S. Rubin](https://www.goodreads.com/book/show/13663747-essential-scrum)

# Trello

Alright, let's start with our scrum board - we'll be using Trello, but there is a plethora of other tools out there, so find the one that suits you the best - I personally like Trello because of its various integrations we will be using in the future. Especially the BitBucket one.

![Trello Empty Lists](/media/bm2c/01-01-empty.jpg)

As you can see, I have created 4 lists - backlog, sprint, in progress and done. You might have also seen boards with "to test" or extra buffer layer "to do". But let's keep it simple for now. I also like the Kanban idea that a task should always move forward and never backward. That's why I don't have a "to test" list - simply because if tested and found not done - it would have to move back to "in progress". But technically it's always "in progress" until it's done, so it's just a matter of the process you have in place - for our case, it is not necessary to add extra layers of complexity.

![Trello Tasks](/media/bm2c/01-01-tasks.jpg)

Now that there are tasks in the backlog, it's time to give them sizes. Usually there would be some triage or team debate, deciding the value of each task. But since I'm alone for this part of the project, it will have to be me, who decides. I will be using t-shirt sizes - S, M and L. Small meaning one to two hours, medium half a day and large the whole day. Anything bigger than Large has to be broken down to smaller tasks. Once done with the sizes, I will also sort them in the logical order in which they should be completed.

![Trello Tasks Sizes](/media/bm2c/01-01-sizes.jpg)

So, now we're done with the so-called "backlog refinement" - organizing the backlog, making sure it has everything it needs. Now comes the time, when the actual planning takes place. Usually I would have a "budget" to spend and I would use that for fitting in as many tasks as possible. This sometimes feels like solving the knapsack problem, which is exactly what it is. You have tasks that have certain importance and time scope and you have a limited amount of time - so it is important to find the right amount of work so that you don't have too many tasks, but you're also never idle, because the tasks don't fit - for example you finish with a smaller task towards the end of the day and the next task is a LARGE one - what do you do? Frankly, I just follow the advice I once heard at the WebExpo conference - Do What You Need To Do, To Get The Stuff Done.

I might have defined the scope of the tasks as S/M/L which should theoretically correspond to their timing, but the problem is that there is a lot of unknown. So, basically the first sprint will be a stepping stone for the next one, as we will have more data to derive our estimates from.

The first sprint will have 7 working days - I have encountered many variants of sprint planning, but to me, the best option is to have a maximum of two weeks, otherwise everybody loses focus. If the sprint is too short, it feels like there are just meetings all the time (planning, standups and retrospective) and nothing really gets done. If the sprint is too long, though, like a month - it feels more like waterfall development and the team loses the agility to pivot when needed. Also I'm factoring in the fact that some days of the two weeks I'll actually be traveling. 

So for 7 days of work, if everything has the right labels, it would amount to 7xL /14xM etc. It feels optimistic, but let's go with it. After all this sprint is the initial one to gather data about our velocity.

![Trello Sprint Tasks Selection](/media/bm2c/01-01-sprint.jpg)

| Name                                                 | Label | Assumed Size |
|------------------------------------------------------|-------|--------------|
| Create git repository for Auth Service               | Ops   | Small        |
| Create container for Auth Service                    | Dev   | Medium       |
| Create DB for Auth Service                           | Ops   | Medium       |
| Deploy Auth Service to single VM                     | Ops   | Medium       |
| Create git repository for Billing Service            | Ops   | Small        |
| Create container for Billing Service                 | Dev   | Medium       |
| Create DB for Billing Service                        | Ops   | Medium       |
| Deploy Billing Service to single VM                  | Ops   | Medium       |
| Create git repository for API Service                | Ops   | Small        |
| Create container for API Service                     | Dev   | Medium       |
| Create DB for API Service                            | Ops   | Medium       |
| Deploy API Service to single VM                      | Ops   | Medium       |
| Create git repository for Data Eater and Data Feeder | Ops   | Small        |
| Create container for Data Eater                      | Dev   | Medium       |
| Create container for Data Feeder                     | Dev   | Medium       |
| Deploy Swift Object Storage Service                  | Ops   | Small        |
| Deploy MongoDB Service                               | Ops   | Small        |
| Deploy Data Eater to single VM                       | Ops   | Medium       |
| Deploy Data Feeder to single VM                      | Ops   | Medium       |
| Create git repository for Web frontend               | Ops   | Small        |
| Create container for Web frontend                    | Dev   | Medium       |
| Deploy Web frontend to single VM                     | Ops   | Medium       |

### Total: 8.2 man/days

So this is the selection of tasks I believe can be done in the scope of this sprint. By looking at it, the overall theme of the sprint is "software packaging". By the end of the sprint I'd like this things to be out of the way, so that we can put our focus elsewhere. As you might have noticed, there is no-devops in place - and do not mistake this with the no-ops initiative. There is no automation whatsoever. So hopefully in a couple of months we can get to something that at least somehow resembles continuous integration.

# Wrap up

So, that's all for the planning, ready for action. But let's hear from you now - How do you do your sprint planning? Do you have a more rigorous process, or do you just eyeball it? Let me know on any social platform - [facebook](https://www.facebook.com/pixeesoft), [twitter](https://www.twitter.com/pixeesoft) or [instagram](https://www.instagram.com/pixeesoft)!

This post is a rewrite of the contents of the video that was published on [YouTube](https://www.youtube.com/watch?v=B2kyorIN2ps) and [Facebook](https://www.facebook.com/pixeesoft/videos/2353070614972331)! 😎