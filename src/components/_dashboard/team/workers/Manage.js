import { ChevronLeft, ChevronRight, Funnel, Plus } from 'react-bootstrap-icons';
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
import IOSSwitch from 'components/IOSSwitch';
import { getInitialsFromName } from 'utils/getAvatarName';
// dummy
import { DUMMY_DATA } from '../dummy';

// ----------------------------------------------------------------------

const Manage = () => {
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <CustomContainer title="30 active team members">
      <Stack direction={sm ? 'row' : 'column'} spacing={2} alignItems="center">
        <TextField select placeholder="Select an equity type" sx={{ width: 150 }} size="small" value="equity">
          <MenuItem value="equity">Equity Pool</MenuItem>
        </TextField>
        <TextField select placeholder="Status" sx={{ width: 150 }} size="small" value="active">
          <MenuItem value="active">Active</MenuItem>
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
              <CustomTh>Name</CustomTh>
              <CustomTh>Mail</CustomTh>
              <CustomTh>Equity Pool</CustomTh>
              <CustomTh>Get join/log-in link</CustomTh>
              <CustomTh>Reset Password</CustomTh>
              <CustomTh>Active</CustomTh>
              <CustomTh>Manage</CustomTh>
            </TableRow>
            {DUMMY_DATA.map((data, index) => (
              <TableRow key={index} hover>
                <CustomTd>
                  <Stack direction="row" gap="5px" alignItems="center">
                    <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }}>
                      {getInitialsFromName(data.name)}
                    </Avatar>
                    {data.name}
                  </Stack>
                </CustomTd>
                <CustomTd>{data.email}</CustomTd>
                <CustomTd>
                  <Button color="primary" size="small" sx={{ width: 'auto' }}>
                    <Plus color={palette.light.primary.main} size={24} />
                    Join Equity Pool
                  </Button>
                </CustomTd>
                <CustomTd>
                  <Button color="primary" size="small" sx={{ width: 'auto' }}>
                    Show
                  </Button>
                </CustomTd>
                <CustomTd>
                  <Button color="primary" size="small" sx={{ width: 'auto' }}>
                    <Plus color={palette.light.primary.main} size={24} />
                    Send
                  </Button>
                </CustomTd>
                <CustomTd>
                  <IOSSwitch />
                </CustomTd>
                <CustomTd>
                  <Button color="primary" size="small" sx={{ width: 'auto' }}>
                    Remove
                  </Button>
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
};

export default Manage;
