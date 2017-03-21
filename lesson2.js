//1. проверяю гит
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2
d = b++; alert(d); // 1
c = (2+ ++a); alert(c); // 5
d = (2+ b++); alert(d); // 4
alert(a); // 3
alert(b); // 3

//такие результаты связаны с ипользованием инкрементных и декриментных операторов.
//В случае с a инкрементирование произошло сразу. Т.е. сперва оно стало а стало 2, а потом присвоилось с, 
//тоже самое и во втором случае с а, оно стало 3, а потом к нему прибавилось 2.
//В случае с в наоборот. в первом варианте сперва присвоение к д идет, а потом уже увелиение на 1, т.е. в уже будет 2.
//во втором варианте с в, д у нас присвавается значение 2+2, а потом мы увеличиваем в на 1, поэтому и получилось 4.

//2.
var a = 2;
var x = 1 + (a *= 2);
alert(x);
//в данном задании х=5, т.к. значение а умножается себя на 2, а потом идет сложение.

//3.
var a, b, c, strA, strB;
strA = prompt('Введите первое число:', strA);
strB = prompt("Введите второе число:", strB);
a = parseInt(strA);
b = parseInt(strB);

if ((a >= 0) && (b >= 0)) {
  c = a - b;
  alert('Разность чисел:'+c);
}
else if ((a < 0) && (b < 0)) {
  с = a * b;
  alert('Произведение чисел:'+ c);
}
else {
  c = a + b;
  alert('Сумма чисел:'+ c);
}

//4.
var a;
a = prompt('Введите число от 0 до 15:', a);
switch (a){
 case '1':
 alert('1'); 
case '2':
 alert('2');
case '3':
 alert('3');
 case '4':
 alert('4');
 case '5':
 alert('5');
 case '6':
 alert('6');
 case '7':
 alert('7');
 case '8':
 alert('8');
 case '9':
 alert('9');
 case '10':
 alert('10');
 case '11':
 alert('11');
 case '12':
 alert('12');
 case '13':
 alert('13');
 case '14':
 alert('14');
 case '15':
 alert('15'); 
 break;
default:
 alert('Вы ввели неправильное значение');
 break;
}

//5.
function summa(a,b){
	c = a + b;
  return c;
}
function raznost(a,b){
	c = a - b;
  return c;
}
function umnojenie(a,b){
	c = a * b;
  return c;
}
function delenie(a,b){
	c = a / b;
  return c;
}

x = summa(1,2);
alert('Сумма:'+x);

x = raznost(1,2);
alert('Разность:'+x);

x = umnojenie(1,2);
alert('Умножение:'+x);

x = delenie(1,2);
alert('Деление:'+x);

//6.
function summa(a,b){
	c = a + b;
  return c;
}
function raznost(a,b){
	c = a - b;
  return c;
}
function umnojenie(a,b){
	c = a * b;
  return c;
}
function delenie(a,b){
	c = a / b;
  return c;
}

function mathOperation(arg1, arg2, operation) {
 x = 0;
 switch(operation){
 	case('+'):
  x = summa(arg1,arg2);
  break;
  case('-'):
  x = raznost(arg1,arg2);
  break;
  case('*'):
  x = umnojenie(arg1,arg2);
  break;
  case('/'):
  x = delenie(arg1,arg2);
  break;
 }
 return x;
}

var a, b, c, strA, strB, strC;
strA = prompt('Введите первое число:', strA);
strB = prompt("Введите второе число:", strB);
strC = prompt("Введите операцию +.-.*./", strC)
a = parseInt(strA);
b = parseInt(strB);
c = mathOperation(a,b, strC);
alert(a+strC+b+" = " + c);

//7.Нул - в моем понимании - это как пустое значение, а 0 - это числовое значение. Они не могут быть равными.
//8.Рекурсия получилась такая
function power(val, pow){
		if (pow == 1) {
    	return val;
    }
    else if ((pow == 0) || (val == 0)) {
    	return 0;
    }
    return val*power(val, --pow);    
    }

x = power(2,5);
alert(x);



 
