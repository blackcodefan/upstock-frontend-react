import { useState } from 'react';
import PropTypes from 'prop-types';
// material
import { Button, Stack, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// components
import UnitCard from 'components/authentication/register/Unit';

const OPTIONS = [
  {
    caption: 'RSU',
    label: 'Restricted Stock Unit',
    icon: '/static/auth/rsu.svg',
    value: 'RSU'
  },
  {
    caption: 'RTU',
    label: 'Restricted Token Unit',
    icon: '/static/auth/rtu.svg',
    value: 'RTU'
  }
];

// ----------------------------------------------------------------------
Step3.propTypes = {
  data: PropTypes.string.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
};

export default function Step3({ data, handleBack, handleNext }) {
  const [value, setValue] = useState(data);

  return (
    <Stack spacing={5} sx={{ maxWidth: '620px' }}>
      <Typography variant="h5" align="center">
        RSU or RTU
      </Typography>
      <Typography variant="body2" align="center">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout.
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ justifyContent: 'space-between' }}>
        {OPTIONS.map((card, index) => (
          <UnitCard key={index} card={card} handleClick={() => setValue(card.value)} selected={card.value === value} />
        ))}
      </Stack>
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <Button size="medium" startIcon={<ArrowBackIosNewIcon fontSize="small" />} onClick={handleBack}>
          Back
        </Button>
        <Button
          disabled={!value}
          size="medium"
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIosIcon fontSize="small" />}
          onClick={() => handleNext(value)}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
}
