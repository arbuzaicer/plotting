function plotsquare() {
    var plotDist1 = document.querySelector('#plotfrom');
    var plottoend = document.querySelector('#plotto');
    var plotfrom = Number(plotDist1.value);
    var plotDist = Number(plottoend.value);
    var arrr = [];
    var type1 = document.querySelector('#expression');
    var type = Number(type1.value);
          /*Creating empty Massive vor all x data
    to plotting (x - axis)*/

    /*Cycle for creating x-axis which depend on 2 inputs fields:
    * plot FROM and plot TO*/
     var massPlott = function() {
         function isNumeric(n){
             return !isNaN(parseFloat(n))&& isFinite(n);
         }
         if(isNumeric(plotfrom) && isNumeric(plotDist)) {
            if(plotfrom>plotDist){
                 alert('В поле '+plotDist+'  значения должны быть больше чем поле '+plotfrom);
             } else {
             for(let i=plotfrom; i<=plotDist; i++) {
                 arrr.push(Math.pow(i, type));
             }
            }
         } else {
             alert('Введите числа в поля!!!')
         }
     };
    massPlott();

    document.querySelector('.graphhik').style.background='white';
    /*Chart settings*/
    var ctx = document.querySelector('#myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: arrr,
            datasets: [{
                label: 'Square function',
                data: arrr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',

                ],
                borderWidth: 1
            }]
        },
      options: {
          title: {
              display: true,
              text: 'Квадратная функция для интервала: ['+plotfrom+' ; '+plotDist+']'
          }
      }
    });
}

