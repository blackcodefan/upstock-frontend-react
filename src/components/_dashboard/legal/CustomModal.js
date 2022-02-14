import { Modal, styled } from '@mui/material';

const CustomModal = styled(Modal)`
  position: absolute;
  width: 100%;
  height: 100%;
  & .MuiBackdrop-root {
    background-color: rgba(50, 59, 75, 0.4);
  }
`;

export default CustomModal;
