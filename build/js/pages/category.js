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
        });
      extraElem.css('max-height', (smallestHeight*2 -4));

    },
    quickBuy: function(){
      let config = {
        blockSelector: '[data-item-buy="block"]',
        blockId: '[data-item-id]',
        blockBtn: '[data-item-buy="button"]',
        sizeBtn: '[data-size]'
      };
      let blockArr = document.querySelectorAll(config.blockSelector);

      [].forEach.call(blockArr, (block) => {

          let buttons = block.querySelectorAll(config.sizeBtn);
          let curId = block.dataset.itemId;


          [].forEach.call(buttons, (button) => {
            console.log(block, buttons, curId);
            button.addEventListener('click', (e) => {
              e.preventDefault();
              var confirm = new ConfirmPopup({
                title: 'Do you want to add this item to basket',
                text: 'Cancel',
                proceedText: 'Buy now',

                cbProceed: function () {
                //  location.href = urlToAddMoney; // urlToAddMoney is defined in Layout
                  let notice = new PanelNotice('Item added to cart', 'success');
                }
              });
            })
          });
      });
    },
    init: function(){
      Category.setHeight();
      Category.quickBuy();
    }
  };

  Category.init();
});
