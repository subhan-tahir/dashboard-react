import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';

const LineDiagram = ({ typeChart = 'line' }) => {
  const [series] = useState([{
    name: 'series-1',
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 14, 9, 54]
  }]);

  const options = {
    chart: {
      width: "100%",
      type: typeChart,
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      colors: ['grey'], // Changed to an array
      width: 2,
      opacity: 1,
    },
    grid: {
      row: {
        colors: ['white', 'transparent'],
        opacity: 1,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      tooltip: {
        enabled: true,
      },
      crosshairs: {
        show: false,
        width: 5,
      },
      axisTicks:{
        show:false,
      }
      },
      
    yaxis: {
      labels: {
        show: false,
      },
      tooltip:{
        enabled:true,
      },
      crosshairs:{
        show:false,
      },
      axisTicks:{
        show:false,
      }
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: true,
    },
    fill: {
      opacity: 1,
    }
  };

  return (
    <div>
      <div id="chart" className='line-chart'>
        <ReactApexChart options={options} series={series} type={typeChart} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

LineDiagram.propTypes = {
  typeChart: PropTypes.string,
};

export default LineDiagram;
