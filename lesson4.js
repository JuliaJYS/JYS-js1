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
