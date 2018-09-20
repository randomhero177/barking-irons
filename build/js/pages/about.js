$(document).ready(function() {
	function setAnchors(elClass){
		let blocks = $(elClass),
		 linkElems = $('.main-menu__anchors-item a');

		blocks.each(function(i, el){
			var curId = $(el).attr('id');
			$(linkElems[i]).attr('href', '#' + curId);
			smoothScroll(linkElems[i]);
		})

	}
	
function smoothScroll(elem){
  $(elem).click(function(event) {
    event.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
}
	
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
