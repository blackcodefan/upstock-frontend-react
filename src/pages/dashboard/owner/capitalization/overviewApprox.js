// material
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';

// ----------------------------------------------------------------------

export default function CapitalizationOverviewApprox() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Box sx={{ pt: '20px' }}>
          <Typography sx={{ fontSize: 18, color: 'color.text1' }}>Approximate Value Earned</Typography>
          <Box sx={{ pt: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ width: 120, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    Alex Fedoseev
                  </Box>
                  <Box sx={{ width: 800, height: 15, bgcolor: 'primary.main', borderRadius: 5 }} />
                  <span>$ 195,232.42</span>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ width: 120, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    Sergey Tarasova
                  </Box>
                  <Box sx={{ width: 750, height: 15, bgcolor: 'primary.main', borderRadius: 5 }} />
                  <span>$ 161,017.13</span>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ width: 120, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    Rob Wise
                  </Box>
                  <Box sx={{ width: 700, height: 15, bgcolor: 'primary.main', borderRadius: 5 }} />
                  <span>$ 80,843.56</span>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ width: 120, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    Yauheni Arkhipau
                  </Box>
                  <Box sx={{ width: 600, height: 15, bgcolor: 'primary.main', borderRadius: 5 }} />
                  <span>$ 69,857.11</span>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ width: 120, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    Evrim Asian
                  </Box>
                  <Box sx={{ width: 550, height: 15, bgcolor: 'primary.main', borderRadius: 5 }} />
                  <span>$ 55,323.12</span>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ width: 120, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    Andrey Tkachenko
                  </Box>
                  <Box sx={{ width: 500, height: 15, bgcolor: 'primary.main', borderRadius: 5 }} />
                  <span>$ 50,434.23</span>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Page>
  );
}
