import { useRef, useState } from 'react';
// material
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
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
  useTheme
} from '@mui/material';
import { ChevronLeft, PencilSquare, Trash } from 'react-bootstrap-icons';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import RightSideForm from 'components/_dashboard/capitalization/RightSideForm';
import CustomInputlabel from 'components/CustomInputLabel';
import GuidePopover from 'components/_dashboard/capitalization/GuidePopover';
import { ColorLegend, CustomTd, CustomTh, LegendWrapper } from 'components/_dashboard/CustomTableComponents';
import DonutChart from 'components/_dashboard/DonutChart';
import IOSSwitch from 'components/IOSSwitch';
import SortIconButton from 'components/_dashboard/SortIconButton';
// ----------------------------------------------------------------------

const data = [12, 0];

const colors = ['#22A0FB', '#FF5739'];

const labels = ['Unvested RSUs', 'Vested RSUs'];

export default function CapitalizationAFSares() {
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
      <FormControl fullWidth>
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
      <FormControl fullWidth>
        <CustomInputlabel label="Team member" required />
        <TextField select size="small" value={10}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </TextField>
      </FormControl>
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
                  <CustomTh>RSUs</CustomTh>
                </TableRow>
                <TableRow>
                  <CustomTd>04/12/2022</CustomTd>
                  <CustomTd sx={{ textAlign: 'center' }}>1</CustomTd>
                </TableRow>
                <TableRow>
                  <CustomTd>04/12/2022</CustomTd>
                  <CustomTd sx={{ textAlign: 'center' }}>1</CustomTd>
                </TableRow>
                <TableRow>
                  <CustomTd>04/12/2022</CustomTd>
                  <CustomTd sx={{ textAlign: 'center' }}>1</CustomTd>
                </TableRow>
                <TableRow>
                  <CustomTd>04/12/2022</CustomTd>
                  <CustomTd sx={{ textAlign: 'center' }}>1</CustomTd>
                </TableRow>
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

  const equityPoolTable = (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <CustomTh>
              Team Member
              <SortIconButton />
            </CustomTh>
            <CustomTh sx={{ textAlign: 'center' }}>
              Pool
              <SortIconButton />
            </CustomTh>
            <CustomTh sx={{ textAlign: 'center' }}>
              Start
              <SortIconButton />
            </CustomTh>
            <CustomTh sx={{ textAlign: 'center' }}>
              End
              <SortIconButton />
            </CustomTh>
            <CustomTh sx={{ textAlign: 'center' }}>
              State
              <SortIconButton />
            </CustomTh>
            <CustomTh sx={{ textAlign: 'center' }}>
              Shares
              <SortIconButton />
            </CustomTh>
            <CustomTh sx={{ textAlign: 'center' }}>
              Value
              <SortIconButton />
            </CustomTh>
            <CustomTh />
            <CustomTh />
          </TableRow>
          <TableRow>
            <CustomTd>
              <Stack direction="row" gap="5px" alignItems="center">
                <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }}>
                  AF
                </Avatar>
                Alex Fedoseev
              </Stack>
            </CustomTd>
            <CustomTd sx={{ textAlign: 'center' }}>Alex Fedoseev's vesting plan</CustomTd>
            <CustomTd sx={{ textAlign: 'center' }}>08/16/2021</CustomTd>
            <CustomTd sx={{ textAlign: 'center' }}>05/16/2027</CustomTd>
            <CustomTd sx={{ textAlign: 'center' }}>0/12</CustomTd>
            <CustomTd sx={{ textAlign: 'center' }}>0/12</CustomTd>
            <CustomTd sx={{ textAlign: 'center' }}>$0/$0.2</CustomTd>
            <CustomTd sx={{ textAlign: 'center' }}>
              <Button startIcon={<PencilSquare />} size="small">
                Change
              </Button>
            </CustomTd>
            <CustomTd sx={{ textAlign: 'center' }}>
              <Button startIcon={<Trash />} size="small" color="error">
                Delete
              </Button>
            </CustomTd>
          </TableRow>
          <TableRow>
            <CustomTd>
              <Stack direction="row" gap="5px" alignItems="center">
                <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }}>
                  AF
                </Avatar>
                Alex Fedoseev
              </Stack>
            </CustomTd>
            <CustomTd center={1}>Alex Fedoseev's vesting plan</CustomTd>
            <CustomTd center={1}>08/16/2021</CustomTd>
            <CustomTd center={1}>05/16/2027</CustomTd>
            <CustomTd center={1}>0/12</CustomTd>
            <CustomTd center={1}>0/12</CustomTd>
            <CustomTd center={1}>$0/$0.2</CustomTd>
            <CustomTd center={1}>
              <Button startIcon={<PencilSquare />} size="small">
                Change
              </Button>
            </CustomTd>
            <CustomTd sx={{ textAlign: 'center' }}>
              <Button startIcon={<Trash />} size="small" color="error">
                Delete
              </Button>
            </CustomTd>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontSize: '18px' }}>
          Friends and Guest's Capltaliztion
        </Typography>
        <Box sx={{ pt: '20px' }}>
          <Box sx={{ pt: '20px' }}>
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
                      </TableRow>
                      <TableRow>
                        <CustomTd>
                          <LegendWrapper>
                            <ColorLegend color={theme.palette.primary.main} />
                            Unvested RSUs
                          </LegendWrapper>
                        </CustomTd>
                        <CustomTd>12</CustomTd>
                      </TableRow>
                      <TableRow>
                        <CustomTd>
                          <LegendWrapper>
                            <ColorLegend color={theme.palette.error.main} />
                            Vested RSUs
                          </LegendWrapper>
                        </CustomTd>
                        <CustomTd>0</CustomTd>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Divider sx={{ border: 'none', height: '15px' }} />
        <Stack direction="row" justifyContent="space-between" sx={{ mt: '20px' }}>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontSize: '18px' }}>
            Equity Pool
          </Typography>
          <Button variant="contained" color="info" size="small" sx={{ width: 180 }} onClick={toggleDrawer}>
            Add New Vesting Plan
          </Button>
        </Stack>
        {equityPoolTable}
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
