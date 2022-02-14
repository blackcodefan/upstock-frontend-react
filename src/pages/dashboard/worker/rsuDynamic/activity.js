import { useState } from 'react';
// material
import {
  Button,
  Container,
  MenuItem,
  OutlinedInput,
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
import OverviewPanel from 'components/_dashboard/OverviewPanel';
import CustomPaginationItem from 'components/_dashboard/CustomPaginationItem';
import DataWidget from 'components/_dashboard/DataWidget';
import RightSideForm from 'components/_dashboard/capitalization/RightSideForm';
import { CustomTab, CustomTabList } from 'components/_dashboard/CustomTabComponents';
import DetailTab from 'components/_dashboard/dRSU/activityWorker/detailTab';
import HistoryTab from 'components/_dashboard/dRSU/activityWorker/historyTab';
import RecentActivityLogTable from 'components/_dashboard/dRSU/activityWorker/recentActivityTable';
import { overviewTableData } from './dummy-data';

// ----------------------------------------------------------------------
export default function WorkerRsuDynamicActivity() {
  const { themeStretch } = useSettings();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [drawer, setDrawer] = useState(false);
  const [personalData, setPersonalData] = useState(null);
  const [tab, setTab] = useState('detail');

  const onViewDetail = (data) => {
    setPersonalData(data);
    setDrawer(true);
  };

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Page title="Worker | RSU Dynamic | Activity | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h6">Activity Log</Typography>
        <br />
        <OverviewPanel>
          <DataWidget>
            <Stack direction={sm ? 'row' : 'column'} gap={1} alignItems="center">
              <TextField select size="small" value="label" sx={{ width: sm ? 150 : '100%' }}>
                <MenuItem value="label">Label</MenuItem>
                <MenuItem value="twenty">Twenty</MenuItem>
                <MenuItem value="thirty">Thirty</MenuItem>
              </TextField>
              <TextField select size="small" value="label" sx={{ width: sm ? 150 : '100%' }}>
                <MenuItem value="label">Worker</MenuItem>
                <MenuItem value="twenty">Twenty</MenuItem>
                <MenuItem value="thirty">Thirty</MenuItem>
              </TextField>
              <OutlinedInput placeholder="From" size="small" sx={{ width: sm ? 150 : '100%' }} />
              <OutlinedInput placeholder="To" size="small" sx={{ width: sm ? 150 : '100%' }} />
              <TextField select size="small" value="label" sx={{ width: sm ? 150 : '100%' }}>
                <MenuItem value="label">Approved</MenuItem>
                <MenuItem value="twenty">Twenty</MenuItem>
                <MenuItem value="thirty">Thirty</MenuItem>
              </TextField>
              <Button
                variant="contained"
                startIcon={<Funnel size={20} />}
                sx={{ width: sm ? 150 : '100%', height: 37 }}
              >
                Filter
              </Button>
            </Stack>
            <br />
            <RecentActivityLogTable logs={overviewTableData} onViewDetail={onViewDetail} />
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
                      <ChevronLeft sx={{ width: 16 }} />
                    </CustomPaginationItem>
                  );
                if (item.type === 'last')
                  return (
                    <CustomPaginationItem {...item} size="small">
                      <ChevronRight sx={{ width: 16 }} />
                    </CustomPaginationItem>
                  );
                return (
                  <PaginationItem
                    {...item}
                    sx={{ borderRadius: '8px', border: 'none', '&.Mui-selected': { border: 'none' } }}
                  />
                );
              }}
            />
          </DataWidget>
        </OverviewPanel>
      </Container>
      <RightSideForm title={`${personalData?.name}'s Activity Log Details`} open={drawer} toggle={toggleDrawer}>
        <TabContext value={tab}>
          <CustomTabList onChange={handleChange} variant="scrollable">
            <CustomTab label="Details" value="detail" />
            <CustomTab label="History" value="history" />
          </CustomTabList>
          <TabPanel value="detail">
            <DetailTab personalData={personalData} />
          </TabPanel>
          <TabPanel value="history">
            <HistoryTab personalData={personalData} />
          </TabPanel>
        </TabContext>
      </RightSideForm>
    </Page>
  );
}
