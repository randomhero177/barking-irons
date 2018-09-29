$(document).ready(function() {

  var Cart = {
    update: function(){

    }
  };

  $('.amount').each(function () {
      var amount = new Amount(this, Cart.update, Cart.update);
  });


});
