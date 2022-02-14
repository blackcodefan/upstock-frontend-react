import { Box, styled } from '@mui/material';

const CustomCard = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/static/illustrations/card-background.png');
  padding: 20px;
  color: white;
`;

export default CustomCard;
