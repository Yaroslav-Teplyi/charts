
let typeOfChart,
    type = document.querySelectorAll('.type__type'),
    label = document.querySelectorAll('.type__label'),
    barChart = document.querySelector('.type__bar'),
    lineChart = document.querySelector('.type__line'),
    pieChart = document.querySelector('.type__pie'),
    submitBtn = document.querySelector('.options__submit'),
    mainForm = document.querySelector('.options'),
    inner = document.querySelector('.chart-inner'),
    myChart,
    addMoreElementsBtn = document.querySelector('.labels__addBtn'),
    labels = document.querySelector('.labels')



function chartRender() {
    var ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: typeOfChart,
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, -3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

// проверка на тип диаграммы
function chartTypeChecked() {
    if(lineChart.checked) {
        typeOfChart = 'line'
        console.log(typeOfChart)
    } else if(pieChart.checked) {
        typeOfChart = 'pie'
        console.log(typeOfChart)
    } else {
        typeOfChart = 'bar'
    }
}

// нажатие на сабмит кнопку
submitBtn.addEventListener('click', () => {
    if(myChart != undefined){
        myChart.destroy();
    }
    // inner.classList.remove('disabled')
    // mainForm.classList.add('disabled')
    chartTypeChecked();
    
    chartRender();
})

// добавление новых лейблов
let numberOfInputs = 3

addMoreElementsBtn.addEventListener('click', () => {
    if(numberOfInputs < 6) {
        numberOfInputs++

        labels.insertAdjacentHTML('beforeend', `<label class="labels__label"><input type="text" id="labelName${numberOfInputs}" placeholder="write label name"><input type="number" name="" id="labelValue${numberOfInputs}" placeholder="write value">title ${numberOfInputs}</label>`);
    } else {
        alert('No more!!!');
    }
})