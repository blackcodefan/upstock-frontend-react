// material
import {
  Button,
  Box,
  Container,
  IconButton,
  OutlinedInput,
  Stack,
  styled,
  Typography,
  useMediaQuery
} from '@mui/material';
import { ChevronLeft, ChevronRight, Dash, Download, Printer, Plus } from 'react-bootstrap-icons';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import OverviewPanel from 'components/_dashboard/OverviewPanel';
import PDFViewer from 'components/_dashboard/legal/PdfViewer';
import pdfFile from '../../../../assets/sample.pdf';
// ----------------------------------------------------------------------

const PdfControl = styled('div')`
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  left: 0;
  padding: 10px;
  background-color: #f7f9fb;
`;

export default function WorkerLegalDocument() {
  const { themeStretch } = useSettings();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Page title="Worker | Legal | Document | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <OverviewPanel style={{ padding: 15 }}>
          <Stack direction={sm ? 'row' : 'column'} justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Independent contractor Agreements</Typography>
            <Stack direction="row" spacing={1}>
              <Button
                sx={{
                  width: 'fit-content',
                  bgcolor: 'primary.color',
                  filter: 'drop-shadow(0px 0px 10px rgba(176, 183, 195, 0.35))'
                }}
              >
                <Download size={16} />
              </Button>
              <Button
                sx={{
                  width: 'fit-content',
                  bgcolor: 'primary.color',
                  filter: 'drop-shadow(0px 0px 10px rgba(176, 183, 195, 0.35))'
                }}
              >
                <Printer size={16} />
              </Button>
            </Stack>
          </Stack>
        </OverviewPanel>
        <br />
        <OverviewPanel>
          <Box sx={{ maxHeight: '600px', overflowY: 'scroll' }}>
            <PDFViewer file={pdfFile} pageNumber={1} />
          </Box>
          <PdfControl>
            <Stack direction={sm ? 'row' : 'column'} justifyContent="space-between" alignItems="center">
              <Button size="small" sx={{ width: 'auto', color: 'color.text1' }} startIcon={<ChevronLeft size={16} />}>
                Back
              </Button>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton>
                  <ChevronLeft size={16} />
                </IconButton>
                <OutlinedInput
                  size="small"
                  type="number"
                  sx={{ width: '60px' }}
                  endAdornment={
                    <Typography variant="body2" color="color.text3">
                      /6
                    </Typography>
                  }
                />
                <IconButton>
                  <ChevronRight size={16} />
                </IconButton>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button
                  sx={{
                    width: 'fit-content',
                    minWidth: '32px',
                    bgcolor: 'primary.color',
                    filter: 'drop-shadow(0px 0px 10px rgba(176, 183, 195, 0.35))'
                  }}
                  size="small"
                >
                  <Dash size={16} />
                </Button>
                <Typography variant="subtitle1">100%</Typography>
                <Button
                  sx={{
                    width: 'fit-content',
                    minWidth: '32px',
                    bgcolor: 'primary.color',
                    filter: 'drop-shadow(0px 0px 10px rgba(176, 183, 195, 0.35))'
                  }}
                  size="small"
                >
                  <Plus size={16} />
                </Button>
              </Stack>
            </Stack>
          </PdfControl>
        </OverviewPanel>
      </Container>
    </Page>
  );
}
