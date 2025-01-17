---
title: Git branch not showing in Visual Studio Team Explorer
author: Abhith Rajan
authorURL: http://twitter.com/abhithrajan
date: "2017-10-11T00:00:00.000Z"
templateKey: blog-post
image: /img/2017-10-11-git-branch-not-showing-in-visual-studio-team-explorer.jpg
description: >-
    If you are having trouble to see the newly created (remote) git branches in the Visual Studio Team Explorer, try the workaround provided in this article.
tags:
  - git
  - visual-studio
  - ide
---

In our company, all the projects source code is under source control, which is **Visual Studio Online** (VSO). And most of them are using **GIT** as the **version control** (VSO supports Git as well as TFS).

Last year I initiated to follow **Git Flow** method as the branching model for the new projects and it's going well. Colleagues are getting used to it.

Recently when I created a feature branch in the VSO online interface, I checked the Visual Studio **manage branches** window in the **Team Explorer** to checkout the new branch but couldn't find it there under **Remote Branch**. The refresh button on the top of Team Explorer had no effect on the branches.

### Workaround

Until visual studio provides a better solution, you can use the **SYNC** option in the **Team Explorer**, which will also fetch the new branch list.

#### Useful

If you want to know more about **Git Flow**, read this [post](http://nvie.com/posts/a-successful-git-branching-model/).
