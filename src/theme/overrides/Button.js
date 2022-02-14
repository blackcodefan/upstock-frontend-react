export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none'
          },
          borderRadius: theme.shape.borderRadius,
          boxShadow: 'none'
        },
        sizeSmall: {
          height: 29,
          width: 128
        },
        sizeMedium: {
          height: 44,
          width: 146
        },
        sizeLarge: {
          height: 57,
          minWidth: 187
        },
        sizeLargeX: {
          height: 57,
          minWidth: 257
        },
        sizeLargeXX: {
          height: 65,
          width: 255
        },
        containedInherit: {
          color: theme.palette.white,
          '&:hover': {
            backgroundColor: theme.palette.grey[400]
          }
        },
        containedPrimary: {
          color: theme.palette.grey[0],
          '&:hover': {
            backgroundColor: theme.palette.primary.hover
          },
          '&:active': {
            backgroundColor: theme.palette.primary.active
          }
        },
        textPrimary: {},
        textSecondary: {},
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          color: theme.palette.color.text1,
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        },
        outlinedError: {
          border: `1px solid ${theme.palette.error.main}`
        },
        outlinedPrimary: {
          border: `1px solid ${theme.palette.primary.main}`
        },
        outlinedSuccess: {
          border: `1px solid ${theme.palette.success.main}`
        },
        outlinedWarning: {
          border: `1px solid ${theme.palette.warning.main}`
        },
        outlinedSecondary: {
          border: `1px solid ${theme.palette.secondary.main}`
        },
        outlinedInfo: {
          border: `1px solid ${theme.palette.info.main}`
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        }
      }
    }
  };
}
