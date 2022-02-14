// material
import { Container } from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';

// ----------------------------------------------------------------------

export default function WorkerCapitalizationDash() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>Worker Capitalization Dash page</Container>
    </Page>
  );
}
