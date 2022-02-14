import PropTypes from 'prop-types';
import { Box, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Check } from 'react-bootstrap-icons';
import CustomBadge from 'components/_dashboard/legal/CustomBadge';

const DocumentAccordionDetailItem = ({ badge, chip, date, description, lastChild, name, status }) => {
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const theme = useTheme();

  return (
    <>
      <Box sx={{ p: '20px' }}>
        <Stack direction={sm ? 'row' : 'column'} justifyContent="space-between" spacing={2} alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            {!status && <Box sx={{ width: 45, height: 45 }} />}
            {status === 'success' && (
              <Box
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: '50%',
                  bgcolor: 'success.light',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Check size={30} color={theme.palette.success.main} />
              </Box>
            )}
            {status === 'warning' && (
              <Box
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: '50%',
                  bgcolor: 'warning.light'
                }}
              />
            )}
            <Box>
              <Typography variant="body1">{name}</Typography>
              {badge ? (
                <CustomBadge color="success" variant="dot" size="small">
                  <Typography variant="body2" color="color.text3">
                    {description}
                  </Typography>
                </CustomBadge>
              ) : (
                <Typography variant="body2" color="color.text3">
                  {description}
                </Typography>
              )}
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2" color="color.text3" sx={{ fontSize: 10 }}>
              {date}
            </Typography>
            {chip}
          </Stack>
        </Stack>
      </Box>
      {lastChild ? (
        <Divider variant="fullWidth" sx={{ mt: '5px', mb: '5px', border: 'none' }} />
      ) : (
        <Divider variant="fullWidth" sx={{ mt: '5px', mb: '5px' }} />
      )}
    </>
  );
};

DocumentAccordionDetailItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  badge: PropTypes.bool,
  status: PropTypes.string,
  date: PropTypes.string.isRequired,
  chip: PropTypes.node.isRequired,
  lastChild: PropTypes.bool
};

export default DocumentAccordionDetailItem;
