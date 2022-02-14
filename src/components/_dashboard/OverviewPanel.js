import { styled } from '@mui/material';

const OverviewPanel = styled('div')`
  border-radius: 10px;
  padding: 32px;
  background-color: ${(props) => props.theme.palette.primary.lighter};
  margin-bottom: 10px;
  ${(props) => props.focused && `z-index: ${props.theme.zIndex.drawer + 2}`};
  position: relative;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export default OverviewPanel;
