import { useState } from 'react';
// material
import {
  Box,
  Button,
  Container,
  MenuItem,
  Pagination,
  PaginationItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Funnel, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import TotalActivityLogTable from 'components/_dashboard/dRSU/totalWorker/totalActivityTable';
import CustomPaginationItem from 'components/_dashboard/CustomPaginationItem';
import CustomContainer from 'components/_dashboard/CustomContainer';
import RightSideForm from 'components/_dashboard/capitalization/RightSideForm';
import { CustomTab, CustomTabList } from 'components/_dashboard/CustomTabComponents';
import ColumnChart from 'components/_dashboard/ColumnChart';
import LineChart from 'components/_dashboard/LineChart';
import {
  columnChartYearlyData,
  columnChartYearlyLabels,
  lineChartMonthlyData,
  linechartMonthlyLabel,
  totalAllTableData
} from './dummy-data';
// ----------------------------------------------------------------------

export default function WorkerRsuDynamicTotal() {
  const { themeStretch } = useSettings();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [drawer, setDrawer] = useState(false);
  const [personalData, setPersonalData] = useState(null);
  const [tab, setTab] = useState('year');

  const onViewDetail = (data) => {
    setPersonalData(data);
    setDrawer(true);
  };

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
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
    <Page title="Worker | RSU Dynamic | Total | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h6">Total Time's Activity</Typography>
        <br />
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
          <TotalActivityLogTable logs={totalAllTableData} onViewDetail={onViewDetail} />
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
      </Container>
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
    </Page>
  );
}
