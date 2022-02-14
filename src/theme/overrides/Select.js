import { ChevronDown } from 'react-bootstrap-icons'; // theme
// ----------------------------------------------------------------------

export default function Select() {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: ChevronDown
      },

      styleOverrides: {
        root: {}
      }
    }
  };
}
