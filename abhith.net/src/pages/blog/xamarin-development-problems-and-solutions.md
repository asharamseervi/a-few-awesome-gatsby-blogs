---
templateKey: blog-post
title: Xamarin development - problems and solutions
description: >-
  Here I am listing the problems that I faced during mobile app development
  using Xamarin (Now focused on Xamarin Forms) and the solutions that worked for
  me.
author: Abhith Rajan
authorURL: 'https://twitter.com/abhithrajan'
date: 2017-09-02T09:58:00.000Z
image: /img/account-login-error.png
tags:
  - visual-studio
  - xamarin-forms
---
Following are the list of problems I am addressing here.

- [#1: <strike>No resource found that matches the given name "Theme.AppCompat.Light" and similar 100+ errors during build.</strike>](#1)
- [#2: <strike>Couldn't able to sign into my Xamarin account from visual studio 2017 preview.</strike>](#2)
- [#3: <strike>Packaging error - “jarsigner.exe” exited with code 1</strike>](#3)
- [#4: <strike>Project not selected to build for this solution configuration</strike>](#4)
- [#5: <strike>GoogleServicesJson BuildAction missing</strike>](#5)
- [#6: <strike>App runs in debug mode, crashes in release mode</strike>](#6)
- [#7: <strike>Input string was not in a correct format - XAML</strike>](#7)

The strikethrough indicates that I have found solutions for them.
Solutions that worked for me explained below,

#### <a name="1"></a>Solution for #1: No resource found that matches the given name "Theme.AppCompat.Light" and similar 100+ errors during build.
To solve this, I deleted the Xamarin directory in this path C:\Users\username\AppData\Local\ then opened the solution, rebuild and it worked.

##### Additional Resources

- [No resource found that matches the given name "Theme.AppCompat.Light"](https://forums.xamarin.com/discussion/59017/no-resource-found-that-matches-the-given-name-theme-appcompat-light)

#### <a name="2"></a>Solution for #2: Couldn't able to sign into my Xamarin account from visual studio 2017 preview. 
I was trying login in VS 2017 Preview 15.4.0 and it wasn't working. After adding the Xamarin related feature pack to my 15.3.3 stable VS 2017, I tried the login in it and it worked. Then checked the login status in VS preview and that was also in the same state as in the stable.

##### Update 1:
I reported the problem #2 to VisualStudio developer community and here is the [link](https://developercommunity.visualstudio.com/content/problem/106582/unable-to-sign-in-to-xamarin-account-unhandled-act.html)

#### <a name="3"></a>Solution for #3: Packaging error - “jarsigner.exe” exited with code 1
Updated Xamarin.Forms from 2.3.4.247 to 2.3.4.270. Restarted visual studio. Changed configuration to Release. Tried to deploy and it worked. Switched back to Debug configuration and rerun. And it too worked.

#### <a name="4"></a>Solution for #4: Project not selected to build for this solution configuration
Found the solution, check your configuration manager and make sure that the "Deploy" box is checked for your target platform. The configuration manager can be found by selecting it from the drop-down arrow next to "Debug".

##### Additional Resources

- [Skipped Deploy: Configuration: Debug Any CPU Project not selected to build for this solution conf.](https://forums.xamarin.com/discussion/67216/skipped-deploy-configuration-debug-any-cpu-project-not-selected-to-build-for-this-solution-conf).

#### <a name="5"></a>Solution for #5: GoogleServicesJson BuildAction missing
This is the second time I came across this problem. When adding Firebase crash reporting component to our Xamarin forms app, we need to add the **google-services.json** file to the project as well needs to set its build action to "**GoogleServicesJson**". But after adding the file, when checked the available build actions for the file, there is no "**GoogleServicesJson**". In that case, unload the project and then edit the "**.csproj**" file and add the following.
<pre style="font-family:Consolas;font-size:13;color:gainsboro;background:#1e1e1e;"><span style="color:gray;">&lt;</span><span style="color:#569cd6;">ItemGroup</span><span style="color:gray;">&gt;</span>
<span style="color:gray;">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span><span style="color:#569cd6;">GoogleServicesJson</span><span style="color:gray;">&nbsp;</span><span style="color:#92caf4;">Include</span><span style="color:gray;">=</span><span style="color:gray;">&quot;</span><span style="color:#c8c8c8;">google-services.json</span><span style="color:gray;">&quot;</span><span style="color:gray;">&nbsp;/&gt;</span>
<span style="color:gray;">&nbsp;&nbsp;&lt;/</span><span style="color:#569cd6;">ItemGroup</span><span style="color:gray;">&gt;</span></pre>
Then reload the project. That's it. Check the build action for the file and you can see that it is set to **GoogleServicesJson**.

#### <a name="6"></a>Solution for #6: App runs in debug mode, crashes in release mode
When this issue occurred to me, I thought it is because of any configuration mistakes in my Release configuration but the issue solved by a simple process which is  **Clean** the solution and rebuild.

##### Additional Resources

- [App runs in debug mode, crashes in release mode](https://forums.xamarin.com/discussion/55666/app-runs-in-debug-mode-crashes-in-release-mode)

#### <a name="7"></a>Solution for #7: Input string was not in a correct format - XAML
This was purely my mistake but it took time to figure it out, especially when your XAML contains more elements. The issue was, the parameter I passed to one of the element's attribute was wrong, i.e more specifically, I passed some hashcode value of some color to one element HeightRequest attribute which should be an integer. There is no warning or anything in VisualStudio to indicate the syntax error and the error during the build is just "**Input string was not in a correct format**" pointing to the file.

##### Additional Resources

- [Input string was not in a correct format](https://forums.xamarin.com/discussion/55485/input-string-was-not-in-a-correct-format)
