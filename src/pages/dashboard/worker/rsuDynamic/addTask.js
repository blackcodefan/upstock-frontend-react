import { useState } from 'react';
// material
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import { DatePicker, TabContext, TabPanel } from '@mui/lab';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import OverviewPanel from 'components/_dashboard/OverviewPanel';
import DataWidget from 'components/_dashboard/DataWidget';
import CustomInputlabel from 'components/CustomInputLabel';
import PersonalActivityLogTable from 'components/_dashboard/dRSU/totalWorker/personalActivityTable';
import RightSideForm from 'components/_dashboard/capitalization/RightSideForm';
import DetailTab from 'components/_dashboard/dRSU/activityWorker/detailTab';
import HistoryTab from 'components/_dashboard/dRSU/activityWorker/historyTab';
import { CustomTab, CustomTabList } from 'components/_dashboard/CustomTabComponents';
import { fCommaNumber, fCurrency } from 'utils/formatNumber';
import { addActivityFormInfo, totalTableData } from './dummy-data';
// ----------------------------------------------------------------------

export default function WorkerRsuDynamicAddTask() {
  const { themeStretch } = useSettings();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [date, setDate] = useState(new Date());
  const [showActivity, setShowActivity] = useState(false);
  const [personalData, setPersonalData] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [tab, setTab] = useState('detail');

  const toggleShowActivity = () => {
    setShowActivity(!showActivity);
  };

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onViewDetail = (data) => {
    setPersonalData(data);
    setDrawer(true);
  };

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Page title="Worker | RSU Dynamic | Add Task | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <OverviewPanel>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6">Add Activity</Typography>
          </Box>
          <Typography variant="body2" sx={{ mb: '20px' }}>
            As an independent contractor
          </Typography>
          <DataWidget>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <DatePicker
                    views={['day']}
                    value={date}
                    onChange={(val) => setDate(val)}
                    renderInput={(params) => <TextField {...params} helperText={null} />}
                  />
                </FormControl>
                <Divider sx={{ border: 'none', height: 15 }} />
                <CustomInputlabel label="Duration" />
                <Divider sx={{ border: 'none', height: 15 }} />
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <OutlinedInput
                      placeholder="0"
                      type="number"
                      endAdornment={
                        <Typography variant="body2" color="color.text3">
                          h
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <OutlinedInput
                      placeholder="0"
                      type="number"
                      endAdornment={
                        <Typography variant="body2" color="color.text3">
                          m
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <OutlinedInput
                      placeholder="0"
                      type="number"
                      endAdornment={
                        <Typography variant="body2" color="color.text3">
                          s
                        </Typography>
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <OutlinedInput multiline rows={5} placeholder="Description" />
                </FormControl>
              </Grid>
            </Grid>
            <Divider sx={{ height: 15, border: 'none' }} />
            <Stack direction={sm ? 'row' : 'column'} justifyContent="end" spacing={5} alignItems="center">
              <Typography variant="body1">
                Cash:{' '}
                <Typography component="span" color="color.text3" variant="body2">
                  {fCurrency(addActivityFormInfo.cash)}
                </Typography>
              </Typography>
              <Typography variant="body1">
                Equity:{' '}
                <Typography component="span" color="color.text3" variant="body2">
                  {fCommaNumber(addActivityFormInfo.equity)} pts
                </Typography>
              </Typography>
              <Typography variant="body1">
                Max Cash:{' '}
                <Typography component="span" color="color.text3" variant="body2">
                  {fCurrency(addActivityFormInfo.maxCash)}
                </Typography>
              </Typography>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Stack>
          </DataWidget>
          {showActivity && (
            <>
              <br />
              <DataWidget>
                <PersonalActivityLogTable logs={totalTableData} onViewDetail={onViewDetail} />
              </DataWidget>
            </>
          )}
        </OverviewPanel>
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="text" sx={{ width: 'fit-content' }} onClick={toggleShowActivity}>
            {showActivity ? `Show Less` : `See Your Recetn Activity`}
          </Button>
        </Box>
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
