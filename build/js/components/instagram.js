$(window).load(function(){
	/*
	  $.getScript('https://instawidget.net/js/instawidget.js?u=a14b51a694c03b839bbfe19af381b20e042e8116218acd1cf8bfbb8501bc2af2&width=100%', function() {
	    alert('Load is completed');
	  });
	
	*/
	(function() {
		var iframeId = 'a14b51a694c03b839bbfe19af381b20e042e8116218acd1cf8bfbb8501bc2af2';

		window.addEventListener('message', instawidget_adjust_height, false);

		function instawidget_adjust_height(e) {
			if (e.origin === 'http://instawidget.net' || e.origin === 'https://instawidget.net') {
				document.getElementById(iframeId).style.height = e.data + 'px';
			}
		};

		function instawidget_render_iframe() {
			var block = document.getElementById('instagram');
			block.innerHTML = '<iframe id=\"a14b51a694c03b839bbfe19af381b20e042e8116218acd1cf8bfbb8501bc2af2\" style=\"border:0;width:100%; margin:0;padding:0;\" scrolling=\"no\" frameborder=\"no\" src=\"https://instawidget.net/embed?u=a14b51a694c03b839bbfe19af381b20e042e8116218acd1cf8bfbb8501bc2af2\"></iframe>';
		};
		instawidget_render_iframe();
		
		$(window).resize(function () {
			setIframeHeight();
		});

		function setIframeHeight(){
			var instagramBlock = document.querySelector('.instagram'),
				iframe = document.getElementById(iframeId),
				bodyWidth = document.body.clientWidth;

			if(iframe){
				instagramBlock.style.minHeight = iframe.style.height = bodyWidth/4 + 'px';
			};
		};
	})();
	
});

