import { Box, styled } from '@mui/material';

const TabContentContainer = styled(Box)`
  padding: 20px 100px;
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
  & li {
    margin-top: 5px;
  }
`;

export default TabContentContainer;
