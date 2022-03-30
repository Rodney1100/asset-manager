var card = document.getElementById("card");

function openRegister() {
    card.style.transform = "rotateY(-180deg)";
}
function openLogin() {
    card.style.transform = "rotateY(0deg)";
}




//
var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            data: [-102, 400, 600, 790, 1800, 1400, 2500, 2600, 2450, 1950, 2300, 2900],
            backgroundColor: [
                '#4B0082'

            ],
            borderColor: '#fff',

            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    color:"white"
                },
                beginAtZero:true
            },
            x: {
                ticks: {
                    color:"white"
                },
                beginAtZero:true
            }
        },
        plugins: {
            legend: {
                display: false
            },
        },
        responsive: true
    }
});

//
var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels:
            ['Bitcoin', 'Litecoin', 'Etherium', 'Chainlink'],

        datasets: [{
            labels: ['Bitcoin', 'Litecoin', 'Etherium', 'Chainlink'],
            data: [12000, 4500, 8900, 7000],
            backgroundColor: [
                '#57698D',
                '#7BCAB6',
                '#7FAEBD',
                '#549AB3',
                '#737F8E'
            ],
            borderColor: [
                'black',
                'black',
                'black',
                'black'
            ],           
            borderWidth: 1
        }]
    },
    options: {
        layout: {
            padding: 20
        },
        plugins: {
            legend: {
                display:false
            },
            labels: {
                display:true,
                render: 'label',
                precision:1,
                arc: false,
                fontColor: "#fff"
            }
        },
        
        responsive: true
    }
});
