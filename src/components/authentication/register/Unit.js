import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
// material
import { Box, Button, Typography, Stack } from '@mui/material';
import SvgIconStyle from 'components/SvgIconStyle';

// ----------------------------------------------------------------------

Unit.propTypes = {
  card: PropTypes.object,
  selected: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

export default function Unit({ card, selected, handleClick }) {
  const { caption, label, icon } = card;

  return (
    <Box
      sx={{
        maxWidth: '320px',
        p: '32px',
        background: '#F4F8FF',
        borderRadius: '10px',
        mb: { xs: '20px' },
        mx: { xs: 'auto', md: 0 }
      }}
    >
      <Stack
        spacing={3}
        sx={{
          p: '40px 32px',
          border: selected ? '1px solid #38CB89' : '1px solid rgba(138, 148, 166, 0.1)',
          background: '#FFFFFF',
          boxShadow: '0px 10px 64px rgba(176, 183, 195, 0.26)',
          borderRadius: '10px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <SvgIconStyle src={icon} sx={{ width: '40px', height: '40px' }} color="primary" />
        </Box>
        <Stack direction="column" sx={{ textAlign: 'center' }}>
          <Typography variant="h6">{caption}</Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.disabled', fontSize: '14px', mb: '12px' }}>
            {label}
          </Typography>
        </Stack>
        <Button
          fullWidth
          variant="contained"
          onClick={handleClick}
          sx={{
            color: '#fff',
            gap: '10px'
          }}
          color={selected ? 'success' : 'primary'}
        >
          {selected && <Icon icon={checkmarkFill} width={20} height={20} color="#fff" />}
          Select
        </Button>
      </Stack>
    </Box>
  );
}
