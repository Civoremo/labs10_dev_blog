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

As we were finishing up styling and remaining bugs, I turned my attention to the Activity Timeline's sort functionality. As the newly built timeline now included various more info on team activity it became clear that sorting was needed and would greatly improve usability. I set out to make sorting possible and thanks to the teams amazing work building styled components I did not need to focus on the styling and could strictly look at how sorting should/could work.
