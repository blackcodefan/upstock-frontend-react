import PropTypes from 'prop-types';
import { Avatar, Link, Table, TableBody, TableContainer, TableRow, Stack, useTheme } from '@mui/material';
import { CustomTh, CustomTd } from 'components/_dashboard/CustomTableComponents';
import IconSuffixLabel from 'components/IconSuffixLabel';
import { ChevronDown } from 'react-bootstrap-icons';
import { getInitialsFromName } from 'utils/getAvatarName';

const TotalActivityLogTable = ({ logs, onViewDetail }) => {
  const theme = useTheme();
  return (
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
          {logs.map((data) => (
            <TableRow key={data.name} hover>
              <CustomTd>
                <Stack direction="row" gap="5px" alignItems="center">
                  <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }}>
                    {getInitialsFromName(data.name)}
                  </Avatar>
                  {data.name}
                </Stack>
              </CustomTd>
              <CustomTd sx={{ color: 'success.main' }}>{data.status}</CustomTd>
              <CustomTd>{data.equity}</CustomTd>
              <CustomTd>{data.overall}</CustomTd>
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

TotalActivityLogTable.propTypes = {
  logs: PropTypes.array.isRequired,
  onViewDetail: PropTypes.func
};

export default TotalActivityLogTable;
