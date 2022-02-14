import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useLocation, useNavigate } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, Drawer, Tooltip, CardActionArea, Popover, Typography, Divider } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
// hooks
import useCollapseDrawer from 'hooks/useCollapseDrawer';
import useAuth from 'hooks/useAuth';
// route
import { PATH_AUTH } from 'routes/paths';
// components
import Logo from 'components/Logo';
import MyAvatar from 'components/MyAvatar';
import Scrollbar from 'components/Scrollbar';
import NavSection from 'components/NavSection';
import { MHidden } from 'components/@material-extend';
import SidebarActionBtn from 'components/_dashboard/sidebar/BottomActionClip';
import { SidebarRoutes, MobileRoutes } from './SidebarConfig';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.complex
    })
  }
}));

// ---------------------------------------------------

const ActionButton = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  height: 46,
  position: 'relative',
  textTransform: 'capitalize',
  margin: '8px',
  padding: '12px',
  color: theme.palette.text.secondary,
  borderRadius: 15
}));

// ----------------------------------------------------------------------

IconCollapse.propTypes = {
  onToggleCollapse: PropTypes.func,
  collapseClick: PropTypes.bool
};

function IconCollapse({ onToggleCollapse, collapseClick }) {
  return (
    <Tooltip title="Mini Menu">
      <CardActionArea
        onClick={onToggleCollapse}
        sx={{
          width: 18,
          height: 18,
          display: 'flex',
          cursor: 'pointer',
          borderRadius: '50%',
          alignItems: 'center',
          color: 'text.primary',
          justifyContent: 'center',
          border: 'solid 1px currentColor',
          ...(collapseClick && {
            borderWidth: 2
          })
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: 'currentColor',
            transition: (theme) => theme.transitions.create('all'),
            ...(collapseClick && {
              width: 0,
              height: 0
            })
          }}
        />
      </CardActionArea>
    </Tooltip>
  );
}

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { user, logout } = useAuth();
  const { isCollapse, collapseClick, collapseHover, onHoverEnter, onHoverLeave } = useCollapseDrawer();
  const [click, setClick] = useState(null);
  const [logoPopver, setLogoPopover] = useState(null);

  const handleClick = (event) => {
    setClick(event.currentTarget);
  };

  const handleClose = () => {
    setClick(null);
  };

  const handleLogoArrowClick = (event) => {
    setLogoPopover(event.currentTarget);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate(PATH_AUTH.login);
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Unable to logout', { variant: 'error' });
    }
  };

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <Stack
        spacing={3}
        sx={{
          px: 2.5,
          pt: 3,
          pb: 2,
          ...(isCollapse && {
            alignItems: 'center'
          })
        }}
      >
        <MHidden width="lgDown">
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
            <Logo />
            <IconButton onClick={handleLogoArrowClick}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Stack>
        </MHidden>
        <MHidden width="lgUp">
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" justifyContent="flex-start">
              <Logo />
              <IconButton onClick={handleLogoArrowClick}>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Stack>
            <IconButton onClick={onCloseSidebar}>
              <CloseIcon color="primary" />
            </IconButton>
          </Stack>
        </MHidden>
        <Popover
          open={Boolean(logoPopver)}
          anchorEl={logoPopver}
          onClose={() => setLogoPopover(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
        >
          <Box sx={{ minWidth: 300, padding: '20px 8px' }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: 22, paddingLeft: '20px' }}>
              Predo Inc
            </Typography>
            <Divider sx={{ m: '20px 20px 10px' }} />
            <Typography varient="subtitle2" sx={{ color: 'color.bg1', padding: '0 20px' }}>
              <ListItemText>Team</ListItemText>
            </Typography>
            <ActionButton>
              <ListItemText>Invite Team Member</ListItemText>
            </ActionButton>
            <ActionButton>
              <ListItemText>Team Settings</ListItemText>
            </ActionButton>
            <Typography varient="subtitle2" sx={{ color: 'color.bg1', padding: '0 20px' }}>
              <ListItemText>Features</ListItemText>
            </Typography>
            <ActionButton>
              <ListItemText>Enable Features</ListItemText>
            </ActionButton>
            <Typography varient="subtitle2" sx={{ color: 'color.bg1', padding: '0 20px' }}>
              <ListItemText>Company</ListItemText>
            </Typography>
            <ActionButton>
              <ListItemText>Company Settings</ListItemText>
            </ActionButton>
            <ActionButton>
              <ListItemText>Legal Address</ListItemText>
            </ActionButton>
            <ActionButton>
              <ListItemText>Integrations</ListItemText>
            </ActionButton>
          </Box>
        </Popover>
      </Stack>

      <MHidden width="lgDown">
        <NavSection navConfig={SidebarRoutes()} isShow={!isCollapse} />
      </MHidden>

      <MHidden width="lgUp">
        <NavSection navConfig={MobileRoutes()} isShow={!isCollapse} />
      </MHidden>

      <Box sx={{ flexGrow: 1 }} />

      {!isCollapse && (
        <Stack spacing={3} alignItems="center" sx={{ p: '18px' }}>
          <SidebarActionBtn onClick={handleClick}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <MyAvatar sx={{ bgcolor: 'primary.main', color: 'white', width: 32, height: 32, fontSize: 14 }} />
              <Typography variant="body2">{user.displayName}</Typography>
            </Stack>
            <KeyboardArrowDownIcon />
          </SidebarActionBtn>
          <Popover
            open={Boolean(click)}
            anchorEl={click}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
          >
            <Box sx={{ p: 2, minwidth: 327, padding: '20px' }}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontSize: 22, px: '20px' }}>
                {user.displayName}
              </Typography>
              <Divider sx={{ m: '20px 20px 10px' }} />
              <Typography varient="subtitle2" sx={{ color: 'color.bg1', padding: '0 20px' }}>
                <ListItemText>Account</ListItemText>
              </Typography>
              <ActionButton>
                <ListItemText>Profile</ListItemText>
              </ActionButton>
              <ActionButton>
                <ListItemText>Security</ListItemText>
              </ActionButton>
              <ActionButton>
                <ListItemText>Notifications</ListItemText>
              </ActionButton>
              <ActionButton onClick={handleLogout}>
                <ListItemText>Log out</ListItemText>
              </ActionButton>
            </Box>
          </Popover>
        </Stack>
      )}
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse ? COLLAPSE_WIDTH : DRAWER_WIDTH
        },
        ...(collapseClick && {
          position: 'absolute'
        })
      }}
    >
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              ...(isCollapse && {
                width: COLLAPSE_WIDTH
              }),
              ...(collapseHover && {
                borderRight: 0,
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
                boxShadow: (theme) => theme.customShadows.z20,
                bgcolor: (theme) => alpha(theme.palette.background.default, 0.88)
              })
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
