import { useTheme } from '@mui/material/styles';
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

export default function GlobalStyles() {
  const theme = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch'
        },
        body: {
          width: '100%',
          height: '100%'
        },
        '#root': {
          width: '100%',
          height: '100%'
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            }
          }
        },
        textarea: {
          '&::-webkit-input-placeholder': {
            color: theme.palette.text.disabled
          },
          '&::-moz-placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled
          },
          '&:-ms-input-placeholder': {
            color: theme.palette.text.disabled
          },
          '&::placeholder': {
            color: theme.palette.text.disabled
          }
        },

        img: { display: 'block', maxWidth: '100%' },

        // Lazy Load Img
        '.blur-up': {
          WebkitFilter: 'blur(5px)',
          filter: 'blur(5px)',
          transition: 'filter 400ms, -webkit-filter 400ms'
        },
        '.blur-up.lazyloaded ': {
          WebkitFilter: 'blur(0)',
          filter: 'blur(0)'
        },
        '.guide-popover .MuiPopover-paper': {
          maxWidth: 400,
          [theme.breakpoints.only('xs')]: {
            maxWidth: 'calc(100% - 20px)'
          },
          padding: '20px',
          overflow: 'visible'
        },
        '.sigCanvas': {
          width: '470px',
          height: '300px',
          backgroundColor: '#FAFBFC',
          borderRadius: '10px',
          [theme.breakpoints.down('lg')]: {
            width: '100%',
            height: '200px'
          }
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          [theme.breakpoints.only('xs')]: {
            width: '100%',
            overflow: 'scroll'
          }
        }
      }}
    />
  );
}
