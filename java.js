function fade()  {
  var scroll = $(window).scrollTop();
  var elementHeight = 200;
  var invert = elementHeight - scroll;
  var opacity = invert / elementHeight;
  document.getElementById('a3').style.opacity = opacity;
  document.getElementById('a2').style.opacity = opacity;

  var scroll2 = scroll - 200;
  var invert2 = elementHeight - scroll2;
  var opacity2 = invert2 / elementHeight;
  document.getElementById('a').style.opacity = opacity2;
  document.getElementById('a1').style.opacity = opacity2;
  console.log(scroll2);

  var scroll3 = scroll - 300;
  var invert3 = elementHeight - scroll3;
  var opacity3 = invert3 / elementHeight;
  document.getElementById('text').style.opacity = opacity3;
  console.log(scroll3);

  var scroll4 = scroll - 100;
  var invert4 = elementHeight - scroll4;
  var opacity4 = invert4 / elementHeight;
  document.getElementById('loader').style.opacity = opacity4;
  console.log(scroll4);

  var scroll5 = 750 - scroll;
  var invert5 = elementHeight - scroll5;
  var opacity5 = invert5 / elementHeight;
  document.getElementById('p1').style.opacity = opacity5;
  console.log(scroll5);

  var scroll5 = scroll - 750;
  var invert5 = elementHeight - scroll5;
  var opacity5 = invert5 / elementHeight;
  document.getElementById('p1').style.opacity = opacity5;
  console.log(scroll5);
}
