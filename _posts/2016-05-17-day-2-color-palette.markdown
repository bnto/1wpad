---
layout: post
title:  "DAY 2 - Color Palette"
date:   2016-05-17 20:00:00 +0200
categories: 
active: blog
---
A few days ago I stumbled upon a tutorial to create a color palette in Sketch.
For those who don't know, Sketch is a great app for designing websites.
I really liked this particular color palette and decided to recreate the same in CSS.
I was halfway through my [color palette][todays-page] when I realized that it uses
blending modes which are common in photo editing tools such as Photoshop.
But how does this work in CSS? Well say hello to *mix-color-blend*!
Although it doesn't seem to be 100% supported in every browser yet,
the overlay (overlay multiplies or screens the content depending on the background color) works as intended. Awesome!

The color palette has 3 base colors (red, green and blue). Then you add a pinch of white and black, and some yellow
to brighten up the colors. Finally, after cleverly combining everything together using different levels of opacity,
you get all these awesome shades of color! Woah!

[todays-page]: {{ site.baseurl }}/days/002-color-palette.html