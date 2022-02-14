import { useState } from 'react';
// material
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  IconButton,
  Grid,
  MenuItem,
  OutlinedInput,
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
import { FileEarmarkCheck, PencilSquare } from 'react-bootstrap-icons';
// hooks
import useSettings from 'hooks/useSettings';
import { fCurrency } from 'utils/formatNumber';
// components
import Page from 'components/Page';
import IconSuffixLabel from 'components/IconSuffixLabel';
import RightSideForm from 'components/_dashboard/capitalization/RightSideForm';
import CustomInputlabel from 'components/CustomInputLabel';
import { ColorLegend, CustomTd, CustomTh, LegendWrapper } from 'components/_dashboard/CustomTableComponents';
import SortIconButton from 'components/_dashboard/SortIconButton';
import DonutChart from 'components/_dashboard/DonutChart';
import OverviewPanel from 'components/_dashboard/OverviewPanel';
import {
  equityDescributionTabeData,
  valuationColors,
  valuationData,
  valuationLabels,
  valuationTableData
} from './dummy-data';
// ----------------------------------------------------------------------

export default function CapitalizationEquity() {
  const { themeStretch } = useSettings();
  const theme = useTheme();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [drawer, setDrawer] = useState(false);
  const [personalData, setPersonalData] = useState(null);
  const [detail, setDetail] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onViewDetail = (data) => {
    setPersonalData(data);
    setDetail(true);
  };

  const toggleDetail = () => {
    setDetail(!detail);
  };

  const equityPoolTable = (
    <Table>
      <TableBody>
        <TableRow>
          <CustomTh>
            Pool Name
            <SortIconButton />
          </CustomTh>
          <CustomTh center={1}>
            Pool Type
            <SortIconButton />
          </CustomTh>
          <CustomTh center={1}>
            Shares
            <SortIconButton />
          </CustomTh>
          <CustomTh center={1}>
            Share Type
            <SortIconButton />
          </CustomTh>
          <CustomTh center={1}>
            Value
            <SortIconButton />
          </CustomTh>
          <CustomTh center={1}>
            Members
            <SortIconButton />
          </CustomTh>
          <CustomTh center={1}>
            Legal Document
            <SortIconButton />
          </CustomTh>
          <CustomTh />
        </TableRow>
        {equityDescributionTabeData.map((row, index) => (
          <TableRow key={index} hover>
            <CustomTd>{row.name}</CustomTd>
            <CustomTd center={1}>{row.type}</CustomTd>
            <CustomTd center={1}>{row.shares}</CustomTd>
            <CustomTd center={1}>{row.shareType}</CustomTd>
            <CustomTd center={1}>{fCurrency(row.value)}</CustomTd>
            <CustomTd center={1}>{row.members}</CustomTd>
            <CustomTd center={1}>
              <FileEarmarkCheck size={16} color={theme.palette[row.color]?.main} />
            </CustomTd>
            <CustomTd center={1}>
              <Button startIcon={<PencilSquare />} size="small" onClick={() => onViewDetail(row)}>
                Change
              </Button>
            </CustomTd>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const EquityDistributionTable = () => (
    <Table>
      <TableBody>
        <TableRow>
          <CustomTh>Name</CustomTh>
          <CustomTh>Shares</CustomTh>
        </TableRow>
        {valuationTableData.map((row, index) => (
          <TableRow key={index} hover>
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

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h6">Friends and Guest’s Equity Pools</Typography>
        <Stack spacing={2} sx={{ mt: '36px' }} direction={sm ? 'row' : 'column'}>
          <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
            <OverviewPanel sx={{ height: '100%' }}>
              <Box sx={{ bgcolor: 'color.bg4', borderRadius: '10px', p: '20px', height: '100%' }}>
                <Stack sx={{ width: '100%' }} justifyContent="space-between" direction={{ xs: 'column', sm: 'row' }}>
                  <Typography sx={{ fontSize: 18, color: 'color.text3' }}>Other Company Shares</Typography>
                  <IconSuffixLabel>
                    <Typography varient="subtitle1">$7,035,960.00</Typography>
                    <IconButton>
                      <PencilSquare size={16} color={theme.palette.primary.main} />
                    </IconButton>
                  </IconSuffixLabel>
                </Stack>
                <Divider sx={{ border: 'none', height: { xs: 0, sm: '15px' } }} />
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  This is the total number of fully diluted shares in the company including founders and investor shares
                  that are not in the pools below.
                </Typography>
              </Box>
            </OverviewPanel>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
            <OverviewPanel sx={{ height: '100%' }}>
              <Box sx={{ bgcolor: 'color.bg4', borderRadius: '10px', p: '20px', height: '100%' }}>
                <Stack sx={{ width: '100%' }} justifyContent="space-between" direction="row">
                  <Typography sx={{ fontSize: 18, color: 'color.text3' }}>Total Company Shares</Typography>
                  <IconSuffixLabel>
                    <Typography varient="subtitle1">10,000</Typography>
                  </IconSuffixLabel>
                </Stack>
                <Divider sx={{ border: 'none', height: { xs: 0, sm: '15px' } }} />
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  This is the total of all shares of any class of equity including shares in the pools below.
                </Typography>
              </Box>
            </OverviewPanel>
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="space-between" sx={{ mt: '20px' }}>
          <Typography variant="h6">Equity Pool</Typography>
          <Button variant="contained" color="info" size="small" onClick={toggleDrawer} sx={{ width: 200 }}>
            Add New Equity Pools
          </Button>
        </Stack>
        <TableContainer>{equityPoolTable}</TableContainer>
        <Divider sx={{ border: 'none', height: '15px' }} />
        <Typography variant="h6">Equity Disbtribution</Typography>
        <Box sx={{ pt: '20px' }}>
          <Box sx={{ pt: '20px' }}>
            <Grid spacing={2} container>
              <Grid item xs={12} sm={6}>
                <DonutChart data={valuationData} colors={valuationColors} labels={valuationLabels} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TableContainer>
                  <EquityDistributionTable />
                </TableContainer>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <RightSideForm title="Add New Equity Pool" open={drawer} toggle={toggleDrawer}>
        <FormControl fullWidth>
          <CustomInputlabel label="Pool Name" required />
          <OutlinedInput placeholder="e.g. Performance" />
        </FormControl>
        <Divider sx={{ border: 'none', height: '30px' }} />
        <FormControl fullWidth>
          <CustomInputlabel label="Pool Type" required />
          <TextField select helperText="This value cannot be edited later." placeholder="Select an equity type">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </TextField>
        </FormControl>
        <Divider sx={{ border: 'none', height: '30px' }} />
        <FormControl fullWidth>
          <CustomInputlabel label="Description" required />
          <OutlinedInput multiline rows={3} placeholder="Describe this pool here" />
        </FormControl>
        <Divider sx={{ border: 'none', height: '30px' }} />
        <FormControl fullWidth>
          <CustomInputlabel label="Shares" required />
          <OutlinedInput placeholder="1" />
        </FormControl>
        <Divider sx={{ border: 'none', height: '30px' }} />
        <Stack direction="row" width="100%" justifyContent="space-between">
          <Button
            variant="contained"
            size="small"
            sx={{
              color: 'primary.main',
              '&:hover': { bgcolor: theme.palette.primary.color },
              fontSize: 12,
              bgcolor: theme.palette.primary.color
            }}
          >
            Create and Sign
          </Button>
          <Button variant="contained" sx={{ width: { xs: '120px', sm: '150px' } }} size="small">
            Create
          </Button>
        </Stack>
      </RightSideForm>
      <RightSideForm title={personalData?.name} open={detail} toggle={toggleDetail}>
        <FormControl fullWidth>
          <CustomInputlabel label="Pool Name" required />
          <OutlinedInput placeholder="e.g. Performance" value={personalData?.name} />
        </FormControl>
        <Divider sx={{ border: 'none', height: '30px' }} />
        <FormControl fullWidth>
          <CustomInputlabel label="Description" required />
          <OutlinedInput multiline rows={3} placeholder="Describe this pool here" value={personalData?.name} />
        </FormControl>
        <Divider sx={{ border: 'none', height: '30px' }} />
        <FormControl fullWidth>
          <CustomInputlabel label="Shares" required />
          <OutlinedInput placeholder="1" value={personalData?.shares} />
        </FormControl>
        <Divider sx={{ border: 'none', height: '30px' }} />
        <Stack direction="row" width="100%" justifyContent="flex-end">
          <Button variant="contained" sx={{ width: { xs: '120px', sm: '150px' } }} size="small">
            Save
          </Button>
        </Stack>
      </RightSideForm>
    </Page>
  );
}
