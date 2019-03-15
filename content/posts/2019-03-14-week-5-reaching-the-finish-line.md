---
template: post
title: 'Week 5: Reaching The Finish Line'
slug: /posts/week5
draft: false
date: 2019-03-15T00:47:52.017Z
description: >-
  Labs project has reached the finish line and it's time to reflect on the
  process that got us to this point. The difficulties of finishing the last 10%
  of an already feature complete project and the stresses of a deadline.
category: 'dev_blog, week_5'
tags:
  - dev_blog
  - week_5
---
## Labs 10 Team Home 2 Week Five Experience

- - -

It is the final week of our Lab's project and everyone is working overtime to try and finish the final touches, get the last styling changes, fix any bugs still remaining. 

I started off the week by implementing pagination for our Activity Timeline. After studying some documentation and seeing some examples, the implementation was simple enough and was done the same day. With a little finessing of the back end to accommodate pagination and bit of work on the front end; things looked like they would work as we would have hoped.

![pagination implementation](/media/pagination.png "front end implementation of pagination ")

Unfortunately  this forced us to turn off automatic updates to the timeline which was a big feature we loved and wanted to keep. Being able to see immediate feedback whenever a teammate made a contribution to the work environment was a big deal for us and the intended pagination would not allow that to work as is. So I set out to study up on graphQL subscriptions to have that live timeline feed while also being able to have pagination and eliminate a long list of events on the timeline. This proved to be a bit more difficult than the pagination. Going over the documentation, the implementation seemed like it would be simple enough. That turned out not to be the case; with the back end implementation that we inherited, implementing subscription turned out to be quite challenging and the couple of people that reached out to try and help were unable to find us a solution. With a short week left to finalize styling and fix any remaining bugs, the decision was made to scrap the entire thing and focus on more important things.

- - -

As we were finishing up styling and any remaining bugs, I turned my attention to the Activity Timeline's sort functionality. As the newly built timeline now included various more info on team activity it became clear that sorting was needed and would greatly improve usability. I set out to make sorting possible and thanks to the teams amazing work building styled components I did not need to focus on the styling and could strictly look at how sorting should/could work. There are three levels of sort functionality that a user can utilize. Objects such as "Folder", "Message", "Document" and others are one of the things a user could sort by. Actions such as "Edited", "Deleted", "Liked" and others is another layer that can be sorted on; and Users being another layer. Combining all those different parameters make up for a very robust and useful sorting feature of the Activity Timeline.

![showing how sorting looks on the activity timeline](/media/sortingactivities.png "Activity Timeline Sorting")

That concluded any major change to functionality of the site; with only a couple of days left for us to finalize the project and iron out any remaining styling needs and bugs, it became a frantic race to put it all together into a nice package.

- - -

## Reflection

It is hard to believe that 5 weeks have passed already; long nights of working on solutions, learning new technology, and building out features. This has been an amazing experience in part to do with the amazing people I had a pleasure of working with. Brad Mortensen our PM who was always available to help and merge our code; even at 1 AM in the morning. Bondor and Eileen, some of the most amazing engineers I've had a pleasure of working with. Kai, our researcher and optimist and our very talented iOS developers Andrew and Jonathan. These past five weeks certainly have not been easy but the team stuck together and persisted through many obstacles. We started of with a project that was built on technology that none of us were yet familiar with; learning those and then understanding how those were used to build the initial project was one of the harder things that we had to endure and I am so glad that we did. Throughout our time on the project we questioned the choices that were made when the project was built initially. As we, ourselves are coming to the end of the project time frame; quick decisions are necessary to keep the team moving forward and on track. Sure, given the knowledge we gained in the process, going back and redoing many of the implementations would do the project good but that is the power of hindsight. Many, if not most of the front end code has been refactor to some capacity, something the back end did not have a proper chance to do since everyone depended on working code for feature implementation. There are definitely things that I would have loved to have implemented or things that had to be scrapped because of complexity or time constraints. In the end I am very impressed with what the team has accomplished, with what we were given and what  we ended up building.

Being an experimental team that was tasked with adding new features to a project that was built by a team, now long gone and unavailable to answer any questions we may have. The team stepped up and worked their butts off to make this a successful 5 weeks.
