// material
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
import Page from '../components/Page';
import {
  ComponentHero,
  ComponentFoundation,
  ComponentMaterialUI
} from '../components/_external-pages/components-overview';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function ComponentsOverview() {
  return (
    <RootStyle title="Components Overview | Upstock">
      <ComponentHero />
      <Container maxWidth="lg">
        <ComponentFoundation />
        <ComponentMaterialUI />
      </Container>
    </RootStyle>
  );
}
