import PropTypes from 'prop-types';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography } from '@mui/material';
// routes
import { PATH_PAGE } from 'routes/paths';
// components
import Page from 'components/Page';
import HeaderBreadcrumbs from 'components/HeaderBreadcrumbs';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

const RowStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: theme.spacing(1.5, -1.5, 0)
}));

// ----------------------------------------------------------------------

ColorCard.propTypes = {
  hexColor: PropTypes.string,
  label: PropTypes.string
};

function ColorCard({ hexColor, label }) {
  return (
    <Card
      sx={{
        position: 'relative',
        m: 1.5,
        width: {
          xs: '100%',
          sm: 'calc((100%/2) - 24px)',
          md: 'calc((100%/4) - 24px)',
          lg: 'calc((100%/5) - 24px)'
        }
      }}
    >
      <Box sx={{ bgcolor: hexColor, paddingTop: '56%' }} />
      <Box sx={{ p: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1.5, mb: 1 }}>
          <Typography sx={{ width: 122, color: 'text.secondary' }}>{label}</Typography>
          <Typography variant="body2">{hexColor}</Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default function FoundationColors() {
  const theme = useTheme();
  return (
    <RootStyle title="Foundations: Color | Upstock">
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
            heading="Color"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Color' }]}
            moreLink={['https://mui.com/customization/color', 'https://colors.eva.design']}
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" sx={{ textTransform: 'capitalize' }}>
            Primary Colors
          </Typography>
          <RowStyle>
            <ColorCard label="Primary 1" hexColor={theme.palette.color.primary1} />
            <ColorCard label="Primary 2" hexColor={theme.palette.color.primary2} />
            <ColorCard label="Primary 3" hexColor={theme.palette.color.primary3} />
            <ColorCard label="Primary 4" hexColor={theme.palette.color.primary4} />
            <ColorCard label="Primary 5" hexColor={theme.palette.color.primary5} />
          </RowStyle>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" sx={{ textTransform: 'capitalize' }}>
            Secondary Colors
          </Typography>
          <RowStyle>
            <ColorCard label="Secondary 1" hexColor={theme.palette.color.secondary1} />
            <ColorCard label="Secondary 2" hexColor={theme.palette.color.secondary2} />
            <ColorCard label="Secondary 3" hexColor={theme.palette.color.secondary3} />
            <ColorCard label="Secondary 4" hexColor={theme.palette.color.secondary4} />
          </RowStyle>
          <RowStyle>
            <ColorCard label="Transparent 1" hexColor={theme.palette.color.transparent1} />
            <ColorCard label="Transparent 2" hexColor={theme.palette.color.transparent2} />
            <ColorCard label="Transparent 3" hexColor={theme.palette.color.transparent3} />
            <ColorCard label="Transparent 4" hexColor={theme.palette.color.transparent4} />
          </RowStyle>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" sx={{ textTransform: 'capitalize' }}>
            Typograhy Colors
          </Typography>
          <RowStyle>
            <ColorCard label="Text 1" hexColor={theme.palette.color.text1} />
            <ColorCard label="Text 2" hexColor={theme.palette.color.text2} />
            <ColorCard label="Text 3" hexColor={theme.palette.color.text3} />
            <ColorCard label="Text 4" hexColor={theme.palette.color.text4} />
          </RowStyle>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" sx={{ textTransform: 'capitalize' }}>
            Background Colors
          </Typography>
          <RowStyle>
            <ColorCard label="BG 1" hexColor={theme.palette.color.bg1} />
            <ColorCard label="BG 2" hexColor={theme.palette.color.bg2} />
            <ColorCard label="BG 3" hexColor={theme.palette.color.bg3} />
            <ColorCard label="BG 4" hexColor={theme.palette.color.bg4} />
          </RowStyle>
        </Box>
      </Container>
    </RootStyle>
  );
}
