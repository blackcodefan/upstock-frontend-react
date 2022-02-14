import { useState } from 'react';
// material
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  Link,
  MenuItem,
  OutlinedInput,
  Pagination,
  PaginationItem,
  Stack,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { ChevronDown, ChevronLeft, ChevronRight, Funnel, PieChartFill } from 'react-bootstrap-icons';
import { DatePicker } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import ColumnChart from 'components/_dashboard/ColumnChart';
import CustomInputlabel from 'components/CustomInputLabel';
import CustomContainer from 'components/_dashboard/CustomContainer';
import CustomToggleBtn from 'components/_dashboard/CustomToggleBtn';
import CustomPaginationItem from 'components/_dashboard/CustomPaginationItem';
import RightSideForm from 'components/_dashboard/capitalization/RightSideForm';
import { CustomTh, CustomTd } from 'components/_dashboard/CustomTableComponents';
import { CustomTabList, CustomTab } from 'components/_dashboard/CustomTabComponents';
import IconSuffixLabel from 'components/IconSuffixLabel';
import LineChart from 'components/_dashboard/LineChart';
import { fCommaNumber, fCurrency } from 'utils/formatNumber';
import { getInitialsFromName } from 'utils/getAvatarName';
import {
  addEntryFormInfoData,
  OwnershipActivityLogData,
  OwnershipActivityTotalData,
  columnChartYearlyData,
  columnChartYearlyLabels,
  lineChartMonthlyData,
  linechartMonthlyLabel
} from './dummy-data';
// ----------------------------------------------------------------------

const toggleBtnOptions = [
  { label: 'Log', value: 'log' },
  { label: 'Total', value: 'total' },
  { label: 'Adjust', value: 'adjust' }
];

