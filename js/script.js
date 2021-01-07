$('#Ablok').on('click', function() {
	$('#buttonContent1').toggleClass('show');
});

$('#Bblok').on('click', function() {
	$('#buttonContent2').toggleClass('show');
});

var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');

var btn1 = document.getElementById('myBtn1');
var btn2 = document.getElementById('myBtn2');
var btn3 = document.getElementById('myBtn3');

var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
	modal1.style.display = 'block';
};

span.onclick = function() {
	modal1.style.display = 'none';
};

window.onclick = function(event) {
	if (event.target == modal1) {
		modal1.style.display = 'none';
	}
};

btn.onclick = function() {
	modal2.style.display = 'block';
};

span.onclick = function() {
	modal2.style.display = 'none';
};

window.onclick = function(event) {
	if (event.target == modal2) {
		modal2.style.display = 'none';
	}
};

btn.onclick = function() {
	modal3.style.display = 'block';
};

span.onclick = function() {
	modal3.style.display = 'none';
};

window.onclick = function(event) {
	if (event.target == modal3) {
		modal3.style.display = 'none';
	}
};
