$(document).ready(function() {

  var SinglePage = {
    config: {
      sliderBlock: $('#single-slider'),
      toggleEl: $('.single-page__item-toggle'),
      sizeList: $('#size-available'),
      sizeSelect: $('#single-size-select')
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
    sizeSelect: function(){
      var c = SinglePage.config,
        sizeEl = c.sizeList.find('span');
      c.sizeList.find('span').click(function(e){
        e.preventDefault();
        var curValue = $(this).data('value');
        sizeEl.attr('data-selected', false)
        $(this).attr('data-selected', 'selected');
        c.sizeSelect.val(curValue);
      })
    },
    init: function(){
      SinglePage.slider();
      SinglePage.toggle();
      SinglePage.sizeSelect();
    }
  }
  SinglePage.init();
});
