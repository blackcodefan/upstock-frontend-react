// material
import { Container } from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';

// ----------------------------------------------------------------------

export default function WorkerDashboardTodo() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Worker | Dashboard | Todo | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>Worker Dashboard todo page</Container>
    </Page>
  );
}
