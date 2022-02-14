import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';

// ----------------------------------------------------------------------

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body1,
  height: 46,
  margin: 10,
  position: 'relative',
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  borderRadius: 15
}));

const VerticalListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body1,
  padding: 0,
  height: 32,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderBottom: '3px solid',
  borderColor: theme.palette.common.white
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 20,
  height: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '8px'
});

// ----------------------------------------------------------------------

NavItem.propTypes = {
  isShow: PropTypes.bool,
  item: PropTypes.object
};

function NavItem({ item, isShow }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const { title, path, icon, children } = item;
  const isActiveRoot = path ? !!matchPath({ path, end: false }, pathname) : false;

  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen(!open);
  };

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': { display: 'block' }
  };

  const activeSubStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium'
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle)
          }}
        >
          {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
          {isShow && (
            <>
              <ListItemText disableTypography primary={title} />
              <Box
                component={Icon}
                icon={open ? arrowIosDownwardFill : arrowIosForwardFill}
                sx={{ width: 16, height: 16, ml: 1 }}
              />
            </>
          )}
        </ListItemStyle>

        {isShow && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children.map((item) => {
                const { title, path, icon } = item;
                const isActiveSub = path ? !!matchPath({ path, end: false }, pathname) : false;

                return (
                  <ListItemStyle
                    key={title}
                    component={RouterLink}
                    to={path}
                    sx={{
                      paddingLeft: 10,
                      ...(isActiveSub && activeSubStyle)
                    }}
                  >
                    {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
                    <ListItemText disableTypography primary={title} />
                  </ListItemStyle>
                );
              })}
            </List>
          </Collapse>
        )}
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle)
      }}
    >
      {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
      {isShow && (
        <>
          <ListItemText disableTypography primary={title} />
        </>
      )}
    </ListItemStyle>
  );
}

TopNavItem.propTypes = {
  isShow: PropTypes.bool,
  item: PropTypes.object
};

export function TopNavItem({ item, isShow }) {
  const { pathname } = useLocation();
  const { title, path, icon } = item;
  const isActiveRoot = path ? !!matchPath({ path, end: false }, pathname) : false;

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    borderColor: 'primary.main',
    '&:before': { display: 'block' }
  };

  return (
    <VerticalListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle)
      }}
    >
      {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
      {isShow && <ListItemText disableTypography primary={title} />}
    </VerticalListItemStyle>
  );
}

NavSection.propTypes = {
  isShow: PropTypes.bool,
  navConfig: PropTypes.array
};

export default function NavSection({ navConfig, isShow = true, ...other }) {
  return (
    <Box {...other}>
      <List disablePadding>
        {navConfig.map((item) => (
          <NavItem key={item.path} item={item} isShow={isShow} />
        ))}
      </List>
    </Box>
  );
}
