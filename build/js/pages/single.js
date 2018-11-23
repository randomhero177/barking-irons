$(document).ready(function() {
  var SinglePage = {
    config: {
      sliderBlock: $('#single-slider'),
      toggleEl: $('.single-page__item-toggle'),
      productSelect: $('#single-product-select'),
      singleBlock: $('#single-block'),
      sliderBgElem: '.single-page__slider-item',
      varianRowSelector: '[data-goal="options"]',
      varianListSelector: '[data-available-list]',
      varianItemSelector: '[data-variant-value]'
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
    productVariant: function(){
      var rows = $(c.varianRowSelector);
      var variantItems = rows.find('[data-variant-value]');
      var curSelectValue = c.productSelect.find('option:selected').text();
      console.log(variantItems);

      function showSelectedValue(){
        curSelectValue = curSelectValue.split(' / ');
        curSelectValue.forEach(function(el, i){
          var curActive = $(rows[i]).find('[data-value="' + el + '"]');
          makeItemSelected($(rows[i]), curActive);
        });
      };
      showSelectedValue();

      function makeItemSelected(row, activeItem){
        row.find('[data-variant-value]').attr('data-selected', false);
        activeItem.attr('data-selected', 'selected');
      };
      
      
      

      


      // var prodOption = $('#single-product-select option').filter(function () { return $(this).html() == curValue; });
      // prodOption.attr('selected', true);
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
      SinglePage.productVariant();
      setAnchors('.about');
    }
  };
  var c = SinglePage.config;
  SinglePage.init();

});
