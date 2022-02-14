// material
import { Box, Button, Container, Grid, MenuItem, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import CustomBadge from 'components/_dashboard/legal/CustomBadge';
import PDFViewer from 'components/_dashboard/legal/PdfViewer';
import pdfFile from '../../../../assets/sample.pdf';
// ----------------------------------------------------------------------

export default function LegalVersioning() {
  const { themeStretch } = useSettings();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Box sx={{ borderRadius: '15px', bgcolor: 'color.bg3', p: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={6}>
              <Stack direction={sm ? 'row' : 'column'} spacing={1} alignItems={sm ? 'center' : 'flex-start'}>
                <Typography variant="body1">Document: </Typography>
                <TextField
                  select
                  size="small"
                  value="label"
                  sx={{ width: sm ? 150 : '100%', '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                >
                  <MenuItem value="label">Label</MenuItem>
                  <MenuItem value="twenty">Twenty</MenuItem>
                  <MenuItem value="thirty">Thirty</MenuItem>
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={6}>
              <Stack direction={sm ? 'row' : 'column'} spacing={1} alignItems={sm ? 'center' : 'flex-start'}>
                <Typography variant="body1">Dates: </Typography>
                <Grid container spacing={2} sx={{ rowGap: 2 }}>
                  <Grid item xs={6} sm={3} style={{ paddingTop: 0 }}>
                    <Button sx={{ bgcolor: 'primary.light' }}>May 1, 2021</Button>
                  </Grid>
                  <Grid item xs={6} sm={3} style={{ paddingTop: 0 }}>
                    <Button sx={{ color: 'color.text1', bgcolor: 'primary.color' }}>Feb 5, 2021</Button>
                  </Grid>
                  <Grid item xs={6} sm={3} style={{ paddingTop: 0 }}>
                    <Button sx={{ color: 'color.text1', bgcolor: 'primary.color' }}>Dec 1, 2021</Button>
                  </Grid>
                  <Grid item xs={6} sm={3} style={{ paddingTop: 0 }}>
                    <Button sx={{ color: 'color.text1', bgcolor: 'primary.color' }}>Sep 3, 2021</Button>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
          <br />
          <Stack direction={sm ? 'row' : 'column'} spacing={5}>
            <Typography variant="subtitle2">Version: 5.32.1</Typography>
            <CustomBadge badgeContent="12" color="default">
              <Typography variant="subtitle2">Number of Changes</Typography>
            </CustomBadge>
            <CustomBadge badgeContent="7" color="success">
              <Typography variant="subtitle2" color="success.main">
                Additions
              </Typography>
            </CustomBadge>
            <CustomBadge badgeContent="5" color="error">
              <Typography variant="subtitle2" color="error.main">
                Removals
              </Typography>
            </CustomBadge>
          </Stack>
          <br />
          <Typography variant="body2" color="color.text3">
            By using this system you agree to the latest version of the legal documents. We do this so we can provide
            you with the best legal documents possible
          </Typography>
          <Typography variant="body2" color="color.text3">
            Old document versions are available. Contact legal@upstock.io
          </Typography>
          <br />
          <PDFViewer file={pdfFile} pageNumber={1} />
        </Box>
      </Container>
    </Page>
  );
}
