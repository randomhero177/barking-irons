$(window).load(function(){
	/*
	  $.getScript('https://instawidget.net/js/instawidget.js?u=a14b51a694c03b839bbfe19af381b20e042e8116218acd1cf8bfbb8501bc2af2&width=100%', function() {
	    alert('Load is completed');
	  });
	<script src="https://instawidget.net/js/instawidget.js?u=82a3ce345229c001d607563777b6219d657d540fcd63dcca01583b2a1d35ebb8&width=700px"></script>
	*/
	(function() {
		var screenDesktop = 991,
		screenCur = $(window).width(),
		isScreenDesktop = screenCur > screenDesktop,
		iframeId;

		function instawidget_render_iframe() {
			iframeId = ($(window).width() >= screenDesktop) ? 'a14b51a694c03b839bbfe19af381b20e042e8116218acd1cf8bfbb8501bc2af2' : '82a3ce345229c001d607563777b6219d657d540fcd63dcca01583b2a1d35ebb8';
			
			var block = document.getElementById('instagram');
			block.innerHTML = '<iframe id=\"' + iframeId + '\" style=\"border:0;width:100%; margin:0;padding:0;\" scrolling=\"no\" frameborder=\"no\" src=\"https://instawidget.net/embed?u=' + iframeId + '\"></iframe>';
			
		};
		instawidget_render_iframe();
		setIframeHeight();
		$(window).resize(function () {
			if(isScreenDesktop){
				if($(window).width() < screenDesktop) {
					instawidget_render_iframe();
					isScreenDesktop = false;
				};
			} else {
				if($(window).width() > screenDesktop) {
					instawidget_render_iframe();
					isScreenDesktop = true;
				}
			};
			setIframeHeight();
		});

		function setIframeHeight(){
			var instagramBlock = document.querySelector('.instagram'),
				iframe = document.getElementById(iframeId),
				bodyWidth = document.body.clientWidth;

			if(iframe){
				var divider = ($(window).width() < screenDesktop) ? 1 : 4;
				instagramBlock.style.minHeight = iframe.style.height = bodyWidth/divider + 'px';
			};
		};
	})();
	
});

