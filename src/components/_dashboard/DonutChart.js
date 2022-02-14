import PropTypes from 'prop-types';
import { merge } from 'lodash';
// chart library
import ReactApexChart from 'react-apexcharts';
import { BaseOptionChart } from 'components/charts';

const DonutChart = ({ colors, data, labels }) => {
  const options = merge(BaseOptionChart(), {
    labels,
    stroke: { show: true },
    legend: { show: false },
    plotOptions: { pie: { donut: { size: '75%', labels: { show: false } } } },
    tooltip: {
      y: {
        formatter: (value) => `${value}%`
      }
    },
    colors
  });

  return (
    <ReactApexChart
      type="donut"
      series={data}
      options={options}
      width={320}
      style={{ display: 'flex', justifyContent: 'center' }}
    />
  );
};

DonutChart.propTypes = {
  data: PropTypes.array,
  colors: PropTypes.array,
  labels: PropTypes.array
};

export default DonutChart;
