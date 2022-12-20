let cards = document.getElementsByTagName('li')

for (let i = 0; i < cards.length; i++) {
	let button = document.createElement('button');

	button.innerText = 'Купить';
	button.style.marginBottom = '15px';
	cards[i].appendChild(button);

	let fishName = document.getElementsByClassName('fish-list-card-name');

	button.onclick = function () {
		alert(`Вы хотите купить ${fishName[i].innerText}`)
	}
}


// let wordmark = document.getElementById("submit");
// wordmark.innerText = "льмлць";


// function alertWordmarkClick() { alert("You clicked the wordmark."); }


// function alerted() {
// 	alert("Вы нажали на кнопку");
// }

// const span = document.querySelector("span")
// let button = document.querySelector("button")


// alert(`Вы хотите купить рыбку?`)


// button.addEventListener("click", handleClick)
