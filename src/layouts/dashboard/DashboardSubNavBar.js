import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useLocation, NavLink } from 'react-router-dom';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// material
import { alpha, styled } from '@mui/material/styles';
import {
  AppBar,
  Box,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  useTheme
} from '@mui/material';
import { ChevronLeft } from 'react-bootstrap-icons';
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// components
import TopNavRoutes from './TopSubNavBarConfig';
import { TopNavItem } from '../../components/NavSection';
import { MHidden } from '../../components/@material-extend';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 1),
  borderBottom: '1px solid #F3F3F3', // Todo - replace with theme color if exists
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------
DashboardSubNavBar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardSubNavBar({ onOpenSidebar }) {
  const theme = useTheme();
  const { isCollapse } = useCollapseDrawer();
  const { pathname } = useLocation();
  const topNavBarConfig = TopNavRoutes();

  const isDetailPage = () => {
    if (pathname.includes('/detail-')) {
      const parentRoute = pathname.replace('detail-', '').split('/')[2];
      return parentRoute.replace('-', '/');
    }
    return false;
  };

  const getSubMenu = () => {
    let navItems = [];
    if (pathname.includes('/dash/')) navItems = topNavBarConfig.dash;
    else if (pathname.includes('/capitalization')) navItems = topNavBarConfig.capitalization;
    else if (pathname.includes('/rsu-fixed')) navItems = topNavBarConfig.rsufixed;
    else if (pathname.includes('/rsu-dynamic')) navItems = topNavBarConfig.rsudynamic;
    else if (pathname.includes('/team')) navItems = topNavBarConfig.team;
    else if (pathname.includes('/legal')) navItems = topNavBarConfig.legal;
    return navItems;
  };

  return (
    <RootStyle
      sx={{
        ...(isCollapse && {
          width: { lg: `calc(100% - ${COLLAPSE_WIDTH}px)` }
        })
      }}
    >
      <ToolbarStyle>
        <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>

        {isDetailPage() ? (
          <Box>
            <ListItemButton
              color="red"
              size="small"
              sx={{ borderRadius: '10px' }}
              to={`/dashboard/${isDetailPage()}`}
              component={NavLink}
            >
              <ListItemIcon>
                <ChevronLeft size={20} color={theme.palette.primary.main} />
              </ListItemIcon>
              <ListItemText sx={{ color: 'primary.main' }}>Back to the overview</ListItemText>
            </ListItemButton>
          </Box>
        ) : (
          <MHidden width="lgDown">
            <Stack direction="row" spacing="32px">
              {getSubMenu().map((item) => (
                <TopNavItem key={item.path} item={item} isShow={!isCollapse} />
              ))}
            </Stack>
          </MHidden>
        )}
      </ToolbarStyle>
    </RootStyle>
  );
}
