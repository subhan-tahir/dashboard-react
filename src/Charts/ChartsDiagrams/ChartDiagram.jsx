import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartDiagram = ({chartType,progressBgColor,chartData}) => {
  const [series] = useState([{
    name: 'series-1',
    data: chartData,
  }]);

  const options = {
    chart: {
      height: 50,
      type: 'bar',
      zoom: {
        enabled: false
      },
      width:'100%',
    },
    plotOptions: {
      bar: {
       
        // columnWidth: '80%',
        // barWidth: "100%",
        // columnWidth:"100%",
        // borderRadius: 10,
        dataLabels: {
          position: 'center', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        
      }
    },
    
    xaxis: {
    //   categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      position: 'bottom',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        show: false,
        fill: {
          type: 'solid',
          color: '#000000',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      labels:{
        show:false,
      },
      tooltip: {
        enabled: false,
      }
    },
    
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val;
        }
      }

    },
    
     colors:[progressBgColor]
    
    };

  
  return (
    
      <div id="chart" style={{width:'100%'}}>

        <ReactApexChart options={options} series={series} type={chartType} width={'100%'} className='line-chart'/>
      </div>
      
    
  );
};

// const domContainer = document.querySelector('#app');
// ReactDOM.render(<ColumnChart />, domContainer);
export default ChartDiagram

