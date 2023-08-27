//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: 
    {
    labels: ["September", "October", "November", "December", "January", "February"],
    datasets: [
    // {
    //   label: "My First dataset",
    //   data: [65, 59, 80, 81, 56, 55, 40],
    //   backgroundColor: [
    //     'rgba(105, 0, 132, .2)',
    //   ],
    //   borderColor: [
    //     'rgba(200, 99, 132, .7)',
    //   ],
    //   borderWidth: 2
    // }
    
        {
        label: "Demand",
        data: [2.25, 3.0, 4.75, 1.75, 2.0, 3.25, 5],
        backgroundColor: [
            'rgba(0, 137, 132, .2)',
        ],
        borderColor: [
            'rgba(0, 10, 130, .7)',
        ],
        borderWidth: 2
        }
    ]
  },
  options: {
    responsive: true
  }
});