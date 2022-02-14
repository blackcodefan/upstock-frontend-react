import PropTypes from 'prop-types';
import { Avatar, Link, Table, TableBody, TableContainer, TableRow, Stack, useTheme } from '@mui/material';
import { CheckCircle, ClockFill, ChevronDown } from 'react-bootstrap-icons';
import { CustomTh, CustomTd } from 'components/_dashboard/CustomTableComponents';
import IconSuffixLabel from 'components/IconSuffixLabel';
import { getInitialsFromName } from 'utils/getAvatarName';

const PersonalActivityLogTable = ({ logs, onViewDetail }) => {
  const theme = useTheme();
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <CustomTh>Name</CustomTh>
            <CustomTh>Date</CustomTh>
            <CustomTh>Description</CustomTh>
            <CustomTh>Duration</CustomTh>
            <CustomTh />
            <CustomTh />
          </TableRow>
          {logs.map((data, index) => (
            <TableRow key={index} hover>
              <CustomTd top="true">
                <Stack direction="row" gap="5px" alignItems="center">
                  <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }}>
                    {getInitialsFromName(data.name)}
                  </Avatar>
                  {data.name}
                </Stack>
              </CustomTd>
              <CustomTd top="true">{data.date}</CustomTd>
              <CustomTd top="true" sx={{ maxWidth: 300, minWidth: 50 }}>
                {typeof data.description === 'object'
                  ? data.description.map((desc, index) => <p key={index}>{desc}</p>)
                  : data.description}
              </CustomTd>
              <CustomTd top="true">{data.duration}</CustomTd>
              <CustomTd top="true" sx={{ width: 70 }}>
                <CheckCircle size={15} color={theme.palette.primary.main} />{' '}
                <ClockFill size={15} color={theme.palette.primary.main} />
              </CustomTd>
              <CustomTd top="true">
                <IconSuffixLabel style={{ gap: 5 }}>
                  <Link underline="none" component="button" onClick={() => onViewDetail(data)}>
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
  );
};

PersonalActivityLogTable.propTypes = {
  logs: PropTypes.array.isRequired,
  onViewDetail: PropTypes.func
};

export default PersonalActivityLogTable;
