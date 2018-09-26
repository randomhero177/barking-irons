$(document).ready(function() {
  setTimeout(function(){
    equalHeights($('.js-item'));
  }, 500);
  $('#collection-alt-slider').owlCarousel({
    loop:true,
    items:1,
    nav:true,
    video:true,
    lazyLoad:true,
    dots: 0
  })
});
