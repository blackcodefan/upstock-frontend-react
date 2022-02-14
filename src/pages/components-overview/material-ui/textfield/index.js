import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import Page from '../../../../components/Page';
import Outlined from './Outlined';

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function TextFieldComponent() {
  return (
    <RootStyle title="Components: TextField | Upstock">
      <Container maxWidth="lg">
        <form noValidate autoComplete="off">
          <Outlined />
        </form>
      </Container>
    </RootStyle>
  );
}
