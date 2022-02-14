import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Trash } from 'react-bootstrap-icons';
// material
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  OutlinedInput,
  Stack,
  Pagination,
  PaginationItem,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TextField
} from '@mui/material';
import { DatePicker } from '@mui/lab';
// components
import CustomContainer from 'components/_dashboard/CustomContainer';
import CustomInputlabel from 'components/CustomInputLabel';
import { CustomTh, CustomTd } from 'components/_dashboard/CustomTableComponents';
import CustomPaginationItem from 'components/_dashboard/CustomPaginationItem';
import IOSSwitch from 'components/IOSSwitch';
import RightSideForm from 'components/_dashboard/capitalization/RightSideForm';
// dummy
import { DUMMY_HRATE_EDIT_DATA } from '../dummy';

// ----------------------------------------------------------------------

const EditRate = () => {
  const [rightSideForm, setRightSideForm] = useState(false);
  const [date, setDate] = useState(new Date());
  const [advancedFields, setAdvancedFields] = useState(false);

  const toggleForm = () => {
    setRightSideForm(!rightSideForm);
  };

  const toggleAdvancedFields = (event) => {
    setAdvancedFields(event.target.checked);
  };

  return (
    <>
      <CustomContainer
        title="Akansha Agnihotri’s hourly rates"
        subTitle={[
          'Hourly rates are used when yout team members log manual activity.',
          'The Max Cash amount is applied to hourly activity only. Salaries do not count toward this number.'
        ]}
        action="Add New Hourly Rate"
        actionIcon={
          <Box sx={{ display: 'flex', mr: '8px' }}>
            <Plus size={16} />
          </Box>
        }
        actionType="big"
        handleClick={toggleForm}
      >
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <CustomTh>Since</CustomTh>
                <CustomTh>Equity rate</CustomTh>
                <CustomTh>Daily</CustomTh>
                <CustomTh>Weekly</CustomTh>
                <CustomTh>Monthly</CustomTh>
                <CustomTh />
              </TableRow>
              {DUMMY_HRATE_EDIT_DATA.map((data, index) => (
                <TableRow key={index} hover>
                  <CustomTd>{data.since}</CustomTd>
                  <CustomTd>{data.equityRate}</CustomTd>
                  <CustomTd />
                  <CustomTd />
                  <CustomTd />
                  <CustomTd sx={{ textAlign: 'right' }}>
                    <IconButton color="primary">
                      <Trash size={16} />
                    </IconButton>
                  </CustomTd>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Pagination
          count={3}
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
      <RightSideForm title="Add New Hourly Rate" open={rightSideForm} toggle={toggleForm}>
        <Stack spacing={2}>
          <FormControl fullWidth sx={{ gap: '5px' }}>
            <CustomInputlabel label="Starting from" required />
            <DatePicker
              views={['day']}
              value={date}
              onChange={(val) => setDate(val)}
              renderInput={(params) => <TextField {...params} helperText={null} />}
            />
          </FormControl>
          <FormControl fullWidth sx={{ gap: '5px' }}>
            <CustomInputlabel label="Equity Rate" />
            <OutlinedInput placeholder="Equity Rate" />
          </FormControl>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <CustomInputlabel label="Advanced" />
            </Grid>
            <Grid item xs={6}>
              <IOSSwitch color="success" checked={advancedFields} onChange={toggleAdvancedFields} />
            </Grid>
          </Grid>
          {advancedFields && (
            <Stack spacing={2}>
              <Divider />
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <CustomInputlabel label="Time logged per day" />
                </Grid>
                <Grid item xs={6}>
                  <IOSSwitch color="success" />
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <CustomInputlabel label="Time logged per week" />
                </Grid>
                <Grid item xs={6}>
                  <IOSSwitch color="success" />
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <CustomInputlabel label="Time logged per month" />
                </Grid>
                <Grid item xs={6}>
                  <IOSSwitch color="success" />
                </Grid>
              </Grid>
            </Stack>
          )}
          <Stack direction="row" justifyContent="flex-end" spacing={1}>
            <Button variant="contained">Save</Button>
          </Stack>
        </Stack>
      </RightSideForm>
    </>
  );
};

export default EditRate;
