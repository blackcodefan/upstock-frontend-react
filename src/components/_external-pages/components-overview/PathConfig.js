import { paramCase } from 'change-case';

// ----------------------------------------------------------------------

export const FOUNDATION_LIST = ['Color', 'Typography', 'Shadows', 'Icons'].map((item) => ({
  name: item,
  href: `/components/${paramCase(item)}`,
  icon: `/static/components/${paramCase(item)}.png`
}));

export const EXTRA_LIST = [].map((item) => ({
  name: item,
  href: `/components/${paramCase(item)}`,
  icon: `/static/components/${paramCase(item)}.png`
}));

export const MATERIAL_LIST = ['Buttons', 'Textfield', 'Checkbox', 'Header', 'Cards', 'Elements'].map((item) => ({
  name: item,
  href: `/components/${paramCase(item)}`,
  icon: `/static/components/${paramCase(item)}.png`
}));
