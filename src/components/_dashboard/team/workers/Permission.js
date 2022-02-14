import { useState } from 'react';
// mui
import { ChevronLeft, ChevronRight, Funnel } from 'react-bootstrap-icons';
import {
  Avatar,
  Backdrop,
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
// components
import CustomContainer from 'components/_dashboard/CustomContainer';
import CustomPaginationItem from 'components/_dashboard/CustomPaginationItem';
import { CustomTh, CustomTd } from 'components/_dashboard/CustomTableComponents';
import IOSSwitch from 'components/IOSSwitch';
import { getInitialsFromName } from 'utils/getAvatarName';
import AlertDialog from './AlertDialog';
// dummy
import { DUMMY_DATA } from '../dummy';

// ----------------------------------------------------------------------

const Permission = () => {
  const [show, setShow] = useState(false);
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <>
      <CustomContainer title="Permissions" action="Rights Explanations" handleClick={() => setShow(true)}>
        <Stack direction={sm ? 'row' : 'column'} spacing={2} alignItems="center">
          <TextField select placeholder="Label" sx={{ width: 150 }} size="small" value="l1">
            <MenuItem value="l1">Label 1</MenuItem>
            <MenuItem value="l2">Label 2</MenuItem>
          </TextField>
          <TextField select placeholder="Access Type" sx={{ width: 150 }} size="small" value="t1">
            <MenuItem value="t1">Type 1</MenuItem>
            <MenuItem value="t2">Type 2</MenuItem>
            <MenuItem value="t3">Type 3</MenuItem>
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
                <CustomTh>Executive</CustomTh>
                <CustomTh>Manager</CustomTh>
                <CustomTh>Signer</CustomTh>
                <CustomTh>Accountant</CustomTh>
                <CustomTh>Minimal Task Worker</CustomTh>
                <CustomTh>Minimal Time Worker</CustomTh>
                <CustomTh>Active?</CustomTh>
                <CustomTh />
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
                  <CustomTd>No</CustomTd>
                  <CustomTd>No</CustomTd>
                  <CustomTd>No</CustomTd>
                  <CustomTd>No</CustomTd>
                  <CustomTd>No</CustomTd>
                  <CustomTd>No</CustomTd>
                  <CustomTd>
                    <IOSSwitch />
                  </CustomTd>
                  <CustomTd>
                    <TextField select placeholder="Actions" sx={{ width: 150 }} size="small" value="t1">
                      <MenuItem value="t1">Type 1</MenuItem>
                      <MenuItem value="t2">Type 2</MenuItem>
                      <MenuItem value="t3">Type 3</MenuItem>
                    </TextField>
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
      <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={show} />
      <AlertDialog open={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default Permission;
