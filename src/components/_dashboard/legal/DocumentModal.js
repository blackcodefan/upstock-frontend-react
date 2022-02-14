import { styled } from '@mui/material';

const DocumentModal = styled('div')`
  position: absolute;
  width: 998px;
  height: 709px;
  background-color: white;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  box-shadow: inset 0px -1px 0px ${(props) => props.theme.palette.color.bg3};
  border-radius: 15px;
  padding: 10px;
  & .pdf-wrapper {
    height: 550px;
    overflow-y: auto;
  }
  @media (max-width: 768px) {
    width: 600px;
    height: 90%;
    & .pdf-wrapper {
      height: calc(90% - 30px);
    }
  }
  @media (max-width: 540px) {
    width: 300px;
    & .pdf-wrapper {
      height: calc(90% - 100px);
    }
  }
`;

export default DocumentModal;
