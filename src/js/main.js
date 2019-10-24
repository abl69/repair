var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

function modalClose() {
	modal.classList.remove('modal-active');
}

button.addEventListener ('click', function() {
	modal.classList.add('modal-active');
	setTimeout(modalClose, 5000);
});

/*close.addEventListener ('click', function() {
	modal.classList.remove('modal-active');
});*/



