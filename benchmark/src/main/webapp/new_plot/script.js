// Chart.defaults.global.defaultFontFamily = 'Roboto';
// Chart.defaults.global.defaultFontColor = '#333';
// Chart.defaults.global.beginAtZero = true;
// Chart.defaults.ticks = { min: 0 };


//pick colors randomly from this list
// var colors = ['blue', 'red', 'yellow', 'green', 'orange'];
var colors1 = ['#19A0AA', '#44e1ed', '#284e51', '#8ec2c6', '#383c3c'];
var colors2 = ['maroon', 'red', 'orange', 'pink', 'brown'];
var i = 0;

function plot_chart(data, colors) {
  // console.log(data);
  // console.log("here");

  // var playerLabels = players.map(function(d) {return d.Name});
  var library_labels = d3.keys(data);
  library_labels.splice(0, 1);
  color_labels = [];
  for(let i = 0; i < library_labels.length; i++) {
    color_labels.push(colors[Math.floor(Math.random() * 5)]);
  }
  // console.log(library_labels);

  var time_taken_y = d3.values(data);
  time_taken_y.splice(0, 1);
  i+=1;
  var chart_now = new Chart("id" + i, {
    type: 'bar',
    options: { 

        title: {
          display: true,
          text: data.operation,
          fontSize: 25
        },

      responsive: true,
      maintainAspectRatio: true,

      // scales: {
      //     yAxes: [
      //       {
      //         ticks: {
      //             beginAtZero:true

      //         },
      //         scaleLabel: {
      //           display: true,
      //           labelString: 'Time taken',
      //           fontSize: 15
      //         }
      //     }
      //   ]
      // },

      legend: {
        display: false
      },
      scales: {
        y: {
          beginAtZero: true
        },
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Library name',
              fontSize: 15
            }
          }
        ]
      }
    },
    data: {
      labels: library_labels,
      datasets: [
        {
          label: "Time taken (relative to " + library_labels[0] + ")",
          data: time_taken_y,
          // backgroundColor: 'limegreen'
          backgroundColor: color_labels
          // backgroundColor: playerColors
        }
      ]
    }
  })
}


//put these d3 function calls to plot a csv file

//Plotting data for linear algebra tests
d3.csv('record/linearalgebra/record-20221207220756.csv', function(data) {
    plot_chart(data, colors2)
}
)

//Plotting data for optimization tests
// d3.csv('record/optimization/record-20221113220122.csv', function(data) {
//   plot_chart(data, colors2)
// }
// )
