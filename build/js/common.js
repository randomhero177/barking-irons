// Select all links with hashes
function smoothScroll(elem){
  $(elem).click(function(event) {
    event.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
}



  /*
*
* @elClass - string. Class name
*
  */
  function setAnchors(elClass){
    let blocks = $(elClass),
     linkElems = $('.main-menu__anchors-item a');

    blocks.each(function(i, el){
      var curId = $(el).attr('id');
      $(linkElems[i]).attr('href', '#' + curId);
      smoothScroll(linkElems[i]);
    })

  }

  (function () {
    var block = $('.header__search-wrap'),
    menuSearchBtn = $('.main-menu__search'),
    menuCloseBtn = $('.header__search-btn');

    menuSearchBtn.click(function(e){
      e.preventDefault();
      block.toggleClass('hidden')
    });
    menuCloseBtn.click(function(e){
      e.preventDefault();
      block.addClass('hidden');
    })
  })();
