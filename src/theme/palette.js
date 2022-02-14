import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8)
};
// Primary 1
const PRIMARY = {
  color: '#FFFFFF',
  lighter: '#F4F8FF', // Transparent 1
  light: '#E1ECFF', // Secondary 1
  main: '#379EFF',
  dark: '#1c4f80',
  darker: '#0b2033',
  hover: '#2F8ADF',
  active: '#2A76BD',
  contrastText: GREY[900]
};
// Primary 2
const SUCCESS = {
  color: '#FFFFFF',
  lighter: '#F5FCF9', // Transparent 2
  light: '#E5F6EF', // Secondary 2
  main: '#38CB89',
  dark: '#31b168',
  darker: '#0b291b',
  hover: '#22AB67',
  active: '#207842',
  contrastText: GREY[800]
};
// Primary 3
const WARNING = {
  lighter: '#FFFBF1', // Transparent 3
  light: '#FDF4E0', // Secondary 3
  main: '#FFAB00',
  dark: '#805600',
  darker: '#332200',
  contrastText: GREY[800]
};
// Primary 4
const ERROR = {
  lighter: '#FFF6F4', // Transparent 4
  light: '#FFE6E0', // Secondary 4
  main: '#FF5630',
  dark: '#802b18',
  darker: '#33110a',
  contrastText: '#fff'
};
// Primary 5
const SECONDARY = {
  color: '#B0B7C3',
  lighter: '#faecf7',
  light: '#ebb2de',
  main: '#CD3EAD',
  dark: '#671f57',
  darker: '#290c23',
  contrastText: '#fff',
  hover: '#FFFFFF'
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff'
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main)
};

const CHART_COLORS = {
  violet: ['#CD3EAD', '#d765bd', '#e18bce', '#ebb2de'],
  blue: ['#379EFF', '#5fb1ff', '#87c5ff', '#afd8ff'],
  green: ['#38CB89', '#60d5a1', '#88e0b8', '#afead0'],
  yellow: ['#FFAB00', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF5630', '#FF8F6D', '#FFBD98', '#FFF2D4']
};

const COLOR = {
  shadow: '#B0B7C3',
  primary1: '#379EFF',
  primary2: '#38CB89',
  primary3: '#FFAB00',
  primary4: '#FF5630',
  primary5: '#CD3EAD',
  secondary1: '#EBF2FF',
  secondary2: '#E5F7EF',
  secondary3: '#FDF4E0',
  secondary4: '#FFEFEB',
  transparent1: '#F4F8FF',
  transparent2: '#F5FCF9',
  transparent3: '#FFFBF1',
  transparent4: '#FFF6F4',
  text1: '#323B4B',
  text2: '#4E5D78',
  text3: '#8A94A6',
  text4: '#B0B7C3',
  bg1: '#C1C7D0',
  bg2: '#F3F3F3',
  bg3: '#FAFBFC',
  bg4: '#FFFFFF'
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  color: COLOR,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

const palette = {
  light: {
    ...COMMON,
    text: {
      primary: COLOR.text1,
      secondary: COLOR.text2,
      info: COLOR.text3,
      disabled: COLOR.text4
    },
    background: {
      paper: COLOR.bg3,
      default: COLOR.bg4,
      neutral: COLOR.bg2,
      deep: COLOR.bg1
    },
    action: { active: GREY[600], ...COMMON.action }
  },
  dark: {
    ...COMMON,
    text: {
      primary: COLOR.bg1,
      secondary: COLOR.bg2,
      info: COLOR.bg3,
      disabled: COLOR.bg4
    },
    background: {
      paper: COLOR.text1,
      default: COLOR.text2,
      neutral: COLOR.text3,
      deep: COLOR.text4
    },
    action: { active: GREY[500], ...COMMON.action }
  }
};

export default palette;
