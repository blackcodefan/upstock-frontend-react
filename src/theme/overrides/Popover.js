// ----------------------------------------------------------------------

export default function Popover(theme) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z12,
          overflowX: 'visible !important',
          overflowY: 'visible !important'
        }
      }
    }
  };
}
