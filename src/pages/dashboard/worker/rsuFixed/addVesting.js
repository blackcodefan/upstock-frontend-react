import { useState } from 'react';
// material
import { Container, Stack, Typography, useMediaQuery } from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import CustomToggleBtn from 'components/_dashboard/CustomToggleBtn';
import AddActivity from 'components/_dashboard/fRSU/addVesting/addActivity';
import TotalActivities from 'components/_dashboard/fRSU/addVesting/totalActivities';
import TotalLogs from 'components/_dashboard/fRSU/addVesting/totalLogs';
import { activityLogTableData, logTableData, addVestingData } from './dummy-data';
// ----------------------------------------------------------------------
const toggleBtnOptions = [
  { label: 'Add', value: 'add' },
  { label: 'Totals', value: 'total' },
  { label: 'Log', value: 'log' }
];

export default function AddVesting() {
  const { themeStretch } = useSettings();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [tab, setTab] = useState('add');

  return (
    <Page title="Worker | RSU Fixed | Add Vesting | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack
          direction={sm ? 'row' : 'column-reverse'}
          justifyContent="space-between"
          alignItems={sm ? 'center' : 'flex-start'}
          spacing={2}
        >
          <Typography variant="h6">
            {tab === 'add' && `Add Activity in ${addVestingData.name}’s Vesting Plan`}
            {tab === 'total' && `Add Activity in ${addVestingData.name}’s Total Activity`}
            {tab === 'log' && `Add Activity in ${addVestingData.name}’s Total Activity`}
          </Typography>
          <CustomToggleBtn initialValue="add" options={toggleBtnOptions} onChange={(tab) => setTab(tab)} />
        </Stack>
        <br />
        {tab === 'add' && <AddActivity data={activityLogTableData} formInfoData={addVestingData} />}
        {tab === 'total' && <TotalActivities data={activityLogTableData} />}
        {tab === 'log' && <TotalLogs data={logTableData} />}
      </Container>
    </Page>
  );
}
