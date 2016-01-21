$(function(){

	// $('dd').filter(':nth-child(n+5)').addClass('hide');
	$('dd').filter(':nth-child(n+3)').hide();

	$('dl').on('mouseenter', 'dt', function(){
		$(this).next().slideDown(300).siblings('dd').slideUp(300);
		

		// $(this)
			// .next()
				// ..removeClass('hide')
				// .siblings('dd')
					// .slideUp(200)	

	})


})