import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, IconButton, Popover, Stack, styled, Typography, useTheme } from '@mui/material';
import { X } from 'react-bootstrap-icons';

export const Arrow = styled('div')`
  position: absolute;
  width: 0;
  height: 0;
  ${(props) =>
    props.placement === 'top' &&
    'border-bottom: 12px solid white; border-left: 8px solid transparent; border-right: 8px solid transparent; top: -12px; left: 50%;'}
  ${(props) =>
    props.placement === 'left' &&
    'border-right: 12px solid white; border-top: 8px solid transparent; border-bottom: 8px solid transparent; left: -12px; top: 50%;'}
  ${(props) =>
    props.placement === 'right' &&
    'border-left: 12px solid white; border-top: 8px solid transparent; border-bottom: 8px solid transparent; right: -12px; top: 50%;'}
  ${(props) =>
    props.placement === 'bottom' &&
    'border-top: 12px solid white; border-left: 8px solid transparent; border-right: 8px solid transparent; bottom: -12px; left: 50%;'}
`;

const GuidePopover = ({
  sx,
  anchorOrigin,
  transformOrigin,
  anchorEl,
  open,
  title,
  description,
  onBack,
  onNext,
  onClose,
  onDone,
  arrowPlacement
}) => {
  const theme = useTheme();
  return (
    <Popover
      sx={sx}
      className="guide-popover"
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      anchorEl={anchorEl}
      open={open}
    >
      <Stack spacing={2} direction="row" justifyContent="space-between">
        <Typography variant="subtitle1" sx={{ color: 'text.primary', fontSize: '18px' }}>
          {title}
        </Typography>
        <IconButton onClick={onClose}>
          <X color={theme.palette.primary.main} size={20} />
        </IconButton>
      </Stack>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        {description}
      </Typography>
      <Stack direction="row" sx={{ justifyContent: 'space-between', mt: '20px' }}>
        {onBack && (
          <Button variant="contained" color="inherit" size="small" onClick={onBack}>
            Back
          </Button>
        )}
        {onNext && (
          <Button variant="contained" color="primary" size="small" onClick={onNext}>
            Next
          </Button>
        )}
        {onDone && (
          <Button variant="contained" color="success" size="small" onClick={onDone} sx={{ color: 'white' }}>
            Done
          </Button>
        )}
      </Stack>
      <Arrow placement={arrowPlacement} />
    </Popover>
  );
};

GuidePopover.propTypes = {
  sx: PropTypes.object,
  anchorOrigin: PropTypes.object.isRequired,
  transformOrigin: PropTypes.object.isRequired,
  anchorEl: PropTypes.instanceOf(Element),
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  onDone: PropTypes.func,
  arrowPlacement: PropTypes.string
};

export default GuidePopover;
