import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
// routes
import { PATH_AUTH } from 'routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Login',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: PATH_AUTH.login
  }
];

export default menuConfig;
