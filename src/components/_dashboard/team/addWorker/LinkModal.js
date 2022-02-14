// Rights Explanation Dialog
import PropTypes from 'prop-types';
// material
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { Link45deg, X } from 'react-bootstrap-icons';
// ----------------------------------------------------------------------

export default function LinkModal({ open, handleClose }) {
  const theme = useTheme();
  return (
    <Dialog open={open}>
      <DialogTitle>
        <Stack direction="row" sx={{ justifyContent: 'flex-end' }}>
          <IconButton onClick={handleClose}>
            <X color={theme.palette.primary.main} size={20} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack spacing="20px" alignItems="center">
          <img src="/static/illustrations/illustration_copy_link.svg" alt="Copy Link" style={{ width: 100 }} />
          <Typography variant="subtitle1">Join Link</Typography>
          <Typography variant="subtitle2" color="color.text3">
            Copy this link and give it to the Melis Platin
          </Typography>
          <Box
            sx={{
              p: '10px',
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: '10px',
              wordBreak: 'break-all',
              bgcolor: 'primary.light',
              color: 'primary.main'
            }}
          >
            https://staging.upstock.io/session/sign-up/contributorpasswordmelis%2B1%40upstock.iotoken=QGjUSoYbB6mXY2H7laGSEB7SvcG9X7pei06s0cFcVuQyzcPYyk2kKDFHnnjYY06Y
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-evenly' }}>
        <Button
          startIcon={<Link45deg color={theme.palette.primary.main} />}
          sx={{ width: 'auto', color: 'color.text1' }}
        >
          Copy to clipboard
        </Button>
        <Button variant="contained" onClick={handleClose} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

LinkModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
