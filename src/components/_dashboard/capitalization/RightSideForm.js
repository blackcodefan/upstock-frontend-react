import PropTypes from 'prop-types';
// mui
import { Box, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material';
import { X } from 'react-bootstrap-icons';

const RightSideForm = ({ open, toggle, title, width, children }) => (
  <Drawer
    anchor="right"
    open={open}
    onClose={toggle}
    sx={{
      width: '100%',
      '& .MuiDrawer-paper': {
        width: { xs: '100%', sm: width || 450 },
        borderTopLeftRadius: { xs: 10, sm: 30 },
        borderBottomLeftRadius: { xs: 10, sm: 30 },
        p: { xs: '15px', sm: '40px' },
        bgcolor: 'color.transparent1'
      }
    }}
  >
    <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
      <Typography sx={{ color: 'text.primary' }} variant="h6">
        {title}
      </Typography>
      <IconButton onClick={toggle}>
        <X size={20} />
      </IconButton>
    </Stack>
    <Divider sx={{ border: 'none', height: '15px' }} />
    <Box sx={{ bgcolor: 'primary.color', p: { xs: '20px', sm: '40px' }, borderRadius: '10px' }}>{children}</Box>
  </Drawer>
);

RightSideForm.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default RightSideForm;
