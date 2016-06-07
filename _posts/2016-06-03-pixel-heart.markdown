---
layout: post
title:  "Pixel Heart"
date:   2016-06-03 20:00:00 +0200
categories: 
active: blog
sub: a heart made of pixels
day: '03'
---
{% include days/003-pixel-heart.html %}

A [heart made of pixel][todays-page] – very big pixels — is today's page.
I wanted to recreate the same pixelated heart I found in [this dribbble shot][ext-link].
The border shadow might be a bit off and it lacks the animation, 
but all in all it look pretty similar! Maybe I'll try to do the animations
for a future page.

Now for the technical part: the whole pixelated heart is one big square
done with 9 smaller squares (or pixels in this case) which I rotated 45 degrees.
The top square is completely clear (zero opacity) while the other square are
wearing nice colors.

Adding the shadow was more tricky. Because the css box-shadow property allows to cast a
shadow behind a box-shaped element only, it would not have worked with the hidden square
at the top. Thankfully, using the css filter property instead fixes this issue and puts
a nice shadow around the heart-shaped element.


[todays-page]: {{ site.baseurl }}/days/003-pixel-heart.html
[ext-link]: https://dribbble.com/shots/2460785-Pixel-Heart