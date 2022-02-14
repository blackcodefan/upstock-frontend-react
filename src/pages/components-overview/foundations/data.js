export const material = `
~~~ js

import { ArrowRight, Alarm, Apple, ArrowUpRightCircle, Award, Building } from 'react-bootstrap-icons';// theme
import palette from 'src/theme/palette';

// ----------------------------------------------------------------------

function IconBootstrap() {
  return (
    <>
      <ArrowRight color={palette.light.primary.main} size={24} />
      <Alarm color={palette.light.primary.main} size={24} />
      <Apple color={palette.light.primary.main} size={24} />
      <ArrowUpRightCircle color={palette.light.primary.main} size={24} />
      <Award color={palette.light.primary.main} size={24} />
      <Building color={palette.light.primary.main} size={24} />
    </>
  );
}


~~~`;

export const iconify = `
~~~ js

import { Icon } from '@iconify/react';
import { SvgIcon } from '@mui/material';
import clockFill from '@iconify/icons-eva/clock-fill';
import chargingFill from '@iconify/icons-eva/charging-fill';
import alertCircleFill from '@iconify/icons-eva/alert-circle-fill';
import colorPaletteFill from '@iconify/icons-eva/color-palette-fill';
import arrowCircleDownFill from '@iconify/icons-eva/arrow-circle-down-fill';

// ----------------------------------------------------------------------

function IconIconify() {
  return (
    <>
      <SvgIcon color="action">
        <Icon icon={alertCircleFill} width={24} height={24} />
      </SvgIcon>
      <SvgIcon color="disabled">
        <Icon icon={chargingFill} width={24} height={24} />
      </SvgIcon>
      <SvgIcon color="error">
        <Icon icon={arrowCircleDownFill} width={24} height={24} />
      </SvgIcon>
      <SvgIcon color="inherit">
        <Icon icon={clockFill} width={24} height={24} />
      </SvgIcon>
      <SvgIcon color="primary">
        <Icon icon={colorPaletteFill} width={24} height={24} />
      </SvgIcon>
      <SvgIcon color="secondary">
      <Icon icon={colorPaletteFill} width={24} height={24} />
    </SvgIcon>
    </>
  );
}


~~~`;

export const local = `
~~~ js

import  SvgIconStyle  from 'src/components/SvgIconStyle';

// ----------------------------------------------------------------------

function IconLocal() {
  return (
    <>
      <SvgIconStyle src="/static/icons/elephant.svg" color="info" />
      <SvgIconStyle src="/static/icons/json-logo.svg" color="success" />
      <SvgIconStyle src="/static/icons/love-camera.svg" color="warning" />
      <SvgIconStyle src="/static/icons/shield.svg" color="error" />
    </>
  );
}

~~~`;
