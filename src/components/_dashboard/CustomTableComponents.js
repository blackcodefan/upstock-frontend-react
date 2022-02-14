// material
import { Box, styled, TableContainer, TableCell } from '@mui/material';
// ------------------------------------------------------------------------------
export const CustomTableContainer = styled(TableContainer)`
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.palette.color.bg3};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.palette.color.bg2};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.palette.color.bg1};
  }
`;

export const CustomTd = styled(TableCell)`
  border-top: 1px solid ${(props) => (props.focused ? 'white' : props.theme.palette.grey[500])};
  ${(props) => props.top && 'vertical-align: top;'}
  color: ${(props) => (props.focused ? 'white' : props.theme.palette.text.primary)};
  ${(props) => props.center && 'text-align: center;'}
`;

export const CustomTh = styled(TableCell)`
  padding: 8px;
  color: ${(props) => (props.focused ? 'white' : props.theme.palette.text.info)};
  ${(props) => props.center && 'text-align: center;'}
`;

export const LegendWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}));

export const ColorLegend = styled(Box)(({ color }) => ({
  width: 20,
  height: 20,
  backgroundColor: color,
  display: 'inline-block',
  borderRadius: 3
}));
