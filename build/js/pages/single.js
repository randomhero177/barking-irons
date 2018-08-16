$(document).ready(function() {

  var SinglePage = {
    config: {
      sliderBlock: $('#single-slider'),
      toggleEl: $('.single-page__item-toggle')
    },
    slider: function(){
      var c = SinglePage.config;
      c.sliderBlock.owlCarousel({
        loop:true,
        items:1,
        nav:false,
        video:true,
        lazyLoad:true,
        dots: 1,
        dotsContainer: '#single-slider-dots',
      })
    },
    toggle: function(){
      var c = SinglePage.config,
        el = c.toggleEl;
      el.each(function(i, el){
        $(this).click(function(e){
          var href = $(this).data('href');
          $('#' + href).toggle(400);
          $(this).toggleClass('in');
        })
      })
    },
    init: function(){
      SinglePage.slider();
      SinglePage.toggle();
    }
  }
  SinglePage.init();
});
