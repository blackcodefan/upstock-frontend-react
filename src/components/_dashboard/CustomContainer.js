import PropTypes from 'prop-types';
// mui
import { Box, Button, Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------
const CustomContainer = ({ title, subTitle, actionType = 'small', action, actionIcon, handleClick, children, sx }) => (
  <Stack
    sx={{
      borderRadius: '10px',
      padding: '32px',
      backgroundColor: 'primary.lighter',
      marginBottom: '10px',
      position: 'relative',
      ...sx
    }}
  >
    {title && (
      <Box sx={{ mb: subTitle ? 0 : '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6">{title}</Typography>
        {action &&
          (actionType === 'small' ? (
            <Button size="small" sx={{ width: 'auto' }} onClick={handleClick}>
              {action}
            </Button>
          ) : (
            <Button variant="contained" sx={{ width: 'auto' }} onClick={handleClick}>
              {actionIcon}
              {action}
            </Button>
          ))}
      </Box>
    )}
    {subTitle && (
      <Box sx={{ mb: '20px' }}>
        {subTitle.map((str, index) => (
          <Typography key={index} variant="body2" color="color.text3">
            {str}
          </Typography>
        ))}
      </Box>
    )}
    <Box
      sx={{
        p: '20px',
        bgcolor: 'primary.color',
        border: '1px solid rgba(138, 148, 166, 0.1)',
        borderRadius: '10px'
      }}
    >
      {children}
    </Box>
  </Stack>
);

CustomContainer.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.array,
  action: PropTypes.string,
  actionIcon: PropTypes.node,
  actionType: PropTypes.string,
  handleClick: PropTypes.func,
  sx: PropTypes.object,
  children: PropTypes.node
};

export default CustomContainer;
