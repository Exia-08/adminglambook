var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Management', 'Developer', 'Cashier'],
        datasets: [{
            label: 'Employees',
            data: [3, 2, 2],
            backgroundColor: [
                'rgb(255, 0, 55)',
                'rgba(7, 154, 252, 0.9)',
                'rgba(251, 182, 8, 0.97)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});