import { useState } from 'react';
// material
import { Backdrop, Button, Box, Container, Typography, useMediaQuery } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { FileText, Lightbulb, Person, VectorPen } from 'react-bootstrap-icons';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import LinkModal from 'components/_dashboard/team/addWorker/LinkModal';
import { CustomTab, CustomTabList } from 'components/_dashboard/CustomTabComponents';
import TabContentContainer from 'components/_dashboard/team/addWorker/TabContentContainer';
import CustomContainer from 'components/_dashboard/CustomContainer';
import NewMemberForm from 'components/_dashboard/team/addWorker/NewMemberForm';
// ----------------------------------------------------------------------

export default function TeamAddWorker() {
  const { themeStretch } = useSettings();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [tab, setTab] = useState('employee');
  const [mode, setMode] = useState('category');
  const [linkModal, setLinkModal] = useState(false);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const toggleLinkModal = () => {
    setLinkModal(!linkModal);
  };

  return (
    <Page title="Team | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h6">Add New Team Members</Typography>
        <br />
        {mode === 'category' ? (
          categories()
        ) : (
          <NewMemberForm toggle={() => setMode('category')} toggleLinkModal={toggleLinkModal} />
        )}
      </Container>
      <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={linkModal} />
      <LinkModal open={linkModal} handleClose={() => setLinkModal(false)} />
    </Page>
  );

  function categories() {
    return (
      <CustomContainer>
        <TabContext value={tab}>
          <CustomTabList onChange={handleChange} variant={sm ? 'fullWidth' : 'scrollable'} value={tab}>
            <CustomTab label="Employee" value="employee" icon={<Person />} /> {/* Todo: FIXME for position */}
            <CustomTab label="Independent Contractor" value="independent" icon={<VectorPen />} />
            {/* Todo: FIXME for position */}
            <CustomTab label="Founder" value="founder" icon={<Lightbulb />} /> {/* Todo: FIXME for position */}
            <CustomTab label="Advisor" value="advisor" icon={<FileText />} /> {/* Todo: FIXME for position */}
          </CustomTabList>
          <TabPanel value="employee">
            <TabContentContainer>
              <ul>
                <li>Entered into a Contract of Service with the intention of being an employee</li>
                <li>
                  Employer has a high degree of control over the employee in therms of what work they do and where they
                </li>
                <li>Work and employer will check the results and methods used and has the final say</li>
                <li>Employer provides tools and equipment</li>
                <li>Employee cannot subcontract or hire assistants</li>
                <li>Employer controls the method and amount of pay</li>
                <li>Employee's financial income is dependent on the employer and receives a set salary</li>
                <li>Employee has to ask permission to work elsewhere</li>
                <li>Employee may be eligible for health insurance benefits, retirement plans, paid time off</li>
                <li>Employer is responsible for withholding and reporting taxes to government</li>
                <li>Work is usually long term or permanent in nature</li>
                <li>The overall work envirionment between the employer and employee is one of suboridation</li>
              </ul>
            </TabContentContainer>
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" onClick={() => setMode('form')}>
                Add Employee
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value="independent">
            <TabContentContainer>
              <ul>
                <li>Entered into a Contract fo Services with the intention to of being and independent contractor</li>
                <li>Contractor provides his own tools and equipment</li>
                <li>
                  Contractor usually works independently and sets own work schedule, what work they will do and where
                </li>
                <li>Contractor provides his own tools and equipment</li>
                <li>Contractor can subcontract the work or hire assistants</li>
                <li>Contractor can work for defferent payers at the same time and make a profit</li>
                <li>Contractor is not covered or eligible for any company benefits, including health insurance.</li>
                <li>retirement plans, paid time off, workers compensation</li>
                <li>Contractor is responsible for submitting his own taxes</li>
                <li>Work usually project based and temporary and can accept or refuse work</li>
                <li>The working relationship does not present a degree of continuity, suboridation, or integration.</li>
              </ul>
            </TabContentContainer>
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" sx={{ width: 'auto' }} onClick={() => setMode('form')}>
                Add Independent Contractor
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value="founder">
            <TabContentContainer>
              <ul>
                <li>A persion who has a business idea and helps start to create it into a business entity</li>
                <li>
                  The founder uses all of his experience, knowledge and contacts to help build the business and try to
                  make it successful and profitable
                </li>
                <li>
                  The founder of a small business is often required to fulfill many different roles in order to keep the
                  company running smoothly.
                </li>
                <li>
                  There can be more than one founder of a business and collectively they are known as the founders and
                  have rights over the business entity
                </li>
              </ul>
            </TabContentContainer>
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" onClick={() => setMode('form')}>
                Add Founder
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value="advisor">
            <TabContentContainer>
              <ul>
                <li>Expert in their filed</li>
                <li>Adds credence to the product and services</li>
                <li>
                  Uses all of their experience, knowledge and contacts to help build the business and try to make it
                  successful and profitable
                </li>
                <li>Limited hours per month or give value with their reputation</li>
                <li>Percentage vesting over four years outside of equity pool</li>
              </ul>
            </TabContentContainer>
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" disabled>
                Add Founder
              </Button>
            </Box>
          </TabPanel>
        </TabContext>
      </CustomContainer>
    );
  }
}
