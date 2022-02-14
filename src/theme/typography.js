function pxToRem(value) {
  return `${value / 16}rem`;
}

// function responsiveFontSizes({ sm, md, lg }) {
//   return {
//     '@media (min-width:600px)': {
//       fontSize: pxToRem(sm)
//     },
//     '@media (min-width:900px)': {
//       fontSize: pxToRem(md)
//     },
//     '@media (min-width:1200px)': {
//       fontSize: pxToRem(lg)
//     }
//   };
// }

const FONT_PRIMARY = 'Poppins, sans-serif'; // Google Font
const FONT_SECONDARY = 'Mulish'; // Google Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 97 / 64,
    fontSize: pxToRem(80)
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(60)
  },
  h3: {
    fontWeight: 700,
    fontSize: pxToRem(48)
  },
  h4: {
    fontWeight: 700,
    fontSize: pxToRem(28)
  },
  h5: {
    fontWeight: 700,
    fontSize: pxToRem(22)
  },
  h6: {
    fontWeight: 700,
    fontSize: pxToRem(18)
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    fontFamily: FONT_SECONDARY
  },
  subtitle2: {
    fontWeight: 600,
    fontSize: pxToRem(14),
    fontFamily: FONT_SECONDARY
  },
  caption: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(14),
    fontFamily: FONT_SECONDARY
  },
  body1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(14),
    fontFamily: FONT_SECONDARY
  },
  body2: {
    fontWeight: 600,
    fontSize: pxToRem(12),
    fontFamily: FONT_SECONDARY
  },
  overline: {
    fontWeight: 600,
    fontSize: pxToRem(16),
    fontFamily: FONT_SECONDARY,
    textTransform: 'none'
  },
  inherit: {
    fontWeight: 600,
    fontSize: pxToRem(14),
    fontFamily: FONT_SECONDARY
  },
  button: {
    fontWeight: 600,
    fontSize: pxToRem(14),
    fontFamily: FONT_SECONDARY,
    textTransform: 'none'
  }
};

export default typography;
