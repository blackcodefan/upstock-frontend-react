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
import { X } from 'react-bootstrap-icons';

// ----------------------------------------------------------------------

export default function AlertDialog({ open, handleClose }) {
  const theme = useTheme();
  return (
    <Dialog open={open}>
      <DialogTitle>
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6">Permissions / Rights Explanations</Typography>
          <IconButton onClick={handleClose}>
            <X size={20} color={theme.palette.primary.main} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack spacing="20px">
          <Box>
            <Typography variant="body1" sx={{ mb: '4px' }}>
              Executives
            </Typography>
            <Typography variant="body1" color="color.text3">
              Executives can manage the whole company like the owners can. The only exception is that they cannot revoke
              the owner’s rights. If the company is co-owned, the co-owners should be granted executive rights.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ mb: '4px' }}>
              Managers
            </Typography>
            <Typography variant="body1" color="color.text3">
              Managers can manage the whole company like the owners can. They can’t, however, sign any document in the
              name of the company nor manage the company’s Upstock subscription.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ mb: '4px' }}>
              Signers
            </Typography>
            <Typography variant="body1" color="color.text3">
              Signers can sign document on behalf of the company
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ mb: '4px' }}>
              Accountants
            </Typography>
            <Typography variant="body1" color="color.text3">
              Accountants can register payments to team members.
            </Typography>
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" color="info" size="small" onClick={handleClose} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
