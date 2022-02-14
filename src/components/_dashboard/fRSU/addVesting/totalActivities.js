import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Link,
  MenuItem,
  Pagination,
  PaginationItem,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import { ChevronDown, ChevronLeft, ChevronRight, Funnel } from 'react-bootstrap-icons';
import CustomContainer from 'components/_dashboard/CustomContainer';
import { CustomTd, CustomTh } from 'components/_dashboard/CustomTableComponents';
import IconSuffixLabel from 'components/IconSuffixLabel';
import CustomPaginationItem from 'components/_dashboard/CustomPaginationItem';
import RightSideForm from 'components/_dashboard/capitalization/RightSideForm';
import { CustomTab, CustomTabList } from 'components/_dashboard/CustomTabComponents';
import ColumnChart from 'components/_dashboard/ColumnChart';
import LineChart from 'components/_dashboard/LineChart';
import { getInitialsFromName } from 'utils/getAvatarName';

export const columnChartYearlyLabels = [
  'JAN 2021',
  'FEB 2021',
  'MAR 2021',
  'APR 2021',
  'MAY 2021',
  'JUN 2021',
  'JUL 2021',
  'AUG 2021',
  'SEP 2021',
  'OCT 2021',
  'NOV 2021',
  'DEC 2021'
];

export const linechartMonthlyLabel = [
  '01 Mon',
  '03 Wed',
  '06 Fri',
  '09 Mon',
  '12 Wed',
  '15 Fri',
  '18 Mon',
  '21 Wed',
  '24 Fri',
  '27 Mon',
  '30 Wed'
];

export const lineChartMonthlyData = [
  {
    name: 'Monthly',
    data: [0, 1.5, 3, 7, 7.5, 9, 7.5, 6.5, 6, 6.5, 9]
  }
];

export const columnChartYearlyData = [
  {
    name: 'Yearly',
    data: [10, 30, 90, 60, 140, 20, 70, 30, 85, 100, 35, 75]
  }
];

const TotalActivities = ({ data }) => {
  const theme = useTheme();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [drawer, setDrawer] = useState(false);
  const [tab, setTab] = useState('year');
  const [personalData, setPersonalData] = useState(null);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const onViewDetail = (data) => {
    setPersonalData(data);
    setDrawer(true);
  };

  const yearlyChartOption = {
    plotOptions: { bar: { columnWidth: '16%' } },
    stroke: { show: false },
    xaxis: {
      categories: columnChartYearlyLabels
    },
    yaxis: {
      labels: {
        formatter: (y) => `${y}h`
      }
    },
    title: {
      text: 'Yearly Cumulated Activity',
      align: 'center',
      style: { color: 'black' }
    }
  };

  const lineChartOption = {
    xaxis: {
      categories: linechartMonthlyLabel
    },
    yaxis: {
      labels: {
        formatter: (y) => `${y}h`
      }
    },
    stroke: { curve: 'straight' },
    markers: { show: false },
    title: {
      text: 'Monthly Cumulated Activity',
      align: 'center',
      style: { color: 'black' }
    }
  };

  return (
    <>
      <CustomContainer>
        <Stack direction={sm ? 'row' : 'column'} gap={1} alignItems="center">
          <TextField select size="small" value="label" sx={{ width: sm ? 150 : '100%' }}>
            <MenuItem value="label">Label</MenuItem>
            <MenuItem value="twenty">Twenty</MenuItem>
            <MenuItem value="thirty">Thirty</MenuItem>
          </TextField>
          <Button variant="contained" startIcon={<Funnel size={20} />} sx={{ width: sm ? 150 : '100%', height: 37 }}>
            Filter
          </Button>
        </Stack>
        <br />
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <CustomTh>Name</CustomTh>
                <CustomTh>Status</CustomTh>
                <CustomTh>Equity</CustomTh>
                <CustomTh>Overall</CustomTh>
                <CustomTh />
                <CustomTh />
              </TableRow>
              {data.map((row, index) => (
                <TableRow key={index} hover>
                  <CustomTd>
                    <Stack direction="row" gap="5px" alignItems="center">
                      <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }}>
                        {getInitialsFromName(row.name)}
                      </Avatar>
                      {row.name}
                    </Stack>
                  </CustomTd>
                  <CustomTd>
                    <Typography color="success.main">{row.status}</Typography>
                  </CustomTd>
                  <CustomTd>{row.equity}</CustomTd>
                  <CustomTd>{row.overall}</CustomTd>
                  <CustomTd>
                    <IconSuffixLabel style={{ gap: 5 }}>
                      <Link underline="none" component="button">
                        Cumulated Activity
                      </Link>
                      <ChevronDown size={15} color={theme.palette.primary.main} />
                    </IconSuffixLabel>
                  </CustomTd>
                  <CustomTd>
                    <IconSuffixLabel style={{ gap: 5 }}>
                      <Link underline="none" component="button" onClick={() => onViewDetail(row)}>
                        Details
                      </Link>
                      <ChevronDown size={15} color={theme.palette.primary.main} />
                    </IconSuffixLabel>
                  </CustomTd>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Pagination
          count={10}
          showFirstButton
          showLastButton
          shape="rounded"
          variant="outlined"
          color="primary"
          sx={{ '& .MuiPagination-ul': { justifyContent: 'center' } }}
          renderItem={(item) => {
            if (item.type === 'previous')
              return (
                <CustomPaginationItem {...item} size="small">
                  Prev
                </CustomPaginationItem>
              );
            if (item.type === 'next')
              return (
                <CustomPaginationItem {...item} size="small">
                  Next
                </CustomPaginationItem>
              );
            if (item.type === 'first')
              return (
                <CustomPaginationItem {...item} size="small">
                  <ChevronLeft size={16} />
                </CustomPaginationItem>
              );
            if (item.type === 'last')
              return (
                <CustomPaginationItem {...item} size="small">
                  <ChevronRight size={16} />
                </CustomPaginationItem>
              );
            return (
              <PaginationItem
                {...item}
                sx={{ borderRadius: '8px', border: 'none', '&.Mui-selected': { border: 'none' } }}
                components={{ first: ChevronLeft }}
              />
            );
          }}
        />
      </CustomContainer>
      <RightSideForm
        title={`${personalData?.name}'s Cumulated Activity`}
        open={drawer}
        toggle={toggleDrawer}
        width="60%"
      >
        <TabContext value={tab}>
          <CustomTabList onChange={handleTabChange} variant="scrollable">
            <CustomTab label="Yearly" value="year" />
            <CustomTab label="Monthly" value="month" />
            <CustomTab label="Weekly" value="week" />
          </CustomTabList>
          <TabPanel value="year">
            <Box sx={{ padding: 3, bgcolor: 'primary.color', mt: 3 }}>
              <ColumnChart data={columnChartYearlyData} options={yearlyChartOption} />
            </Box>
          </TabPanel>
          <TabPanel value="month">
            <Box sx={{ padding: 3, bgcolor: 'primary.color', mt: 3 }}>
              <LineChart data={lineChartMonthlyData} options={lineChartOption} />
            </Box>
          </TabPanel>
          <TabPanel value="week">
            <Box sx={{ padding: 3, bgcolor: 'primary.color', mt: 3 }}>Weekly</Box>
          </TabPanel>
        </TabContext>
      </RightSideForm>
    </>
  );
};

TotalActivities.propTypes = {
  data: PropTypes.array.isRequired
};

export default TotalActivities;
