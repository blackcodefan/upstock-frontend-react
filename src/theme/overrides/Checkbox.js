import { SvgIcon } from '@mui/material';

function Icon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 28 28">
      <rect x="1" y="1" width="26" height="26" rx="7" fill="white" stroke="#828282" strokeWidth="2" />
    </SvgIcon>
  );
}

function CheckedIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 28 28">
      <rect x="1" y="1" width="26" height="26" rx="7" fill="white" stroke="#828282" strokeWidth="2" />
      <path d="M20.5852 9.10225C20.8049 9.32192 20.8049 9.67808 20.5852 9.89775L12.7102 17.7727C12.6048 17.8782 12.4617 17.9375 12.3125 17.9375C12.1633 17.9375 12.0202 17.8782 11.9148 17.7727L7.97725 13.8352C7.75758 13.6156 7.75758 13.2594 7.97725 13.0398C8.19692 12.8201 8.55308 12.8201 8.77275 13.0398L12.3125 16.5795L19.7898 9.10225C20.0094 8.88258 20.3656 8.88258 20.5852 9.10225Z" />
    </SvgIcon>
  );
}

function IndeterminateIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm-1.75 8h-6.5a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75h6.5a.75.75 0 00.75-.75v-.5a.75.75 0 00-.75-.75z" />
    </SvgIcon>
  );
}

export default function Checkbox(theme) {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <Icon />,
        checkedIcon: <CheckedIcon />,
        indeterminateIcon: <IndeterminateIcon />
      },

      styleOverrides: {
        root: {
          padding: theme.spacing(1),
          '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
            color: theme.palette.action.disabled
          },
          '& .MuiSvgIcon-fontSizeMedium': {
            width: 28,
            height: 28
          },
          '& .MuiSvgIcon-fontSizeSmall': {
            width: 20,
            height: 20
          },
          svg: {
            fontSize: 24,
            '&[font-size=small]': {
              fontSize: 20
            }
          },
          checked: {}
        }
      }
    }
  };
}
