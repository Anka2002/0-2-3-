let box = document.querySelector('.box');
let colorInput = document.getElementById('color');
let changeColorButton = document.querySelector('.change-color');


changeColorButton.addEventListener('click', function () {
	let color = colorInput.value;
	box.style.backgroundColor = color;
});

let cssStyle = document.guereSelecton('cssStyle');
let cssValue = document.querySelector('cssValye');
let changeButton = document.querySelector('confirm-style')

changeButton.addEventListener('click', function () {
	box.style[cssStyle.value] = cssValue.value;
})