$(document).ready(function() {
	var Modal = {
		config: {
			modal: '.modal-block',
			modalInner: '.modal-block__innner',
			buttonShow: '[data-modal="show"]',
			buttonClose: '[data-modal="close"]',
		},
		show: function(id){
			var c = Modal.config,
			curBlock = $('#' + id),
			inner = curBlock.find(c.modalInner);

			$(curBlock).addClass('active');
			inner.toggle(300);
		},
		hide: function(id){
			var c = Modal.config,
			curBlock = $('#' + id),
			inner = curBlock.find(c.modalInner);

			$(curBlock).removeClass('active');
			inner.toggle(300);
		},
		buttonShow: function(){
			var c = Modal.config;
			$(c.buttonShow).click(function(e){
				e.preventDefault();
				Modal.show($(this).data('modal-id'))
			});
		},
		buttonHide: function(){
			var c = Modal.config;
			$(c.buttonClose).click(function(e){
				e.preventDefault();
				Modal.hide($(this).parents(c.modal).attr('id'))
			});
		},
		watch: function(){
			var c = Modal.config;
			$(c.modalInner).click(function(e){
				e.stopPropagation();
			})
			$(c.modal).click(function(){
				Modal.hide($(this).attr('id'));
			});
		},
		init: function(){
			Modal.buttonShow();
			Modal.buttonHide();
			Modal.watch();
		}
	}
	Modal.init();


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
})
