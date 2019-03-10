// window load event makes sure image is loaded before running animation
window.onload = function() {

//The backgroundanimation
var tl = new TimelineMax({repeat:-1});
tl.to("#morningclouds, #dayclouds, #eveningclouds, #nightclouds", 45, {backgroundPosition: "-4500px 0px", ease: Linear.easeNone});

//Happy the flying cat
var tl = new TimelineLite();
//move happy the cat to the left (100% of the screen) and repeat this in an unending loop :)
tl.to("#bird",10, {left:'100%', ease:Linear.easeNone, repeat: -1});
//flap the wings of happy the cat by cutting one half of the image (from -168.5 to 0) and repeat this in an unending loop
tl.add(TweenMax.to("#bird", 0.5,{backgroundPosition:"-168.5px 0px", ease:SteppedEase.config(1), repeat:tl.duration()/0.2, repeat: -1}), 0);
};