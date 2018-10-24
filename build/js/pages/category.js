$(window).load(function () {
  var Category = {

    setHeight: function(){
      var screenHeight = $(window).height(),
        headerHeight = $('.header').height(),
        blockHeight = screenHeight - headerHeight,
        elem = $('.category-box__item:not(.category-box__item--big)'),
        extraElem = $('.category-box__item--big'),
        smallestHeight = 0;
      
        elem.each(function(i, el){
          var curHeight = $(el).height();
          smallestHeight = (curHeight > smallestHeight) ? curHeight : smallestHeight;
          console.log(curHeight);
          console.log(el);
        });
      extraElem.height(smallestHeight*2 -4);

    },
    init: function(){
      Category.setHeight();
    }
  };

  Category.init();
});
