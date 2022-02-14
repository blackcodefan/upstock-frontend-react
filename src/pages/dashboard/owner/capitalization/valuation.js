import { useState, useRef } from 'react';
// material
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  OutlinedInput,
  Popover,
  Stack,
  Table,
  TableBody,
  TableRow,
  TableContainer,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import RightSideForm from 'components/_dashboard/capitalization/RightSideForm';
import CustomInputlabel from 'components/CustomInputLabel';
import Arrow from 'components/PopoverArrow';
import { CustomTh, CustomTd, LegendWrapper, ColorLegend } from 'components/_dashboard/CustomTableComponents';
import DonutChart from 'components/_dashboard/DonutChart';
import LineChart from 'components/_dashboard/LineChart';
import SortIconButton from 'components/_dashboard/SortIconButton';
import OverviewPanel from 'components/_dashboard/OverviewPanel';
import { Trash, X } from 'react-bootstrap-icons';
import { valuationColors, valuationData, valuationLabels, valuationTableData } from './dummy-data';
// ----------------------------------------------------------------------

const valuationDistributionTable = (
  <Table>
    <TableBody>
      <TableRow>
        <CustomTh>Name</CustomTh>
        <CustomTh>Shares</CustomTh>
      </TableRow>
      {valuationTableData.map((row, index) => (
        <TableRow key={index}>
          <CustomTd>
            <LegendWrapper>
              <ColorLegend color={row.color} />
              {row.name}
            </LegendWrapper>
          </CustomTd>
          <CustomTd>{row.shares}</CustomTd>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const ValuationHistoryTable = () => (
  <Table>
    <TableBody>
      <TableRow>
        <CustomTh>
          Since
          <SortIconButton />
        </CustomTh>
        <CustomTh sx={{ textAlign: 'center' }}>
          Valuation
          <SortIconButton />
        </CustomTh>
        <CustomTh sx={{ textAlign: 'center' }}>
          Source
          <SortIconButton />
        </CustomTh>
        <CustomTh />
      </TableRow>
      <TableRow>
        <CustomTd>01/01/2020</CustomTd>
        <CustomTd center={1}>$6,000,000.00</CustomTd>
        <CustomTd center={1}>Founder</CustomTd>
        <CustomTd sx={{ width: 90 }} center={1}>
          <Button startIcon={<Trash />} size="small" color="error">
            Delete
          </Button>
        </CustomTd>
      </TableRow>
      <TableRow>
        <CustomTd>08/16/2016</CustomTd>
        <CustomTd center={1}>$2,000,000.00</CustomTd>
        <CustomTd center={1}>Founder</CustomTd>
        <CustomTd sx={{ width: 90 }} center={1}>
          <Button startIcon={<Trash />} size="small" color="error">
            Delete
          </Button>
        </CustomTd>
      </TableRow>
    </TableBody>
  </Table>
);

// -----------------------------------------------------------------------
const CHART_DATA = [
  { name: 'Live Estimate', data: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
  { name: 'Valuation', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }
];
const CHART_CATEGORIES = [
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
const CHART_COLORS = ['#1890FF', '#FF1654'];
const chartOptions = {
  xaxis: {
    categories: CHART_CATEGORIES
  },
  yaxis: {
    labels: {
      formatter: (y) => `$${y}`
    }
  },
  stroke: { curve: 'straight' },
  markers: { size: 5 },
  colors: CHART_COLORS,
  tooltip: { x: { show: false }, marker: { show: false } },
  legend: {
    horizontalAlign: 'right',
    offsetY: -20
  },
  title: {
    text: 'Need to find a different title here',
    align: 'left',
    offsetY: 20,
    style: { color: 'black' }
  }
};

export default function CapitalizationValuation() {
  const { themeStretch } = useSettings();
  const theme = useTheme();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [drawer, setDrawer] = useState(false);
  const [info, setInfo] = useState(false);
  const sourceRef = useRef();

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <Page title="Capitalization | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
          Friends and Guest's Equilty Pools
        </Typography>
        <Stack spacing={2} sx={{ mt: '10px' }} direction={sm ? 'row' : 'column'}>
          <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
            <OverviewPanel sx={{ height: '100%' }}>
              <Box sx={{ bgcolor: 'color.bg4', borderRadius: '10px', p: '20px', height: '100%' }}>
                <Stack sx={{ width: '100%' }} justifyContent="space-between" direction={{ xs: 'column', sm: 'row' }}>
                  <Typography variant="subtitle1" sx={{ color: 'color.text3' }}>
                    Current Valuation
                  </Typography>
                  <Typography varient="h6">$6,000,000.00</Typography>
                </Stack>
                <Divider sx={{ border: 'none', height: { xs: 0, sm: '15px' } }} />
                <Stack sx={{ width: '100%' }} justifyContent="space-between" direction={{ xs: 'column', sm: 'row' }}>
                  <Typography variant="subtitle1" sx={{ color: 'color.text3' }}>
                    Live Estimated Valuation
                  </Typography>
                  <Typography varient="h6">$7,035,960.00</Typography>
                </Stack>
              </Box>
            </OverviewPanel>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
            <OverviewPanel sx={{ height: '100%' }}>
              <Box sx={{ bgcolor: 'color.bg4', borderRadius: '10px', p: '20px', height: '100%' }}>
                <Stack sx={{ width: '100%' }} justifyContent="space-between" direction="row">
                  <Typography variant="subtitle1" sx={{ color: 'color.text3' }}>
                    Total Company Shares
                  </Typography>
                  <Typography varient="h6">Founder</Typography>
                </Stack>
                <Divider sx={{ border: 'none', height: { xs: 0, sm: '15px' } }} />
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  This value was generated by the founder. It is their best guess at valuing the company's worth. The
                  founder has invested a certain amount and destimates that their idea is worth much more.
                </Typography>
              </Box>
            </OverviewPanel>
          </Box>
        </Stack>
        <Divider sx={{ border: 'none', height: '15px' }} />
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontSize: '18px' }}>
          Valuation Disbtibution
        </Typography>
        <Box sx={{ pt: '20px' }}>
          <Box sx={{ pt: '20px' }}>
            <Grid spacing={2} container>
              <Grid item xs={12} sm={6}>
                <DonutChart data={valuationData} colors={valuationColors} labels={valuationLabels} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TableContainer>{valuationDistributionTable}</TableContainer>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Stack direction="row" justifyContent="space-between" sx={{ mt: '20px' }}>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontSize: '18px' }}>
            Valuations History
          </Typography>
          <Button variant="contained" color="info" size="small" sx={{ width: 200 }} onClick={toggleDrawer}>
            Add New Valuation
          </Button>
        </Stack>
        <TableContainer>
          <ValuationHistoryTable />
        </TableContainer>
        <Box sx={{ bgcolor: 'color.transparent1', borderRadius: '10px', p: { xs: '15px', sm: '30px' }, mt: '20px' }}>
          <Box sx={{ bgcolor: 'primary.color' }}>
            <LineChart data={CHART_DATA} options={chartOptions} />
          </Box>
        </Box>
        <RightSideForm title="Add New Valuation" open={drawer} toggle={toggleDrawer}>
          <FormControl fullWidth>
            <CustomInputlabel label="From" required />
            <OutlinedInput size="small" placeholder="From" />
          </FormControl>
          <Divider sx={{ border: 'none', height: '15px' }} />
          <FormControl fullWidth>
            <CustomInputlabel label="Valuation ($)" required />
            <OutlinedInput size="small" placeholder="Valuation ($)" type="number" />
          </FormControl>
          <Divider sx={{ border: 'none', height: '15px' }} />
          <FormControl fullWidth>
            <CustomInputlabel label="Source" info reference={sourceRef} onInfo={() => setInfo(true)} />
            <TextField select size="small" value={10}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
          </FormControl>
          <Divider sx={{ border: 'none', height: '15px' }} />
          <Box sx={{ textAlign: 'right' }}>
            <Button variant="contained" sx={{ color: '#fff' }} size="small" color="primary">
              Save
            </Button>
          </Box>
        </RightSideForm>
      </Container>
      <Popover
        className="guide-popover"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        anchorEl={sourceRef.current}
        open={info}
      >
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
            Valuation Source
          </Typography>
          <IconButton onClick={() => setInfo(false)}>
            <X color={theme.palette.primary.main} size={16} />
          </IconButton>
        </Stack>
        <Typography variant="body1">Founder</Typography>
        <Typography variant="body2">
          This value was generated by the founder. It is their best guess at valuing the company's worth. The founder
          has invested a certain amount and estimate that their idea is worth much more.
        </Typography>
        <Divider sx={{ border: 'none', height: '15px' }} />
        <Typography variant="body1">Seed Level Investment</Typography>
        <Typography variant="body2">
          The current value has been supported by the latest round of Investment. Perhaps even multiple rounds. For
          Example, this could be a friends & family round, angel investors or small venture capital firms.
        </Typography>
        <Divider sx={{ border: 'none', height: '15px' }} />
        <Typography variant="body1">Series Level Investment</Typography>
        <Typography variant="body2">The current value has been supported by venture capital investors.</Typography>
        <Divider sx={{ border: 'none', height: '15px' }} />
        <Typography variant="body1">Professional 409A Valuation</Typography>
        <Typography variant="body2">This Valuation was performed by an independent auditor.</Typography>
        <Arrow placement="top" />
      </Popover>
    </Page>
  );
}
