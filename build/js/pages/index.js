$(document).ready(function() {

  let HomePage = {
    config: {
      sliderBlock: $('.main-screen__slider'),
    },
    slider: function(){
      let c = HomePage.config;
      c.sliderBlock.each(function(i, el){
        let curId = $(this).attr('id');
        $('#' + curId).owlCarousel({
          loop:true,
          items:1,
          nav:true,
          video:true,
          lazyLoad:true,
          dots: 0
        })
      })
    },
    mainLoad: function() {
      let block = $('#main');
      setTimeout(function(){
        block.removeClass('loading loading--full loading--fixed');
      }, 3000)
    },
    instagram: function(){
      let block = $('.instagram');
      setTimeout(function(){
        block.removeClass('loading loading--full');
      }, 7000)
    },
    init: function(){
      HomePage.slider();
      HomePage.mainLoad();
      //HomePage.instagram();
    }
  }
  HomePage.init();
});
