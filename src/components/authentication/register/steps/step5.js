import PropTypes from 'prop-types';
// material
import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// ----------------------------------------------------------------------
Step5.propTypes = {
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
};

export default function Step5({ handleBack, handleNext }) {
  return (
    <Stack spacing={5} sx={{ maxWidth: '620px' }}>
      <Typography variant="h5" align="center">
        Worker Documents
      </Typography>
      <Typography variant="body2" align="center">
        Enable SPA, for your employees contractors and advisors. This document includes NDA, non-compete and other
        useful clauses.
      </Typography>
      <Stack direction={{ xs: 'column' }} sx={{ justifyContent: 'center', alignItems: 'center' }} spacing={3}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pt: '32px' }}>
          <img src="/static/auth/document.png" alt="doc" />
        </Box>
        <Button size="medium" variant="contained" color="primary" onClick={() => handleNext(true)}>
          Enable
        </Button>
        <Button size="medium" onClick={() => handleNext(false)}>
          Not Now
        </Button>
      </Stack>
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <Button size="medium" startIcon={<ArrowBackIosNewIcon fontSize="small" />} onClick={handleBack}>
          Back
        </Button>
      </Stack>
    </Stack>
  );
}
