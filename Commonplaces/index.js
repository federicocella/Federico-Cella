var quotes = document.getElementsByClassName("quote");
var randomDelay = [];
var randomDuration = [];
var timeToGo;
var lastProgress;
for (var i = 0; i < quotes.length; i++) {
  randomDelay[i] = anime.random(50, 5000);
  randomDuration[i] = anime.random(3000, 6000)
}
var animation = anime.timeline({
  easing: 'easeOutExpo',
  duration: 2000
});
animation.add({
  targets: '.quote.reflex',
  translateX: {
    value: [500, -1200],
    duration: function(el, i, l) { return randomDuration[i]; },
    delay: function(el, i, l) { return randomDelay[i]; }
  },
  translateY: {
    value: [commonFunction(500)-300, commonFunction(-1200)-300],
    duration: function(el, i, l) { return randomDuration[i]; },
    delay: function(el, i, l) { return randomDelay[i]; }
  },
  rotateX: [-40, -40],
  rotateY: [45, 45],
  easing: 'linear',
  delay: function() { return anime.random(50, 2000) },
  loop: true,
  direction: 'normal',
  endDelay: 0
});
window.onload = function() {
  var hl = document.getElementById("commonplace");
  var shadowProperty = "";
  var hlShadowProperty = "";
  for (var g = 1; g < 20; g++) {
    if (g >= 2) {
      shadowProperty += ", ";
    }
    shadowProperty += "-" + g + "px -" + g + "px var(--shadowColor)";
  }
  for (var g = 1; g < 7; g++) {
    if (g >= 2) {
      hlShadowProperty += ", ";
    }
    hlShadowProperty += "-" + g + "px -" + g + "px var(--shadowColor)";
  }
  //hl.style.textShadow = hlShadowProperty;
  for (var i = 0; i < quotes.length; i++) {
    quotes[i].style.textShadow = shadowProperty;
    var rand = getRandomInt(13, 23);
    //quotes[i].style.setProperty("animation-duration", rand + "s");
  }
}
var tick = setInterval(function() {
  timeToGo = (100-animation.progress/100)*animation.duration;
  var container = document.getElementsByClassName("container");
  if (container[0].scrollTop != 0 && container[0].scrollTop <= 667) {
    console.log("scrolling");
  }
  else {
    lastProgress = animation.progress/100*animation.duration;
    animation.play();
  }
}, 50);
document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementsByClassName("container");
  container[0].addEventListener("scroll", function() {
    console.log("ciao");
    animation.pause();
    animation.seek(lastProgress+((container[0].scrollTop/667) * (animation.duration-lastProgress)));
    //console.log();
  });
});
function checkQuote() {
  console.log("ciao");
  animation.pause;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function commonFunction(x) {
  return -x*0.62;
}
