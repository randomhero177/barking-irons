$(document).ready(function() {
  var SinglePage = {
    config: {
      sliderBlock: $('#single-slider'),
      toggleEl: $('.single-page__item-toggle'),
      sizeList: $('#size-available'),
      productSelect: $('#single-product-select'),
      singleBlock: $('#single-block'),
      sliderBgElem: '.single-page__slider-item'
    },
    slider: function(){
      c.sliderBlock.owlCarousel({
        loop:true,
        items:1,
        nav: true,
        video:true,
        lazyLoad:true,
        dots: 1,
        dotsContainer: '#single-slider-dots',
      })
    },
    toggle: function(){
      var el = c.toggleEl;
      el.each(function(i, el){
        $(this).click(function(e){
		      e.preventDefault();
          var href = $(this).data('href');
          $('#' + href).toggle(400);
          $(this).toggleClass('in');
        })
      })
    },
    sizeSelect: function(){
      var sizeEl = c.sizeList.find('span');

      c.sizeList.find('span').click(function(e){
        e.preventDefault();
        var curValue = $(this).data('value');
        sizeEl.attr('data-selected', false)
        $(this).attr('data-selected', 'selected');

        var prodOption = $('#single-product-select option').filter(function () { 
          return $(this).html() == curValue; 
        }).val();

        c.productSelect.val(prodOption);
      });


      var curValue = $('#size-available [data-selected="selected"]').data('value');

      
      var prodOption = $('#single-product-select option').filter(function () { return $(this).html() == curValue; });
      prodOption.attr('selected', true);
    },
    setHeight: function(){
      var screenHeight = $(window).height(),
        headerHeight = $('.header').height(),
        blockHeight = screenHeight - headerHeight,
        elemArr = c.singleBlock.find(c.sliderBgElem),
        pageContent = $('.single-page__content');

      function pageContentHeight(){
        pageContent.css('min-height', ($(window).width() >= 992 ) ? blockHeight: 'auto');
      };
      
      $(window).resize(function(){
        pageContentHeight();
      });

      pageContentHeight();

      elemArr.each(function(i, el){
        var curImg = $(el).find('.single-page__slider-img').attr('src');
        $(el).css('background-image', 'url('+ curImg +')');
      });

    },
    init: function(){
      SinglePage.setHeight();
      SinglePage.slider();
      SinglePage.toggle();
      SinglePage.sizeSelect();
      setAnchors('.about');
    }
  };
  var c = SinglePage.config;
  SinglePage.init();

});
