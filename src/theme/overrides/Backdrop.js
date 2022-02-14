// ----------------------------------------------------------------------

export default function Backdrop() {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [`rgb(22,23,29, 0.9)`],
          '&.MuiBackdrop-invisible': {
            background: 'transparent'
          }
        }
      }
    }
  };
}
