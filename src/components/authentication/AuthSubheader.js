import PropTypes from 'prop-types';
// material
import { Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------

AuthSubheader.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default function AuthSubheader(props) {
  return (
    <Stack direction="column" spacing={1} sx={{ mb: 5, alignItems: 'center', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ color: 'text.secondary' }}>
        {props.title}
      </Typography>
      {props.desc && (
        <Typography variant="subtitle1" sx={{ color: 'text.info' }}>
          {props.desc}
        </Typography>
      )}
    </Stack>
  );
}
