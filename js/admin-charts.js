// Configuración de Chart.js para varias gráficas
const ctx1 = document.getElementById('chart1').getContext('2d');
const ctx2 = document.getElementById('chart2').getContext('2d');
const ctx3 = document.getElementById('chart3').getContext('2d');
const ctx4 = document.getElementById('chart4').getContext('2d');

// Ejemplo de gráfica de líneas
const chart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
            label: 'Aplicaciones',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Ejemplo de gráfica de barras
const chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
            label: 'Usuarios Registrados',
            data: [5, 10, 15, 20, 25],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Ejemplo de gráfica de pie
const chart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Administradores', 'Empleadores', 'Estudiantes'],
        datasets: [{
            label: 'Roles de Usuarios',
            data: [1, 3, 10],
            backgroundColor: ['#007bff', '#28a745', '#dc3545'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true
    }
});

// chart4 a barras horizontales
const chart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Interacciones', 'Aplicaciones', 'Contrataciones'],
        datasets: [{
            label: 'Actividad en la Plataforma',
            data: [25, 15, 7],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y', 
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});
