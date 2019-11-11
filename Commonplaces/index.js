var quotes = document.getElementsByClassName("quote");
for (var i = 0; i < quotes.length; i++) {
  var shadowProperty = "";
  for (var g = 1; g < 20; g++) {
    if (g >= 2) {
      shadowProperty += ", ";
    }
    shadowProperty += "-" + g + "px -" + g + "px var(--shadowColor)";
  }
  //shadowProperty += ";";
  console.log(shadowProperty);
  quotes[i].style.textShadow = shadowProperty;
  var rand = getRandomInt(13, 23);
  console.log(rand);
  quotes[i].style.setProperty("animation-duration", rand + "s");
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
