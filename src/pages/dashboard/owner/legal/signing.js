import { useState } from 'react';
// material
import {
  AccordionDetails,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { CheckCircle, Printer, X } from 'react-bootstrap-icons';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import SignatureCanvas from 'react-signature-canvas';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import DocumentAccordionHeader from 'components/_dashboard/legal/DocumentAccordionHeader';
import DocumentAccordionDetailItem from 'components/_dashboard/legal/DocumentAccordionDetailItem';
import CustomWrapper from 'components/_dashboard/legal/CustomWrapper';
import CustomChip from 'components/_dashboard/legal/CustomChip';
import { BpCheckedIcon, BpIcon } from 'components/_dashboard/legal/CustomCheckbox';
import CustomAccordion from 'components/_dashboard/legal/CustomAccordion';
import CustomModal from 'components/_dashboard/legal/CustomModal';
import DocumentModal from 'components/_dashboard/legal/DocumentModal';
import SiginingModal from 'components/_dashboard/legal/SigningModal';
import Logo from 'components/Logo';
import PDFViewer from 'components/_dashboard/legal/PdfViewer';
import SvgIconStyle from 'components/SvgIconStyle';
import pdfFile from 'assets/sample.pdf';
// ----------------------------------------------------------------------

export default function LegalSigning() {
  const { themeStretch } = useSettings();
  const theme = useTheme();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [expanded, setExpanded] = useState(false);
  const [signModal, setSignModal] = useState(false);
  const [documentModal, setDocumentModal] = useState(false);
  const [numPages, setNumPages] = useState(1);

  const toggleAccordion = (panel) => () => {
    setExpanded(expanded === panel ? false : panel);
  };

  const toggleSignModal = () => {
    setSignModal(!signModal);
  };

  const toggleDocumentModal = () => {
    setDocumentModal(!documentModal);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <CustomWrapper title="you need to sign">
          <CustomAccordion expanded={expanded === 'you1'}>
            <DocumentAccordionHeader
              title="Equity Pool Grant agreement"
              description="The service provider agreemnet has to be signed by all parties"
              people={[{ name: 'Gabriel Fenton', signed: false }]}
              buttonLabel="Sign"
              onClick={toggleAccordion('you1')}
              onBtnClick={toggleDocumentModal}
              chip={
                <CustomChip
                  icon={<CheckCircle size={12} />}
                  label="0/1"
                  size="small"
                  color="warning"
                  variant="outlined"
                />
              }
            />
            <AccordionDetails>
              <DocumentAccordionDetailItem
                name="Gabriel Fenton"
                badge
                description="Sent notification to gabrielfenton@gmail.com"
                date="May 21, 2021 5:32 AM"
                chip={
                  <CustomChip
                    icon={<CheckCircle size={12} />}
                    label="Signed"
                    size="small"
                    color="success"
                    variant="outlined"
                  />
                }
              />
              <DocumentAccordionDetailItem
                name="John Michael Smith"
                badge
                description="Sent notification to jsm-2525@gmail.com"
                date="May 21, 2021 5:32 AM"
                chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
              />
              <DocumentAccordionDetailItem
                name="John Michael Smith"
                badge
                description="Sent notification to gabrielfenton.com"
                date="May 21, 2021 5:32 AM"
                chip={
                  <CustomChip
                    icon={<CheckCircle size={12} />}
                    label="To Be signed"
                    size="small"
                    color="warning"
                    variant="outlined"
                  />
                }
                status="warning"
              />
              <DocumentAccordionDetailItem
                name="John Michael Smith"
                badge
                description="Sent notification to gabrielfenton@gmail.com"
                date="May 21, 2021 5:32 AM"
                chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
                status="warning"
                lastChild
              />
            </AccordionDetails>
          </CustomAccordion>
        </CustomWrapper>
        <br />
        <CustomWrapper title="others need to sign">
          <CustomAccordion expanded={expanded === 'other1'}>
            <DocumentAccordionHeader
              title="Equity Pool Grant Agreement - Performance"
              description="The service provider agreemnet has to be signed by all parties"
              people={[{ name: 'Gabriel Fenton', signed: false }]}
              buttonLabel="View"
              onClick={toggleAccordion('other1')}
              onBtnClick={toggleDocumentModal}
              chip={
                <CustomChip
                  icon={<CheckCircle size={12} />}
                  label="0/2"
                  size="small"
                  color="warning"
                  variant="outlined"
                />
              }
            />
            <AccordionDetails>
              <DocumentAccordionDetailItem
                name="Gabriel Fenton"
                badge
                description="Sent notification to gabrielfenton@gmail.com"
                date="May 21, 2021 5:32 AM"
                chip={
                  <CustomChip
                    icon={<CheckCircle size={12} />}
                    label="Signed"
                    size="small"
                    color="success"
                    variant="outlined"
                  />
                }
              />
              <DocumentAccordionDetailItem
                name="John Michael Smith"
                badge
                description="Sent notification to jsm-2525@gmail.com"
                date="May 21, 2021 5:32 AM"
                chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
              />
              <DocumentAccordionDetailItem
                name="John Michael Smith"
                badge
                description="Sent notification to gabrielfenton.com"
                date="May 21, 2021 5:32 AM"
                chip={
                  <CustomChip
                    icon={<CheckCircle size={12} />}
                    label="To Be signed"
                    size="small"
                    color="warning"
                    variant="outlined"
                  />
                }
                status="warning"
              />
              <DocumentAccordionDetailItem
                name="John Michael Smith"
                badge
                description="Sent notification to gabrielfenton@gmail.com"
                date="May 21, 2021 5:32 AM"
                chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
                status="warning"
                lastChild
              />
            </AccordionDetails>
          </CustomAccordion>
          <br />
          <CustomAccordion expanded={expanded === 'other2'}>
            <DocumentAccordionHeader
              title="Equity Pool Grant Agreement - Performance"
              description="The service provider agreemnet has to be signed by all parties"
              people={[{ name: 'Gabriel Fenton', signed: false }]}
              buttonLabel="Send reminder"
              onClick={toggleAccordion('other2')}
              onBtnClick={toggleDocumentModal}
              chip={
                <CustomChip
                  icon={<CheckCircle size={12} />}
                  label="0/2"
                  size="small"
                  color="warning"
                  variant="outlined"
                />
              }
            />
            <AccordionDetails>
              <DocumentAccordionDetailItem
                name="Gabriel Fenton"
                badge
                description="Sent notification to gabrielfenton@gmail.com"
                date="May 21, 2021 5:32 AM"
                chip={
                  <CustomChip
                    icon={<CheckCircle size={12} />}
                    label="Signed"
                    size="small"
                    color="success"
                    variant="outlined"
                  />
                }
              />
              <DocumentAccordionDetailItem
                name="John Michael Smith"
                badge
                description="Sent notification to jsm-2525@gmail.com"
                date="May 21, 2021 5:32 AM"
                chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
              />
              <DocumentAccordionDetailItem
                name="John Michael Smith"
                badge
                description="Sent notification to gabrielfenton.com"
                date="May 21, 2021 5:32 AM"
                chip={
                  <CustomChip
                    icon={<CheckCircle size={12} />}
                    label="To Be signed"
                    size="small"
                    color="warning"
                    variant="outlined"
                  />
                }
                status="warning"
              />
              <DocumentAccordionDetailItem
                name="John Michael Smith"
                badge
                description="Sent notification to gabrielfenton@gmail.com"
                date="May 21, 2021 5:32 AM"
                chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
                status="warning"
                lastChild
              />
            </AccordionDetails>
          </CustomAccordion>
        </CustomWrapper>
        <br />
        <CustomWrapper title="completed recently">
          <CustomAccordion expanded={expanded === 'completed1'}>
            <DocumentAccordionHeader
              title="Equity Pool Plan Agreement"
              description="The service provider agreemnet has to be signed by all parties"
              people={[{ name: 'Gabriel Fenton', signed: false }]}
              buttonLabel="View"
              onClick={toggleAccordion('completed1')}
              onBtnClick={toggleDocumentModal}
              chip={
                <CustomChip
                  icon={<CheckCircle size={12} />}
                  label="1/1"
                  size="small"
                  color="success"
                  variant="outlined"
                />
              }
            />
            <AccordionDetails>
              <DocumentAccordionDetailItem
                name="Gabriel Fenton"
                badge
                description="Sent notification to gabrielfenton@gmail.com"
                date="May 21, 2021 5:32 AM"
                chip={
                  <CustomChip
                    icon={<CheckCircle size={12} />}
                    label="Signed"
                    size="small"
                    color="success"
                    variant="outlined"
                  />
                }
              />
              <DocumentAccordionDetailItem
                name="John Michael Smith"
                badge
                description="Sent notification to jsm-2525@gmail.com"
                date="May 21, 2021 5:32 AM"
                chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
              />
              <DocumentAccordionDetailItem
                name="John Michael Smith"
                badge
                description="Sent notification to gabrielfenton.com"
                date="May 21, 2021 5:32 AM"
                chip={
                  <CustomChip
                    icon={<CheckCircle size={12} />}
                    label="To Be signed"
                    size="small"
                    color="warning"
                    variant="outlined"
                  />
                }
                status="warning"
              />
              <DocumentAccordionDetailItem
                name="John Michael Smith"
                badge
                description="Sent notification to gabrielfenton@gmail.com"
                date="May 21, 2021 5:32 AM"
                chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
                status="warning"
                lastChild
              />
            </AccordionDetails>
          </CustomAccordion>
        </CustomWrapper>
      </Container>
      {documentViewModal()}
      {signingModal()}
    </Page>
  );

  function signingModal() {
    return (
      <CustomModal open={signModal} onClose={toggleSignModal}>
        <SiginingModal>
          <Stack direction="row" justifyContent="space-between" sx={{ p: '10px' }}>
            <Typography variant="body1">Add your signature</Typography>
            <IconButton onClick={toggleSignModal}>
              <X color={theme.palette.primary.main} size={16} />
            </IconButton>
          </Stack>
          <Stack direction={sm ? 'row' : 'column'} divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            <Box>
              <Stack spacing={2}>
                <Button
                  startIcon={<EditOutlinedIcon />}
                  sx={{ color: 'color.text3', bgcolor: 'color.bg2', width: 'auto', p: '0 20px', minWidth: '146px' }}
                >
                  Draw it in
                </Button>
                <Button
                  startIcon={<KeyboardAltOutlinedIcon />}
                  sx={{ color: 'color.text3', bgcolor: 'primary.color', width: 'auto', p: '0 20px', minWidth: '146px' }}
                >
                  Type it in
                </Button>
                <Button
                  startIcon={<PhotoCameraOutlinedIcon />}
                  sx={{ color: 'color.text3', bgcolor: 'primary.color', width: 'auto', p: '0 20px', minWidth: '146px' }}
                >
                  Upload
                </Button>
              </Stack>
            </Box>
            <Box>
              <Typography variant="body1">Draw your signature using the cursor.</Typography>
              <Divider sx={{ border: 'none', height: '15px' }} />
              <SignatureCanvas canvasProps={{ className: 'sigCanvas' }} />
            </Box>
          </Stack>
          <FormControlLabel
            value="end"
            control={<Checkbox icon={<BpIcon />} checkedIcon={<BpCheckedIcon />} color="primary" variant="contained" />}
            label="I understand this is a legal representation of my signature."
            labelPlacement="end"
          />
          <Box sx={{ textAlign: 'right' }}>
            <Button variant="contained">Insert</Button>
          </Box>
        </SiginingModal>
      </CustomModal>
    );
  }

  function documentViewModal() {
    return (
      <CustomModal open={documentModal} onClose={toggleDocumentModal}>
        <DocumentModal>
          <Stack direction="row" justifyContent="space-between" sx={{ p: '10px' }}>
            <Logo />
            <IconButton onClick={toggleDocumentModal}>
              <X color={theme.palette.primary.main} size={16} />
            </IconButton>
          </Stack>
          <Stack direction={sm ? 'row' : 'column'} justifyContent="flex-end" sx={{ p: '10px' }}>
            <div>
              <OutlinedInput value={numPages} size="small" sx={{ width: 40, borderRadius: '40%' }} /> /{' '}
              <IconButton
                sx={{
                  color: 'color.text3',
                  bgcolor: 'color.bg2',
                  width: 40,
                  height: 40,
                  fontSize: 18,
                  borderRadius: '30%'
                }}
              >
                2
              </IconButton>
            </div>
            <div>
              <IconButton sx={{ width: 40 }}>
                <SvgIconStyle src="/static/icons/dashboard/ic_file_download.svg" sx={{ display: 'inline-block' }} />
              </IconButton>
              <IconButton sx={{ width: 40 }}>
                <Printer />
              </IconButton>
              <Button variant="contained" startIcon={<EditOutlinedIcon />} onClick={toggleSignModal}>
                Sign
              </Button>
            </div>
          </Stack>
          <Divider />
          <Box className="pdf-wrapper">
            <PDFViewer file={pdfFile} pageNumber={1} onLoadSuccess={onDocumentLoadSuccess} />
          </Box>
        </DocumentModal>
      </CustomModal>
    );
  }
}
