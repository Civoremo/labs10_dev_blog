---
template: post
title: 'Week 4: Refactor Until It Works'
slug: /posts/week4
draft: false
date: 2019-03-08T15:45:21.560Z
description: >-
  Benefits of refactoring code that seem to always break without any apparent
  reason whenever you attempt to make even the slightest change.
category: 'dev_blog, week_4'
tags:
  - dev_blog
  - week_4
---
## Labs 10 Team Home 2 Week Four Experience

- - -

Another week of late nights and another week of progress. To recap the week prior, we attempted to implement Drag and Drop only to realize that the implementation was not going to work for our circumstance. After a couple of days of work, we scrapped the entire first implementation and used the React DnD library for the feature and it ended up working nicely. There are still a few things that we want to look at and improve; such as the load performance but that will wait until next week as we try to sort out the last few nagging bugs we're encountering.

A big shout out to my team once more, they have been crushing it. Everyone is putting in large amounts of time and effort and I could not be more impressed with their work ethic and dedication.

- - -

* Eileen has had the hard task of styling components and she has surpassed anything I thought was possible.
* Bondor, whom I have spent many nights programming with is an exceptional leader and engineer. With his initiative, the team has reworked the previously implemented activity timeline to an actual activity timeline.
* Kai has been hard at work on tasks that the rest of us would rather not have to do.

![document modal](/media/reworked-docmodal.png "document modal")

![reworked timeline](/media/reworkedtimeline.png "reworked timeline")

Previous implemented activity timeline can best be described as a loose interpretation of a activity timeline. While on the surface it looked and acted like what a activity timeline should do, once you dug deeper into the functionality you soon realize that it does not keep track of any activity in any significant way. The biggest flaw we saw was that once a message was deleted; all activities associated with it was removed as if there never was anything there to begin with. 

The new implementation required extensive work on the frontend and the backend to do what it was intended to do and the results are amazing. It now keeps track of everything; activities remain on timeline even after something is deleted.

- - -

I spent first part of the week reworking the Drag and Drop and we finally have a working version that does not crash or throw weird errors. There were initial blocks as I attempted to understand how to pass certain variables from one component to another in our implementation of code. Some of the documentation was a bit vague and not many examples that were applicable to the way our project was configured but it was a great moment when it started to make sense.
React DnD looks to be an easy to implement library with some nuances. First thing necessary was to set up the context on the app; this was done on the root file to encompass the entire project and would allow to have DnD on any component.

![dragdropcontext](/media/dragdropcontext.png "dragdropcontext")

Next we needed to refactor some of our already created components to set our drag sources and our drop targets. Each of our documents would be a drag source.

![dragSource](/media/dragsource.png "dragSource")

Our drop targets would be all the folders that were created along with the main staging area that contained both the folders and the documents that were initially created. That part was giving me the hardest time; we had components  that were not necessarily related to each that needed to share information between each other.

![dropTarget](/media/droptarget.png "dropTarget")

The marked code in the red box eventually was the solution that I scratched my head for hours on. This little bit of code allow the drag source to receive information about the drop target.

- - -

After the DnD was implemented, I could finally help the team with the various other things that still needed to be refactored and fixed. After many discussions with Bondor we agreed that the previous implementation of GraphQL mutations was poorly implemented and would cause issues at every turn without any reasonable reason as to why. We soon started to refactor many of those mutations to a proper GraphQL mutation instead of the Frankenstein code that was there before and the app started working a lot more stable with less errors. Doing all of those refactors has deprecated many of the "helper files" previously used. It becomes greatly satisfying to see 30-50 lines of code shrink down to 10-20 and it performed more reliably, looked cleaner, and is easier for others to read and understand.

- - -

PRs have increased this week with many of them coming from implementing React DnD and refactoring code. 

![week 4 pull requests](/media/week4prs.png "week 4 pull requests")

- - -

## Various Links

* <https://trello.com/c/7DzByF12/92-implement-a-way-for-docs-to-be-moved-from-folder-to-folder-and-from-staging-area-to-folder-without-dnd-for-those-using-a-tablet>
* <https://trello.com/c/5psrxPCl/99-refactor-queries-and-mutations>
* <https://trello.com/c/Smcq2Gd1/83-react-dnd>
* <https://trello.com/c/3Q0fDnZ7/60-mutate-docs-that-are-dragged-and-dropped-into-a-folder-so-that-their-folder-id-updates>
* <https://github.com/Lambda-School-Labs/labs-team-home/pull/358>
* <https://github.com/Lambda-School-Labs/labs-team-home/pull/365>
* <https://github.com/Lambda-School-Labs/labs-team-home/pull/377>
* <https://github.com/Lambda-School-Labs/labs-team-home/pull/402>

---

As week 4 of our project comes to a close; looking back it is impressive how much was accomplished by the team; styling is coming together and looks a lot cleaner and nicer, DnD is implemented, and the activity timeline has been completely reworked. I would recommend each and every member of my team to anyone that needs amazing software engineers; their work ethic, personalities and dedication is an asset to all that work with them. We have one more week to polish the project up and then we can reflect back on the journey.

Until next week. {...Code}