export default function RsuDynamicActivity() {
  const { themeStretch } = useSettings();
  const theme = useTheme();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [section, setSection] = useState('log');
  const [drawer, setDrawer] = useState(false);
  const [personalData, setPersonalData] = useState(null);
  const [tab, setTab] = useState('detail');
  const [date, setDate] = useState(new Date());
  const [entryForm, setEntryForm] = useState(false);
  const [totaldrawer, setTotalDrawser] = useState(false);
  const [totalTab, setTotalTab] = useState('year');

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const onViewDetail = (data) => {
    setPersonalData(data);
    setDrawer(true);
  };

  const onViewTotalTableDetail = (data) => {
    setPersonalData(data);
    setTotalDrawser(true);
  };

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const toggleTotalDrawer = () => {
    setTotalDrawser(!totaldrawer);
  };

  const handleTotalTabChange = (event, newValue) => {
    setTotalTab(newValue);
  };

  const DetailTab = () => {
    const theme = useTheme();
    return (
      <Box sx={{ bgcolor: 'primary.color', mt: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
              Logged As
            </Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Typography variant="body2">{personalData?.name}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
              Log ID
            </Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Typography variant="body2">#{personalData?.logId}</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ border: 'none', height: '15px' }} />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
              In Equity Pool
            </Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Stack direction="row" spacing={0.5}>
              <PieChartFill size={16} color={theme.palette.primary.main} />
              <Typography variant="body2">{personalData?.equityPool}</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
              On Date
            </Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Typography variant="body2">{personalData?.date}</Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Typography variant="body2">12:00:00 am</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
              Created At
            </Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Typography variant="body2">{personalData?.createdAt}</Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Typography variant="body2">09:38:38 pm</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
              Time Logged
            </Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Typography variant="body2">
              {personalData?.timeLogged?.h}:{personalData?.timeLogged?.m}:{personalData?.timeLogged?.s}
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
              Description
            </Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Typography variant="body2">{personalData?.description}</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
              Cash Rate
            </Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Typography variant="body2">{fCurrency(personalData.cashRate)}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
              Cash
            </Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Typography variant="body2">{fCurrency(personalData?.cash)}</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ height: 5, border: 'none' }} />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
              Max Cash
            </Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Typography variant="body2">{fCurrency(personalData?.maxCash)}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
              Max Hours
            </Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Typography variant="body2">
              {personalData?.maxhHors?.h}:{personalData?.maxhHors?.m}:{personalData?.maxhHors?.s}
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
              Equity Multiplier
            </Typography>
            <Divider sx={{ border: 'none', height: '5px' }} />
            <Typography variant="body2">{personalData?.multiplier}x</Typography>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const editTab = (
    <Box sx={{ bgcolor: 'primary.color', mt: '20px' }}>
      <FormControl fullWidth>
        <CustomInputlabel label="Date" required />
        <DatePicker
          views={['day']}
          value={date}
          onChange={(val) => setDate(val)}
          renderInput={(params) => <TextField {...params} size="small" helperText={null} />}
        />
      </FormControl>
      <Divider sx={{ border: 'none', height: '30px' }} />
      <CustomInputlabel label="Duration" required />
      <Divider sx={{ border: 'none', height: '12px' }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <OutlinedInput
            placeholder="0"
            size="small"
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
            size="small"
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
            size="small"
            type="number"
            endAdornment={
              <Typography variant="body2" color="color.text3">
                s
              </Typography>
            }
          />
        </Grid>
      </Grid>
      <Divider sx={{ border: 'none', height: '30px' }} />
      <FormControl fullWidth>
        <CustomInputlabel label="Description" required />
        <OutlinedInput multiline rows={3} placeholder="Description" />
      </FormControl>
      <Divider sx={{ border: 'none', height: '30px' }} />
      <Box sx={{ textAlign: 'right' }}>
        <Button variant="contained" sx={{ width: 100 }} size="small">
          Save
        </Button>
      </Box>
    </Box>
  );

  const historyTab = (
    <Box sx={{ bgcolor: 'primary.color', mt: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Who
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{personalData?.name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Action
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2" color="success.main">
            Created
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ border: 'none', height: '15px' }} />
      <Typography variant="subtitle1">Details</Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Created At
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{personalData?.createdAt}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            On Date
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{personalData?.date}</Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">00:00 pm</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Duration
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">
            {personalData?.timeLogged?.h}:{personalData?.timeLogged?.m}:+1
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Cach
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{fCurrency(personalData?.cash)}</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Equity
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{fCommaNumber(personalData?.equity)} pts</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Description
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{personalData?.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  );

  const logSection = (
    <CustomContainer title="Active Log">
      <Stack direction={sm ? 'row' : 'column'} gap={1} alignItems="center">
        <TextField select size="small" value="label" sx={{ width: sm ? 150 : '100%' }}>
          <MenuItem value="label">Label</MenuItem>
          <MenuItem value="twenty">Twenty</MenuItem>
          <MenuItem value="thirty">Thirty</MenuItem>
        </TextField>
        <OutlinedInput placeholder="From" size="small" sx={{ width: sm ? 150 : '100%' }} />
        <OutlinedInput placeholder="To" size="small" sx={{ width: sm ? 150 : '100%' }} />
        <Button variant="contained" startIcon={<Funnel size={20} />} sx={{ width: sm ? 150 : '100%', height: 37 }}>
          Filter
        </Button>
      </Stack>
      <br />
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <CustomTh>Name</CustomTh>
              <CustomTh>Date</CustomTh>
              <CustomTh>Description</CustomTh>
              <CustomTh>Duration</CustomTh>
              <CustomTh>Cash</CustomTh>
              <CustomTh>Equity</CustomTh>
            </TableRow>
            {OwnershipActivityLogData.map((data) => (
              <TableRow key={data.name} hover onClick={() => onViewDetail(data)}>
                <CustomTd>
                  <Stack direction="row" gap="5px" alignItems="center">
                    <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }}>
                      {getInitialsFromName(data.name)}
                    </Avatar>
                    {data.name}
                  </Stack>
                </CustomTd>
                <CustomTd>{data.date}</CustomTd>
                <CustomTd>{data.description}</CustomTd>
                <CustomTd>{data.duration}</CustomTd>
                <CustomTd>{fCurrency(data.cash)}</CustomTd>
                <CustomTd>{fCommaNumber(data.equity)} pts</CustomTd>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
  );

  const totalSection = (
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
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <CustomTh>Name</CustomTh>
              <CustomTh>Status</CustomTh>
              <CustomTh>Equity</CustomTh>
              <CustomTh>Overall</CustomTh>
              <CustomTh />
              <CustomTh />
            </TableRow>
            {OwnershipActivityTotalData.map((data) => (
              <TableRow key={data.name} hover onClick={() => onViewTotalTableDetail(data)}>
                <CustomTd>
                  <Stack direction="row" gap="5px" alignItems="center">
                    <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }}>
                      {getInitialsFromName(data.name)}
                    </Avatar>
                    {data.name}
                  </Stack>
                </CustomTd>
                <CustomTd sx={{ color: 'success.main' }}>{data.status}</CustomTd>
                <CustomTd>{data.equity}</CustomTd>
                <CustomTd>{data.overall}</CustomTd>
                <CustomTd>
                  <IconSuffixLabel style={{ gap: 5 }}>
                    <Link underline="none" component="button">
                      Cumulated Activity
                    </Link>
                    <ChevronDown size={15} color={theme.palette.primary.main} />
                  </IconSuffixLabel>
                </CustomTd>
                <CustomTd>
                  <IconSuffixLabel style={{ gap: 5 }}>
                    <Link underline="none" component="button">
                      Details
                    </Link>
                    <ChevronDown size={15} color={theme.palette.primary.main} />
                  </IconSuffixLabel>
                </CustomTd>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
  );

  const addEntryForm = (
    <Box sx={{ padding: '20px', bgcolor: 'primary.color' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              select
              placeholder="Select an equity type"
              value="label"
              label={
                <>
                  Team Member <span style={{ color: 'red' }}>*</span>
                </>
              }
            >
              <MenuItem value="label">Label</MenuItem>
              <MenuItem value="twenty">Twenty</MenuItem>
              <MenuItem value="thirty">Thirty</MenuItem>
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <DatePicker
              views={['day']}
              value={date}
              label={
                <>
                  Date <span style={{ color: 'red' }}>*</span>
                </>
              }
              onChange={(val) => setDate(val)}
              renderInput={(params) => <TextField {...params} helperText={null} />}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Divider sx={{ height: 15, border: 'none' }} />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomInputlabel label="Duration" required />
          <Divider sx={{ border: 'none', height: 15 }} />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <OutlinedInput
                placeholder="0"
                size="small"
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
                size="small"
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
                size="small"
                type="number"
                endAdornment={
                  <Typography variant="body2" color="color.text3">
                    s
                  </Typography>
                }
              />
            </Grid>
          </Grid>
          <Divider sx={{ border: 'none', height: 20 }} />
          <TextField fullWidth select placeholder="Select an equity type" value="label">
            <MenuItem value="label">Label</MenuItem>
            <MenuItem value="twenty">Twenty</MenuItem>
            <MenuItem value="thirty">Thirty</MenuItem>
          </TextField>
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
            {fCurrency(addEntryFormInfoData.cash)}
          </Typography>
        </Typography>
        <Typography variant="body1">
          Equity:{' '}
          <Typography component="span" color="color.text3" variant="body2">
            {fCommaNumber(addEntryFormInfoData.equity)} pts
          </Typography>
        </Typography>
        <Typography variant="body1">
          Max Cash:{' '}
          <Typography component="span" color="color.text3" variant="body2">
            {fCurrency(addEntryFormInfoData.maxCash)}
          </Typography>
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setEntryForm(false)}>
          Save
        </Button>
      </Stack>
    </Box>
  );

  const adjustSection = (
    <>
      <CustomContainer>
        {entryForm ? (
          addEntryForm
        ) : (
          <Stack
            direction={sm ? 'row' : 'column'}
            justifyContent="space-between"
            alignItems={sm ? 'center' : 'flex-start'}
            spacing={2}
          >
            <Typography variant="h6">Add Manual Entry</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: sm ? 'fit-content' : '100%' }}
              onClick={() => setEntryForm(true)}
            >
              Add Manual Entry
            </Button>
          </Stack>
        )}
      </CustomContainer>
      <Divider sx={{ border: 'none', height: 15 }} />
      <CustomContainer>
        <Stack direction={sm ? 'row' : 'column'} gap={1} alignItems="center">
          <TextField select size="small" value="label" sx={{ width: sm ? 150 : '100%' }}>
            <MenuItem value="label">Label</MenuItem>
            <MenuItem value="twenty">Twenty</MenuItem>
            <MenuItem value="thirty">Thirty</MenuItem>
          </TextField>
          <OutlinedInput placeholder="From" size="small" sx={{ width: sm ? 150 : '100%' }} />
          <OutlinedInput placeholder="To" size="small" sx={{ width: sm ? 150 : '100%' }} />
          <Button variant="contained" startIcon={<Funnel size={20} />} sx={{ width: sm ? 150 : '100%', height: 37 }}>
            Filter
          </Button>
        </Stack>
        <br />
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <CustomTh>Name</CustomTh>
                <CustomTh>Status</CustomTh>
                <CustomTh>Equity</CustomTh>
                <CustomTh>Overall</CustomTh>
                <CustomTh />
                <CustomTh />
              </TableRow>
              {OwnershipActivityTotalData.map((data) => (
                <TableRow key={data.name} hover>
                  <CustomTd>
                    <Stack direction="row" gap="5px" alignItems="center">
                      <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }}>
                        {getInitialsFromName(data.name)}
                      </Avatar>
                      {data.name}
                    </Stack>
                  </CustomTd>
                  <CustomTd sx={{ color: 'success.main' }}>{data.status}</CustomTd>
                  <CustomTd>{data.equity}</CustomTd>
                  <CustomTd>{data.overall}</CustomTd>
                  <CustomTd>
                    <IconSuffixLabel style={{ gap: 5 }}>
                      <Link underline="none" component="button">
                        Cumulated Activity
                      </Link>
                      <ChevronDown size={15} color={theme.palette.primary.main} />
                    </IconSuffixLabel>
                  </CustomTd>
                  <CustomTd>
                    <IconSuffixLabel style={{ gap: 5 }}>
                      <Link underline="none" component="button">
                        Details
                      </Link>
                      <ChevronDown size={15} color={theme.palette.primary.main} />
                    </IconSuffixLabel>
                  </CustomTd>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
                components={{ first: ChevronLeft }}
              />
            );
          }}
        />
      </CustomContainer>
    </>
  );

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
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack
          direction={sm ? 'row' : 'column-reverse'}
          justifyContent="space-between"
          alignItems={sm ? 'center' : 'flex-start'}
          spacing={2}
        >
          <Typography variant="h6">
            {section === 'log' && "Team's Activity"}
            {section === 'total' && "Performance's Activity"}
            {section === 'adjust' && 'Adjust Activity in Performance'}
          </Typography>
          <CustomToggleBtn initialValue="log" options={toggleBtnOptions} onChange={setSection} />
        </Stack>
        <Divider sx={{ border: 'none', height: 15 }} />
        {section === 'log' && logSection}
        {section === 'total' && totalSection}
        {section === 'adjust' && adjustSection}
      </Container>
      <RightSideForm title={`${personalData?.name}'s Activity Log Details`} open={drawer} toggle={toggleDrawer}>
        <TabContext value={tab}>
          <CustomTabList onChange={handleChange} variant="scrollable">
            <CustomTab label="Details" value="detail" />
            <CustomTab label="History" value="history" />
            <CustomTab label="Edit" value="edit" />
          </CustomTabList>
          <TabPanel value="detail">
            <DetailTab />
          </TabPanel>
          <TabPanel value="history">{historyTab}</TabPanel>
          <TabPanel value="edit">{editTab}</TabPanel>
        </TabContext>
      </RightSideForm>
      <RightSideForm
        title={`${personalData?.name}'s Cumulated Activity`}
        open={totaldrawer}
        toggle={toggleTotalDrawer}
        width="60%"
      >
        <TabContext value={totalTab}>
          <CustomTabList onChange={handleTotalTabChange} variant="scrollable">
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
