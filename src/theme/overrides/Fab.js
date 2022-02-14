// ----------------------------------------------------------------------

export default function Fab(theme) {
  return {
    MuiFab: {
      defaultProps: {
        color: 'primary'
      },

      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: theme.palette.grey[400]
          }
        },
        sizeLarge: {
          height: 51,
          width: 51
        },
        sizeSmall: {
          height: 42,
          width: 42
        },
        primary: {
          color: theme.palette.grey[0],
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.hover
          },
          '&:active': {
            backgroundColor: theme.palette.primary.active
          }
        },
        borderedPrimary: {
          border: theme.customBorder.b6
        },
        extended: {
          '& svg': {
            marginRight: theme.spacing(1)
          }
        }
      }
    }
  };
}
