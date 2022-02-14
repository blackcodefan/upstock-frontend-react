// material
import { Container } from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';

// ----------------------------------------------------------------------

export default function WorkerCapitalizationIncentives() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>Worker Capitalization Incentives page</Container>
    </Page>
  );
}
