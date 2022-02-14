// material
import { styled } from '@mui/material/styles';
import { Box, Stack, Container } from '@mui/material';
// icons
import { ArrowRight, Alarm, Apple, ArrowUpRightCircle, Award, Building } from 'react-bootstrap-icons';
// routes
import { PATH_PAGE } from '../../../routes/paths';
// theme
import palette from '../../../theme/palette';
// components
import Page from '../../../components/Page';
import CodeSnippets from '../../../components/CodeSnippets';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { material } from './data';
//
import { Block } from '../Block';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { m: '8px !important' }
};

// ----------------------------------------------------------------------

export default function FoundationIcons() {
  return (
    <RootStyle title="Foundations: Icons | Upstock">
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Icons"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Icons' }]}
            moreLink={['https://www.npmjs.com/package/react-bootstrap-icons', 'https://icons.getbootstrap.com/']}
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Box sx={{ position: 'relative' }}>
            <Block title="Bootstrap Icons" sx={style}>
              <CodeSnippets source={material} />
              <ArrowRight color={palette.light.primary.main} size={24} />
              <Alarm color={palette.light.primary.main} size={24} />
              <Apple color={palette.light.primary.main} size={24} />
              <ArrowUpRightCircle color={palette.light.primary.main} size={24} />
              <Award color={palette.light.primary.main} size={24} />
              <Building color={palette.light.primary.main} size={24} />
            </Block>
          </Box>
        </Stack>
      </Container>
    </RootStyle>
  );
}
