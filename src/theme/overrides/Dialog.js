// ----------------------------------------------------------------------

export default function Dialog(theme) {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z24,
          '&.MuiPaper-rounded': {
            borderRadius: theme.shape.borderRadiusMd
          },
          '&.MuiDialog-paperFullScreen': {
            borderRadius: 0
          },
          '&.MuiDialog-paper .MuiDialogActions-root': {
            padding: 20
          },
          '@media (max-width: 600px)': {
            margin: theme.spacing(2)
          },
          '@media (max-width: 663.95px)': {
            '&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody': {
              maxWidth: '100%'
            }
          }
        },
        paperFullWidth: {
          width: '100%'
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '20px'
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          borderTop: 0,
          borderBottom: 0,
          paddingTop: '20px',
          padding: '20px'
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          '& > :not(:first-of-type)': {
            marginLeft: theme.spacing(1.5)
          }
        }
      }
    }
  };
}
