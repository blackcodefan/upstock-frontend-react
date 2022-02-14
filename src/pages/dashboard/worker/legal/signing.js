import { useState } from 'react';
// material
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import { CheckCircle, ThreeDots } from 'react-bootstrap-icons';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import CustomAccordion from 'components/_dashboard/legal/CustomAccordion';
import CustomWrapper from 'components/_dashboard/legal/CustomWrapper';
import CustomChip from 'components/_dashboard/legal/CustomChip';
import CustomBadge from 'components/_dashboard/legal/CustomBadge';
// ----------------------------------------------------------------------

export default function WorkerLegalSigning() {
  const { themeStretch } = useSettings();
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = (panel) => () => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <Page title="Worker | Legal | Signing | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack direction={sm ? 'row' : 'column'} justifyContent="flex-end" spacing={4}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body1">Show: </Typography>
            <TextField select size="small" value="label" sx={{ width: sm ? 150 : '100%' }}>
              <MenuItem value="label">All Documents</MenuItem>
              <MenuItem value="twenty">Signed</MenuItem>
              <MenuItem value="thirty">Unsigned</MenuItem>
            </TextField>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body1">Sort by: </Typography>
            <TextField select size="small" value="label" sx={{ width: sm ? 150 : '100%' }}>
              <MenuItem value="label">Due Time</MenuItem>
              <MenuItem value="twenty">Signed</MenuItem>
              <MenuItem value="thirty">Unsigned</MenuItem>
            </TextField>
          </Stack>
        </Stack>
        <br />
        <CustomWrapper title="you need to sign">
          <CustomAccordion expanded={expanded === 'you1'}>
            <AccordionSummary>
              <Stack
                direction={sm ? 'row' : 'column'}
                justifyContent="space-between"
                spacing={2}
                sx={{ width: '100%' }}
              >
                <Stack spacing={0.5} onClick={toggleAccordion('you1')}>
                  <Typography variant="h6">Equity Pool Grant agreement</Typography>
                  <Typography variant="body1">Gabriel Fentod</Typography>
                  <Typography variant="body2" color="color.text3">
                    The service provider agreemnet has to be signed by all parties
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <CustomChip
                    label="0/2"
                    size="small"
                    color="warning"
                    variant="outlined"
                    icon={<CheckCircle size={15} />}
                  />
                  <Button variant="contained" sx={{ width: 'fit-content' }} disabled>
                    Sign
                  </Button>
                  <IconButton>
                    <ThreeDots />
                  </IconButton>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ p: '20px' }}>
                <Stack direction={sm ? 'row' : 'column'} justifyContent="space-between" spacing={2} alignItems="center">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box sx={{ width: 45, height: 45, borderRadius: '50%', bgcolor: '#FDF4E0' }} />
                    <Box>
                      <Typography variant="body1">Gabriel Fentod</Typography>
                      <CustomBadge color="success" variant="dot" size="small">
                        <Typography variant="body2" color="color.text3">
                          Sent notification to gabrielfenton@gmail.com
                        </Typography>
                      </CustomBadge>
                    </Box>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" color="color.text3">
                      May 21, 2021 5:32 AM
                    </Typography>
                    <CustomChip
                      icon={<CheckCircle size={15} />}
                      label="Signed"
                      size="small"
                      color="success"
                      variant="outlined"
                    />
                  </Stack>
                </Stack>
              </Box>
              <Divider variant="fullWidth" sx={{ mt: '5px', mb: '5px' }} />
              <Box sx={{ p: '20px' }}>
                <Stack direction={sm ? 'row' : 'column'} justifyContent="space-between" spacing={2} alignItems="center">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box sx={{ width: 45, height: 45, borderRadius: '50%', bgcolor: '#FDF4E0' }} />
                    <Box>
                      <Typography variant="body1">John Michael Smith</Typography>
                      <CustomBadge color="success" variant="dot" size="small">
                        <Typography variant="body2" color="color.text3">
                          Sent notification to jms-2525@gmail.com
                        </Typography>
                      </CustomBadge>
                    </Box>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" color="color.text3">
                      May 21, 2021 5:32 AM
                    </Typography>
                    <CustomChip label="Email notification" size="small" color="default" variant="outlined" />
                  </Stack>
                </Stack>
              </Box>
              <Divider variant="fullWidth" sx={{ mt: '5px', mb: '5px' }} />
              <Box sx={{ p: '20px' }}>
                <Stack direction={sm ? 'row' : 'column'} justifyContent="space-between" spacing={2} alignItems="center">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box sx={{ width: 45, height: 45, borderRadius: '50%', bgcolor: '#FDF4E0' }} />
                    <Box>
                      <Typography variant="body1">John Michael Smith</Typography>
                      <CustomBadge color="success" variant="dot" size="small">
                        <Typography variant="body2" color="color.text3">
                          Sent notification to gabrielfenton@gmail.com
                        </Typography>
                      </CustomBadge>
                    </Box>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" color="color.text3">
                      May 21, 2021 5:32 AM
                    </Typography>
                    <CustomChip
                      icon={<CheckCircle size={15} />}
                      label="To Be Signed"
                      size="small"
                      color="warning"
                      variant="outlined"
                    />
                  </Stack>
                </Stack>
              </Box>
            </AccordionDetails>
          </CustomAccordion>
        </CustomWrapper>
        <br />
        <CustomWrapper title="WAIT FOR YOUR SIGN">
          <CustomAccordion expanded={expanded === 'wait1'}>
            <AccordionSummary>
              <Stack
                direction={sm ? 'row' : 'column'}
                justifyContent="space-between"
                spacing={2}
                sx={{ width: '100%' }}
              >
                <Stack spacing={0.5} onClick={toggleAccordion('wait1')}>
                  <Typography variant="h6">W9</Typography>
                  <Typography variant="body1">Gabriel Fentod</Typography>
                  <Typography variant="body2" color="color.text3">
                    We need content here
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <CustomChip
                    label="1/2"
                    size="small"
                    color="warning"
                    variant="outlined"
                    icon={<CheckCircle size={15} />}
                  />
                  <Button variant="contained" sx={{ width: 'fit-content' }}>
                    Sign
                  </Button>
                  <IconButton>
                    <ThreeDots />
                  </IconButton>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ p: '20px' }}>
                <Stack direction={sm ? 'row' : 'column'} justifyContent="space-between" spacing={2} alignItems="center">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box sx={{ width: 45, height: 45, borderRadius: '50%', bgcolor: '#FDF4E0' }} />
                    <Box>
                      <Typography variant="body1">Gabriel Fentod</Typography>
                      <CustomBadge color="success" variant="dot" size="small">
                        <Typography variant="body2" color="color.text3">
                          Sent notification to gabrielfenton@gmail.com
                        </Typography>
                      </CustomBadge>
                    </Box>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" color="color.text3">
                      May 21, 2021 5:32 AM
                    </Typography>
                    <CustomChip
                      icon={<CheckCircle size={15} />}
                      label="Signed"
                      size="small"
                      color="success"
                      variant="outlined"
                    />
                  </Stack>
                </Stack>
              </Box>
              <Divider variant="fullWidth" sx={{ mt: '5px', mb: '5px' }} />
              <Box sx={{ p: '20px' }}>
                <Stack direction={sm ? 'row' : 'column'} justifyContent="space-between" spacing={2} alignItems="center">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box sx={{ width: 45, height: 45, borderRadius: '50%', bgcolor: '#FDF4E0' }} />
                    <Box>
                      <Typography variant="body1">John Michael Smith</Typography>
                      <CustomBadge color="success" variant="dot" size="small">
                        <Typography variant="body2" color="color.text3">
                          Sent notification to jms-2525@gmail.com
                        </Typography>
                      </CustomBadge>
                    </Box>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" color="color.text3">
                      May 21, 2021 5:32 AM
                    </Typography>
                    <CustomChip label="Email notification" size="small" color="default" variant="outlined" />
                  </Stack>
                </Stack>
              </Box>
              <Divider variant="fullWidth" sx={{ mt: '5px', mb: '5px' }} />
              <Box sx={{ p: '20px' }}>
                <Stack direction={sm ? 'row' : 'column'} justifyContent="space-between" spacing={2} alignItems="center">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box sx={{ width: 45, height: 45, borderRadius: '50%', bgcolor: '#FDF4E0' }} />
                    <Box>
                      <Typography variant="body1">John Michael Smith</Typography>
                      <CustomBadge color="success" variant="dot" size="small">
                        <Typography variant="body2" color="color.text3">
                          Sent notification to gabrielfenton@gmail.com
                        </Typography>
                      </CustomBadge>
                    </Box>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" color="color.text3">
                      May 21, 2021 5:32 AM
                    </Typography>
                    <CustomChip
                      icon={<CheckCircle size={15} />}
                      label="To Be Signed"
                      size="small"
                      color="warning"
                      variant="outlined"
                    />
                  </Stack>
                </Stack>
              </Box>
            </AccordionDetails>
          </CustomAccordion>
        </CustomWrapper>
        <br />
        <CustomWrapper title="completed recently">
          <CustomAccordion expanded={expanded === 'completed1'}>
            <AccordionSummary>
              <Stack
                direction={sm ? 'row' : 'column'}
                justifyContent="space-between"
                spacing={2}
                sx={{ width: '100%' }}
              >
                <Stack spacing={0.5} onClick={toggleAccordion('completed1')}>
                  <Typography variant="h6">Award Agreement</Typography>
                  <Typography variant="body1">Gabriel Fentod</Typography>
                  <Typography variant="body2" color="color.text3">
                    Award agreement has to be signed by all parties
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <CustomChip
                    label="2/2"
                    size="small"
                    color="success"
                    variant="outlined"
                    icon={<CheckCircle size={15} />}
                  />
                  <Button variant="contained" sx={{ width: 'fit-content' }}>
                    View
                  </Button>
                  <IconButton>
                    <ThreeDots />
                  </IconButton>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ p: '20px' }}>
                <Stack direction={sm ? 'row' : 'column'} justifyContent="space-between" spacing={2} alignItems="center">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box sx={{ width: 45, height: 45, borderRadius: '50%', bgcolor: '#FDF4E0' }} />
                    <Box>
                      <Typography variant="body1">Gabriel Fentod</Typography>
                      <CustomBadge color="success" variant="dot" size="small">
                        <Typography variant="body2" color="color.text3">
                          Sent notification to gabrielfenton@gmail.com
                        </Typography>
                      </CustomBadge>
                    </Box>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" color="color.text3">
                      May 21, 2021 5:32 AM
                    </Typography>
                    <CustomChip
                      icon={<CheckCircle size={15} />}
                      label="Signed"
                      size="small"
                      color="success"
                      variant="outlined"
                    />
                  </Stack>
                </Stack>
              </Box>
              <Divider variant="fullWidth" sx={{ mt: '5px', mb: '5px' }} />
              <Box sx={{ p: '20px' }}>
                <Stack direction={sm ? 'row' : 'column'} justifyContent="space-between" spacing={2} alignItems="center">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box sx={{ width: 45, height: 45, borderRadius: '50%', bgcolor: '#FDF4E0' }} />
                    <Box>
                      <Typography variant="body1">John Michael Smith</Typography>
                      <CustomBadge color="success" variant="dot" size="small">
                        <Typography variant="body2" color="color.text3">
                          Sent notification to jms-2525@gmail.com
                        </Typography>
                      </CustomBadge>
                    </Box>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" color="color.text3">
                      May 21, 2021 5:32 AM
                    </Typography>
                    <CustomChip label="Email notification" size="small" color="default" variant="outlined" />
                  </Stack>
                </Stack>
              </Box>
              <Divider variant="fullWidth" sx={{ mt: '5px', mb: '5px' }} />
              <Box sx={{ p: '20px' }}>
                <Stack direction={sm ? 'row' : 'column'} justifyContent="space-between" spacing={2} alignItems="center">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box sx={{ width: 45, height: 45, borderRadius: '50%', bgcolor: '#FDF4E0' }} />
                    <Box>
                      <Typography variant="body1">John Michael Smith</Typography>
                      <CustomBadge color="success" variant="dot" size="small">
                        <Typography variant="body2" color="color.text3">
                          Sent notification to gabrielfenton@gmail.com
                        </Typography>
                      </CustomBadge>
                    </Box>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" color="color.text3">
                      May 21, 2021 5:32 AM
                    </Typography>
                    <CustomChip
                      icon={<CheckCircle size={15} />}
                      label="To Be Signed"
                      size="small"
                      color="warning"
                      variant="outlined"
                    />
                  </Stack>
                </Stack>
              </Box>
            </AccordionDetails>
          </CustomAccordion>
        </CustomWrapper>
      </Container>
    </Page>
  );
}
