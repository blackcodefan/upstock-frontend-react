import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
  variant: PropTypes.string
};

export default function Logo({ sx, variant }) {
  let component = (
    <Box sx={{ width: 130, ...sx }}>
      <img src="/static/brand/dash-logo.svg" alt="center-logo" />
    </Box>
  );

  if (variant === 'favicon') {
    component = (
      <Box sx={{ width: 64, height: 64, ...sx }}>
        <img src="/static/icons/logo/favicon.png" alt="favicon" />
      </Box>
    );
  }

  return component;
}
