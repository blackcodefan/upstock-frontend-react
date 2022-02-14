import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
// material
import { Box, IconButton, Popover, Stack, Typography, useMediaQuery } from '@mui/material';
// components
import SvgIconStyle from 'components/SvgIconStyle';
import Arrow from 'components/PopoverArrow';

// ----------------------------------------------------------------------

InfoBox.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string.isRequired,
  label: PropTypes.string,
  details: PropTypes.string.isRequired
};

export default function InfoBox({ sx, text, label, details }) {
  const md = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const infoRef = useRef();

  return (
    <>
      <Stack
        direction="row"
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#EBF2FF',
          border: '1px solid #379EFF',
          borderRadius: '10px',
          p: '12px',
          mb: '20px',
          ...sx
        }}
      >
        <Stack>
          <Typography>{text}</Typography>
          <Typography color="color.primary1">{label}</Typography>
        </Stack>
        <IconButton onClick={() => setOpen(true)} ref={infoRef}>
          <SvgIconStyle
            color="primary"
            src="/static/icons/dashboard/ic_info_circle.svg"
            sx={{ width: 24, height: 24, display: 'inline-block' }}
          />
        </IconButton>
      </Stack>
      <Popover
        open={open}
        anchorEl={infoRef.current}
        anchorOrigin={{ horizontal: md ? 'left' : 'center', vertical: md ? 'center' : 'bottom' }}
        transformOrigin={{ horizontal: md ? 'right' : 'center', vertical: md ? 'center' : 'top' }}
        onClose={() => setOpen(false)}
      >
        <Stack direction="row" sx={{ p: '20px 12px', maxWidth: '240px', alignItems: 'center' }} spacing={2}>
          <Box>
            <SvgIconStyle
              color="primary"
              src="/static/icons/dashboard/ic_info_circle.svg"
              sx={{ width: 24, height: 24, display: 'inline-block' }}
            />
          </Box>
          <Typography variant="body2" color="color.text3">
            {details}
          </Typography>
        </Stack>
        <Arrow placement={md ? 'right' : 'top'} />
      </Popover>
    </>
  );
}
