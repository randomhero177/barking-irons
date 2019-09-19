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
      let
        response  = {},
        config = {
          blockSelector: '[data-item-handle]',
          blockId: '[data-item-id]',
          blockBtnWrap: '[data-item-buy="block"]'
        },
        blockArr = document.querySelectorAll(config.blockSelector);


      function hoverLisetener(){
        event.stopPropagation();
        let curBlock = event.currentTarget

        getProductInfo(curBlock.dataset.itemHandle, drawButtons);
        curBlock.dataset.itemChecked = 'true';
        curBlock.removeEventListener('mouseover', hoverLisetener);


        function drawButtons(response) {
          let block = curBlock.querySelector(config.blockBtnWrap),
              variants = response.variants,
              buttonsWrap = document.createElement('div'),
              button = document.createElement('span');

          button.classList.add('category-box__item-size');
          variants.forEach((el) => {
            let curBtn = button.cloneNode();

            curBtn.dataset.variantId = el.id;
            curBtn.textContent = (el.title !== 'Default Title') ? el.title : 'One Size';

            curBtn.addEventListener('click', (e) => {
              e.preventDefault();
              let curId = e.currentTarget.dataset.variantId;
              let confirm = new ConfirmPopup({
                title: 'Are you sure you want to add this item to your cart?',
                text: ' ',
                proceedText: 'Yes, Add to my Cart',
                cancelText: 'No, Cancel',
                cbProceed: function () {
                  sendAjaxRequest(null, '/cart/add.js', {
                    quantity: 1,
                    id: curId
                  }, function(){
                    let
                      notice = new PanelNotice('Item added to cart', 'success'),
                      bagElem = document.getElementById('in-bag-count');
                    if(bagElem) {
                      bagCount = parseInt(bagElem.textContent.replace("(", "").replace(")", ""));
                      bagCount++;
                      bagElem.textContent = '(' + bagCount + ')';
                    } else {
                      let
                        bagWrap = document.querySelector('.main-menu__bag'),
                        elem = document.createElement('span');
                        elem.classList.add('main-menu__bag-count');
                        elem.setAttribute('id', 'in-bag-count');
                        elem.textContent = '(1)';
                        bagWrap.appendChild(elem);
                    }
                  });
                }
              });
            });

            buttonsWrap.appendChild(curBtn);
          });

          block.appendChild(buttonsWrap);
        };

      };



      [].forEach.call(blockArr, (block) => {
        block.addEventListener('mouseover', hoverLisetener);
      });

    },
    init: function(){
      Category.setHeight();
      Category.quickBuy();
    }
  };

  Category.init();
});
