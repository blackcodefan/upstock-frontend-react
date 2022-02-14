import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  MenuItem,
  OutlinedInput,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TextField,
  useMediaQuery
} from '@mui/material';
import { Funnel } from 'react-bootstrap-icons';
import CustomContainer from 'components/_dashboard/CustomContainer';
import { CustomTd, CustomTh } from 'components/_dashboard/CustomTableComponents';
import { getInitialsFromName } from 'utils/getAvatarName';

const TotalLogs = ({ data }) => {
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <CustomContainer>
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
    </CustomContainer>
  );
};

TotalLogs.propTypes = {
  data: PropTypes.array.isRequired
};

export default TotalLogs;
