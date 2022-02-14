// material
import { Box, Container, Grid, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
// page components
import DonutChart from 'components/_dashboard/DonutChart';
import { ColorLegend, CustomTd, CustomTh, LegendWrapper } from 'components/_dashboard/CustomTableComponents';
import { colors, data, labels, overviewOverallData } from './dummy-data';
// --------------------------------------------------------------------

export default function CapitalizationOverviewOverall() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Box sx={{ pt: '20px' }}>
          <Typography sx={{ fontSize: 18, color: 'color.text1' }}>Overall Ownership</Typography>
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
                      <CustomTh>Shares</CustomTh>
                      <CustomTh>Percentage</CustomTh>
                    </TableRow>
                    {overviewOverallData.map((data) => (
                      <TableRow key={data.name} hover>
                        <CustomTd>
                          <LegendWrapper>
                            <ColorLegend color={data.color} />
                            {data.name}
                          </LegendWrapper>
                        </CustomTd>
                        <CustomTd>{data.shares}</CustomTd>
                        <CustomTd>{data.percent}%</CustomTd>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
}
