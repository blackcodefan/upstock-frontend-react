import { Accordion, styled } from '@mui/material';

const CustomAccordion = styled(Accordion)`
  background-color: white;
  border-radius: 15px;
  &:before {
    background-color: transparent;
  }
`;

export default CustomAccordion;
