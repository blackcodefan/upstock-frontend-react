// material

import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material';

// ---------------------------------------------------------------------
export const TabsBottomDecor = styled('div')`
  border-bottom: 1px solid;
  border-color: ${(props) => (props.focused ? 'white' : props.theme.palette.divider)};
  ${(props) => props.focused && 'z-index: 1500'};
  position: relative;
`;

export const CustomTabList = styled(TabList)`
  .MuiTabs-indicator {
    background-color: transparent;
  }
`;

// ----------------------------------------------------------------------

export const CustomTab = styled(Tab)`
  margin-right: ${(props) => props.theme.spacing(1)};
  ${(props) => props.focused && 'z-index: 1500'};
  position: relative;
  color: ${(props) => (props.focused ? 'white' : props.theme.palette.text.text1)};
  &:hover {
    background-color: ${(props) => (props.focused ? 'transparent' : props.theme.palette.grey[200])};
    opacity: 1;
  }
  &.Mui-selected {
    color: ${(props) => (props.focused ? 'white' : props.theme.palette.primary.main)};
    opacity: 1;
    border-bottom: 3px solid
      ${(props) => (props.focused ? props.theme.palette.primary.color : props.theme.palette.primary.main)};
  }
`;

// ---------------------------------------------------------------------

export const TabPanelContent = styled('div')(() => ({
  paddingTop: 20
}));
