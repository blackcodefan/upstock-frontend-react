// material
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import OverviewPanel from 'components/_dashboard/OverviewPanel';
import CustomContainer from 'components/_dashboard/CustomContainer';
import DataWidget from 'components/_dashboard/DataWidget';
import CustomCard from 'components/_dashboard/fRSU/overview/CustomCard';
import { CustomTd, CustomTh } from 'components/_dashboard/CustomTableComponents';
import { fCurrency } from 'utils/formatNumber';
import { getInitialsFromName } from 'utils/getAvatarName';
import { overviewData, overviewRecentActivities } from './dummy-data';
// ----------------------------------------------------------------------

export default function WorkerCapitalizationRSUFixed() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Worker | RSU Fixed | Overview | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={2}>
          <Grid item md={8} sm={12} xs={12}>
            <OverviewPanel>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <DataWidget>
                    <Typography varient="subtitle2" sx={{ color: 'text.info' }}>
                      Name:
                    </Typography>
                    <Typography varient="h6">{overviewData.name}'s Vesting Plan</Typography>
                  </DataWidget>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <DataWidget>
                    <Typography varient="subtitle2" sx={{ color: 'text.info' }}>
                      Actie Roles Count:
                    </Typography>
                    <Typography varient="h6">{overviewData.activeRoleCount}</Typography>
                  </DataWidget>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <DataWidget>
                    <Typography varient="subtitle2" sx={{ color: 'text.info' }}>
                      Equity Multiplier:
                    </Typography>
                    <Typography varient="h6">{overviewData.equityMultiplier}</Typography>
                  </DataWidget>
                </Grid>
              </Grid>
            </OverviewPanel>
          </Grid>
          <Grid item md={4} sm={12} xs={12} sx={{ p: 2 }}>
            <CustomCard>
              <Typography variant="subtitle2">Approximate Value of Equity Earned</Typography>
              <br />
              <Typography variant="subtitle1">{overviewData.name}</Typography>
              <Typography variant="subtitle1">{fCurrency(overviewData.earned)}</Typography>
            </CustomCard>
          </Grid>
        </Grid>
        <br />
        <Typography variant="h6">Ownership</Typography>
        <br />
        <CustomContainer>
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
        <br />
        <Typography variant="h6">Recent Activity Log</Typography>
        <br />
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <CustomTh>Team member</CustomTh>
                <CustomTh>Date</CustomTh>
                <CustomTh>Description</CustomTh>
                <CustomTh>Duration</CustomTh>
              </TableRow>
              {overviewRecentActivities.map((row, index) => (
                <TableRow key={index} hover>
                  <CustomTd>
                    <Stack direction="row" gap="5px" alignItems="center">
                      <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }}>
                        {getInitialsFromName(row.name)}
                      </Avatar>
                      {row.name}
                    </Stack>
                  </CustomTd>
                  <CustomTd>{row.date}</CustomTd>
                  <CustomTd>{row.description}</CustomTd>
                  <CustomTd>{row.duration}</CustomTd>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Box sx={{ textAlign: 'center' }}>
          <Button>Show More</Button>
        </Box>
      </Container>
    </Page>
  );
}
