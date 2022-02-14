import { useRef, useState } from 'react';
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
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { ChevronLeft, CheckCircle, FileEarmarkText, InfoCircle, Play, Stop, Trash } from 'react-bootstrap-icons';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import CustomChip from 'components/_dashboard/legal/CustomChip';
import CustomInputlabel from 'components/CustomInputLabel';
import OverviewPanel from 'components/_dashboard/OverviewPanel';
import IconSuffixLabel from 'components/IconSuffixLabel';
import DataWidget from 'components/_dashboard/DataWidget';
import { CustomTd, CustomTh } from 'components/_dashboard/CustomTableComponents';
import SortIconButton from 'components/_dashboard/SortIconButton';
import RightSideForm from 'components/_dashboard/capitalization/RightSideForm';
import GuidePopover from 'components/_dashboard/capitalization/GuidePopover';
import IOSSwitch from 'components/IOSSwitch';
import { fCommaNumber } from 'utils/formatNumber';
import { overviewData, vestingFormPreviewData, vestingTableData } from './dummy-data';
// ----------------------------------------------------------------------

export default function RsuFixedDetail() {
  const { themeStretch } = useSettings();
  const theme = useTheme();
  const [drawer, setDrawer] = useState(false);
  const [formState, setFormState] = useState('vesting');
  const [infoPopup, setInfoPopup] = useState('');
  const [vestingFormState, setVestingFormState] = useState('create');

  const startDateRef = useRef();
  const equityPoolRef = useRef();
  const periodRef = useRef();
  const durationRef = useRef();
  const cliffRef = useRef();
  const rsuRef = useRef();

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const newVestingForm = (
    <>
      <FormControl fullWidth sx={{ gap: 1 }}>
        <CustomInputlabel label="Select Existing Team member" required />
        <TextField select size="small" value={10}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </TextField>
      </FormControl>
      <Divider flexItem variant="middle" sx={{ m: '20px 0' }}>
        {' '}
        Or{' '}
      </Divider>
      <Box sx={{ textAlign: 'center' }}>
        <Button variant="contained" sx={{ width: 200 }} size="small" onClick={() => setFormState('member')}>
          Create New Team Member
        </Button>
      </Box>
      <Divider sx={{ m: '20px 0' }} />
      <Divider sx={{ border: 'none', height: '15px' }} />
      <FormControl fullWidth>
        <CustomInputlabel
          label="Start Date"
          required
          info
          onInfo={() => setInfoPopup('startDate')}
          reference={startDateRef}
        />
        <OutlinedInput size="small" placeholder="Start Date" />
      </FormControl>
      <Divider sx={{ border: 'none', height: '15px' }} />
      <FormControl fullWidth>
        <CustomInputlabel label="Equity Pool" info onInfo={() => setInfoPopup('equity')} reference={equityPoolRef} />
        <TextField select size="small" value={10}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </TextField>
      </FormControl>
      <Divider sx={{ border: 'none', height: '15px' }} />
      <FormControl fullWidth>
        <CustomInputlabel
          label="Periodicity"
          info
          required
          onInfo={() => setInfoPopup('period')}
          reference={periodRef}
        />
        <TextField select size="small" value={10}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </TextField>
      </FormControl>
      <Divider sx={{ border: 'none', height: '15px' }} />
      <FormControl fullWidth>
        <CustomInputlabel
          label="Duration"
          required
          info
          onInfo={() => setInfoPopup('duration')}
          reference={durationRef}
        />
        <OutlinedInput size="small" placeholder="Duration" />
      </FormControl>
      <Divider sx={{ border: 'none', height: '15px' }} />
      <FormControl fullWidth>
        <CustomInputlabel label="Cliff" required info onInfo={() => setInfoPopup('cliff')} reference={cliffRef} />
        <OutlinedInput size="small" placeholder="Cliff" />
      </FormControl>
      <Divider sx={{ border: 'none', height: '15px' }} />
      <FormControl fullWidth>
        <CustomInputlabel label="RSU Count" required info onInfo={() => setInfoPopup('rsu')} reference={rsuRef} />
        <OutlinedInput size="small" placeholder="RSU Count" />
      </FormControl>
      <Divider sx={{ border: 'none', height: '15px' }} />
      <CustomInputlabel label="Planning" />
      <Divider sx={{ border: 'none', height: '12px' }} />
      {vestingFormState === 'create' ? (
        <Box>
          <Button
            variant="contained"
            sx={{ color: 'primary.color' }}
            size="small"
            color="success"
            onClick={() => setVestingFormState('preview')}
          >
            Preview
          </Button>
        </Box>
      ) : (
        <>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <CustomTh>Date</CustomTh>
                  <CustomTh center={1}>RSUs</CustomTh>
                </TableRow>
                {vestingFormPreviewData.map((row, index) => (
                  <TableRow key={index} hover>
                    <CustomTd>{row.date}</CustomTd>
                    <CustomTd center={1}>{row.rsu}</CustomTd>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack direction="row" width="100%" justifyContent="space-between">
            <Button
              width="40%"
              variant="contained"
              sx={{
                color: 'primary.main',
                '&:hover': { bgcolor: theme.palette.primary.color },
                fontSize: 12,
                bgcolor: theme.palette.primary.color
              }}
              size="small"
              onClick={() => setVestingFormState('create')}
            >
              Create and Sign
            </Button>
            <Button
              variant="contained"
              sx={{ fontSize: 12 }}
              size="small"
              onClick={() => setVestingFormState('create')}
            >
              Create
            </Button>
          </Stack>
        </>
      )}
    </>
  );

  const newTeamMemberForm = (
    <>
      <Button
        color="primary"
        size="small"
        sx={{ width: 'auto' }}
        startIcon={<ChevronLeft />}
        onClick={() => setFormState('vesting')}
      >
        Back
      </Button>
      <Divider sx={{ border: 'none', height: '20px' }} />
      <FormControl fullWidth>
        <CustomInputlabel label="Email Address" required />
        <OutlinedInput placeholder="Email Address" type="email" />
      </FormControl>
      <Divider sx={{ border: 'none', height: '20px' }} />
      <FormControl fullWidth>
        <CustomInputlabel label="First Name" required />
        <OutlinedInput placeholder="First Name" type="text" />
      </FormControl>
      <Divider sx={{ border: 'none', height: '20px' }} />
      <FormControl fullWidth>
        <CustomInputlabel label="Last Name" required />
        <OutlinedInput placeholder="Last Name" type="text" />
      </FormControl>
      <Divider sx={{ border: 'none', height: '20px' }} />
      <FormControl fullWidth>
        <CustomInputlabel label="Send Welcome Message" />
        <Divider sx={{ border: 'none', height: 10 }} />
        <IOSSwitch defaultChecked />
      </FormControl>
      <Box sx={{ textAlign: 'right' }}>
        <Button variant="contained" sx={{ width: 200 }} size="small">
          Create New Team Member
        </Button>
      </Box>
    </>
  );

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
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">Vesting Plans</Typography>
            <Button variant="contained" sx={{ width: 'auto' }} size="small" onClick={toggleDrawer}>
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
                    value
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
      <RightSideForm title="Add new Vesting Plan" open={drawer} toggle={toggleDrawer}>
        {formState === 'vesting' ? newVestingForm : newTeamMemberForm}
      </RightSideForm>
      <GuidePopover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        anchorEl={startDateRef.current}
        open={infoPopup === 'startDate'}
        title="Start Date"
        description="This date appears in legal docs and datermine the first rate."
        onClose={() => setInfoPopup('')}
        arrowPlacement="top"
      />
      <GuidePopover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        anchorEl={equityPoolRef.current}
        open={infoPopup === 'equity'}
        title="Equity Pool"
        description="Leave empty to create a new pool for this plan. The pool is not editable ater on"
        onClose={() => setInfoPopup('')}
        arrowPlacement="top"
      />
      <GuidePopover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        anchorEl={periodRef.current}
        open={infoPopup === 'period'}
        title="Periodicity"
        description="Duratio and cliff are measured in this unit."
        onClose={() => setInfoPopup('')}
        arrowPlacement="top"
      />
      <GuidePopover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        anchorEl={durationRef.current}
        open={infoPopup === 'duration'}
        title="Duration"
        description="This number of periods to divide the equit over. Example: if monthly over 4 years, enter 48."
        onClose={() => setInfoPopup('')}
        arrowPlacement="top"
      />
      <GuidePopover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        anchorEl={cliffRef.current}
        open={infoPopup === 'cliff'}
        title="Cliff"
        description="The number of periods before a cliff. if the worker leaves the company before the cliff, they will forteit any equity earned. Example: if monthly over for years with a one year cliff, enter 12."
        onClose={() => setInfoPopup('')}
        arrowPlacement="top"
      />
      <GuidePopover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        anchorEl={rsuRef.current}
        open={infoPopup === 'rsu'}
        title="RSU Count"
        description="This is the total number of RSUs that is worker will earn over the vesting schedule."
        onClose={() => setInfoPopup('')}
        arrowPlacement="top"
      />
    </Page>
  );
}
