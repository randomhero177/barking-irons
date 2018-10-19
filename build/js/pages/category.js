$(document).ready(function() {
  var Category = {

    setHeight: function(){
      var screenHeight = $(window).height(),
        headerHeight = $('.header').height(),
        blockHeight = screenHeight - headerHeight,
        elem = $('category-box__item:not(.category-box__item--big)'),
        extraElem = $('.category-box__item--big'),
        smallestHeight = 0;
      
        elem.each(function(){
          var curHeight = $(this).height();
          smallestHeight = (curHeight > smallestHeight) ? curHeight : smallestHeight;
          if()
          extraElem.height(smallestHeight*2 -1)
        })
      
    },
    init: function(){
      Category.setHeight();
    }
  };

  Category.init();
});
