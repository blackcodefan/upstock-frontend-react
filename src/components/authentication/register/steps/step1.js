import { useState } from 'react';
import PropTypes from 'prop-types';
// material
import { Button, Stack, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// components
import PlanCard from 'components/authentication/register/Plan';

const PLANS = [
  {
    subscription: 'Demo',
    subtext: 'Try it out on your own or with your team!',
    price: 2,
    caption: '/ per month',
    lists: [
      { text: 'All access to Upstock', isAvailable: true },
      { text: 'Add users', isAvailable: true },
      { text: 'Simulate Equity Scenarios', isAvailable: true },
      { text: 'Track Equity & Cash Owed', isAvailable: true },
      { text: 'All Tools & Analytics', isAvailable: true },
      { text: 'Pre & Post Inc. Solutions', isAvailable: true }
    ],
    note: 'Demo is not legally binding',
    value: 'demo'
  },
  {
    subscription: 'Full Access',
    subtext: 'Everything in the demo plus...',
    price: 10,
    caption: '/ per active worker a month',
    lists: [
      { text: '5 hours of support', isAvailable: true },
      { text: 'Legally Binding Agreements', isAvailable: true },
      { text: 'Digitally Sign Documents', isAvailable: true },
      { text: 'Customized Document Terms', isAvailable: true },
      { text: 'Real-Time Equity Management', isAvailable: true }
    ],
    note: null,
    value: 'full_access'
  }
];

// ----------------------------------------------------------------------
Step1.propTypes = {
  data: PropTypes.string.isRequired,
  handleNext: PropTypes.func.isRequired
};

export default function Step1({ data, handleNext }) {
  const [value, setValue] = useState(data);

  return (
    <Stack spacing={5}>
      <Typography variant="h5" align="center">
        Choose a Plan
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ justifyContent: 'center' }}>
        {PLANS.map((card, index) => (
          <PlanCard key={index} card={card} handleClick={() => setValue(card.value)} selected={card.value === value} />
        ))}
      </Stack>
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <Button disabled size="medium" startIcon={<ArrowBackIosNewIcon fontSize="small" />}>
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
