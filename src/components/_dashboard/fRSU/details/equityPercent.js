import { Box, Stack, Typography } from '@mui/material';
import CustomContainer from 'components/_dashboard/CustomContainer';
import LineChart from 'components/_dashboard/LineChart';
import { ColorLegend, LegendWrapper } from 'components/_dashboard/CustomTableComponents';
import { chartYLabels, chartData, chartColorSeries } from 'pages/dashboard/worker/rsuFixed/dummy-data';

const EquityPercent = () => {
  const chartOptions = {
    xaxis: {
      categories: chartYLabels
    },
    stroke: { curve: 'straight' },
    markers: { size: 5 },
    colors: chartColorSeries,
    tooltip: { x: { show: false }, marker: { show: false } },
    legend: {
      show: false
    },
    title: {
      text: 'Ownership Over Time',
      align: 'left',
      style: { color: 'black' }
    }
  };

  return (
    <>
      <CustomContainer title="current Ownership">
        <Box sx={{ maxWidth: '260px', m: 'auto', textAlign: 'center', p: { sm: '40px', xs: '20px' } }}>
          <Stack spacing={3} alignItems="center">
            <img src="/static/illustrations/no-activity.png" alt="No Activity" />
            <Typography variant="subtitle1" color="primary.main">
              No activity logged yet
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Equity Pool Percentage Graph will show the fraction of the equity pool owned by each team member
            </Typography>
          </Stack>
        </Box>
      </CustomContainer>
      <CustomContainer>
        <LineChart data={chartData} options={chartOptions} />
        <br />
        <LegendWrapper sx={{ justifyContent: 'center' }}>
          <ColorLegend color={chartColorSeries[0]} />
          <Typography variant="subtitle1">{chartData[0].name} (Vesting Plan)</Typography>
        </LegendWrapper>
      </CustomContainer>
    </>
  );
};

export default EquityPercent;
