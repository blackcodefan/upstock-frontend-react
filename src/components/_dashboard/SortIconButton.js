import PropTypes from 'prop-types';
import { IconButton, useTheme } from '@mui/material';
import { ArrowDownUp } from 'react-bootstrap-icons';

const SortIconButton = ({ onClick }) => {
  const theme = useTheme();
  return (
    <IconButton onClick={onClick}>
      <ArrowDownUp size={10} color={theme.palette.primary.main} />
    </IconButton>
  );
};

SortIconButton.propTypes = {
  onClick: PropTypes.func
};

export default SortIconButton;
