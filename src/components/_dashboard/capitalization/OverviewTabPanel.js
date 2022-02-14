import React from 'react';
import { PropTypes } from 'prop-types';
import { Box, ListItemButton, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import TabPanel from '@mui/lab/TabPanel';
import GuideFocusable from 'components/_dashboard/capitalization/GuideFocusable';

const OverviewTabPanel = ({ children, title, detailPageUrl, tabValue, focused }) => (
  <GuideFocusable focused={focused}>
    <TabPanel value={tabValue}>
      <Box sx={{ pt: '20px' }}>
        {title && (
          <Stack direction="row" alignItems="end" spacing={0.5}>
            <Typography sx={{ fontSize: 18, color: focused ? 'white' : 'color.text1' }}>{title}</Typography>
            {detailPageUrl && (
              <Box color="primary.main">
                <ListItemButton
                  color="primary"
                  size="small"
                  sx={{ p: '2px 5px', borderRadius: '8px', lineHeight: '18px' }}
                  to={detailPageUrl}
                  component={NavLink}
                >
                  Details
                </ListItemButton>
              </Box>
            )}
          </Stack>
        )}
        <Box sx={{ pt: '20px' }}>{children}</Box>
      </Box>
    </TabPanel>
  </GuideFocusable>
);

OverviewTabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  detailPageUrl: PropTypes.string,
  tabValue: PropTypes.string.isRequired,
  focused: PropTypes.number
};

export default OverviewTabPanel;
