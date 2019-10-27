$(document).ready(function() {
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#close');
	var row = $('#row');

	button.on('click',function() {
		modal.addClass('modal-active');
	});

	close.on('click', function() {
		modal.removeClass('modal-active');
	});

	row.on('click', function() {
		//e.preventDefault();
		$('body,html').animate({scrollTop: 0}, "slow");
	});
})