type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDocChart: function() {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

  },

  initDashboardPageCharts: function() {

    gradientChartOptionsConfigurationWithTooltipBlue = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 20,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };
    
    gradientChartOptionsConfigurationWithTooltipRed = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,0,0,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 20,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225, 0, 0, 0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipOrange = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 110,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipGreen = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

    var ctx = document.getElementById("gpsSpeedChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(225,0,0,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(225,0,0,0.0)');
    gradientStroke.addColorStop(0, 'rgba(225,0,0,0)'); //red colors
    
    var gpsspeed = $("#gpsspeed");
    var gpsspeed_value = gpsspeed.text();
    

    var data = {
      labels: [''],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#E10000',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#E10000',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#E10000',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [parseFloat(gpsspeed_value)],
      }]
    };

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });
    
    myChart.options.scales.yAxes[0].ticks.min = 0;
    myChart.options.scales.yAxes[0].ticks.max = 150;
    myChart.update();
    
    
    var ctx = document.getElementById("engineLoadChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(225,0,0,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(225,0,0,0.0)');
    gradientStroke.addColorStop(0, 'rgba(225,0,0,0)'); //red colors
    
    var engineload = $("#engineload");
    var engineload_value = engineload.text();
    
    var data = {
      labels: [''],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#E10000',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#E10000',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#E10000',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [parseFloat(engineload_value)],
      }]
    };

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });
    
    myChart.options.scales.yAxes[0].ticks.min = 0;
    myChart.options.scales.yAxes[0].ticks.max = 100;
    myChart.update();
    
    var ctx = document.getElementById("massAirFlowChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(225,0,0,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(225,0,0,0.0)');
    gradientStroke.addColorStop(0, 'rgba(225,0,0,0)'); //red colors

    var massairflow = $("#massairflow");
    var massairflow_value = massairflow.text();
        
    var data = {
      labels: ['Mass Air Flow'],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#E10000',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#E10000',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#E10000',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [parseFloat(massairflow_value)],
      }]
    };

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });
    
    myChart.options.scales.yAxes[0].ticks.min = 0;
    myChart.options.scales.yAxes[0].ticks.max = 50;
    myChart.update();
    
    var ctx = document.getElementById("coolantTempChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(225,0,0,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(225,0,0,0.0)');
    gradientStroke.addColorStop(0, 'rgba(225,0,0,0)'); //red colors

    var coolanttemp = $("#coolanttemp");
    var coolanttemp_value = coolanttemp.text();
    
    var data = {
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#E10000',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#E10000',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#E10000',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [parseFloat(coolanttemp_value)],
      }]
    };

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });
    
    myChart.options.scales.yAxes[0].ticks.min = 80;
    myChart.options.scales.yAxes[0].ticks.max = 200;
    myChart.update();
    
    var ctx = document.getElementById("rpmChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(225,0,0,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(225,0,0,0.0)');
    gradientStroke.addColorStop(0, 'rgba(225,0,0,0)'); //red colors
    
    var rpm = $("#rpm");
    var rpm_value = rpm.text();

    var data = {
      labels: [''],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#E10000',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#E10000',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#E10000',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [parseFloat(rpm_value)],
      }]
    };

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });
    
    myChart.options.scales.yAxes[0].ticks.min = 500;
    myChart.options.scales.yAxes[0].ticks.max = 5000;
    myChart.update();
    
    var ctx = document.getElementById("intakeAirTempChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(225,0,0,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(225,0,0,0.0)');
    gradientStroke.addColorStop(0, 'rgba(225,0,0,0)'); //red colors
    
    var intakeairtemp = $("#intakeairtemp");
    var intakeairtemp_value = intakeairtemp.text();

    var data = {
      labels: [''],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#E10000',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#E10000',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#E10000',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [parseFloat(intakeairtemp_value)],
      }]
    };

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });
    
    myChart.options.scales.yAxes[0].ticks.min = 80;
    myChart.options.scales.yAxes[0].ticks.max = 150;
    myChart.update();
  }

  
};