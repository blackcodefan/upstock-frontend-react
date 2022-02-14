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
    caption: 'Fixed Equity',
    label: 'Lorem ipsum dolor sit',
    icon: '/static/auth/fixed.svg',
    value: 'fixed'
  },
  {
    caption: 'Dynamic Equity',
    label: 'Lorem ipsum dolor sit',
    icon: '/static/auth/dynamic.svg',
    value: 'dynamic'
  }
];

const DYNAMIC_EQUITY_OPTIONS = [
  {
    caption: 'Time',
    label: 'Lorem ipsum dolor sit',
    icon: '/static/auth/clock.svg',
    value: 'time'
  },
  {
    caption: 'Task',
    label: 'Lorem ipsum dolor sit',
    icon: '/static/auth/file.svg',
    value: 'task'
  }
];

// ----------------------------------------------------------------------
Step4.propTypes = {
  data: PropTypes.string.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
};

export default function Step4({ data, handleBack, handleNext }) {
  const [value, setValue] = useState(data.type);
  const [dynamicEquityType, setDynamicEquityType] = useState(data.dynamicEquityType);
  const [subStep, setSubstep] = useState(1);

  const completeTypeSelection = () => {
    if (value === 'fixed') {
      handleNext({ type: value });
    } else {
      setSubstep(2);
    }
  };

  const completeDynamicEquityTypeSelection = () => {
    handleNext({ type: value, dynamicEquityType });
  };

  const onBack = () => {
    setSubstep(1);
    setDynamicEquityType('');
  };

  if (subStep !== 1)
    return (
      <Stack spacing={5} sx={{ maxWidth: '620px' }}>
        <Typography variant="h5" align="center">
          Type of Dynamic Equity
        </Typography>
        <Typography variant="body2" align="center">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout.
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ justifyContent: 'space-between' }}>
          {DYNAMIC_EQUITY_OPTIONS.map((card, index) => (
            <UnitCard
              key={index}
              card={card}
              handleClick={() => setDynamicEquityType(card.value)}
              selected={card.value === dynamicEquityType}
            />
          ))}
        </Stack>
        <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
          <Button size="medium" startIcon={<ArrowBackIosNewIcon fontSize="small" />} onClick={onBack}>
            Back
          </Button>
          <Button
            disabled={!dynamicEquityType}
            size="medium"
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIosIcon fontSize="small" />}
            onClick={completeDynamicEquityTypeSelection}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    );

  return (
    <Stack spacing={5} sx={{ maxWidth: '620px' }}>
      <Typography variant="h5" align="center">
        Equity
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
          onClick={completeTypeSelection}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
}
