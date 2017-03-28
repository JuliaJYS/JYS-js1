//№1.
var number = 951;

function returnObjForNum(number) {
  var objNum = {};
  objNum.ed = 0;
  var i = 1;
  while (number < 1000) {
    if (i == 1) {
      objNum.ed = 'единицы:' + (number % 10);
      i++;
    } else if (i == 2) {
      objNum.ten = 'десятки:' + (number % 10);
      i++;
    } else if (i == 3) {
      objNum.hund = 'сотни:' + number % 10;
      i++;
      break;
    }
    number = Math.floor(number / 10);
  }
  return objNum;
}

objNum = returnObjForNum(number);
for (var i in objNum) {
  if (objNum[i] == 0) {
    console.log("Пустой объект");
    break;
  }
  console.log(objNum[i]);
}

//2. 
var a, x, z, n;

function beginGame() {
  return prompt('Вы хотете поиграть? 1 - Да, 0 - Нет', a);
}

function goGame(z) {
  var hod = 1;
  x = prompt('Введите число от 0 до 15:', x);
  while (hod <= z) {
    for (x; x <= 15; x++) {
      if ((x < 0) || (x > 15)) {
        alert('Вы ввели неправильное число!');
        hod = 0;
        break;
      }
      if (parseInt(x) % 2 == 0) {
        console.log('Вы ввели четное число, поздравляю вы выйграли!');
        hod++;
        break;
      } 
      else {
        hod++;
      }
    }
    return hod;
  }  
}

a = beginGame();
if (a == 1) {
  console.log('Игра начинается!');
  z = prompt('Введите число ходов:', z);
  n = goGame(z);
  if (n == 0) {
    console.log('Вы проиграли!');
  } 
  else {
    console.log('Вы выйграли на:' + n + ' ход.');
  }
} 
else {
  console.log('Вы проиграли!');
<<<<<<< HEAD
}
=======
}

>>>>>>> origin/master
