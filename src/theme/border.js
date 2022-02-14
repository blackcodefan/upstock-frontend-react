import { alpha } from '@mui/material/styles';
import palette from './palette';

const LIGHT_MODE = palette.light.grey[500];
const DARK_MODE = '#000000';

const createCustomBorder = (color) => {
  const transparent = alpha(color, 0.24);
  const success = '#38CB89';

  return {
    z1: `1px solid ${transparent}`,
    z8: `1px solid ${transparent}`,
    b1: `1px solid ${success}`,
    b6: `6px solid ${palette.light.grey[0]}`,
    z12: `1px solid ${transparent}, 0 12px 24px 0 ${transparent}`,
    z16: `1px solid ${transparent}, 0 16px 32px -4px ${transparent}`,
    z20: `1px solid ${transparent}, 0 20px 40px -4px ${transparent}`,
    z24: `1px solid ${transparent}, 0 24px 48px 0 ${transparent}`,
    primary: `1px solid ${alpha(palette.light.primary.main, 0.24)}`,
    secondary: `1px solid ${alpha(palette.light.secondary.main, 0.24)}`,
    info: `1px solid ${alpha(palette.light.info.main, 0.24)}`,
    success: `1px solid ${alpha(palette.light.success.main, 0.24)}`,
    warning: `1px solid ${alpha(palette.light.warning.main, 0.24)}`,
    error: `1px solid ${alpha(palette.light.error.main, 0.24)}`,
    default: `1px solid ${alpha(palette.light.color.bg2)}`
  };
};

export const customBorder = {
  light: createCustomBorder(LIGHT_MODE),
  dark: createCustomBorder(DARK_MODE)
};
