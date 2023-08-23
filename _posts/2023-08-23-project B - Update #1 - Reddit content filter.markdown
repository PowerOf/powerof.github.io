---
layout: post
title: Project B Update '#1 - Reddit content filter'
date: 2023-08-23 00:00:00 +0300
description: Describing what we achieved so far # Add post description (optional)
img: software.jpg # Add image post (optional)
tags: [Productivity, Software] # add tag
---

Project B Update '#1 - Reddit content filter'

Today we have managed to implement a basic Chrome extension that hides posts with a right click context menu option. 

We have also worked on a basic AI model that rates reddit posts, by sentiment and value. This would be part of the Assistant Decision Framework / Decision engine.

Now we just have to connect the two and we have a basic content filter. 
As well as make the filter automatically check every title.

In practice we had to read the DOM and make it work with Old reddit, the new beta theme, and of course RES.

I was thinking about the requirements and we perhaps want a few different things:
1. Generic sentiment
2. Positivity % (how positive is the post)
3. Value % (how valuable is the post)

And then we can have a few different values for the following:
4. NSFW
5. User preferences
6. Context

Other values that could be useful: NSFL, Political, Religious, Drama, Toxicity, etc.

We can then have a few different thresholds for each of these, and then we can have a few different difficulty settings for the user to choose from.

For example the user could choose from pre-built filters like a "Safe" filter, a "Medium" filter, and a "Hard" filter. Or they could choose to manually adjust the thresholds for each of the above.

Custom filters could be saved and shared with other users. This could be a way to build a community around the extension.
They could have a 'Horny' filter which has high tolerance for NSFW content, or a 'Societal issues' filter that lets' political and similar content through.

Ultimately, they could set up their own filter with their own words and phrases they would like to be shown. Eg. Cat posts, or posts about a specific game. The AI would weigh these words and phrases higher and filter out posts that don't contain them.

You could also create a filter that just straight up blocks certain things like 'nudity' or the like.

The AI prompt sometimes got far better results when you gave some context to the prompt. For example, starting with the title, then can include the subreddit, and then the post itself, then the comments, etc.
The problem with giving more context is the requests get more expensive, and also if we want to peek into the actual post and comments, we would need to implement specific API calls to Reddit. Given the whole extension is based on scraping the DOM that the user is viewing, and filtering real time, this goes beyond the scope of the project, for now at least.

Ah yes one more thing. We should add a counter or a popup that shows how many posts have been filtered. This would be a good way to show the user that the extension is working, and also a good way to show the user how much time they have saved by not viewing the filtered posts. They should be able to Undo the filters one by one, or all at once.

We need to think about our storage needs too, but I think we can shelve this for now; we don't actually need storage for the MVP. We can just store the filters in memory and have them reset on browser restart. We can have 1-3 filters built in and then the user can choose and it will just apply then filter to the page there and then. We should have a default filter that you start with, something that filters out a good amount of things, and then you can have an extra strict filter that filters out even more things, and one that is different in some way. Maybe 2 filters (and an off switch) is enough for the MVP, with the Undo functionality.

At the moment we have a manual right click hide, with undo last and undo all filtering done, and we have that AI prompt that rates posts.
For the MVP we need to connect the 2 and find a way to scrape the DOM automatically and feed the AI these posts. We will also need the ability to automatically hide posts, based on a hardcoded condition, and the default 2 filters. We also need to parse the response from the AI and use this to hide the posts.

Remember, the filter exists in the extension itself, and the AI only should be giving us ratings based on what we feed it. The AI should not be filtering anything, it should just be rating the posts. The extension should be doing the filtering.


RK