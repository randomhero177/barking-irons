$(document).ready(function() {

    let About = {
      config: {
        sliderBlock: $('.about__slider'),
      },
      slider: function(){
          let c = About.config;
          c.sliderBlock.each(function(i, el){
            let curId = $(this).attr('id');
            $('#' + curId).owlCarousel({
              loop:true,
              items:1,
              nav:true,
              dots: 0
            })
          })

      },
      init: function(){
          About.slider();
      }
    }
    About.init();
});
