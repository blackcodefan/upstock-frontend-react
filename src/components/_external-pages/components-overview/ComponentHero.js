import { motion } from 'framer-motion';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
// components
import { varFadeInUp, varWrapEnter, varFadeInDown } from '../../animate';
//
import { MHidden } from '../../@material-extend';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
}));

export default function ComponentHero() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <motion.div initial="initial" animate="animate" variants={varWrapEnter}>
        <Container
          maxWidth="lg"
          sx={{
            display: { md: 'flex' },
            justifyContent: { md: 'space-between' }
          }}
        >
          <div>
            <motion.div variants={varFadeInUp}>
              <Typography variant="h3" component="h1">
                Components
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography
                sx={{
                  mt: 3,
                  mb: 5,
                  color: isLight ? 'text.secondary' : 'common.white'
                }}
              >
                With huge resource pack making deployment
                <br /> easy and expanding more effectively
              </Typography>
            </motion.div>
          </div>

          <MHidden width="mdDown">
            <motion.div variants={varFadeInDown}>
              <Box component="img" src="/static/illustrations/congrats.png" sx={{ maxHeight: 320 }} />
            </motion.div>
          </MHidden>
        </Container>
      </motion.div>
    </RootStyle>
  );
}
