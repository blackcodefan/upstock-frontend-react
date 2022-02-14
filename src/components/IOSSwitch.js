// material
import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';

const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
  ({ theme }) => ({
    width: 58,
    height: 30,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(28px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.success.main,
          opacity: 1,
          border: 0
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5
        }
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#38CB89',
        border: '6px solid #fff'
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
      }
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 26,
      height: 26,
      background: '#FFFFFF',
      boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.15)',
      borderRadius: '70px'
    },
    '& .MuiSwitch-track': {
      borderRadius: 30 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#F3F3F3' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500
      }),
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-20%)',
        width: 26,
        height: 26
      },
      '&:before': {
        backgroundImage: `url('/static/icons/controls/check-lg.svg')`,
        backgroundRepeat: 'no-repeat',
        left: '10px'
      },
      '&:after': {
        backgroundImage: `url('/static/icons/controls/x-lg.svg')`,
        backgroundRepeat: 'no-repeat',
        right: '-6px'
      }
    }
  })
);

export default IOSSwitch;
