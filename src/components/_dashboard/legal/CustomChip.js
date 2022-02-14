import { Chip, styled } from '@mui/material';

const CustomChip = styled(Chip)`
  ${(props) => props.color === 'warning' && `background-color: ${props.theme.palette.warning.light};`}
  ${(props) => props.color === 'success' && `background-color: ${props.theme.palette.success.light};`}
  ${(props) => props.color === 'default' && `background-color: ${props.theme.palette.color.bg2};`}
  border: none;
  padding: 0 8px;
  & .MuiChip-labelSmall {
    font-size: 10px;
    font-weight: 400;
  }
`;

export default CustomChip;
