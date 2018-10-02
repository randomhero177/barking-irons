$(document).ready(function() {

  var HomePage = {
    config: {
      mainSliderBlock: $('.main-screen__slider'),
      collectionSliderBlock: $('#collection-slider')
    },
    mainSlider: function(){
      var c = HomePage.config;
      c.mainSliderBlock.each(function(i, el){
        let curId = $(this).attr('id');
        $('#' + curId).owlCarousel({
          loop:true,
          items:1,
          nav:true,
          video:true,
          lazyLoad:true,
          dots: true
        })
      })
    },
    collectionSlider: function() {
      var c = HomePage.config;
      c.collectionSliderBlock.owlCarousel({
          loop:true,
          items:2,
          nav: false,
          video:true,
          lazyLoad:true,
          dots: 0,
          margin: 15
        })

    },
    mainLoad: function() {
      var block = $('#main'),
        instagram = $('.instagram');
      /*
      setTimeout(function(){
        block.removeClass('loading loading--full loading--fixed');
        instagram.addClass('loading loading--full');
      }, 5000);
      */
      setTimeout(function(){
        instagram.removeClass('loading loading--full');
      }, 300);


    },
    instagram: function(){
      var block = $('.instagram');
      setTimeout(function(){
        block.removeClass('loading loading--full');
      }, 7000)
    },
    init: function(){
      HomePage.mainSlider();
      HomePage.collectionSlider();
      HomePage.mainLoad();
      //HomePage.instagram();
    }
  }
  HomePage.init();
});
