---
template: post
title: 'Week 2: Persistence Leads To Triumph'
slug: /posts/week-2-retrospective
draft: false
date: 2019-02-22T00:15:56.749Z
description: >-
  The importance of team dynamics and overcoming difficult tasks. Building out
  endpoints; fixing deployment issue; and creating front end components.
category: 'dev_blog, weel_2'
---
## Labs 10 Team Home 2 Week Two Experience

- - -

Let me start of by saying that I could not have joined a better team. A fun dynamic group that appears to enjoy spending time together working on difficult tasks; we spend upwards of 10 hours or more a day together on conference video as we work on code. We all tend to agree that we don't necessarily need to pair program to get things done but enjoy having someone around to think things through as we work on our individual tasks.This has been especially helpful as we encountered an issue with our deployed front end. 

The previous week our team spend a good amount of time going through the documentation of the project and the code base to understand the intricacies of the project. After making our various deployments  for the back end and the front end; all things seemed to be up and running and working properly. We focused our attention to setting up local work environments and begin tackling features. Soon after that we noticed that while our local environment were working exactly as expected, our deployed front end had difficulty login in with Auth0. We kept receiving error code 404, which baffled many that attempted to help us resolve the issue.

![error code 404](/media/errorcode404.png "Our biggest headache this week")

How could the local work environments work without errors, connect to the actual back end and make queries and mutations while our deployed front end had difficulty connecting and retrieving "currentUser" info?

After many hours and several people coming into our team to help us resolve the issue without any success in narrowing down the error. Kai, a passionate team member of mine came across a environment variable that finally would lead us to resolve the deployment issue.

---

a
