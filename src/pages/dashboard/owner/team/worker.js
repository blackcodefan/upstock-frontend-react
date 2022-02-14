import { useState } from 'react';
// material
import { Container, Stack, Typography, useMediaQuery } from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import CustomToggleBtn from 'components/_dashboard/CustomToggleBtn';
import { Manage, Permission } from 'components/_dashboard/team';

// ----------------------------------------------------------------------
const toggleBtnOptions = [
  { label: 'Manage', value: 'manage' },
  { label: 'Permissions', value: 'permission' }
];

export default function TeamWorkers() {
  const [section, setSection] = useState('manage');
  const { themeStretch } = useSettings();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Page title="Team | Workers | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack
          direction={sm ? 'row' : 'column-reverse'}
          justifyContent="space-between"
          alignItems={sm ? 'center' : 'flex-start'}
          sx={{
            mb: '50px'
          }}
        >
          <Typography variant="h6">
            {section === 'manage' && 'Team Members'}
            {section === 'permission' && 'Friends and Guest’s Team'}
          </Typography>
          <CustomToggleBtn initialValue="manage" options={toggleBtnOptions} onChange={setSection} />
        </Stack>
        {section === 'manage' && <Manage />}
        {section === 'permission' && <Permission />}
      </Container>
    </Page>
  );
}
