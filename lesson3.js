//1.
var n = 100;
var i = 0;
while (i <= n) {
    console.log(i++);
}

//2.
var n = 10;
var i = 0;
do{
    if (i == 0) {
        console.log(i++ +' - это ноль');
    } 
    else if (parseInt(i) % 2 == 0) {
        console.log(i++ +' - четное число');
    }
    else {
        console.log(i++ +' - нечетное число');
    }
        
} while (i <= n);

//3.
var n = 10;
var i = 0;
for(i; i < n; console.log(i++)){}

//4.
var n = 5;
var i = 1;
var a = 1;
var x = 'X';
for(i; i <= n; i++) {
    for(a; a < i; a++){
        x = x + 'X';
    }
    console.log(x);
}


