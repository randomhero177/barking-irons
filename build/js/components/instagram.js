$(window).load(function(){
	/*
	  $.getScript('https://instawidget.net/js/instawidget.js?u=a14b51a694c03b839bbfe19af381b20e042e8116218acd1cf8bfbb8501bc2af2&width=100%', function() {
	    alert('Load is completed');
	  });
	<script src="https://instawidget.net/js/instawidget.js?u=82a3ce345229c001d607563777b6219d657d540fcd63dcca01583b2a1d35ebb8&width=700px"></script>
	*/
	(function() {
		var iframeId = ($(window).width() >= 767) ? 'a14b51a694c03b839bbfe19af381b20e042e8116218acd1cf8bfbb8501bc2af2' : '82a3ce345229c001d607563777b6219d657d540fcd63dcca01583b2a1d35ebb8',
		iframeIdSm = '' ;

		window.addEventListener('message', instawidget_adjust_height, false);

		function instawidget_adjust_height(e) {
			if (e.origin === 'http://instawidget.net' || e.origin === 'https://instawidget.net') {
				document.getElementById(iframeId).style.height = e.data + 'px';
			}
		};

		function instawidget_render_iframe() {
			var block = document.getElementById('instagram');
			block.innerHTML = ($(window).width() >= 767) ? '<iframe id=\"a14b51a694c03b839bbfe19af381b20e042e8116218acd1cf8bfbb8501bc2af2\" style=\"border:0;width:100%; margin:0;padding:0;\" scrolling=\"no\" frameborder=\"no\" src=\"https://instawidget.net/embed?u=a14b51a694c03b839bbfe19af381b20e042e8116218acd1cf8bfbb8501bc2af2\"></iframe>' : '<iframe id=\"82a3ce345229c001d607563777b6219d657d540fcd63dcca01583b2a1d35ebb8\" style=\"border:0;width:100%;margin:0;padding:0;\" scrolling=\"no\" frameborder=\"no\" src=\"https://instawidget.net/embed?u=82a3ce345229c001d607563777b6219d657d540fcd63dcca01583b2a1d35ebb8\"></iframe>';
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

