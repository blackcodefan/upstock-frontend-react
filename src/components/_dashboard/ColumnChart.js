import PropTypes from 'prop-types';
import { merge } from 'lodash';
// chart library
import ReactApexChart from 'react-apexcharts';
import { BaseOptionChart } from 'components/charts';

// ---------------------------------------------------------------------------

const ColumnChart = ({ data, options }) => {
  const chartOptions = merge(BaseOptionChart(), options);

  return <ReactApexChart type="bar" series={data} options={chartOptions} height={420} />;
};

ColumnChart.propTypes = {
  data: PropTypes.array,
  options: PropTypes.object
};
export default ColumnChart;
