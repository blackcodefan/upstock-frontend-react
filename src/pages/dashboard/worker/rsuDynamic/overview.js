import { useState } from 'react';
// material
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
  useTheme
} from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import { ChevronDown, CheckCircle, ClockFill, ThreeDots } from 'react-bootstrap-icons';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import LineChart from 'components/_dashboard/LineChart';
import OverviewPanel from 'components/_dashboard/OverviewPanel';
import DataWidget from 'components/_dashboard/DataWidget';
import SidebarActionBtn from 'components/_dashboard/sidebar/BottomActionClip';
import IconSuffixLabel from 'components/IconSuffixLabel';
import RightSideForm from 'components/_dashboard/capitalization/RightSideForm';
import { CustomTd, CustomTh } from 'components/_dashboard/CustomTableComponents';
import { CustomTab, CustomTabList } from 'components/_dashboard/CustomTabComponents';
import DetailTab from 'components/_dashboard/dRSU/overviewWorker/detailTab';
import HistoryTab from 'components/_dashboard/dRSU/overviewWorker/historyTab';
import { fCurrency } from 'utils/formatNumber';
import { getInitialsFromName } from 'utils/getAvatarName';
import { overviewData, overviewChartData, overviewChartLabels, overviewTableData } from './dummy-data';
// ----------------------------------------------------------------------

const lineChartOption = {
  xaxis: {
    categories: overviewChartLabels
  },
  yaxis: {
    show: true,
    labels: { show: false },
    min: 0,
    max: 300000
  },
  grid: {
    show: true,
    yaxis: {
      lines: { show: false }
    },
    xaxis: {
      iines: { show: true, startOnly: true }
    }
  },
  stroke: { curve: 'straight' }
};

export default function WorkerRsuDynamicOverview() {
  const { themeStretch } = useSettings();
  const theme = useTheme();
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
    <Page title="Worker | RSU Dynamic | Overview | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <OverviewPanel>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Dynamic RSU's Overview</Typography>
              <Divider sx={{ border: 'none', height: 15 }} />
              <DataWidget>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle2" color="color.text3">
                    Pool Type:
                  </Typography>
                  <Typography variant="subtitle1">{overviewData.poolType}</Typography>
                </Stack>
                <Divider sx={{ border: 'none', height: 15 }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle2" color="color.text3">
                    Active Roles Count:
                  </Typography>
                  <Typography variant="subtitle1">{overviewData.activeRoleCount}</Typography>
                </Stack>
                <Divider sx={{ border: 'none', height: 15 }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle2" color="color.text3">
                    Incentives Active:
                  </Typography>
                  <Typography variant="subtitle1">{overviewData.incentive}</Typography>
                </Stack>
              </DataWidget>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Incentives</Typography>
              <Divider sx={{ border: 'none', height: 15 }} />
              <DataWidget style={{ minHeight: 144 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1">Equity multiplier:</Typography>
                  <Typography variant="subtitle1" color="primary.main">
                    {overviewData.multiplier}x
                  </Typography>
                </Stack>
                <Divider sx={{ border: 'none', height: 15 }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1">On-time bonus</Typography>
                  <Typography variant="subtitle1" color="primary.main">
                    x{overviewData.bonus}
                  </Typography>
                </Stack>
              </DataWidget>
            </Grid>
          </Grid>
        </OverviewPanel>
        <br />
        <OverviewPanel>
          <Typography variant="h6">Dynamic RSU's Approximate Value of Equity Earned</Typography>
          <br />
          <DataWidget style={{ minHeight: 'auto' }}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">Melis Platin</Typography>
              <Box>
                <Typography variant="body1" component="span">
                  Melis Platin
                </Typography>{' '}
                <Typography variant="subtitle1" component="span" color="primary.main">
                  {fCurrency(overviewData.earned)}
                </Typography>
                <IconButton>
                  <ThreeDots size={16} />
                </IconButton>
              </Box>
            </Stack>
          </DataWidget>
          <br />
          <DataWidget>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">Values Over Time</Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <SidebarActionBtn sx={{ minWidth: 'auto' }}>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    <Typography variant="body2">12 months</Typography>
                  </Stack>
                  <ChevronDown size={15} />
                </SidebarActionBtn>
                <IconButton>
                  <ThreeDots size={20} />
                </IconButton>
              </Stack>
            </Stack>
            <br />
            <LineChart options={lineChartOption} data={overviewChartData} />
          </DataWidget>
        </OverviewPanel>
        <br />
        <Typography variant="h6">Recent Activity Log</Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <CustomTh>Name</CustomTh>
                <CustomTh>Date</CustomTh>
                <CustomTh>Description</CustomTh>
                <CustomTh>Duration</CustomTh>
                <CustomTh />
                <CustomTh />
              </TableRow>
              {overviewTableData.map((data, index) => (
                <TableRow key={index} hover>
                  <CustomTd top="true">
                    <Stack direction="row" gap="5px" alignItems="center">
                      <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }}>
                        {getInitialsFromName(data.name)}
                      </Avatar>
                      {data.name}
                    </Stack>
                  </CustomTd>
                  <CustomTd top="true">{data.date}</CustomTd>
                  <CustomTd top="true">
                    {typeof data.description === 'object' ? (
                      <ul style={{ paddingLeft: 20 }}>
                        {data.description.map((desc, index) => (
                          <li key={index}>{desc}</li>
                        ))}
                      </ul>
                    ) : (
                      data.description
                    )}
                  </CustomTd>
                  <CustomTd top="true">{data.duration}</CustomTd>
                  <CustomTd top="true">
                    <CheckCircle size={15} color={theme.palette.primary.main} />{' '}
                    <ClockFill size={15} color={theme.palette.primary.main} />
                  </CustomTd>
                  <CustomTd top="true">
                    <IconSuffixLabel style={{ gap: 5 }}>
                      <Link underline="none" component="button" onClick={() => onViewDetail(data)}>
                        Details
                      </Link>
                      <ChevronDown color={theme.palette.primary.main} />
                    </IconSuffixLabel>
                  </CustomTd>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained">Activity</Button>
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
