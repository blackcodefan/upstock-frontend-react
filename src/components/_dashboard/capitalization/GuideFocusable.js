import { styled } from '@mui/material';

const GuideFocusable = styled('div')`
  ${(props) => props.focused && `z-index: 1500`};
  position: relative;
  color: ${(props) => (props.focused ? 'white' : props.theme.palette.text.text1)};
`;

export default GuideFocusable;
