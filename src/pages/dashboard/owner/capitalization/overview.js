import { useRef, useState } from 'react';
// material
import {
  Backdrop,
  Container,
  IconButton,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { InfoCircle, PencilSquare } from 'react-bootstrap-icons';
import TabContext from '@mui/lab/TabContext';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import IconSuffixLabel from 'components/IconSuffixLabel';
// page components
import OverviewPanel from 'components/_dashboard/OverviewPanel';
import DataWidget from 'components/_dashboard/DataWidget';
import OverviewTabPanel from 'components/_dashboard/capitalization/OverviewTabPanel';
import ProgressBar from 'components/_dashboard/ProgressBar';
import GuidePopover from 'components/_dashboard/capitalization/GuidePopover';
import { TabsBottomDecor, CustomTabList, CustomTab } from 'components/_dashboard/CustomTabComponents';
import DonutChart from 'components/_dashboard/DonutChart';
import { ColorLegend, CustomTd, CustomTh, LegendWrapper } from 'components/_dashboard/CustomTableComponents';

import {
  colors,
  data,
  labels,
  valuationColors,
  valuationData,
  valuationLabels,
  valuationTableData,
  overviewOverallData
} from './dummy-data';

// ----------------------------------------------------------------------

export default function CapitalizationOverview() {
  const { themeStretch } = useSettings();
  const theme = useTheme();
  const [tab, setTab] = useState('overall');
  const [backdrop, setBackdrop] = useState(false);
  const [focused, setFocused] = useState('');
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  // capitalization panel reference to place a popover
  const infoRef = useRef();
  const capRef = useRef();
  const overallRef = useRef();
  const valRef = useRef();
  const equityRef = useRef();
  const approxRef = useRef();

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const guideInfo = () => {
    if (!backdrop) setBackdrop(true);
    setFocused('info');
  };

  const guideCap = () => {
    setTab('overall');
    setFocused('capitalization');
  };

  const guideOverall = () => {
    setTab('overall');
    setFocused('overall');
  };

  const guideValuation = () => {
    setTab('valuation');
    setFocused('valuation');
  };

  const guideEquity = () => {
    setTab('equity');
    setFocused('equity');
  };

  const guideApprox = () => {
    setTab('approximate');
    setFocused('approx');
  };

  const onClose = () => {
    setTab('overall');
    setFocused('');
    setBackdrop(false);
  };

  return (
    <Page title="General: App | Upstock">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <OverviewPanel focused={focused === 'capitalization' ? 1 : 0} ref={capRef}>
          <IconSuffixLabel focused={focused === 'info' ? 1 : 0}>
            <Typography
              variant="subtitle1"
              sx={{ color: focused === 'info' ? 'white' : 'text.secondary', fontSize: '18px' }}
            >
              Friends and Guest's Capitalization
            </Typography>
            <IconButton onClick={guideInfo} ref={infoRef}>
              <InfoCircle size={16} color={theme.palette.primary.main} />
            </IconButton>
          </IconSuffixLabel>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <DataWidget>
                <Typography varient="subtitle2" sx={{ color: 'text.info' }}>
                  Valuation:
                </Typography>
                <IconSuffixLabel>
                  <Typography varient="subtitle1">$6,000,000.00</Typography>
                  <IconButton>
                    <PencilSquare size={16} color={theme.palette.primary.main} />
                  </IconButton>
                </IconSuffixLabel>
              </DataWidget>
            </Grid>
            <Grid item xs={12} md={4}>
              <DataWidget>
                <Typography varient="subtitle2" sx={{ color: 'text.info' }}>
                  LEV:
                </Typography>
                <IconSuffixLabel>
                  <Typography varient="subtitle1">$7,035,960.00</Typography>
                  <IconButton>
                    <PencilSquare size={16} color={theme.palette.primary.main} />
                  </IconButton>
                </IconSuffixLabel>
              </DataWidget>
            </Grid>
            <Grid item xs={12} md={4}>
              <DataWidget>
                <Typography varient="subtitle2" sx={{ color: 'text.info' }}>
                  Total Company Share:
                </Typography>
                <IconSuffixLabel>
                  <Typography varient="subtitle1">$100,000</Typography>
                  <IconButton>
                    <PencilSquare size={16} color={theme.palette.primary.main} />
                  </IconButton>
                </IconSuffixLabel>
              </DataWidget>
            </Grid>
          </Grid>
        </OverviewPanel>
        <TabContext value={tab}>
          <TabsBottomDecor
            focused={
              focused === 'overall' || focused === 'valuation' || focused === 'equity' || focused === 'approx' ? 1 : 0
            }
            sx={{ pb: 1 }}
          >
            <CustomTabList onChange={handleChange} variant="scrollable">
              <CustomTab
                label="Overall Ownership"
                value="overall"
                focused={
                  focused === 'overall' || focused === 'valuation' || focused === 'equity' || focused === 'approx'
                    ? 1
                    : 0
                }
                ref={overallRef}
              />
              <CustomTab
                label="Valuation Distribution"
                value="valuation"
                focused={
                  focused === 'overall' || focused === 'valuation' || focused === 'equity' || focused === 'approx'
                    ? 1
                    : 0
                }
                ref={valRef}
              />
              <CustomTab
                label="Equity Distribution"
                value="equity"
                focused={
                  focused === 'overall' || focused === 'valuation' || focused === 'equity' || focused === 'approx'
                    ? 1
                    : 0
                }
                ref={equityRef}
              />
              <CustomTab
                label="Approximate Value Earned"
                value="approximate"
                focused={
                  focused === 'overall' || focused === 'valuation' || focused === 'equity' || focused === 'approx'
                    ? 1
                    : 0
                }
                ref={approxRef}
              />
            </CustomTabList>
          </TabsBottomDecor>
          <OverviewTabPanel
            tabValue="overall"
            title="Overall Ownership"
            detailPageUrl="/dashboard/detail-capitalization-overview/overall"
            focused={focused === 'overall' ? 1 : 0}
          >
            <Grid spacing={2} container>
              <Grid item xs={12} sm={6}>
                <DonutChart data={data} colors={colors} labels={labels} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <CustomTh focused={focused === 'overall' ? 1 : 0}>Name</CustomTh>
                        <CustomTh focused={focused === 'overall' ? 1 : 0}>Shares</CustomTh>
                        <CustomTh focused={focused === 'overall' ? 1 : 0}>Percentage</CustomTh>
                      </TableRow>
                      {overviewOverallData.map((data) => (
                        <TableRow key={data.name} hover>
                          <CustomTd focused={focused === 'overall' ? 1 : 0}>
                            <LegendWrapper>
                              <ColorLegend color={data.color} />
                              {data.name}
                            </LegendWrapper>
                          </CustomTd>
                          <CustomTd focused={focused === 'overall' ? 1 : 0}>{data.shares}</CustomTd>
                          <CustomTd focused={focused === 'overall' ? 1 : 0}>{data.percent}%</CustomTd>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </OverviewTabPanel>
          <OverviewTabPanel
            tabValue="valuation"
            title="Valuation Distribution"
            detailPageUrl="/dashboard/detail-capitalization-overview/valuation"
            focused={focused === 'valuation' ? 1 : 0}
          >
            <Grid spacing={2} container sx={{ pt: '20px' }}>
              <Grid item xs={12} sm={6}>
                <DonutChart data={valuationData} colors={valuationColors} labels={valuationLabels} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <CustomTh focused={focused === 'valuation' ? 1 : 0}>Name</CustomTh>
                        <CustomTh focused={focused === 'valuation' ? 1 : 0}>Shares</CustomTh>
                        <CustomTh focused={focused === 'valuation' ? 1 : 0}>Percentage</CustomTh>
                      </TableRow>
                      {valuationTableData.map((data) => (
                        <TableRow key={data.name} hover>
                          <CustomTd focused={focused === 'valuation' ? 1 : 0}>
                            <LegendWrapper>
                              <ColorLegend color={data.color} />
                              {data.name}
                            </LegendWrapper>
                          </CustomTd>
                          <CustomTd focused={focused === 'valuation' ? 1 : 0}>{data.shares}</CustomTd>
                          <CustomTd focused={focused === 'valuation' ? 1 : 0}>{data.percent}%</CustomTd>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </OverviewTabPanel>
          <OverviewTabPanel
            tabValue="equity"
            title="Equity Distribution"
            detailPageUrl="/dashboard/detail-capitalization-overview/equity"
            focused={focused === 'equity' ? 1 : 0}
          >
            <Grid spacing={2} container sx={{ pt: '20px' }}>
              <Grid item xs={12} sm={6}>
                <DonutChart data={valuationData} colors={valuationColors} labels={valuationLabels} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <CustomTh focused={focused === 'equity' ? 1 : 0}>Name</CustomTh>
                        <CustomTh focused={focused === 'equity' ? 1 : 0}>Shares</CustomTh>
                        <CustomTh focused={focused === 'equity' ? 1 : 0}>Percentage</CustomTh>
                      </TableRow>
                      {valuationTableData.map((data) => (
                        <TableRow key={data.name} hover>
                          <CustomTd focused={focused === 'equity' ? 1 : 0}>
                            <LegendWrapper>
                              <ColorLegend color={data.color} />
                              {data.name}
                            </LegendWrapper>
                          </CustomTd>
                          <CustomTd focused={focused === 'equity' ? 1 : 0}>{data.shares}</CustomTd>
                          <CustomTd focused={focused === 'equity' ? 1 : 0}>{data.percent}%</CustomTd>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </OverviewTabPanel>
          <OverviewTabPanel
            tabValue="approximate"
            title="Approximate Value Earned"
            detailPageUrl="/dashboard/detail-capitalization-overview/approx"
            focused={focused === 'approx' ? 1 : 0}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ProgressBar
                  name="Alex Fedoseev"
                  width={800}
                  earned="195,232.42"
                  focused={focused === 'approx' ? 1 : 0}
                />
              </Grid>
              <Grid item xs={12}>
                <ProgressBar
                  name="Sergey Tarasova"
                  width={750}
                  earned="161,017.13"
                  focused={focused === 'approx' ? 1 : 0}
                />
              </Grid>
              <Grid item xs={12}>
                <ProgressBar name="Rob Wise" width={700} earned="80,843.56" focused={focused === 'approx' ? 1 : 0} />
              </Grid>
              <Grid item xs={12}>
                <ProgressBar
                  name="Yauheni Arkhipau"
                  width={600}
                  earned="69,857.11"
                  focused={focused === 'approx' ? 1 : 0}
                />
              </Grid>
              <Grid item xs={12}>
                <ProgressBar name="Evrim Asian" width={550} earned="55,323.12" focused={focused === 'approx' ? 1 : 0} />
              </Grid>
              <Grid item xs={12}>
                <ProgressBar
                  name="Andrey Tkachenko"
                  width={500}
                  earned="50,434.23"
                  focused={focused === 'approx' ? 1 : 0}
                />
              </Grid>
            </Grid>
          </OverviewTabPanel>
        </TabContext>
      </Container>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
        onClick={() => setBackdrop(false)}
      />
      <GuidePopover
        sx={{ ml: { xs: 0, sm: '50px' }, mt: { xs: '20px', sm: 0 } }}
        anchorOrigin={{
          vertical: sm ? 'center' : 'bottom',
          horizontal: sm ? 'left' : 'right'
        }}
        transformOrigin={{
          vertical: sm ? 'center' : 'top',
          horizontal: sm ? 'left' : 'right'
        }}
        anchorEl={infoRef.current}
        open={backdrop && focused === 'info'}
        title="Friends and Guest's Capitalization"
        description="This page is an overview of the information relative to capitalization"
        onBack={onClose}
        onNext={guideCap}
        onClose={onClose}
        arrowPlacement={sm ? 'left' : 'top'}
      />
      <GuidePopover
        sx={{ mt: '15px' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: sm ? 'left' : 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: sm ? 'left' : 'center'
        }}
        anchorEl={capRef.current}
        open={backdrop && focused === 'capitalization'}
        title="Friends and Guest's Capltaliztion"
        description="You can find here the general information regarding the capitalization of your company, such as the current valuation."
        onBack={guideInfo}
        onNext={guideOverall}
        onClose={onClose}
        arrowPlacement="top"
      />
      <GuidePopover
        sx={{ mb: '15px' }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        anchorEl={overallRef.current}
        open={backdrop && focused === 'overall'}
        title="Overall Ownership"
        description="Here is a representation of how your company's capital is owned by individual members"
        onBack={guideCap}
        onNext={guideValuation}
        onClose={onClose}
        arrowPlacement="bottom"
      />
      <GuidePopover
        sx={{ mb: '15px' }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        anchorEl={valRef.current}
        open={backdrop && focused === 'valuation'}
        title="Valuation Distribution"
        description="Here is a representation of how your company's worth is divided"
        onBack={guideOverall}
        onNext={guideEquity}
        onClose={onClose}
        arrowPlacement="bottom"
      />
      <GuidePopover
        sx={{ mb: '15px' }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        anchorEl={equityRef.current}
        open={backdrop && focused === 'equity'}
        title="Equity Distribution"
        description="Here is a representation of how your company's capital is divided."
        onBack={guideValuation}
        onNext={guideApprox}
        onClose={onClose}
        arrowPlacement="bottom"
      />
      <GuidePopover
        sx={{ mb: '15px' }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        anchorEl={approxRef.current}
        open={backdrop && focused === 'approx'}
        title="Approximate Value Earned"
        description="Here is a representation of how your company's capital is divided."
        onBack={guideEquity}
        onDone={onClose}
        onClose={onClose}
        arrowPlacement="bottom"
      />
    </Page>
  );
}
