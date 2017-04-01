var tableNew = document.createElement('table');
tableNew.setAttribute('border', 1);
tableNew.setAttribute('width', 800);
tableNew.setAttribute('caption', 'Шахматная доска');

var arrayABC = ['A','B','C','D','E','F','G','H'];

function figureName(i,j){
    var figName;
    if (i == 1 || i == 8) {
        if (j == 0 || j == 7) {
            figName = 'Ладья';
        }
        else if (j == 1 || j == 6) {
            figName = 'Конь';
        }
        else if (j == 2 || j == 5) {
            figName = 'Слон';
        }
        else if (j == 3) {
            figName = 'Ферзь';
        }
        else {
            figName = 'Король';
        }
    }
    else if (i == 2 || i == 7) {
        figName = 'Пешка';
    }   
    return figName;
}


for (var i = 8; i >= 0; i--){
    tableNew.appendChild(newTr=document.createElement('tr'));
    if (i > 0) {
        newTr.innerHTML = i;
    }
    else{
        newTr.innerHTML = 'Game';
    }   
    for (var j = 0; j <= arrayABC.length - 1; j++) {                        
        newTr.appendChild(newTd=document.createElement('td'));
            if (i == 0) {
                newTd.innerText = arrayABC[j];
            }
            else {
                //newTd.innerText = i+'.'+ arrayABC[j];
                //раставляем фигуры
                if (i <= 2) {
                    newTd.innerText = figureName(i,j);
                    newTd.style.color = 'white';
                }
                else if (i >=7 ) {
                    newTd.innerText = figureName(i,j);
                    newTd.style.color = 'black';
                }
                //разукрашиваем ячейки
                if ((j % 2 == 0 && i % 2 != 0) || (j % 2 != 0 && i % 2 == 0)){
                    newTd.setAttribute('bgcolor','#b8652f');                    
                }
                else {
                    newTd.setAttribute('bgcolor','#ecd5b5');
                }               
            }
            newTd.setAttribute('align','center');
            newTd.setAttribute('height', 84);

        }
}

document.body.appendChild(tableNew);

