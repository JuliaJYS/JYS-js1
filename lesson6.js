function changeBigPic(event) {
    //console.log('Картинка нажата');
    var div = document.getElementById('big_picture');
    div.innerHTML = '';
    var targetElement = event.target;
    var newImg = new Image();
    if (targetElement.src == '') {
        newImg.innerHTML = 'Картинка не найдена!';
    }
    newImg.src = targetElement.src;

    div.appendChild(newImg);
}

//ДЗ 2. Создаем товары
var h2 = document.createElement('h2');
h2.className = 'body__h2';
h2.innerText = 'Каталог товаров';
document.body.appendChild(h2);

var divContainer = document.createElement('div');
divContainer.className = 'body__container';        
document.body.appendChild(divContainer);
for (var i = 0; i < 4; i++) {
    var divGood = document.createElement('div');
    divGood.className = 'body__container-shop';
    divGood.innerHTML = 'Товар-' + (i+1)+'-';
    divContainer.appendChild(divGood);

    var divPrice = document.createElement('div');
    divPrice.className = 'body__price';
    divPrice.innerHTML = 'Цена: ';
    divPrice.innerText = (10+100*i);
    divGood.appendChild(divPrice);

    var form = document.createElement('form');
    form.className = 'body__form';
    form.innerHTML = '<input type="button" value="Купить" class="body__form-buttom">';
    divPrice.appendChild(form);  
}

//Создаем корзину
var h3 = document.createElement('h3');
h3.className = 'body__h3';
h3.innerText = 'Корзина';
document.body.appendChild(h3);
var tableNew = document.createElement('table');
tableNew.setAttribute('border', 1);
tableNew.setAttribute('width', 300);
var sumCart = 0;
var divSumCart = document.createElement('div');
divSumCart.className = 'body__sum';

function addToCart(event) {
    console.log('Кнопка купить нажата');
    tableNew.appendChild(newTr=document.createElement('tr'));
    newTr.appendChild(newTd=document.createElement('td'));
    newTd.innerText = event.target.parentElement.parentElement.parentElement.textContent;
    sumCart = sumCart + parseInt(event.target.parentElement.parentElement.textContent);
    document.body.appendChild(tableNew);
    divSumCart.innerText = 'Сумма:'+sumCart;
    document.body.appendChild(divSumCart);
}        

window.onload = function() {
    //Более быстрый вариант
    var gallery = document.getElementById('gallery');
    gallery.addEventListener('click', changeBigPic);

    var buttomOne = document.getElementsByClassName('body__form');
    for (var i = 0; i < buttomOne.length; i++) {
        buttomOne[i].addEventListener('click', addToCart);
    }
}    