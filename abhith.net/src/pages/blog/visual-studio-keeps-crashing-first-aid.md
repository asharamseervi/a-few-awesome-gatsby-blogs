---
title: Visual Studio keeps crashing - First Aid
author: Abhith Rajan
authorURL: http://twitter.com/abhithrajan
date: "2017-11-20T11:46:59.000Z"
templateKey: blog-post
image: /img/jeff-sheldon-2558-unsplash.jpg
description: >-
    Things you can try to solve the random crashes of Visual Studio.
tags:
  - visual-studio
  - ide
  - debug
---

Yesterday when I was working on a Sitefinity project in my Visual Studio 2017 (VS) community edition,  the VS just hanged for few seconds and crashed. Ok, maybe because the file I tried to open was little big and CodeMaid may be tried to format it and so crashed, this was my initial thought. So I tried to open the Visual Studio from the Sitefinity Project Manager, and boom, it crashed during opening solution. Next, I tried to open Visual Studio directly without opening any solution and boom, it crashed again. i.e unable to open Visual Studio.

Assuming that the crashes caused by any of the extensions that I installed (so many extensions installed to increase the productivity), I wanted to clear the cache of Visual Studio. To do that, I followed below steps,

- Close Visual Studio
- Press Win + R and type %localappdata% and press Enter
- Navigate to Microsoft -> Visual Studio -> 15.0_[randomnumber] -> ComponentModelCache
- Delete everything in the above folder

I have ReSharper installed, to clear its project cache, followed the steps below

- Make sure Visual Studio is closed
- Press Win + $ and type %localappdata% and press Enter
- Navigate to JetBrains -> Transient -> ReSharperPlatformVs15 -> v09_[randomnumber] (folder name depends on the ReSharper version installed).
- Delete ShellCaches and SolutionCaches folder 

And opened Visual Studio, it worked and I continued my work. But after some time, the same problem, VS hanged and crashed, and unable to open after. While I was trying to figure out what causes the issue, the boss called me to inform that I have a project demo for the Sitefinity project that I am working on to the client in 30min. 

Now it's a real problem, How to run and demo the Sitefinity project when Visual Studio not working?

- Plan A: Fix VisualStudio in 20 min. (10min for demo preparations).
- Plan B: Sitefinity project can run without VS by using its Project Manager.

I sticked with Plan A, tried the initial solution by cleaning cache and it didn't worked this time. Next tried to open Visual Studio in Safe mode. To do that, followed below steps,

- Open Command Prompt
- Run command **cd C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\IDE**
- Run command **Devenv.exe /SafeMode**

**/SafeMode** command is to start Visual Studio in safe mode, loading only the default environment and services. 
And in safe mode, VisualStudio worked fine, so I uninstalled CodeMaid and some other extensions and closed VS to complete the uninstallation. Then I opened VS in normal mode and everything seemed fine. 

I opened the Sitefinity project and run build, prepared for the demo, and the demo went well. But when the client left, and I started to continue my work, the problem occurred again. So this time I tried to uninstall more extensions by going in SafeMode. And the problem keeps coming, sooner or later. And when I checked the **ActivityLog.xml** for the visual studio in "**C:\Users\{username}\AppData\Roaming\Microsoft\VisualStudio\15.0_[randomnumber]**", the errors reported is by the **GitHub extension** and so next time I tried to **revert** the GitHub extension (Cannot uninstall since its part of VS 2017) and disabled automatic updates. 

Now after did everything above, My Visual Studio running fine. So if you are troubling with any such situation, first check the **ActivityLog.xml**. Hopefully, you will figure out whats going wrong with Visual Studio from the log.

### Additional Resources

- [Visual studio 2017 version 15.3 crashes when opening solution](https://developercommunity.visualstudio.com/content/problem/99951/visual-studio-2017-version-153-crashes-when-openin.html)
- [/SafeMode (devenv.exe)](https://docs.microsoft.com/en-us/visualstudio/ide/reference/safemode-devenv-exe)
