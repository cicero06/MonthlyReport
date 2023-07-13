'use strict'

const addBtn = document.querySelector('#add_btn');
addBtn.addEventListener('click', addFunction);


function new_buttons() {
    document.getElementById("popUppage").style.display = "block";
    


}

const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUppage.style.display = 'none');


function reset(){

}


//Book Constructor
class projects {
    constructor(name,heading,description) {
        this.name= form.name.value;
        this.description = form.description.value;
        this.heading= form.heading.value;

    }
}

let myProjects = [];
let newProjects;




function addFunction() {
    event.preventDefault();
    popUppage.style.display = 'none';

    newProjects = new projects(name, description,heading); 
    myProjects.push(newProjects); 
    setData();  //saves updated array in local storage
    render(); 
    form.reset();
}
//Creates book visual in browser
function render() {
    const display = document.getElementById('projects_Container');
    const projects = document.querySelectorAll('.projects');
    projects.forEach(project => display.removeChild(project));
   
    for (let i=0; i<myProjects.length; i++){
        createProjects(myProjects[i]);
    }
}



//creats book DOM elements, to use in render();
function createProjects(item) {
    const library = document.querySelector('#projects_Container');
    const projectDiv = document.createElement('div');
    const nameDiv = document.createElement('div');
    const headingDiv = document.createElement('div');
    const removebutton = document.createElement('button');

    projectDiv.classList.add('project');
    projectDiv.setAttribute('id', myProjects.indexOf(item));

    nameDiv.textContent = item.name;
    nameDiv.classList.add('name');
    projectDiv.appendChild(nameDiv);

    headingDiv.textContent = item.heading;
    headingDiv.classList.add('heading');
    projectDiv.appendChild(headingDiv);

    removebutton.textContent = 'Remove'; 
    removebutton.setAttribute('id', 'removebutton');
    projectDiv.appendChild(removebutton);
    
    library.appendChild(projectDiv);

    removebutton.addEventListener('click', () => {
        myProjects.splice(myProjects.indexOf(item),1);
        setData()
        render();
    }); 

}

// setting Library to be stored in local storage
function setData() {
    localStorage.setItem(`myProjects`, JSON.stringify(myProjects)); 
}

//pulls books from local storage when page is refreshed
function restore() {
    if(!localStorage.myProjects) {
        render();
    }else {
        let objects = localStorage.getItem('myProjects') // gets information from local storage to use in below loop to create DOM/display
        objects = JSON.parse(objects);
        myProjects = objects;
        render();
    }
}

restore();

