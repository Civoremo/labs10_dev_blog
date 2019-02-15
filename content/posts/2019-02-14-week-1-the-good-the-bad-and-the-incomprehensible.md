---
template: post
title: 'Week 1: The Good, the Bad, and the Incomprehensible'
slug: /posts/week-1-retrospective
draft: false
date: 2019-02-14T20:10:45.659Z
description: >-
  Understanding another teams code so that your team can add a new feature is
  harder than anticipated. 

  Documentation is lacking in certain areas and requires a deep dive to try and
  figure out how everything is configured.
category: 'dev_blog, week_1'
tags:
  - dev_blog
---
## Labs 10 Team Home 2 Week One Experience

- - -

A wild and exciting week of starting a project to expand the features with a team on an app already built by another team. Little did I know that reviewing parts of someone else's code previously, did not prepare me to tackle this challenge on with my teammates. The sheer scope of the existing code was a daunting task for us to undertake, especially since none of us were familiar with the frameworks used on this application. But we dove in head first; split up the duties of our weekly milestones and set on to learn about the frameworks and the code base itself. 

The first thing we had to accomplish was to deploy both the frontend and backend onto the web. I tackled the backend; it did not go smoothly. Unfamiliar with the environment variables necessary for  a working Auth0 protected backend; the entire team spent countless hours going through the code to find what was preventing us from accessing the API. We help from our PM we have deployed both the frontend and backend; while we are still working through some issues that remain, I feel confident that we will take care of them and have a much smoother time going forward with the tasks ahead.

- - -

The first challenge we encountered was the use of hardcoded URLs present in the codebase that points to deployment.

![hardcoded url](/media/apollo-server.png "backend code")

We could not just go into the code and replace our deployed URL with the previous URL since that would make the previous teams hard work useless. This was not just limited to the backend but rather throughout the frontend the URLs necessary for deployment were hardcoded. After discussing the situation with the team and our PM we made the choice of not altering the existing code but rather branch of the master repo and work on our own branch until we can get in touch with the previous team to discuss about replacing those hardcoded URLs with environment variables that would allow us both to work with the same master branch; but until further notice our repos are split.

- - -

Deploy the backend was and still is a bit stressful since we continue to encounter some issue with Auth0. While disabling Auth0 allows us to access endpoints, it does not play nicely with the frontend.

![pull request](/media/prs.png "my pull requests")

After various attempts to fix the issues we are facing with backend Auth0; we have yet to identify the cause of our bane. Team is understandably a little stressed about the situation since any frontend work is paused until this is resolved; I am confident that we are close to a breakthrough.

- - -

Nonetheless, we have deployed our **frontend to Netlify at **[**https://team-home-2.netlify.com/**](https://team-home-2.netlify.com/)**.**

![team-home-2 netlify](/media/netlify2.png "frontedn deployed site")

And our backend is deployed on **Heroku at **[**https://team-home-2-graphql-mongodb.herokuapp.com/**](https://team-home-2-graphql-mongodb.herokuapp.com/)**.**

![backend deployed site on heroku](/media/heroku.png "heroku deployment")

- - -

## Various Links

* <https://trello.com/c/iusTKLH9/25-deploy-backend-to-heroku>
* <https://trello.com/c/FGK3PmOM/16-learn-mongodb-nedim>
* <https://trello.com/c/4CevxA5E/33-enter-first-entry-for-blog>
* <https://trello.com/c/fbq8YrVb/35-deploy-and-create-content-for-blog-site>
* <https://github.com/Lambda-School-Labs/labs-team-home/pull/240>
* <https://github.com/Lambda-School-Labs/labs-team-home/pull/242>

- - -

It has only been a week and while it is what most of us had signed up for when we chose this project, it has been proven more frustrating than anticipated. The team is still excited and ready to tackle this challenge and I can't wait to see what end up creating.
