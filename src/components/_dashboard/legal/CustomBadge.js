import { Badge, styled } from '@mui/material';

const CustomBadge = styled(Badge)`
  & .MuiBadge-badge {
    top: 50%;
    right: -10px;
    transform: scale(1) translate(100%, -50%);
    color: white;
    @media (max-width: 768px) {
      position: relative;
      top: auto;
      left: auto;
      transform: none;
    }

    ${(props) => props.color === 'default' && `background-color: ${props.theme.palette.color.text3};`}
  }
`;

export default CustomBadge;
