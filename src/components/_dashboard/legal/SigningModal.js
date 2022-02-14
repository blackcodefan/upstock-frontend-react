import { styled } from '@mui/material';

const SiginingModal = styled('div')`
  position: absolute;
  width: 700px;
  background-color: white;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  box-shadow: inset 0px -1px 0px ${(props) => props.theme.palette.color.bg3};
  border-radius: 15px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 700px;
  }
  @media (max-width: 540px) {
    width: 350px;
  }
`;

export default SiginingModal;
