---
title: "Bare Metal to Cloud: 01x03 Standup"
date: "2019-05-28T16:00:00+00:00"
template: "post"
draft: false
slug: "/posts/bare-metal-cloud-01-03-standup/"
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
  - "MySQL"
description: "Second standup in the sprint, redefining the goals for the day. Facing major roadblocks."
---

# Welcome

![Bare Metal to Cloud 01x03 Standup](/media/bm2c/01-03-thumbnail.jpg)

Welcome to the second standup in this 7 day sprint. We have some issues and we need to talk about them. Pun not really intended. We’ll go through the scrum board and address some roadblocks.

# Work Synchronization

So yesterday, we defined our goal - containerize the Authentication Service and connect a MySQL database to it. Also create a git repository for it. Looked straight forward, but wasn’t. I hit the wall, bounced back and still haven’t really recovered for another run. So what happened? 

Well, I encountered some blocking issues:

1. GUI for the Authentication Service is in a separate repository I cannot access.
2. Additional server tools needed for running the service is also in another repository I cannot access.
3. The Authentication Service has a hard dependency to an internal CRM tool.
4. MySQL database runs on the same machine as the Service does.
5. I don’t have access to the production machine to check certain configurations.

So what did I do? Well I did create that git repository… 

No in all seriousness, when an issue needs an input from another person, you have a blocker you need to address. And while you can solve almost all issues with technology, when there is a human input, you might not be as swift as you would desire - simply because the other person might have a lot of work to do and not necessarily have the time to help you by simply abandoning everything they were working on.

Fortunately, I reached out and will gain access to the repositories today, which is only one day later. But what needs to be done first is a revision of the tasks at hand - the planning itself was clearly insufficient and so I need to reflect that on the scrum board. Now this is simply a teething problem - not enough data and/or analysis of the system which resulted in miscalculated planning. When this happens to you, you mustn't kick yourself for it - these things happen, life gets in the way, computer sets on fire, you type google into google...but that shouldn’t let you down. Sit down, reiterate, reevaluate and get back to work. There is stuff that needs to be done.

# Updated Trello

![Updated tasks](/media/bm2c/01-03-tasks.jpg)

So there is the updated board - as you can see, I added the roadblocks mentioned above. I also added the issue for testing how much of a dependency the CRM tool is - if it will simply fail silently or actually not work at all. 

I don’t need to remove the issue regarding the database - it still needs to be done, it will just be deployed on the same machine. At least for now.

Also I have increased the value of containerizing the Auth Service to Large as there is a lot to be configured in the container in order for the service to start running. It’s basically developed as a full monolith - everything on the same machine - backend code, database and the GUI. It will obviously go through a major overhaul, but that will come, once the migration itself is done and the system is running on cloud.

Another issue added is the access to the production machine. Now, this is a slippery slope, be careful - you don’t want to tinker with the production machines. Unless you’re 100% certain. Even then, you shouldn’t really play around for too long. I simply want to log in, turn on Midnight Commander, check the folder structure and promptly leave again. I should have the access by the end of the week.

# Wrap up

So, that’s all for the standup, I’ll check in with you tomorrow on our next daily scrum. But let’s hear from you now - What are your roadblocks? How do you go about resolving them during the sprint? Let me know on any social platform - [facebook](https://www.facebook.com/pixeesoft), [twitter](https://www.twitter.com/pixeesoft) or [instagram](https://www.instagram.com/pixeesoft)!

This post is a rewrite of the contents of the video that was published on [YouTube](https://www.youtube.com/watch?v=lUc5csfensY) and [Facebook](https://www.facebook.com/pixeesoft/videos/2032551393707052)! 😎