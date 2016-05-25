//KONAMI CODE EASTER EGG
//CHANGES TO DARK THEME

var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";

document.body.addEventListener('keydown', function(e){
	
	e.suppresskeypress = true;
	e.Handled = true;
	
	kkeys.push(e.keyCode);
	
	//document.body.innerHTML += String.fromCharCode(e.keyCode) + ' ';
	console.log(kkeys);
	
	if (kkeys.length > 10) {
		kkeys.shift();
	}
	if (kkeys == konami) {
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white';
	}
})
	