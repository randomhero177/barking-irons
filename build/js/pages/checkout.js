$(document).ready(function() {

  var Cart = {
    config: {
      removeElem: $('.cart__remove'),
      updateUrl: '/cart/update.js',
    },
    update: function(){
      var obj = {},
          c = Cart.config,
          item = $('.checkout__item');
      item.each(function(e){
      	var id = $(this).find('.amount__input').data('id'),
          qnt = $(this).find('.amount__input').val();
        
        obj[id] = parseInt(qnt);
      });
      sendAjaxRequest(null, c.updateUrl, {updates: obj}, drawData, function(){
      	location.reload();
      });
      
      function drawData(cart){
      	
        var items = cart.items,
       	totalPrice = cart.total_price/100;
        var curId, curItem;
        items.forEach(function(item){
          curId = item.id;
          curItem = $('[data-item="' + curId + '"]');
          curItem.find('[data-price]').text(Cart.formatMoney(item['line_price']));
        });
        Cart.drawFullPrice(cart['total_price']);
      };
    },
	formatMoney: function(price){
  		var newPrice = price/100;
  		newPrice = '£' + newPrice.toFixed(2);
        return newPrice
	},
    removeItem: function(){
  	  var obj = {},
  		c = Cart.config;
      Cart.config.removeElem.click(function(e){
		e.preventDefault();
        var elem = $(this);
        
        obj[elem.data('remove')] = 0;
        
        sendAjaxRequest(null, c.updateUrl, {updates: obj}, function(data){
          drawRemove(elem.data('remove'));
          Cart.drawFullPrice(data['total_price']);
        }, function(){
          jQuery.post(elem.attr('href'));
          location.reload();
        });
      });
  
      function drawRemove(id){
		var elem = $('[data-item="'+ id +'"]');
        elem.remove();
      };
    },
    drawFullPrice: function(price){
      var elem = $('[data-total]');
      elem.each(function(){
      	$(this).text(Cart.formatMoney(price))
      });
    },
    init: function(){
      Cart.removeItem();
    }
  };
  var с = Cart.config;
  Cart.init();
  $('.amount').each(function () {
      var amount = new Amount(this, Cart.update, Cart.update);
  });


});
