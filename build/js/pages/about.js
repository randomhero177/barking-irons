$(document).ready(function() {
    console.log( "ready!" );
    let About = {
      config: {
        sliderBlock: $('.about__slider'),
        sliderConfig: {

        }
      },
      slider: function(){
          var c = About.config;
          c.sliderBlock.each(function(i, el){
            let curId = $(this).attr('id');
            console.log(curId);
            $('#' + curId).owlCarousel({
              loop:true,
              items:1,
              nav:true,
            })
          })

      },
      init: function(){
          About.slider();
      }
    }
    About.init();
});
