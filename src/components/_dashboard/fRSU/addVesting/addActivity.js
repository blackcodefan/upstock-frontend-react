import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  Divider,
  FormControl,
  Grid,
  Link,
  MenuItem,
  OutlinedInput,
  Pagination,
  PaginationItem,
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
import { ChevronDown, ChevronLeft, ChevronRight, Funnel } from 'react-bootstrap-icons';
import { DatePicker } from '@mui/lab';
import CustomContainer from 'components/_dashboard/CustomContainer';
import CustomInputlabel from 'components/CustomInputLabel';
import { CustomTd, CustomTh } from 'components/_dashboard/CustomTableComponents';
import IconSuffixLabel from 'components/IconSuffixLabel';
import CustomPaginationItem from 'components/_dashboard/CustomPaginationItem';
import { getInitialsFromName } from 'utils/getAvatarName';

const AddActivity = ({ data, formInfoData }) => {
  const [date, setDate] = useState(new Date());
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const theme = useTheme();

  return (
    <>
      <CustomContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField select value="label" label="Team Member">
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
                onChange={(val) => setDate(val)}
                renderInput={(params) => <TextField {...params} helperText={null} />}
              />
            </FormControl>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CustomInputlabel label="Duration" required />
            <Divider sx={{ border: 'none', height: 15 }} />
            <Grid container spacing={2}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <OutlinedInput multiline rows={3} placeholder="Description" />
            </FormControl>
          </Grid>
        </Grid>
        <Divider sx={{ height: 15, border: 'none' }} />
        <Stack direction={sm ? 'row' : 'column'} justifyContent="end" spacing={5} alignItems="center">
          <Typography variant="body1">
            Cash:{' '}
            <Typography component="span" color="color.text3" variant="body2">
              ${formInfoData.cash}
            </Typography>
          </Typography>
          <Typography variant="body1">
            Equity:{' '}
            <Typography component="span" color="color.text3" variant="body2">
              {formInfoData.equity} pts
            </Typography>
          </Typography>
          <Typography variant="body1">
            Max Cash:{' '}
            <Typography component="span" color="color.text3" variant="body2">
              ${formInfoData.maxCash}
            </Typography>
          </Typography>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </Stack>
      </CustomContainer>
      <br />
      <CustomContainer title="Your Activity Log">
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
              {data.map((row, index) => (
                <TableRow key={index} hover>
                  <CustomTd>
                    <Stack direction="row" gap="5px" alignItems="center">
                      <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }}>
                        {getInitialsFromName(row.name)}
                      </Avatar>
                      {row.name}
                    </Stack>
                  </CustomTd>
                  <CustomTd>
                    <Typography color="success.main">{row.status}</Typography>
                  </CustomTd>
                  <CustomTd>{row.equity}</CustomTd>
                  <CustomTd>{row.overall}</CustomTd>
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
    </>
  );
};

AddActivity.propTypes = {
  data: PropTypes.array,
  formInfoData: PropTypes.object
};

export default AddActivity;
