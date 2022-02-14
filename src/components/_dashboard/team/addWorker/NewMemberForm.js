import { useState } from 'react';
import { Box, Button, FormControl, Grid, MenuItem, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CustomInputlabel from 'components/CustomInputLabel';
import IOSSwitch from 'components/IOSSwitch';
import OverviewPanel from 'components/_dashboard/OverviewPanel';
import { DatePicker } from '@mui/lab';

const NewMemberForm = ({ toggle, toggleLinkModal }) => {
  const [advancedForm, setAdvancedForm] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <OverviewPanel>
      <Typography variant="h6">Add a New Employee</Typography>
      <Box sx={{ maxWidth: 560, m: 'auto', bgcolor: 'primary.color', p: '20px', borderRadius: '10px' }}>
        <Stack spacing={2}>
          <FormControl fullWidth sx={{ gap: '5px' }}>
            <CustomInputlabel label="First Name" required />
            <OutlinedInput placeholder="Write here" />
          </FormControl>
          <FormControl fullWidth sx={{ gap: '5px' }}>
            <CustomInputlabel label="Last Name" required />
            <OutlinedInput placeholder="Write here" />
          </FormControl>
          <FormControl fullWidth sx={{ gap: '5px' }}>
            <CustomInputlabel label="Email Address" required />
            <OutlinedInput placeholder="Write here" />
          </FormControl>
          <FormControl fullWidth sx={{ gap: '5px' }}>
            <CustomInputlabel label="Equity Pool" required />
            <OutlinedInput placeholder="Write here" />
          </FormControl>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <CustomInputlabel label="Send Welcome Email" />
            </Grid>
            <Grid item xs={8}>
              <IOSSwitch defaultChecked color="success" />
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <CustomInputlabel label="Advanced" />
            </Grid>
            <Grid item xs={8}>
              <IOSSwitch defaultChecked color="success" />
            </Grid>
          </Grid>
          {!advancedForm && (
            <>
              <Stack direction="row" justifyContent="flex-end" spacing={1}>
                <Button sx={{ width: 'auto' }} onClick={() => setAdvancedForm(true)}>
                  Show advanced options
                </Button>
                <Button variant="contained" onClick={toggleLinkModal}>
                  Save
                </Button>
              </Stack>
            </>
          )}
        </Stack>
      </Box>
      {advancedForm && (
        <Box sx={{ maxWidth: 560, m: 'auto', mt: 3, bgcolor: 'primary.color', p: '20px', borderRadius: '10px' }}>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <CustomInputlabel label="Join Date" sx={{ gap: '5px' }} />
              <DatePicker
                views={['day']}
                value={date}
                onChange={(val) => setDate(val)}
                renderInput={(params) => <TextField {...params} helperText={null} />}
              />
            </FormControl>
            <Typography variant="body1">This date appears in legal docs and determin the first rate.</Typography>
            <FormControl fullWidth sx={{ gap: '5px' }}>
              <CustomInputlabel label="Cash Rate ($)" required />
              <OutlinedInput placeholder="Write here" />
            </FormControl>
            <Stack spacing={0.5}>
              <CustomInputlabel label="Duration" />
              <Grid container spacing={0.5}>
                <Grid item xs={4}>
                  <OutlinedInput
                    placeholder="0"
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
                    type="number"
                    endAdornment={
                      <Typography variant="body2" color="color.text3">
                        s
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
            </Stack>
            <FormControl fullWidth>
              <CustomInputlabel label="Will they record their activity" />
              <TextField select value={10}>
                <MenuItem value={10}>Select</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField>
            </FormControl>
            <Typography variant="body1">You can later define both a salary and hourly rate if you wish.</Typography>
            <br />
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <CustomInputlabel label="Monthly Cash Limit ($)" />
              </Grid>
              <Grid item xs={8}>
                <IOSSwitch defaultChecked color="success" />
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <CustomInputlabel label="Time Logged per Day" />
              </Grid>
              <Grid item xs={8}>
                <IOSSwitch defaultChecked color="success" />
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <CustomInputlabel label="Time Logged per Week" />
              </Grid>
              <Grid item xs={8}>
                <IOSSwitch defaultChecked color="success" />
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <CustomInputlabel label="Time Logged per Month" />
              </Grid>
              <Grid item xs={8}>
                <IOSSwitch defaultChecked color="success" />
              </Grid>
            </Grid>
            <Typography variant="body1">Generate the legal agreement. You can do this later.</Typography>
            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              <Button sx={{ width: 'auto' }} onClick={() => setAdvancedForm(false)}>
                Hide advanced options
              </Button>
              <Button variant="contained" onClick={toggle}>
                Saves
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}
    </OverviewPanel>
  );
};

NewMemberForm.propTypes = {
  toggle: PropTypes.func,
  toggleLinkModal: PropTypes.func
};

export default NewMemberForm;
