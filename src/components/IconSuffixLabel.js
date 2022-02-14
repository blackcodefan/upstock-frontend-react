import { styled } from '@mui/material';

const IconSuffixLabel = styled('div')`
  display: flex;
  align-items: center;
  gap: 13px;
  ${(props) => props.focused && `z-index: 1500`};
  position: relative;
  color: ${(props) => (props.focused ? 'white' : props.theme.palette.text.text1)};
`;

export default IconSuffixLabel;
