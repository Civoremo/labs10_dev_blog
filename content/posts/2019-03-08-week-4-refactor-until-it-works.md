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

---

