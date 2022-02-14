import { useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Icon as reactIcon } from '@iconify/react';
import { Box, Container, Toolbar, Icon, Link } from '@mui/material';
import fileFill from '@iconify/icons-eva/file-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';

// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
// routes
import { PATH_PAGE } from '../../../routes/paths';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { MHidden } from '../../../components/@material-extend';
//
import Menu from '../../../layouts/main/Menu';
import SubMenu from '../../../layouts/main/SubMenu';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;
const ICON_SIZE = {
  width: 22,
  height: 22
};
const navConfig = [
  {
    title: 'Overview',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    path: '/components/header'
  },
  {
    title: 'Equity',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    path: '/demo'
  },
  {
    title: 'Rates',
    path: '/join-us'
  },
  {
    title: 'Vesting',
    path: '/join-us'
  }
];

const navSubmenu = [
  {
    title: 'Show: All Documents',
    path: '/learn',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    children: [
      {
        items: [{ title: 'About Upstock', path: '/' }]
      }
    ]
  },
  {
    title: 'Sort by: Due Time',
    path: '/learn',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    children: [
      {
        items: [{ title: 'About Upstock', path: '/' }]
      }
    ]
  }
];

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const LinkStyleFirst = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.secondary.color,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  padding: '12px 14px',
  background: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  margin: '20px 0px',
  '&:hover': {
    textDecoration: 'none'
  }
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.secondary.color,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  padding: '12px 14px',
  background: theme.palette.grey[0],
  border: `1px solid ${theme.palette.primary.main}`,
  boxShadow: '0px 12px 23px rgb(55 125 255 / 6%)',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    textDecoration: 'none'
  }
}));

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

// ----------------------------------------------------------------------

export default function Header() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  return (
    <RootStyle title="Header | Upstock">
      <Box
        sx={{
          pt: 6,
          pb: 1,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Header"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Header' }]}
          />
        </Container>
      </Box>

      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <MHidden width="mdDown">
            <Menu isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
          <MHidden width="mdDown">
            <SubMenu isOffset={isOffset} isHome={isHome} navConfig={navSubmenu} />
          </MHidden>
        </Container>
      </ToolbarStyle>

      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <MHidden width="mdDown">
            <LinkStyleFirst
              sx={{
                display: 'flex',
                cursor: 'pointer',
                alignItems: 'center',
                ...(isHome && { color: 'common.white' }),
                ...(isOffset && { color: 'text.primary' }),
                ...(true && { opacity: 0.48 })
              }}
            >
              Show: All Documents
              <Box component={reactIcon} icon={arrowIosDownwardFill} sx={{ ml: 0.5, width: 16, height: 16 }} />
            </LinkStyleFirst>

            <LinkStyle
              sx={{
                display: 'flex',
                cursor: 'pointer',
                alignItems: 'center',
                ...(isHome && { color: 'common.white' }),
                ...(isOffset && { color: 'text.primary' }),
                ...(true && { opacity: 0.48 })
              }}
            >
              Show: All Documents
              <Box component={reactIcon} icon={arrowIosDownwardFill} sx={{ ml: 0.5, width: 16, height: 16 }} />
            </LinkStyle>

            <LinkStyleFirst
              sx={{
                display: 'flex',
                cursor: 'pointer',
                alignItems: 'center',
                ...(isHome && { color: 'common.white' }),
                ...(isOffset && { color: 'text.primary' }),
                ...(true && { opacity: 0.48 })
              }}
            >
              Sort by: Due Time
              <Box component={reactIcon} icon={arrowIosDownwardFill} sx={{ ml: 0.5, width: 16, height: 16 }} />
            </LinkStyleFirst>

            <LinkStyle
              sx={{
                display: 'flex',
                cursor: 'pointer',
                alignItems: 'center',
                ...(isHome && { color: 'common.white' }),
                ...(isOffset && { color: 'text.primary' }),
                ...(true && { opacity: 0.48 })
              }}
            >
              Sort by: Due Time
              <Box component={reactIcon} icon={arrowIosDownwardFill} sx={{ ml: 0.5, width: 16, height: 16 }} />
            </LinkStyle>
          </MHidden>
        </Container>
      </ToolbarStyle>
    </RootStyle>
  );
}
