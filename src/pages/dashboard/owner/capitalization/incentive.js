// material
import { Container } from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';

// ----------------------------------------------------------------------

export default function CapitalizationIncentives() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>Capitalization Incentives Page</Container>
    </Page>
  );
}