var options = {
    chart: {
  type: 'line'},
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();



  var options = {
    series: [
    {
      data: [
        {
          x: 'INTC',
          y: 1.2
        },
        {
          x: 'GS',
          y: 0.4
        },
        {
          x: 'CVX',
          y: -1.4
        },
        {
          x: 'GE',
          y: 2.7
        },
        {
          x: 'CAT',
          y: -0.3
        },
        {
          x: 'RTX',
          y: 5.1
        },
        {
          x: 'CSCO',
          y: -2.3
        },
        {
          x: 'JNJ',
          y: 2.1
        },
        {
          x: 'PG',
          y: 0.3
        },
        {
          x: 'TRV',
          y: 0.12
        },
        {
          x: 'MMM',
          y: -2.31
        },
        {
          x: 'NKE',
          y: 3.98
        },
        {
          x: 'IYT',
          y: 1.67
        }
      ]
    }
  ],
    legend: {
    show: false
  },
  chart: {
    height: 350,
    type: 'treemap'
  },
  title: {
    text: 'Treemap with Color scale'
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '12px',
    },
    formatter: function(text, op) {
      return [text, op.value]
    },
    offsetY: -4
  },
  plotOptions: {
    treemap: {
      enableShades: true,
      shadeIntensity: 0.5,
      reverseNegativeShade: true,
      colorScale: {
        ranges: [
          {
            from: -6,
            to: 0,
            color: '#CD363A'
          },
          {
            from: 0.001,
            to: 6,
            color: '#52B12C'
          }
        ]
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();
  

  
/*    
  var options1 = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [67, 84, 97, 61],
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL'
          }
        }
      }
    },
    labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
  };
  
  var chart = new ApexCharts(document.querySelector("#chart3"), options1);
  chart.render();
*/

var options = {
    series: [{
    name: 'Messenger',
    data: [
      [16.4, 5.4],
      [21.7, 4],
      [25.4, 3],
      [19, 2],
      [10.9, 1],
      [13.6, 3.2],
      [10.9, 7],
      [10.9, 8.2],
      [16.4, 4],
      [13.6, 4.3],
      [13.6, 12],
      [29.9, 3],
      [10.9, 5.2],
      [16.4, 6.5],
      [10.9, 8],
      [24.5, 7.1],
      [10.9, 7],
      [8.1, 4.7],
      [19, 10],
      [27.1, 10],
      [24.5, 8],
      [27.1, 3],
      [29.9, 11.5],
      [27.1, 0.8],
      [22.1, 2]
    ]
  }, {
    name: 'Instagram',
    data: [
      [6.4, 5.4],
      [11.7, 4],
      [15.4, 3],
      [9, 2],
      [10.9, 11],
      [20.9, 7],
      [12.9, 8.2],
      [6.4, 14],
      [11.6, 12]
    ]
  }],

  
    chart: {
    height: 350,
    type: 'scatter',
    animations: {
      enabled: false,
    },
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#056BF6', '#D2376A'],
  xaxis: {
    tickAmount: 10,
    min: 0,
    max: 40
  },
  yaxis: {
    tickAmount: 7
  },
  markers: {
    size: 20
  },
  fill: {
    type: 'image',
    opacity: 1,
    image: {
      src: ['../../assets/images/ico-messenger.png', '../../assets/images/ico-instagram.png'],
      width: 40,
      height: 40
    }
  },
  legend: {
    labels: {
      useSeriesColors: true
    },
    markers: {
      customHTML: [
        function() {
          return ''
        }, function() {
          return ''
        }
      ]
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();


  var options = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21,],
    chart: {
    type: 'polarArea',
  },
  stroke: {
    colors: ['#fff']
  },
  fill: {
    opacity: 0.8
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart4"), options);
  chart.render();


  /*
  var options = {
    series: [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }],
    chart: {
    height: 350,
    type: 'radar',
  },
  title: {
    text: 'Basic Radar Chart'
  },
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart5"), options);
  chart.render();

 */




var options = {
    series: [{
    data: makeData()
  }],
    chart: {
    id: 'barYear',
    height: 400,
    width: '100%',
    type: 'bar',
    events: {
      dataPointSelection: function (e, chart, opts) {
        var quarterChartEl = document.querySelector("#chart-quarter");
        var yearChartEl = document.querySelector("#chart-year");
   
        if (opts.selectedDataPoints[0].length === 1) {
          if (quarterChartEl.classList.contains("active")) {
            updateQuarterChart(chart, 'barQuarter')
          } else {
            yearChartEl.classList.add("chart-quarter-activated")
            quarterChartEl.classList.add("active");
            updateQuarterChart(chart, 'barQuarter')
          }
        } else {
          updateQuarterChart(chart, 'barQuarter')
        }
  
        if (opts.selectedDataPoints[0].length === 0) {
          yearChartEl.classList.remove("chart-quarter-activated")
          quarterChartEl.classList.remove("active");
        }
  
      },
      updated:  function (chart) {
        updateQuarterChart(chart, 'barQuarter')
      }
    }
  },
  plotOptions: {
    bar: {
      distributed: true,
      horizontal: true,
      barHeight: '75%',
      dataLabels: {
        position: 'bottom'
      }
    }
  },
  dataLabels: {
    enabled: true,
    textAnchor: 'start',
    style: {
      colors: ['#fff']
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex]
    },
    offsetX: 0,
    dropShadow: {
      enabled: true
    }
  },
  
  colors: colors,
  
  states: {
    normal: {
      filter: {
        type: 'desaturate'
      }
    },
    active: {
      allowMultipleDataPointsSelection: true,
      filter: {
        type: 'darken',
        value: 1
      }
    }
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (val, opts) {
          return opts.w.globals.labels[opts.dataPointIndex]
        }
      }
    }
  },
  title: {
    text: 'Yearly Results',
    offsetX: 15
  },
  subtitle: {
    text: '(Click on bar to see details)',
    offsetX: 15
  },
  yaxis: {
    labels: {
      show: false
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart-year"), options);
  chart.render();

  var optionsQuarter = {
    series: [{
    data: []
  }],
    chart: {
    id: 'barQuarter',
    height: 400,
    width: '100%',
    type: 'bar',
    stacked: true
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      horizontal: false
    }
  },
  legend: {
    show: false
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      }
    },
    xaxis: {
      lines: {
        show: true,
      }
    }
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  title: {
    text: 'Quarterly Results',
    offsetX: 10
  },
  tooltip: {
    x: {
      formatter: function (val, opts) {
        return opts.w.globals.seriesNames[opts.seriesIndex]
      }
    },
    y: {
      title: {
        formatter: function (val, opts) {
          return opts.w.globals.labels[opts.dataPointIndex]
        }
      }
    }
  }
  };

  var chartQuarter = new ApexCharts(document.querySelector("#chart-quarter"), optionsQuarter);
  chartQuarter.render();


  chart.addEventListener('dataPointSelection', function (e, chart, opts) {
  var quarterChartEl = document.querySelector("#chart-quarter");
  var yearChartEl = document.querySelector("#chart-year");

  if (opts.selectedDataPoints[0].length === 1) {
    if(quarterChartEl.classList.contains("active")) {
      updateQuarterChart(chart, 'barQuarter')
    }
    else {
      yearChartEl.classList.add("chart-quarter-activated")
      quarterChartEl.classList.add("active");
      updateQuarterChart(chart, 'barQuarter')
    }
  } else {
      updateQuarterChart(chart, 'barQuarter')
  }

  if (opts.selectedDataPoints[0].length === 0) {
    yearChartEl.classList.remove("chart-quarter-activated")
    quarterChartEl.classList.remove("active");
  }

})

chart.addEventListener('updated', function (chart) {
  updateQuarterChart(chart, 'barQuarter')
})

document.querySelector("#model").addEventListener("change", function (e) {
  chart.updateSeries([{
    data: makeData()
  }])
})
