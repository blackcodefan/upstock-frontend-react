import {
  Avatar,
  Button,
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
  useMediaQuery
} from '@mui/material';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight, Funnel } from 'react-bootstrap-icons';
import CustomContainer from 'components/_dashboard/CustomContainer';
import { CustomTd, CustomTh } from 'components/_dashboard/CustomTableComponents';
import CustomPaginationItem from 'components/_dashboard/CustomPaginationItem';
import { getInitialsFromName } from 'utils/getAvatarName';

const Log = ({ data }) => {
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <CustomContainer>
      <Stack direction={sm ? 'row' : 'column'} gap={1} alignItems="center">
        <TextField select size="small" value="label" sx={{ width: sm ? 150 : '100%' }}>
          <MenuItem value="label">Label</MenuItem>
          <MenuItem value="twenty">Twenty</MenuItem>
          <MenuItem value="thirty">Thirty</MenuItem>
        </TextField>
        <TextField select size="small" value="label" sx={{ width: sm ? 150 : '100%' }}>
          <MenuItem value="label">Contributor</MenuItem>
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
                <CustomTd>{row.date}</CustomTd>
                <CustomTd>{row.description}</CustomTd>
                <CustomTd>{row.duration}</CustomTd>
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
            />
          );
        }}
      />
    </CustomContainer>
  );
};

Log.propTypes = {
  data: PropTypes.array.isRequired
};

export default Log;
