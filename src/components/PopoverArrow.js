import { styled } from '@mui/material';

const Arrow = styled('div')`
  position: absolute;
  width: 12px;
  height: 12px;
  ${(props) =>
    props.placement === 'top' &&
    'border-bottom: 12px solid white; border-left: 8px solid transparent; border-right: 8px solid transparent; top: -12px; left: 50%;'}
  ${(props) =>
    props.placement === 'left' &&
    'border-right: 12px solid white; border-top: 8px solid transparent; border-bottom: 8px solid transparent; left: -12px; top: 50%;'}
  ${(props) =>
    props.placement === 'right' &&
    'border-left: 12px solid white; border-top: 8px solid transparent; border-bottom: 8px solid transparent; right: -12px; top: 50%;'}
  ${(props) =>
    props.placement === 'bottom' &&
    'border-top: 12px solid white; border-left: 8px solid transparent; border-right: 8px solid transparent; bottom: -12px; left: 50%;'}
`;

export default Arrow;
