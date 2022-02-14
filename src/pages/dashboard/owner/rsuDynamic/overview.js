// material
import {
  Container,
  Divider,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
  useTheme
} from '@mui/material';
import { PencilSquare } from 'react-bootstrap-icons';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import OverviewPanel from 'components/_dashboard/OverviewPanel';
import DataWidget from 'components/_dashboard/DataWidget';
import IconSuffixLabel from 'components/IconSuffixLabel';
import DonutChart from 'components/_dashboard/DonutChart';
import { ColorLegend, CustomTd, CustomTh, LegendWrapper } from 'components/_dashboard/CustomTableComponents';
import { fCommaDecimalNumber, fCurrency } from 'utils/formatNumber';
import {
  overviewData,
  OwnershipActivityLogData,
  ownershipColors,
  ownershipLabels,
  ownershipData,
  ownerShipTableData
} from './dummy-data';
// ----------------------------------------------------------------------

export default function RsuDynamicOverview() {
  const { themeStretch } = useSettings();
  const theme = useTheme();

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <OverviewPanel>
          <Typography variant="h6">Friends and Guest's Capltaliztion</Typography>
          <Divider sx={{ border: 'none', height: 15 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <DataWidget>
                <Typography varient="subtitle2" sx={{ color: 'text.info' }}>
                  Name:
                </Typography>
                <Typography varient="subtitle1">{overviewData.name}</Typography>
              </DataWidget>
            </Grid>
            <Grid item xs={12} md={4}>
              <DataWidget>
                <Typography varient="subtitle2" sx={{ color: 'text.info' }}>
                  Active Roles Count:
                </Typography>
                <Typography varient="subtitle1">{overviewData.activeRoleCount}</Typography>
              </DataWidget>
            </Grid>
            <Grid item xs={12} md={4}>
              <DataWidget>
                <Typography varient="subtitle2" sx={{ color: 'text.info' }}>
                  Equity:
                </Typography>
                <IconSuffixLabel>
                  <Typography varient="subtitle1">Equity earned multiplied by {overviewData.multiplier}</Typography>
                  <IconButton>
                    <PencilSquare size={16} color={theme.palette.primary.main} />
                  </IconButton>
                </IconSuffixLabel>
              </DataWidget>
            </Grid>
          </Grid>
        </OverviewPanel>
        <Divider sx={{ border: 'none', height: '15px' }} />
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
          Ownership
        </Typography>
        <Grid spacing={2} container>
          <Grid item xs={12} sm={6}>
            <DonutChart data={ownershipData} colors={ownershipColors} labels={ownershipLabels} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TableContainer>
              <Table>
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
            </TableContainer>
          </Grid>
        </Grid>
        <br />
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
          Recent Activity Log
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <CustomTh>Team member</CustomTh>
                <CustomTh>Date</CustomTh>
                <CustomTh>Description</CustomTh>
                <CustomTh>Duration</CustomTh>
                <CustomTh>Cash</CustomTh>
                <CustomTh>Equity</CustomTh>
              </TableRow>
              {OwnershipActivityLogData.map((data) => (
                <TableRow key={data.name} hover>
                  <CustomTd>{data.name}</CustomTd>
                  <CustomTd>{data.date}</CustomTd>
                  <CustomTd>{data.description}</CustomTd>
                  <CustomTd>{data.duration}</CustomTd>
                  <CustomTd>{fCurrency(data.cash)}</CustomTd>
                  <CustomTd>{fCommaDecimalNumber(data.equity)} pts</CustomTd>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Page>
  );
}
