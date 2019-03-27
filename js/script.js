window.onload = function(){

	let btn = document.getElementsByClassName('product-box__btn');
	let input = document.getElementsByClassName('qty__item');
	let p = document.getElementsByTagName('P');

	for (let i = 0; i < btn.length; i++){

		btn[i].setAttribute('id', i);
		input[i].setAttribute('data-input-id', i);
		p[i].setAttribute('data-p-id', i);

	}
};

	let btn = document.getElementsByClassName('product-box__btn');
	let input = document.getElementsByClassName('qty__item');
	let p = document. getElementsByTagName('P');

	let sumGoods = +0;
	let sumPrice = +0;

	let goodsInfo = document.getElementById('goods-info');
	let priceInfo = document.getElementsByClassName('red-info-1');


	for(let i = 0; i < btn.length; i++){
	  	btn[i].addEventListener('click', function(e){
	    	let buttonId = e.target.getAttribute('id');

	    	sumGoods += +input[buttonId].value;
	    	goodsInfo.innerHTML = +sumGoods;

	    	if (sumGoods !== 0){
	    		let pText = p[buttonId].textContent;
	    		let price = pText.split(" ");

	    		price = price.splice(0, 1);
	    		sumPrice += price * input[buttonId].value ;
	    		console.log(sumPrice);
	    		priceInfo[0].innerHTML = sumPrice;
	    	}
	    	else{
	    		alert("Введіть кількість!!!");
	    	}

	  	});
	}


function filtering() {

	let toggleCategory = document.querySelector('[name="category"]');
	let togglePrice = document.querySelector('[name="price"]');

	let chosenCategory = toggleCategory.selectedIndex;
	let chosenPrice = togglePrice.selectedIndex;

	let price;
	let category;

	let items = document.querySelectorAll('.product-box__item');


	for (let i = 0; i < items.length; i++){

		price = items[i].getAttribute('data-price');
		category = items[i].getAttribute('data-category');

		if (+price > +chosenPrice && +chosenPrice!==0 || +category != +chosenCategory && +chosenCategory!==0){
			items[i].style.display = 'none';
		}
		else {
			items[i].style.display = 'flex';
		}
	}
}


