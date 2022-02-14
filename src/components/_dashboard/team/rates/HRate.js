import { useState } from 'react';
import { CheckCircleFill, ChevronLeft, ChevronRight, Funnel, PieChartFill } from 'react-bootstrap-icons';
// material
import {
  Avatar,
  Button,
  MenuItem,
  Pagination,
  PaginationItem,
  Stack,
  TextField,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  useMediaQuery
} from '@mui/material';
// theme
import palette from 'theme/palette';
// components
import CustomContainer from 'components/_dashboard/CustomContainer';
import { CustomTh, CustomTd } from 'components/_dashboard/CustomTableComponents';
import CustomPaginationItem from 'components/_dashboard/CustomPaginationItem';
import { getInitialsFromName } from 'utils/getAvatarName';
import EditRate from './EditRate';
// dummy
import { DUMMY_HRATE_DATA } from '../dummy';

// ----------------------------------------------------------------------

const HRate = () => {
  const [edit, setEdit] = useState(false);
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  if (edit) return <EditRate />;
  return (
    <CustomContainer
      title="Team’s Hourly Rates"
      subTitle={[
        'Hourly rates are used by your team members log manual activity.',
        'The Max Cash amount is applied to hourly activity only. Salaries do not count toward this number.'
      ]}
    >
      <Stack direction={sm ? 'row' : 'column'} spacing={2} alignItems="center">
        <TextField select placeholder="Status" sx={{ width: 150 }} size="small" value="active">
          <MenuItem value="active">Label</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </TextField>
        <Button variant="contained" color="primary" startIcon={<Funnel size={20} />} sx={{ height: 37 }}>
          Filter
        </Button>
      </Stack>
      <br />
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <CustomTh>Role</CustomTh>
              <CustomTh>Status</CustomTh>
              <CustomTh>Pool</CustomTh>
              <CustomTh>Equity</CustomTh>
              <CustomTh>/day</CustomTh>
              <CustomTh>/week</CustomTh>
              <CustomTh>/month</CustomTh>
              <CustomTh />
            </TableRow>
            {DUMMY_HRATE_DATA.map((data, index) => (
              <TableRow key={index} hover>
                <CustomTd>
                  <Stack direction="row" gap="5px" alignItems="center">
                    <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }}>
                      {getInitialsFromName(data.name)}
                    </Avatar>
                    {data.name}
                  </Stack>
                </CustomTd>
                <CustomTd>{data.status}</CustomTd>
                <CustomTd>{data.pool}</CustomTd>
                <CustomTd>{data.equity}</CustomTd>
                <CustomTd />
                <CustomTd />
                <CustomTd />
                <CustomTd>
                  <Stack direction="row" spacing="4px" sx={{ alignItems: 'center' }}>
                    <CheckCircleFill color={palette.light.success.main} size={16} />
                    <PieChartFill color={palette.light.success.main} size={16} />
                    <Button color="primary" size="small" sx={{ width: 'auto' }} onClick={() => setEdit(true)}>
                      Edit
                    </Button>
                  </Stack>
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
  );
};

export default HRate;
