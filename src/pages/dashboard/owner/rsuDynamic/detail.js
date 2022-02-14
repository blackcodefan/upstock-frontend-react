import { useState } from 'react';
// material
import { Container, Divider, Grid, Stack, Table, TableBody, TableRow, Typography, useMediaQuery } from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import CustomToggleBtn from 'components/_dashboard/CustomToggleBtn';
import CustomContainer from 'components/_dashboard/CustomContainer';
import DonutChart from 'components/_dashboard/DonutChart';
import LineChart from 'components/_dashboard/LineChart';
import Page from 'components/Page';
import ProgressBar from 'components/_dashboard/ProgressBar';
import {
  ColorLegend,
  CustomTableContainer,
  CustomTd,
  CustomTh,
  LegendWrapper
} from 'components/_dashboard/CustomTableComponents';
// dummy data
import { detailProgressData, ownershipColors, ownershipData, ownershipLabels, ownerShipTableData } from './dummy-data';

// ----------------------------------------------------------------------
const toggleBtnOptions = [
  { label: 'Equity %', value: 'percent' },
  { label: 'Equity Value', value: 'value' }
];
const CHART_DATA = [
  { name: 'Alex Fedoseev', data: [200000, 250000, 280000, 300000, 300000, 300000, 300000] },
  { name: 'Steve Cassel', data: [180000, 230000, 260000, 280000, 280000, 280000, 280000] },
  { name: 'Ben Friman', data: [130000, 130000, 130000, 130000, 130000, 130000, 130000] },
  { name: 'Pulkit kakkar', data: [110000, 110000, 110000, 110000, 110000, 110000, 110000] },
  { name: 'Alexander kharitonov', data: [90000, 90000, 90000, 90000, 90000, 90000, 90000] }
];
const VALUE_CHART_CATEGORIES = [
  'Oct 2020',
  'Nov 2020',
  'Dec 2020',
  'Jan 2021',
  'Feb 2021',
  'Mar 2021',
  'Apr 2021',
  'May 2021',
  'Jun 2021',
  'Jul 2021',
  'Aug 2021',
  'Sep 2021'
];
const VALUE_CHART_COLORS = ['#FF5630', '#CD3EAD', '#FFAB00', '#379EFF', '#37CB89'];
const VALUE_CHART_OPTIONS = {
  xaxis: {
    categories: VALUE_CHART_CATEGORIES
  },
  stroke: { curve: 'straight' },
  markers: { size: 5 },
  colors: VALUE_CHART_COLORS,
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

const PERCENT_CHART_OPTIONS = {
  xaxis: {
    categories: VALUE_CHART_CATEGORIES
  },
  yaxis: {
    labels: {
      formatter: (y) => y / 10000
    }
  },
  stroke: { curve: 'straight' },
  markers: { size: 5 },
  colors: VALUE_CHART_COLORS,
  tooltip: { x: { show: false }, marker: { show: false } },
  legend: {
    show: false
  },
  title: {
    text: 'Values Over Time',
    align: 'left',
    style: { color: 'black' }
  }
};

export default function RsuDynamicDetail() {
  const { themeStretch } = useSettings();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [tabValue, setTabValue] = useState('percent');

  const valueTab = (
    <>
      <CustomContainer title="Current Values">
        <Grid container spacing={2}>
          {detailProgressData.map((item, index) => (
            <Grid item xs={12} key={index}>
              <ProgressBar name={item.name} width={item.width} earned={item.earned} />
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
      <Divider sx={{ border: 'none', height: 15 }} />
      <CustomContainer>
        <LineChart data={CHART_DATA} options={PERCENT_CHART_OPTIONS} />
        <Divider sx={{ border: 'none', height: 15 }} />
        <Typography variant="subtitle1">Ownership List</Typography>
        <Divider sx={{ border: 'none', height: 15 }} />
        <Grid container spacing={3}>
          {CHART_DATA.map((data, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <LegendWrapper>
                <ColorLegend color={VALUE_CHART_COLORS[index]} />
                {data.name}
              </LegendWrapper>
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
    </>
  );

  const percentTab = (
    <>
      <CustomContainer title="Current Ownership">
        <Grid spacing={2} container>
          <Grid item xs={12} sm={6}>
            <DonutChart data={ownershipData} colors={ownershipColors} labels={ownershipLabels} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTableContainer sx={{ maxHeight: 300 }}>
              <Table stickyHeader>
                <TableBody>
                  <TableRow>
                    <CustomTh>Name</CustomTh>
                    <CustomTh>Ownership Percentage</CustomTh>
                  </TableRow>
                  {ownerShipTableData.map((data) => (
                    <TableRow key={data.name} hover>
                      <CustomTd>
                        <LegendWrapper>
                          <ColorLegend color={data.color} />
                          {data.name}
                        </LegendWrapper>
                      </CustomTd>
                      <CustomTd>{data.percent}%</CustomTd>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CustomTableContainer>
          </Grid>
        </Grid>
      </CustomContainer>
      <Divider sx={{ border: 'none', height: 15 }} />
      <CustomContainer>
        <LineChart data={CHART_DATA} options={VALUE_CHART_OPTIONS} />
        <Divider sx={{ border: 'none', height: 15 }} />
        <Typography variant="subtitle1">Ownership List</Typography>
        <Divider sx={{ border: 'none', height: 15 }} />
        <Grid container spacing={3}>
          {CHART_DATA.map((data, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <LegendWrapper>
                <ColorLegend color={VALUE_CHART_COLORS[index]} />
                {data.name}
              </LegendWrapper>
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
    </>
  );

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack
          direction={sm ? 'row' : 'column-reverse'}
          justifyContent="space-between"
          alignItems={sm ? 'center' : 'flex-start'}
          spacing={2}
        >
          <Typography variant="h6">
            {tabValue === 'percent'
              ? "Performance's Equity Repartition"
              : "Performance's Approximate Value of Equity Earned"}
          </Typography>
          <CustomToggleBtn initialValue="percent" options={toggleBtnOptions} onChange={(value) => setTabValue(value)} />
        </Stack>
        <Divider sx={{ border: 'none', height: 15 }} />
        {tabValue === 'percent' ? percentTab : valueTab}
      </Container>
    </Page>
  );
}
