import PropTypes from 'prop-types';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Stack, Box, Paper, Container, Typography, Button } from '@mui/material';
// routes
import { PATH_PAGE } from '../../../routes/paths';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
//
import { Block } from '../Block';

// ----------------------------------------------------------------------

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { m: '8px !important' }
};

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
  backgroundColor: '#FAFBFC'
}));

// ----------------------------------------------------------------------

ShadowCard.propTypes = {
  sx: PropTypes.object,
  title: PropTypes.string
};

function ShadowCard({ sx, title }) {
  return (
    <Paper
      sx={{
        padding: 3,
        margin: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 255,
        height: 232,
        ...sx
      }}
    >
      <Typography variant="subtitle1">{title}</Typography>
    </Paper>
  );
}

export default function FoundationShadows() {
  const theme = useTheme();
  return (
    <RootStyle title="Foundations: Shadows | Upstock">
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
            heading="Shadows"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Shadows' }]}
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Stack spacing={5}>
          <Block title="Shadow Cards" sx={style}>
            <ShadowCard title="shadow1" sx={{ boxShadow: theme.customShadows.shadow1 }} />
            <ShadowCard title="shadow2" sx={{ boxShadow: theme.customShadows.shadow2 }} />
            <ShadowCard title="shadow3" sx={{ boxShadow: theme.customShadows.shadow3 }} />
            <ShadowCard title="shadow4" sx={{ boxShadow: theme.customShadows.shadow4 }} />
          </Block>

          <Block title="Shadow Forms" sx={style}>
            <Button
              variant="outlined"
              color="error"
              size="largeXX"
              sx={{
                boxShadow: theme.customShadows.outlined.error
              }}
            >
              Danger
            </Button>

            <Button
              variant="outlined"
              size="largeXX"
              sx={{
                boxShadow: theme.customShadows.outlined.primary
              }}
            >
              Primary
            </Button>
            <Button
              variant="outlined"
              color="success"
              size="largeXX"
              sx={{
                boxShadow: theme.customShadows.outlined.success
              }}
            >
              Success
            </Button>
            <Button
              variant="outlined"
              color="warning"
              size="largeXX"
              sx={{
                boxShadow: theme.customShadows.outlined.warning
              }}
            >
              Warning
            </Button>
          </Block>

          <Block title="Shadow Buttons" sx={style}>
            <Button
              variant="contained"
              color="error"
              size="largeXX"
              sx={{
                boxShadow: theme.customShadows.contained.error
              }}
            >
              Danger
            </Button>

            <Button
              variant="contained"
              size="largeXX"
              sx={{
                boxShadow: theme.customShadows.contained.primary
              }}
            >
              Primary
            </Button>
            <Button
              variant="contained"
              color="success"
              size="largeXX"
              sx={{
                boxShadow: theme.customShadows.contained.success
              }}
            >
              Success
            </Button>
            <Button
              variant="contained"
              color="warning"
              size="largeXX"
              sx={{
                boxShadow: theme.customShadows.contained.warning
              }}
            >
              Warning
            </Button>
          </Block>
        </Stack>
      </Container>
    </RootStyle>
  );
}
