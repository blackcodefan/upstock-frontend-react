import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
// material
import { Box, Button, Typography, Stack } from '@mui/material';

// ----------------------------------------------------------------------

PlanCard.propTypes = {
  card: PropTypes.object,
  selected: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

export default function PlanCard({ card, selected, handleClick }) {
  const { subscription, subtext, price, caption, lists, note } = card;

  return (
    <Box
      sx={{
        width: '100%',
        border: selected ? '1px solid #38CB89' : '1px solid rgba(138, 148, 166, 0.1)',
        borderRadius: '10px',
        p: '36px 32px 100px',
        position: 'relative'
      }}
    >
      <Typography variant="h6">{subscription}</Typography>
      <Typography variant="subtitle1" sx={{ color: 'text.disabled', fontSize: '14px', mb: '12px' }}>
        {subtext}
      </Typography>
      <Typography variant="h3">{`$${price}`}</Typography>
      <Typography
        variant="body2"
        sx={{
          color: '#B0B7C3',
          textTransform: 'capitalize',
          mb: '12px'
        }}
      >
        {caption}
      </Typography>
      <Stack component="ul" spacing={2} sx={{ my: 1 }}>
        {lists.map((item) => (
          <Stack
            key={item.text}
            component="li"
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ typography: 'body2', color: item.isAvailable ? 'text.primary' : 'text.disabled' }}
          >
            <Icon icon={checkmarkFill} width={20} height={20} color="#38CB89" />
            <Typography variant="body2" sx={{ color: '#4E5D78' }}>
              {item.text}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Typography variant="subtitle1" sx={{ color: '#FF5630', fontSize: '14px' }}>
        {note}
      </Typography>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          position: 'absolute',
          width: 'calc(100% - 64px)',
          bottom: '40px',
          display: 'flex',
          gap: '8px',
          color: 'white'
        }}
        color={selected ? 'success' : 'primary'}
      >
        {selected && <Icon icon={checkmarkFill} width={20} height={20} color="#fff" />}
        {selected ? 'Selected' : 'Select This Plan'}
      </Button>
    </Box>
  );
}
