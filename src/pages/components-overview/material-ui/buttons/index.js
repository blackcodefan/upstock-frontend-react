// material
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// routes
// components
import Page from '../../../../components/Page';
//
import ContainedButtons from './ContainedButtons';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

// ----------------------------------------------------------------------

export default function ButtonsComponent() {
  return (
    <RootStyle title="Components: Buttons | Upstock">
      <Container maxWidth="lg">
        <ContainedButtons />
      </Container>
    </RootStyle>
  );
}
