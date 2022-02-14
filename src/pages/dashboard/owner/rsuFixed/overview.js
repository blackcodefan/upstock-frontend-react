// material
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
  useTheme
} from '@mui/material';
import { CheckCircle, FileEarmarkText, InfoCircle, Play, Stop, Trash } from 'react-bootstrap-icons';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import CustomChip from 'components/_dashboard/legal/CustomChip';
import OverviewPanel from 'components/_dashboard/OverviewPanel';
import IconSuffixLabel from 'components/IconSuffixLabel';
import DataWidget from 'components/_dashboard/DataWidget';
import DonutChart from 'components/_dashboard/DonutChart';
import { ColorLegend, CustomTd, CustomTh, LegendWrapper } from 'components/_dashboard/CustomTableComponents';
import SortIconButton from 'components/_dashboard/SortIconButton';
import { fCommaNumber } from 'utils/formatNumber';
import { colors, data, distritubtionTableData, labels, overviewData, vestingTableData } from './dummy-data';
// ----------------------------------------------------------------------

export default function RsuFixedOverview() {
  const { themeStretch } = useSettings();
  const theme = useTheme();

  const actionIconSet = {
    c: <FileEarmarkText color={theme.palette.success.main} />,
    s: <Trash color={theme.palette.error.main} />,
    st: <Play color={theme.palette.success.main} />,
    v: <Stop color={theme.palette.primary.main} />
  };

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <OverviewPanel>
          <IconSuffixLabel>
            <Typography variant="subtitle1">Fixed RSU Overview</Typography>
            <IconButton>
              <InfoCircle size={16} color={theme.palette.primary.main} />
            </IconButton>
          </IconSuffixLabel>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <DataWidget>
                <Typography varient="subtitle2" sx={{ color: 'text.info' }}>
                  Vested RSUs:
                </Typography>
                <Typography varient="h6">{fCommaNumber(overviewData.vested)}</Typography>
              </DataWidget>
            </Grid>
            <Grid item xs={12} md={4}>
              <DataWidget>
                <Typography varient="subtitle2" sx={{ color: 'text.info' }}>
                  Unvested RSUs:
                </Typography>
                <Typography varient="h6">{fCommaNumber(overviewData.unvested)}</Typography>
              </DataWidget>
            </Grid>
            <Grid item xs={12} md={4}>
              <DataWidget>
                <Typography varient="subtitle2" sx={{ color: 'text.info' }}>
                  Unallocated RSUs:
                </Typography>
                <Typography varient="h6">{fCommaNumber(overviewData.unallocated)}</Typography>
              </DataWidget>
            </Grid>
          </Grid>
        </OverviewPanel>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">Distribution</Typography>
          <Grid spacing={2} container>
            <Grid item xs={12} sm={6}>
              <DonutChart data={data} colors={colors} labels={labels} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <CustomTh>Name</CustomTh>
                      <CustomTh>RSUs</CustomTh>
                      <CustomTh>Percentage</CustomTh>
                    </TableRow>
                    {distritubtionTableData.map((data) => (
                      <TableRow key={data.name} hover>
                        <CustomTd>
                          <LegendWrapper>
                            <ColorLegend color={data.color} />
                            {data.name}
                          </LegendWrapper>
                        </CustomTd>
                        <CustomTd>{fCommaNumber(data.rsu)}</CustomTd>
                        <CustomTd>{data.percent}%</CustomTd>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">Vesting Plan</Typography>
            <Button variant="contained" sx={{ width: 'auto' }} size="small">
              Add New Vesting Plan
            </Button>
          </Stack>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <CustomTh>
                    Team Member
                    <SortIconButton />
                  </CustomTh>
                  <CustomTh center={1}>
                    Start
                    <SortIconButton />
                  </CustomTh>
                  <CustomTh center={1}>
                    Cliff
                    <SortIconButton />
                  </CustomTh>
                  <CustomTh center={1}>
                    Shares
                    <SortIconButton />
                  </CustomTh>
                  <CustomTh center={1}>
                    Value
                    <SortIconButton />
                  </CustomTh>
                  <CustomTh center={1}>
                    State
                    <SortIconButton />
                  </CustomTh>
                  <CustomTh center={1}>
                    Lgeal
                    <SortIconButton />
                  </CustomTh>
                  <CustomTh center={1}>
                    Status
                    <SortIconButton />
                  </CustomTh>
                  <CustomTh center={1}>
                    Actions
                    <IconButton>
                      <InfoCircle size={10} color={theme.palette.primary.main} />
                    </IconButton>
                  </CustomTh>
                </TableRow>
                {vestingTableData.map((row, index) => (
                  <TableRow key={index} hover>
                    <CustomTd>{row.name}</CustomTd>
                    <CustomTd center={1}>{row.start}</CustomTd>
                    <CustomTd center={1}>{row.cliff}</CustomTd>
                    <CustomTd center={1}>{row.shares}</CustomTd>
                    <CustomTd center={1}>
                      ${row.value.score} / ${row.value.total}
                    </CustomTd>
                    <CustomTd center={1}>{row.state}</CustomTd>
                    <CustomTd center={1}>
                      <CustomChip
                        icon={<CheckCircle size={12} />}
                        label={`${row.legal.signed}/${row.legal.people}`}
                        size="small"
                        color={
                          // eslint-disable-next-line no-nested-ternary
                          !row.legal.signed ? 'default' : row.legal.signed === row.legal.people ? 'success' : 'warning'
                        }
                        variant="outlined"
                      />
                    </CustomTd>
                    <CustomTd center={1}>{row.status}</CustomTd>
                    <CustomTd center={1}>
                      <IconButton size="small">{actionIconSet[row.action]}</IconButton>
                    </CustomTd>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Page>
  );
}
