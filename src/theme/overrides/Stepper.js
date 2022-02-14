// ----------------------------------------------------------------------

export default function Stepper(theme) {
  return {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: theme.palette.color.bg1
        }
      }
    }
  };
}
