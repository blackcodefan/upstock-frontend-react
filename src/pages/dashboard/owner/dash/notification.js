// material
import { Container } from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';

// ----------------------------------------------------------------------

export default function TodoEquity() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>Dashboard Notification Page</Container>
    </Page>
  );
}
