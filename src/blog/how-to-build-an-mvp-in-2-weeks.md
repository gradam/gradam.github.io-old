---
date: 2020-05-18T10:51:16.902Z
title: How to build an MVP in 2 weeks
slug: how-to-build-an-mvp-in-2-weeks
thumbnail: /assets/1_umknvuenbftn7ko6fzmpga.jpeg
---
# Side projects are hard. 

I bet many of you have at least a few projects that you started, have been working on for a couple of months and abandoned them before they were ready. Perhaps you told some friends about them, but they have never seen the product or maybe you haven’t even mentioned it. The great idea that was going to make you a millionaire just got lost in your everyday life and finally got forgotten somehow. What if I told you there is another way?


# What’s an MVP?

A famous author of the Lean Startup methodology, Eric Ries, [defined the MVP meaning ](https://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html)as:

_“A Minimum Viable Product is that version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort.”_


# The backstory

A few months ago, together with my friends, we came up with an idea that led us to win the hackathon. After that event, we had nothing more than a simple prototype created in MarvelApp. We decided to move forward with our vision and try to build something that we could actually use to verify our assumptions. In that case, we needed an **MVP**.

** Firstly, just a reminder that this article will be focused on the tech/product side of things.** 


# Presumption

Let’s be real, we need to have something before we start building an MVP. What should we have so far?



1. The Idea

First of all, we need to know, more or less, what do we want to build and even more important WHY do we want to build it? What problem do we want to solve? (If you want to know why ‘WHY’ is so crucial. I would highly recommend [TED talk by Simon Sinek](https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action) about the golden circle rule )



2. Experience

Assuming that we want to build the MVP ourselves, we need the relevant experience. No matter how hard you try, you cannot [learn to code in 2 weeks](https://devhumor.com/media/how-to-teach-yourself-c-in-21-days). Of course, there are tools like [Bubble.io](https://bubble.io/), but this kind of approach has one significant downside: once you start growing, you have to rebuild your product from scratch to meet your custom needs. Thus, in this article I will assume that you have some solid programming background (or your CTO/tech buddy has one).



3. Team

Some people may argue that you can build your MVP alone. It is even better! Right? You can keep all those things for yourself only: all of the shares, profits, decisions, etc. 

####Sounds like an easy choice! 
####Does it?

I strongly advise to find yourself at least one extra team member, so that you can challenge your ideas, motivate each other and last but not least, exchange the knowledge and experiences. It is nearly impossible to be an expert in each field: to have the technical experience needed to develop the MVP, marketing and sales expertise to make people actually use it, design skills to make it beautiful, business knowledge to make it work, etc.

However, in this article we will focus on the MVP part and believe me or not, it can be built by one person.



4. Money

$0, that’s the amount of money we are going to need. I believe anyone can find this amount, and if not, ask three f’s for help (friends, family & fools). \
Anyway, I would encourage you to buy at least a domain, but it is by no means necessary.


# What are we going to build?

We will work on an example project. 

Let’s say we want to create a way to appreciate awesome food in restaurants.


# Let’s start!


#### How do we start?


##### Well, That’s obvious! We should just start coding! 

After all, we have only 2 weeks.

Or should we ...?


# First, plan!

It might seem counterintuitive at first - just a waste of time we already have very little - but planning will actually save us a lot of time going further. Try to imagine what would you build if you just created what was on your mind at the time of writing. You could end up with something like this: 

![Strange car](/0idb56zmlfk1uhdm056r.png)

So, how do we start planning? 


## List of features

We already have the idea, so let’s break it into much smaller parts now and create a list of features for our app. So what do we want to have in our appreciation app?

*   login
*   social login
*   list of restaurants
*   menu
*   ‘appreciate dish’ option
*   geolocalization
*   admin page
*   app’s website
*   restaurant page
*   chef page
*   option to use points to buy cool stuff
*   awesome animations
*   etc...


## Can we start coding now?

We are closer than before, but still not quite there. If you take a look at the list we have just created, you will notice that it is huge. It would probably cost much more than 0 dollars and take much longer than 2 weeks to develop. 

What we need to add right now is some _prioritization_, a way of deciding what feature should be done first and what can wait a bit. In other words, what is _a_ _must have_ and what is not.

During this stage, I found the MoSCoW framework extremely useful. It allows you to split your features into 4 categories:



*   **Must have**: Non-negotiable product needs that are mandatory to test the idea.
*   **Should have**: Important features that are not vital, but add significant value. 
*   **Could have**: Nice to have features that will have a small impact if left out.
*   **Won’t have**: Features that are not a priority for this specific time frame.

    For an excellent explanation of how MoSCoW works in detail, I highly recommend this article: [https://www.productplan.com/glossary/moscow-prioritization/](https://www.productplan.com/glossary/moscow-prioritization/).


Once we are done with prioritizing our features, we should toss away everything that is not included in the ‘must have’ category. 

By now we should have 1 to 3 features left, but those are likely pretty big ones. For example ‘Menu view’ does not tell us a lot about itself, so what we should do is to try to split those features into smaller ones, like here below:

Agenda view -> :



*   Dish image
*   Time of preparation
*   Price
*   How to get to the restaurant (eg. map)
*   Short description
*   Etc.

Repeat this process a few times (about 3) until you will have only required features left in the ‘must have’.

Of course, there are much more prioritization frameworks, but I will not go through them here. The basic approach is the same: repeat the process until you have the bare minimum.


# Tools

Now we can move on to the more technical part. We already know why we want to build the MVP and what features the MVP should have. Based on those we will choose our tool-set. However, we can create some general rules that will be applicable in most cases: 




1. We want to build it once and run it on every platform - which means our app should behave like a native app on iOS, Android and web without the need for any code modifications for each platform.
2. We want to build it fast, remember - we have only 2 weeks.
3. In case of success, we want to be able to scale it - that’s why we want to choose production-ready, customizable technologies.

So let’s explore our options here. 


## Frontend

First of all, we want something that will run everywhere.  
What comes first to mind are hybrid apps, eg. React Native or Ionic. Those are generally great but the problem with them is that we also want to be able to run on the web and secondly we want to avoid writing platform-specific code, and they require us to do so. The last problem is that you have to pay to publish an app to the App store and we wanted to avoid any costs. That’s why Flutter is not a viable choice either.

**PWA to the rescue! **

[PWA](https://web.dev/progressive-web-apps/) (Progressive Web App) is an amazing technology originated at Google (but now is supported by all major browsers), that allows classic web apps to behave and feel like native apps on all 3 major platforms (iOS, Android, web). 
 
You can basically just add a special layer to your web app, written in any framework or VanillaJS, and it will allow your app to work offline and in standalone mode. It’s even possible to have your app in the Play Store and App Store!

As for framework, personally I prefer React, but just choose something you feel most comfortable with.

You could be worried whether PWA is enough, maybe you should go with a native? Well, if PWA is good enough for companies like Tesla, Spotify, or Pinterest, I would say it’s good enough for you in 90% of cases.


## Backend

In terms of what to put on the backend, we have a lot more choices, as it has to run only on our server. I won’t spend much time here. Simply go with something you like. For me, it’s Python + Django, but you can go with any other REST or GraphQL enabled framework.


## Great, we have an application, so we are done! 


## Are we?


# Infrastructure

Before we are ready for lunch, we need to do one more step - we have to deploy our app somewhere. There are a lot of options for us out there. So, which one should you choose?  
Well, that’s obvious, right? Just go with AWS - it’s what trendy kids use nowadays.

Just setup: 

*   RDS
*   AIM
*   EBS
*   Route53
*   Terraform to manage it
*   … and so many more ... 


If you think this is a lot of work and overkill, you are right! We just want to test our MVP. Of course, we want to be able to serve some traffic if our idea turns out to be great, so RasberryPI in your home is not the solution either. 
 
So, what is? 
 
What I would recommend at this stage is to go with some **PaaS**, eg. _Heroku_ for backend and _Netlify_ for frontend.

In my case, I wanted to deploy a Django application what literally took me 5 minutes to do on Heroku, directly from my terminal. What’s more, it was done for $0 on their free tier. 

As for Netlify, it is an awesome tool for building and deploying FE code. Again, it literally takes 10 minutes to set this up and deploy your code directly from Github.


# We are done

So that’s it. After just about 2 weeks we have a fully working MVP, which we can now present to investors, test at first restaurants and show to your friends and family!
