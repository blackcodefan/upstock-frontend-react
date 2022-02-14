// material
import { styled } from '@mui/material/styles';

// layouts
import AuthLayout from 'layouts/AuthLayout';
// components
import Page from 'components/Page';
import { MHidden } from 'components/@material-extend';
import { CompanySelect } from 'components/authentication/company';
import AuthLeftside from 'components/authentication/AuthLeftside';
import AuthSubheader from 'components/authentication/AuthSubheader';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(() => ({
  display: 'block',
  backgroundColor: '#F4F8FF'
}));
const ContainerStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    itemsContent: 'start'
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(26, 12),
  backgroundColor: 'white',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(15, 4)
  }
}));

// ----------------------------------------------------------------------

export default function Company() {
  return (
    <RootStyle title="Register | Upstock">
      <AuthLayout />
      <ContainerStyle>
        <MHidden width="mdDown">
          <AuthLeftside />
        </MHidden>
        <ContentStyle>
          <AuthSubheader title="Select the Company" desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
          <CompanySelect />
        </ContentStyle>
      </ContainerStyle>
    </RootStyle>
  );
}
