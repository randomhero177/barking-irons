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
      let response =  {
        "id":1781904638019,
        "title":"RDR2 Union Henley (Bone White)",
        "handle":"union-henley-bone-white",
        "description":"\u003cul\u003e\n\u003cli\u003esoft-washed cotton\u003c\/li\u003e\n\u003cli\u003e\n\u003cem\u003eArthur Morgan\u003c\/em\u003e collar print\u003c\/li\u003e\n\u003cli\u003e3-button closure \u003c\/li\u003e\n\u003cli\u003eMade in California, USA\u003c\/li\u003e\n\u003c\/ul\u003e\n\u003cp\u003e \u003c\/p\u003e\n\u003cmeta charset=\"utf-8\"\u003e\n\u003cp\u003e\u003cspan\u003eLimited Edition\u003c\/span\u003e\u003c\/p\u003e\n\u003cp\u003e\u003cem\u003e\u003cstrong\u003eRed Dead Redemption 2\u003c\/strong\u003e\u003c\/em\u003e\u003c\/p\u003e\n\u003cp\u003e \u003c\/p\u003e\n\u003cp\u003e \u003c\/p\u003e\n\u003cp\u003e \u003c\/p\u003e\n\u003cp\u003e \u003c\/p\u003e\n\u003cp\u003e\u003cem\u003eModel: 6'0 | 170 lbs.\u003c\/em\u003e\u003c\/p\u003e\n\u003cp\u003e\u003cem\u003ewears \u003c\/em\u003e\u003cem\u003esize Medium \u003c\/em\u003e\u003c\/p\u003e",
        "published_at":"2018-11-28T19:25:07-05:00",
        "created_at":"2018-11-01T18:57:16-04:00",
        "vendor":"Barking Irons",
        "type":"RDR2",
        "tags":["blanks"],
        "price":7900,
        "price_min":7900,
        "price_max":7900,
        "available":true,
        "price_varies":false,
        "compare_at_price":9200,
        "compare_at_price_min":9200,
        "compare_at_price_max":9200,
        "compare_at_price_varies":false,
        "variants":[
        {
          "id":16722068078659,
          "title":"XS",
          "option1":"XS",
          "option2":null,
          "option3":null,
          "sku":"BIR1704XS",
          "requires_shipping":true,
          "taxable":true,"featured_image":null,
          "available":true,
          "name":"RDR2 Union Henley (Bone White) - XS",
          "public_title":"XS",
          "options":["XS"],"price":7900,
          "weight":227,
          "compare_at_price":9200,
          "inventory_management":"shopify",
          "barcode":""
        },
        {
          "id":16771388702787,
          "title":"S",
          "option1":"S",
          "option2":null,
          "option3":null,"sku":"BIR1704S","requires_shipping":true,
          "taxable":true,"featured_image":null,
          "available":true,"name":"RDR2 Union Henley (Bone White) - S",
          "public_title":"S","options":["S"],"price":7900,"weight":227,"compare_at_price":9200,
          "inventory_management":"shopify","barcode":""
        },
        {
          "id":16771388735555,
          "title":"M",
          "option1":"M",
          "option2":null,
          "option3":null,
          "sku":"BIR1704M",
          "requires_shipping":true,
          "taxable":true,
          "featured_image":null,
          "available":true,"name":"RDR2 Union Henley (Bone White) - M","public_title":"M",
          "options":["M"],"price":7900,
          "weight":227,"compare_at_price":9200,
          "inventory_management":"shopify","barcode":""
        },
        {
          "id":16771388801091,
          "title":"XL",
          "option1":"XL",
          "option2":null,
          "option3":null,"sku":"BIR1704XL",
          "requires_shipping":true,
          "taxable":true,"featured_image":null,"available":true,
          "name":"RDR2 Union Henley (Bone White) - XL",
          "public_title":"XL",
          "options":["XL"],"price":7900,
          "weight":227,
          "compare_at_price":9200,
          "inventory_management":"shopify","barcode":""
        }
        ],
        "images":["\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_henley_Barking_irons_V.jpg?v=1543461699","\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_henley_Barking_irons_1A.jpg?v=1543461699","\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_henley_Barking_Irons_2.jpg?v=1543461699","\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_henley_close.jpg?v=1543461699","\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_Henley_remi_barking_irons.jpg?v=1543461699",
        "\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/DSC07643.jpg?v=1543461699",
        "\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_henley_label.jpg?v=1543461699"],"featured_image":"\/\/cdn.shopify.com\/s\/files\/1\/0021\/7448\/4547\/products\/RDR2_henley_Barking_irons_V.jpg?v=1543461699",
        "options":[
          {"name":"Size","position":1,
          "values":["XS","S","M","L","XL","XXL"]}
        ],
        "url":"\/products\/union-henley-bone-white"
      }


      let config = {
        blockSelector: '[data-item-handle]',
        blockId: '[data-item-id]',
        blockBtn: '[data-item-buy="button"]',
        sizeBtn: '[data-size]'
      };
      let blockArr = document.querySelectorAll(config.blockSelector);


      [].forEach.call(blockArr, (block) => {
        console.log(block);
        block.addEventListener('mouseover', (event) => {
          console.log(event.target);
          console.log('currentTarget ' + event.currentTarget);
          console.log(block);
          //var url = '/products/union-henley-bone-white.js';
          //var id = 1498396753987;

          //sendAjaxRequest(null, url, {}, null, null, 'GET');
        })


          let buttons = block.querySelectorAll(config.sizeBtn);
          let curId = block.dataset.itemId;


          [].forEach.call(buttons, (button) => {
          //  console.log(block, buttons, curId);
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
