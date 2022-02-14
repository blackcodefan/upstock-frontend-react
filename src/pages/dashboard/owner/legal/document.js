import { useState } from 'react';
// material
import { AccordionDetails, Container } from '@mui/material';
import { CheckCircle } from 'react-bootstrap-icons';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import CustomWrapper from 'components/_dashboard/legal/CustomWrapper';
import DocumentAccordionHeader from 'components/_dashboard/legal/DocumentAccordionHeader';
import DocumentAccordionDetailItem from 'components/_dashboard/legal/DocumentAccordionDetailItem';
import CustomChip from 'components/_dashboard/legal/CustomChip';
import CustomAccordion from 'components/_dashboard/legal/CustomAccordion';
import PDFViewer from 'components/_dashboard/legal/PdfViewer';
import OverviewPanel from 'components/_dashboard/OverviewPanel';
import pdfFile from 'assets/sample.pdf';
// ----------------------------------------------------------------------

export default function LegalDocuments() {
  const { themeStretch } = useSettings();
  const [expanded, setExpanded] = useState(false);
  const [view, setView] = useState('list');

  const toggleAccordion = (panel) => () => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        {view === 'list' ? (
          documents()
        ) : (
          <OverviewPanel>
            <PDFViewer file={pdfFile} pageNumber={1} />
          </OverviewPanel>
        )}
      </Container>
    </Page>
  );

  function documents() {
    return (
      <CustomWrapper title="completed recently">
        <CustomAccordion expanded={expanded === 'complete1'}>
          <DocumentAccordionHeader
            title="Service Provider Agreement"
            description="The service provider agreemnet has to be signed by all parties"
            people={[
              { name: 'Gabriel Fenton', signed: true },
              { name: 'Mike Ryerson', signed: true }
            ]}
            buttonLabel="View"
            onClick={toggleAccordion('complete1')}
            onBtnClick={() => setView('detail')}
            chip={
              <CustomChip
                icon={<CheckCircle size={12} />}
                label="2/2"
                size="small"
                color="success"
                variant="outlined"
              />
            }
          />
          <AccordionDetails>
            <DocumentAccordionDetailItem
              name="John Michael Smith"
              description="Service Provider Agreement Generated #12255"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={<CustomChip label="Generated" size="small" color="default" variant="outlined" />}
            />
            <DocumentAccordionDetailItem
              name="John Michael Smith"
              badge
              description="Sent notification to gabrielfenton@gmail.com"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
            />
            <DocumentAccordionDetailItem
              name="John Michael Smith"
              description="Signed Service Provider Agreement #12255"
              date="May 21, 2021 5:32 AM"
              status="success"
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
              name="Mary Paulson"
              badge
              description="Sent notification to gabrielfenton@gmail.com"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
            />
            <DocumentAccordionDetailItem
              name="Mary Paulson"
              description="Signed Service Provider Agreement #12255"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={
                <CustomChip
                  icon={<CheckCircle size={12} />}
                  label="To Be Signed"
                  size="small"
                  color="success"
                  variant="outlined"
                />
              }
            />
            <DocumentAccordionDetailItem
              name="Contract Completed"
              badge
              description="contract emailed to gabrielfenton@gmail.com and johmichael@upstock.io"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
              lastChild
            />
          </AccordionDetails>
        </CustomAccordion>
        <br />
        <CustomAccordion expanded={expanded === 'complete2'}>
          <DocumentAccordionHeader
            title="Service Provider Agreement"
            description="The service provider agreemnet has to be signed by all parties"
            people={[
              { name: 'Gabriel Fenton', signed: true },
              { name: 'Mike Ryerson', signed: false }
            ]}
            buttonLabel="View"
            onClick={toggleAccordion('complete2')}
            onBtnClick={() => setView('detail')}
            chip={
              <CustomChip
                icon={<CheckCircle size={12} />}
                label="2/2"
                size="small"
                color="success"
                variant="outlined"
              />
            }
          />
          <AccordionDetails>
            <DocumentAccordionDetailItem
              name="John Michael Smith"
              description="Service Provider Agreement Generated #12255"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={<CustomChip label="Generated" size="small" color="default" variant="outlined" />}
            />
            <DocumentAccordionDetailItem
              name="John Michael Smith"
              badge
              description="Sent notification to gabrielfenton@gmail.com"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
            />
            <DocumentAccordionDetailItem
              name="John Michael Smith"
              description="Signed Service Provider Agreement #12255"
              date="May 21, 2021 5:32 AM"
              status="success"
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
              name="Mary Paulson"
              badge
              description="Sent notification to gabrielfenton@gmail.com"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
            />
            <DocumentAccordionDetailItem
              name="Mary Paulson"
              description="Signed Service Provider Agreement #12255"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={
                <CustomChip
                  icon={<CheckCircle size={12} />}
                  label="To Be Signed"
                  size="small"
                  color="success"
                  variant="outlined"
                />
              }
            />
            <DocumentAccordionDetailItem
              name="Contract Completed"
              badge
              description="contract emailed to gabrielfenton@gmail.com and johmichael@upstock.io"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
              lastChild
            />
          </AccordionDetails>
        </CustomAccordion>
        <br />
        <CustomAccordion expanded={expanded === 'complete3'}>
          <DocumentAccordionHeader
            title="Equity Pool Grand Agreement - Performance"
            description="The service provider agreemnet has to be signed by all parties"
            people={[{ name: 'Gabriel Fenton', signed: true }]}
            buttonLabel="View"
            onClick={toggleAccordion('complete3')}
            onBtnClick={() => setView('detail')}
            chip={
              <CustomChip
                icon={<CheckCircle size={12} />}
                label="2/2"
                size="small"
                color="success"
                variant="outlined"
              />
            }
          />
          <AccordionDetails>
            <DocumentAccordionDetailItem
              name="John Michael Smith"
              description="Service Provider Agreement Generated #12255"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={<CustomChip label="Generated" size="small" color="default" variant="outlined" />}
            />
            <DocumentAccordionDetailItem
              name="John Michael Smith"
              badge
              description="Sent notification to gabrielfenton@gmail.com"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
            />
            <DocumentAccordionDetailItem
              name="John Michael Smith"
              description="Signed Service Provider Agreement #12255"
              date="May 21, 2021 5:32 AM"
              status="success"
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
              name="Mary Paulson"
              badge
              description="Sent notification to gabrielfenton@gmail.com"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
            />
            <DocumentAccordionDetailItem
              name="Mary Paulson"
              description="Signed Service Provider Agreement #12255"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={
                <CustomChip
                  icon={<CheckCircle size={12} />}
                  label="To Be Signed"
                  size="small"
                  color="success"
                  variant="outlined"
                />
              }
            />
            <DocumentAccordionDetailItem
              name="Contract Completed"
              badge
              description="contract emailed to gabrielfenton@gmail.com and johmichael@upstock.io"
              date="May 21, 2021 5:32 AM"
              status="success"
              chip={<CustomChip label="Email Notification" size="small" color="default" variant="outlined" />}
              lastChild
            />
          </AccordionDetails>
        </CustomAccordion>
      </CustomWrapper>
    );
  }
}
