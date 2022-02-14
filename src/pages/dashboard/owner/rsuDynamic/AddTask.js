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
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Plus, Trash } from 'react-bootstrap-icons';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import CustomContainer from 'components/_dashboard/CustomContainer';
import { CustomTd, CustomTh } from 'components/_dashboard/CustomTableComponents';
import RightSideForm from 'components/_dashboard/capitalization/RightSideForm';
import CustomInputlabel from 'components/CustomInputLabel';
import GuidePopover from 'components/_dashboard/capitalization/GuidePopover';
import { fCommaNumber, fCurrency } from 'utils/formatNumber';
import IOSSwitch from 'components/IOSSwitch';
import SortIconButton from 'components/_dashboard/SortIconButton';
import { addTaskTableData } from './dummy-data';
// ----------------------------------------------------------------------

export default function AddTask() {
  const { themeStretch } = useSettings();
  const theme = useTheme();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [drawer, setDrawer] = useState(false);
  const [infoPopup, setInfoPopup] = useState('');

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const memberRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const statusRef = useRef();

  return (
    <Page title="RSU Dynamic | Add Task | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack
          direction={sm ? 'row' : 'column'}
          justifyContent="space-between"
          alignItems={sm ? 'center' : 'flex-start'}
          spacing={2}
        >
          <Typography variant="h6">Performance's Tasks</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Plus size={20} />}
            sx={{ width: sm ? 'fit-content' : '100%' }}
            onClick={toggleDrawer}
          >
            Add new Task
          </Button>
        </Stack>
        <Divider sx={{ height: 25, border: 'none' }} />
        <CustomContainer>
          <Table>
            <TableBody>
              <TableRow>
                <CustomTh>
                  Title
                  <SortIconButton />
                </CustomTh>
                <CustomTh center={1}>
                  Duration
                  <SortIconButton />
                </CustomTh>
                <CustomTh center={1}>
                  Cash
                  <SortIconButton />
                </CustomTh>
                <CustomTh center={1}>
                  Equity
                  <SortIconButton />
                </CustomTh>
                <CustomTh center={1}>
                  Logged
                  <SortIconButton />
                </CustomTh>
                <CustomTh />
              </TableRow>
              {addTaskTableData.map((data, index) => (
                <TableRow key={index} hover>
                  <CustomTd>{data.title}</CustomTd>
                  <CustomTd center={1}>{data.duration}</CustomTd>
                  <CustomTd center={1}>{fCurrency(data.cash)}</CustomTd>
                  <CustomTd center={1}>{fCommaNumber(data.equity)} pts</CustomTd>
                  <CustomTd center={1}>{data.log}</CustomTd>
                  <CustomTd center={1}>
                    <IconButton>
                      <Trash size={16} color={theme.palette.primary.main} />
                    </IconButton>
                  </CustomTd>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CustomContainer>
      </Container>
      <RightSideForm title="Add New Task" open={drawer} toggle={toggleDrawer}>
        <FormControl fullWidth>
          <CustomInputlabel label="Equity Pool" />
          <TextField select size="small" value={10} sx={{ mt: theme.spacing(1) }}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </TextField>
        </FormControl>
        <Divider sx={{ border: 'none', height: 15 }} />
        <FormControl fullWidth>
          <CustomInputlabel label="Team Members" info onInfo={() => setInfoPopup('member')} reference={memberRef} />
          <OutlinedInput size="small" placeholder="Team Members" />
        </FormControl>
        <Divider sx={{ border: 'none', height: 15 }} />
        <FormControl fullWidth>
          <CustomInputlabel label="Title" required info onInfo={() => setInfoPopup('title')} reference={titleRef} />
          <OutlinedInput size="small" placeholder="Title" />
        </FormControl>
        <Divider sx={{ border: 'none', height: 15 }} />
        <FormControl fullWidth>
          <CustomInputlabel
            label="Description"
            info
            onInfo={() => setInfoPopup('description')}
            reference={descriptionRef}
          />
          <OutlinedInput size="small" placeholder="Description" multiline rows={5} />
        </FormControl>
        <Divider sx={{ border: 'none', height: 15 }} />
        <Stack direction="row" alignItems="center">
          <CustomInputlabel label="Inactive" info onInfo={() => setInfoPopup('status')} reference={statusRef} />
          <IOSSwitch defaultChecked color="success" />
        </Stack>
        <Divider sx={{ border: 'none', height: 15 }} />
        <CustomInputlabel label="Duration" required />
        <Divider sx={{ border: 'none', height: 10 }} />
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
        <Divider sx={{ border: 'none', height: 15 }} />
        <FormControl fullWidth>
          <CustomInputlabel label="Cash" />
          <OutlinedInput size="small" placeholder="0.00" sx={{ mt: theme.spacing(1) }} type="number" />
        </FormControl>
        <Divider sx={{ border: 'none', height: 15 }} />
        <FormControl fullWidth>
          <CustomInputlabel label="Equity" />
          <OutlinedInput size="small" placeholder="0.00" sx={{ mt: theme.spacing(1) }} type="number" />
        </FormControl>
        <Divider sx={{ border: 'none', height: 15 }} />
        <Box sx={{ textAlign: 'right' }}>
          <Button variant="contained">Save</Button>
        </Box>
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
        anchorEl={memberRef.current}
        open={infoPopup === 'member'}
        title="Team Members"
        description="Restrict this task to one or several team members. Leave empty to allow anybody to use this task."
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
        anchorEl={titleRef.current}
        open={infoPopup === 'title'}
        title="Title"
        description="Describe briefly the task."
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
        anchorEl={descriptionRef.current}
        open={infoPopup === 'description'}
        title="Description"
        description="Explain more in details the task here."
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
        anchorEl={statusRef.current}
        open={infoPopup === 'status'}
        title="Inactive"
        description="Check this and the task will not be visible to theam members."
        onClose={() => setInfoPopup('')}
        arrowPlacement="top"
      />
    </Page>
  );
}
