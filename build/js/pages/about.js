$(document).ready(function() {	
  var About = {
    config: {
      sliderBlock: $('.about__slider'),
    },
    slider: function(){
      var c = About.config;
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
        
	  
	  setTimeout(function(){ setAnchors('.about'); }, 1000);
    }
  }
  About.init();
});
