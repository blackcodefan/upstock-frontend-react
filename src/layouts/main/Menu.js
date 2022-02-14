import * as React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import arrowIosUpwardFill from '@iconify/icons-eva/arrow-ios-upward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { styled } from '@mui/material/styles';

import { Box, Link, List, Stack, Popover, ListItem, ListSubheader } from '@mui/material';

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: '#B0B7C3',
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  // borderRadius: '50px',
  // height: '4px',
  // boxShadow: '0 22px 0 0 #B0B7C3',
  borderBottom: '4px solid #B0B7C3',
  '&.active': {
    // borderRadius: '50px',
    // height: '4px',
    borderBottom: '4px solid #379eff'
  },
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none'
  }
}));

const ListItemStyle = styled(ListItem)(({ theme }) => ({
  ...theme.typography.body1,
  padding: 0,
  marginTop: theme.spacing(3),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary
  }
}));

// ----------------------------------------------------------------------

IconBullet.propTypes = {
  type: PropTypes.oneOf(['subheader', 'item'])
};

function IconBullet({ type = 'item' }) {
  return (
    <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
      <Box
        component="span"
        sx={{
          ml: '2px',
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'currentColor',
          ...(type !== 'item' && {
            ml: 0,
            width: 8,
            height: 2,
            borderRadius: 2
          })
        }}
      />
    </Box>
  );
}

MenuDesktopItem.propTypes = {
  item: PropTypes.object,
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  anchorEl: PropTypes.object
};

function MenuDesktopItem({ item, isHome, isOpen, isOffset, onOpen, onClose, anchorEl }) {
  const { title, path, children } = item;

  if (children) {
    return (
      <>
        <LinkStyle
          onClick={onOpen}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            ...(isHome && { color: 'common.white' }),
            ...(isOffset && { color: 'text.primary' }),
            ...(isOpen && { opacity: 0.48 })
          }}
        >
          {title}
          <Box
            component={Icon}
            icon={isOpen ? arrowIosUpwardFill : arrowIosDownwardFill}
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>

        <Popover
          open={isOpen}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          onClose={onClose}
        >
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} aria-label="contacts">
            {children.map((list, index) => {
              const { subheader, items } = list;
              return (
                <ListItem key={index} disablePadding sx={{ m: 1 }}>
                  <List disablePadding>
                    {subheader && (
                      <ListSubheader
                        disableSticky
                        disableGutters
                        sx={{
                          display: 'flex',
                          lineHeight: 'unset',
                          alignItems: 'center',
                          color: 'text.primary',
                          typography: 'overline'
                        }}
                      >
                        <IconBullet type="subheader" /> {subheader}
                      </ListSubheader>
                    )}

                    {items.map((item) => (
                      <ListItemStyle
                        key={item.title}
                        to={item.path}
                        component={RouterLink}
                        sx={{
                          '&.active': {
                            color: 'text.primary',
                            typography: 'subtitle1'
                          }
                        }}
                      >
                        <>
                          <IconBullet />
                          {item.title}
                        </>
                      </ListItemStyle>
                    ))}
                  </List>
                </ListItem>
              );
            })}
          </List>
        </Popover>
      </>
    );
  }

  if (title === 'Documentation') {
    return (
      <LinkStyle
        href={path}
        target="_blank"
        sx={{
          ...(isHome && { color: 'common.white' }),
          ...(isOffset && { color: 'text.primary' })
        }}
      >
        {title}
      </LinkStyle>
    );
  }

  return (
    <LinkStyle
      to={path}
      component={RouterLink}
      end={path === '/'}
      sx={{
        ...(isHome && { color: 'common.white' }),
        ...(isOffset && { color: 'text.primary' }),
        '&.active': {
          color: 'primary.main'
        }
      }}
    >
      {title}
    </LinkStyle>
  );
}

Menu.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool,
  navConfig: PropTypes.array
};

export default function Menu({ isOffset, isHome, navConfig }) {
  const { pathname } = useLocation();
  const [selectedNav, setSetelectedNav] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    if (selectedNav) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = (event, data) => {
    setAnchorEl(event.currentTarget);
    setSetelectedNav(data.path);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSetelectedNav(false);
  };
  return (
    <Stack direction="row">
      {navConfig.map((link) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          isOpen={selectedNav === link.path}
          onOpen={(e) => handleOpen(e, link)}
          onClose={() => handleClose(link)}
          isOffset={isOffset}
          isHome={isHome}
          anchorEl={anchorEl}
        />
      ))}
    </Stack>
  );
}
