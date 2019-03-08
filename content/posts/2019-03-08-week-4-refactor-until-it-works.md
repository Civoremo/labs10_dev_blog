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

Our drop targets would be all the folders that were created along with the main staging area that contained both the folders and the documents that were initially created. That part was giving me the hardest time; we had to components  that were not necessarily related to each that needed to share information between each other.
