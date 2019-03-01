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

We have basically scrapped that implementation of DnD and started work on React DnD. After a few hours of work, it is showing progress and we have eliminated the errors that were causing us headaches all week long. Implementation seems simple enough; it does require some refactoring of our code to allow the feature to integrate. Below is the drag component of documents.

![Drag Source](/media/dropsource.png "Drag Source")

While progress has been made in replacing our initial DnD, this early implementation of React DnD still has some bugs that need to be ironed out. But is nice to not see the errors that were present before are gone.

- - -

Unlike the rest of my team, my Pull Requests have been sparse this week. Various bug fixes and smaller features were coded in between the time spend at trying to mold the initial DnD implementation.

![pull request](/media/prmerges.png "merges")

- - -

## Various Links

* <https://github.com/Lambda-School-Labs/labs-team-home/pull/331>
* <https://github.com/Lambda-School-Labs/labs-team-home/pull/342>
* <https://github.com/Lambda-School-Labs/labs-team-home/pull/345>
* <https://github.com/Lambda-School-Labs/labs-team-home/pull/351>
* <https://trello.com/c/yPK2kbgm/61-folder-should-load-documents-that-have-a-matching-folder-id>
* <https://trello.com/c/6LEwNEWa/58-sendgrid-needs-to-be-implemented-on-the-backend>
* <https://trello.com/c/T9fN31zW/57-attempt-drag-and-drop>
* <https://trello.com/c/yFWUKZQA/64-bug-error-in-stripe-payment-processing-graphql-error-location-is-object-object-probably-just-referencing-the-wrong-path>

- - -

Another week, another bug that needs fixing. I feel like I keep repeating myself here, but I can not stress enough how good the members of my team are and the amount of time and effort they dedicate to this project. Everyone still seems to get along, we still spend an ungodly amount of time together on zoom, working on features, sharing memes and just having a good time. While for me personally the beginning of the week has been a disappointed in terms of my contribution to the code base;  things seem to be turning around and it's looking up. Perhaps the best part is that I finally got my own emoji in the slack channels; big thanks to my team members.

Keep coding; see you next week.
