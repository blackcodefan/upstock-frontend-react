import React from 'react';
import { PropTypes } from 'prop-types';
import { Box, Stack } from '@mui/material';
import GuideFocusable from 'components/_dashboard/capitalization/GuideFocusable';
import { fCurrency } from 'utils/formatNumber';

const ProgressBar = ({ name, width, earned, focused }) => (
  <GuideFocusable focused={focused}>
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ width: 120, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{name}</Box>
      <Box sx={{ width, height: 15, bgcolor: 'primary.main', borderRadius: 5 }} />
      <span>{fCurrency(earned)}</span>
    </Stack>
  </GuideFocusable>
);

ProgressBar.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  earned: PropTypes.string.isRequired,
  focused: PropTypes.number
};

export default ProgressBar;
