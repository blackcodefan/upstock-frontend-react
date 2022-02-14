import { Stack, IconButton, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { InfoCircle } from 'react-bootstrap-icons';

const CustomInputlabel = ({ label, required, info, onInfo, reference }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center">
      <Typography variant="body2" color="color.text2">
        {label}
        {required && <span style={{ color: 'red' }}>*</span>}
      </Typography>
      {info && (
        <IconButton onClick={onInfo} ref={reference}>
          <InfoCircle size={12} color={theme.palette.primary.main} />
        </IconButton>
      )}
    </Stack>
  );
};

CustomInputlabel.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  info: PropTypes.bool,
  onInfo: PropTypes.func,
  reference: PropTypes.object
};

export default CustomInputlabel;
