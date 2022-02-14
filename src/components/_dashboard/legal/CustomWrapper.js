import PropTypes from 'prop-types';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { InfoCircle } from 'react-bootstrap-icons';
import IconSuffixLabel from 'components/IconSuffixLabel';

const CustomWrapper = ({ title, onDetail, children }) => (
  <Box sx={{ bgcolor: '#F7F9FB', borderRadius: '20px', p: { sm: '32px 36px', xs: '16px 18px' } }}>
    <IconSuffixLabel style={{ justifyContent: 'center' }}>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        {title}
      </Typography>
      <IconButton>
        <InfoCircle size={16} />
      </IconButton>
    </IconSuffixLabel>
    <br />
    {children}
    <br />
    <Stack direction="row" justifyContent="center">
      <Button onClick={onDetail} variant="link" sx={{ width: 'fit-content', fontSize: 10 }} size="small">
        Open agreement to view more details
      </Button>
    </Stack>
  </Box>
);

CustomWrapper.propTypes = {
  title: PropTypes.string,
  onDetail: PropTypes.func,
  children: PropTypes.node
};

export default CustomWrapper;
