import { useState } from 'react';
// material
import { Container, Stack, Typography, useMediaQuery } from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import CustomToggleBtn from 'components/_dashboard/CustomToggleBtn';
import { HRate, Salary } from 'components/_dashboard/team';

// ----------------------------------------------------------------------
const toggleBtnOptions = [
  { label: 'Hourly Rates', value: 'hRate' },
  { label: 'Salaries', value: 'salary' }
];

export default function TeamRate() {
  const [section, setSection] = useState('hRate');
  const { themeStretch } = useSettings();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Page title="Team | Rate | Upstock">
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
            {section === 'hRate' && 'Team’s Hourly Rates'}
            {section === 'salary' && 'Team’s Salaries'}
          </Typography>
          <CustomToggleBtn initialValue="hRate" options={toggleBtnOptions} onChange={setSection} />
        </Stack>
        {section === 'hRate' && <HRate />}
        {section === 'salary' && <Salary />}
      </Container>
    </Page>
  );
}
