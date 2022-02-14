import { useState } from 'react';
// material
import { Container, Stack, Typography, useMediaQuery } from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import CustomToggleBtn from 'components/_dashboard/CustomToggleBtn';
import EquityPercent from 'components/_dashboard/fRSU/details/equityPercent';
import Team from 'components/_dashboard/fRSU/details/team';
import Log from 'components/_dashboard/fRSU/details/log';
import { logTableData, overviewData, teamTableData } from './dummy-data';
// ----------------------------------------------------------------------

const toggleBtnOptions = [
  { label: 'Equity %', value: 'percent' },
  { label: 'Equity Value', value: 'value' },
  { label: 'Team', value: 'team' },
  { label: 'Work Log', value: 'log' }
];

export default function WorkerCapitalizationRSUFixed() {
  const { themeStretch } = useSettings();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [tab, setTab] = useState('percent');

  return (
    <Page title="Worker | RSU Fixed | Detail | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack
          direction={sm ? 'row' : 'column-reverse'}
          justifyContent="space-between"
          alignItems={sm ? 'center' : 'flex-start'}
          spacing={2}
        >
          <Typography variant="h6">
            {tab === 'percent' && `${overviewData.name}’s Vesting Plan’s Equity Repartition`}
            {tab === 'value' && `${overviewData.name}’s Vesting Plan’s Approximate Value of Equity Earned`}
            {tab === 'team' && `${overviewData.name}’s Vesting Plan’s Team`}
            {tab === 'log' && `${overviewData.name}’s Vesting Plan’s Work Log`}
          </Typography>
          <CustomToggleBtn initialValue="percent" options={toggleBtnOptions} onChange={(tab) => setTab(tab)} />
        </Stack>
        <br />
        {tab === 'percent' && <EquityPercent />}
        {tab === 'value' && <EquityPercent />}
        {tab === 'team' && <Team data={teamTableData} />}
        {tab === 'log' && <Log data={logTableData} />}
      </Container>
    </Page>
  );
}
