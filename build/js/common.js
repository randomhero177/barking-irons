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
})
