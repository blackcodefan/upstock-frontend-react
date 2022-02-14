import { styled } from '@mui/material';

const DataWidget = styled('div')`
  border-radius: 10px;
  border: 1px solid rgba(138, 148, 166, 0.1);
  box-sizing: border-box;
  background-color: ${(props) => props.theme.palette.color.bg4};
  padding: 20px 32px;
  min-height: 95px;
  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

export default DataWidget;
