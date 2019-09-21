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
        let resp = {"id":1802727882819,"title":"RDR2 Everyday Shirt (Blue Stripe)","handle":"everyday-shirt-blue-stripe","description":"\u003cul\u003e\n\u003cli\u003eBreathable cotton\/linen ticking stripe\u003c\/li\u003e\n\u003cli\u003e\n\u003cem\u003eArthur Morgan\u003c\/em\u003e collar print\u003c\/li\u003e\n\u003cli\u003eRockstar Games insignia stamp on shirt hem\u003c\/li\u003e\n\u003c\/ul\u003e\n\u003cstyle type=\"text\/css\"\u003e\u003c!--\ntd {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}\n--\u003e\u003c\/style\u003e\n\u003cp\u003e \u003c\/p\u003e\n\u003cp\u003e\u003cspan data-sheets-value='{\"1\":2,\"2\":\"Breathable cotton ticking stripe, A. Morgan collar print, Rockstar insignia stamp on shirt hem, Made exclusively for: Red Dead Redemption 2\"}' data-sheets-userformat='{\"2\":769,\"3\":[null,0],\"11\":4,\"12\":0}'\u003eLimited Edition: \u003c\/span\u003e\u003c\/p\u003e\n\u003cp\u003e\u003cem\u003e\u003cstrong\u003eRed Dead Redemption 2\u003c\/strong\u003e\u003c\/em\u003e\u003c\/p\u003e\n\u003cp\u003e \u003c\/p\u003e\n\u003cp\u003e \u003c\/p\u003e\n\u003cp\u003e \u003c\/p\u003e\n\u003cp\u003e \u003c\/p\u003e\n\u003cp\u003e \u003c\/p\u003e\n\u003cp\u003e\u003cem\u003eModel 6'0 | 170 lbs.\u003c\/em\u003e\u003c\/p\u003e\n\u003cp\u003e\u003cem\u003eWears size medium \u003c\/em\u003e\u003c\/p\u003e","published_at":"2018-11-28T19:25:08-05:00","created_at":"2018-11-05T13:05:05-05:00","vendor":"Barking Irons","type":"RDR2","tags":[],"price":9900,"price_min":9900,"price_max":9900,"available":true,"price_varies":false,"compare_at_price":12000,"compare_at_price_min":12000,"compare_at_price_max":12000,"compare_at_price_varies":false,"variants":[{"id":18472255389763,"title":"XS","option1":"XS","option2":null,"option3":null,"sku":"BIR1703XS","requires_shipping":true,"taxable":true,"featured_image":null,"available":false,"name":"RDR2 Everyday Shirt (Blue Stripe) - XS","public_title":"XS","options":["XS"],"price":9900,"weight":544,"compare_at_price":12000,"inventory_management":"shopify","barcode":""},{"id":16907033051203,"title":"S","option1":"S","option2":null,"option3":null,"sku":"BIR1703S","requires_shipping":true,"taxable":true,"featured_image":null,"available":true,"name":"RDR2 Everyday Shirt (Blue Stripe) - S","public_title":"S","options":["S"],"price":9900,"weight":544,"compare_at_price":12000,"inventory_management":"shopify","barcode":""},{"id":16907033083971,"title":"M","option1":"M","option2":null,"option3":null,"sku":"BIR1703M","requires_shipping":true,"taxable":true,"featured_image":null,"available":true,"name":"RDR2 Everyday Shirt (Blue Stripe) - M","public_title":"M","options":["M"],"price":9900,"weight":544,"compare_at_price":12000,"inventory_management":"shopify","barcode":""},{"id":16907033116739,"title":"L","option1":"L","option2":null,"option3":null,"sku":"BIR1703L","requires_shipping":true,"taxable":true,"featured_image":null,"available":true,"name":"RDR2 Everyday Shirt (Blue Stripe) - L","public_title":"L","options":["L"],"price":9900,"weight":544,"compare_at_price":12000,"inventory_management":"shopify","barcode":""},{"id":16907033149507,"title":"XL","option1":"XL","option2":null,"option3":null,"sku":"BIR1703XL","requires_shipping":true,"taxable":true,"featured_image":null,"available":false,"name":"RDR2 Everyday Shirt (Blue Stripe) - XL","public_title":"XL","options":["XL"],"price":9900,"weight":544,"compare_at_price":12000,"inventory_management":"shopify","barcode":""}],"images":["\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_tick_barking_irons_1_vert.jpg?v=1542778049","\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_tick_barking_irons_1.jpg?v=1542778055","\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_barking_irons_front.jpg?v=1542778059","\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_ticking_barking_irons_3.jpg?v=1542778065","\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_tab_label.jpg?v=1542778070","\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_barking_irons_label_9347a848-2073-4d2c-a9ac-e284deba4b6f.jpg?v=1542778077","\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/rockstar_games_barking_irons_stamp.jpg?v=1542778083"],"featured_image":"\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_tick_barking_irons_1_vert.jpg?v=1542778049","options":[{"name":"Size","position":1,"values":["XS","S","M","L","XL"]}],"url":"\/products\/everyday-shirt-blue-stripe"}
        //getProductInfo(curBlock.dataset.itemHandle, drawButtons);
        curBlock.dataset.itemChecked = 'true';
        curBlock.removeEventListener('mouseover', hoverLisetener);

        drawButtons(resp);
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
            curBtn.classList[(el.available) ? 'remove': 'add']('category-box__item-size_out');
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
