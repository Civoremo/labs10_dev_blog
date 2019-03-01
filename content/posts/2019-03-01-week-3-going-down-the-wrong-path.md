---
template: post
title: 'Week 3: Going Down the Wrong Path'
slug: /posts/week3
draft: false
date: 2019-03-01T14:39:36.398Z
description: >-
  Knowing when to abandon an idea and starting from scratch is an underrated
  concept. While it may seem crazy to have spent hours or even days on a concept
  to only later realize that it is not feasible; using the knowledge one has
  acquired during that time can lead to a smoother path forward.
category: 'dev_blog, week_3'
tags:
  - dev_blog
  - week_3
---
## Labs 10 Team Home 2 Week Three Experience

- - -

What a week, what a week. You never know what you don't know until you know. Another week has gone by and the project is progressing. We have implemented all the features that we need although some are working better than others. In particular the initial Drag and Drop feature we started out with ended up being the incorrect approach to the solution. After countless hours molding the DnD, fixing one bug to only reveal several others we as a team have come to the conclusion that we need a different implementation. 

The team has been hard at work implementing the various front end features, such as the various modals and activity timelines, responsiveness and styling. I was impressed by all the hard work that Bondor, Eileen and Kai have put in and the results show it.

![document modal](/media/modals.png "document modal")

We now have the ability to add Folders, Documents, edit and update either. A user can leave a comment on a particular document, they can like a comment on that document and they have the ablity to subscribe to particular document to receive text messages or emails whenever someone contributes to the conversation.

- - -

Not everything went smoothly or is finished bug free and that's no more evident that the initial DnD implementation. At first it seemed straight forward and looked like it would be an easy feature to add to our project. Version 0.1 allowed us to drag objects and drop them onto drop zones, so far so good. We still had not implemented data persistence but that seemed like it would not be a big problem to do. Version 0.2 is when things started to show the issues the implementation would have but we kept on going in hopes that we could fix anything that was happening; it started falling apart quickly. We would constantly fight our page update where data would be update but the page would not show the update without reload and that was not really acceptable. By version 0.3 it became evident that it would simply not work the way we intended it to. Simply put, the implemented version was manipulating the DOM while we were using React and that simply was not going to fly with React. Persistent error whenever we would move a component from one to another.

![DOM error](/media/domerror.png "Dom error")

- - -

We have basically scrapped that implementation of DnD and started work on React DnD. After a few hours of work, it is showing progress and we have eliminated the errors that were causing us headaches all week long.
