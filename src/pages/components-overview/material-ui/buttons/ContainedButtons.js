// material
import { useTheme } from '@mui/material/styles';

import AlarmIcon from '@mui/icons-material/Alarm';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import { Grid, Button, Fab, Typography } from '@mui/material';
//
import { Block } from '../../Block';

// ----------------------------------------------------------------------
const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { mx: '8px !important' }
};

export default function ContainedButtons() {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={3} sx={{ m: 1 }}>
        <Grid item xs={12} md={6}>
          <Block title="Large" sx={style}>
            <Button variant="contained" color="primary" size="large">
              Primary
            </Button>
            <Button variant="contained" color="secondary" size="large">
              Secondary
            </Button>
            <Button variant="contained" disabled size="large" color="info">
              Disabled
            </Button>
            <Button variant="text" color="secondary">
              Back to Sign In
            </Button>
            <Fab color="primary">
              <AlarmIcon />
            </Fab>
            <Fab color="secondary">
              <AlarmIcon />
            </Fab>
          </Block>
        </Grid>

        <Grid item xs={12} md={6}>
          <Block title="Large with end icon" sx={style}>
            <Button variant="contained" color="primary" size="large" endIcon={<AddIcon />}>
              Primary
            </Button>
            <Button variant="contained" color="secondary" size="large" endIcon={<AddIcon />}>
              Secondary
            </Button>
            <Button variant="contained" disabled size="large" color="info" endIcon={<AddIcon />}>
              Disabled
            </Button>
            <Button variant="contained" size="large" color="info" endIcon={<AddIcon />}>
              Link
            </Button>
            <Fab color="primary">
              <AddIcon />
            </Fab>
          </Block>
        </Grid>

        <Grid item xs={12} md={6}>
          <Block title="Large with start icon" sx={style}>
            <Button variant="contained" color="primary" size="large" startIcon={<AddIcon />}>
              Primary
            </Button>
            <Button variant="contained" color="secondary" size="large" startIcon={<AddIcon />}>
              Secondary
            </Button>
            <Button variant="contained" disabled size="large" color="info" startIcon={<AddIcon />}>
              Disabled
            </Button>
            <Button variant="contained" size="large" color="info" startIcon={<AddIcon />}>
              Link
            </Button>
          </Block>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ m: 1 }}>
        <Grid item xs={12} md={6}>
          <Block title="Standard" sx={style}>
            <Button variant="contained" color="primary" size="medium">
              Primary
            </Button>
            <Button variant="contained" color="secondary" size="medium">
              Secondary
            </Button>
            <Button variant="contained" disabled size="medium" color="info">
              Disabled
            </Button>
            <Button variant="contained" size="medium" color="info">
              Link
            </Button>
          </Block>
        </Grid>

        <Grid item xs={12} md={6}>
          <Block title="Standard with end icon" sx={style}>
            <Button variant="contained" color="primary" size="medium" endIcon={<AddIcon />}>
              Primary
            </Button>
            <Button variant="contained" color="secondary" size="medium" endIcon={<AddIcon />}>
              Secondary
            </Button>
            <Button variant="contained" disabled size="medium" color="info" endIcon={<AddIcon />}>
              Disabled
            </Button>
            <Button variant="contained" size="medium" color="info" endIcon={<AddIcon />}>
              Link
            </Button>
          </Block>
        </Grid>

        <Grid item xs={12} md={6}>
          <Block title="Standard with start icon" sx={style}>
            <Button variant="contained" color="primary" size="medium" startIcon={<AddIcon />}>
              Primary
            </Button>
            <Button variant="contained" color="secondary" size="medium" startIcon={<AddIcon />}>
              Secondary
            </Button>
            <Button variant="contained" disabled size="medium" color="info" startIcon={<AddIcon />}>
              Disabled
            </Button>
            <Button variant="contained" size="medium" color="info" startIcon={<AddIcon />}>
              Link
            </Button>
          </Block>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ m: 1 }}>
        <Grid item xs={12} md={6}>
          <Block title="Small" sx={style}>
            <Button variant="contained" color="primary" size="small">
              Primary
            </Button>
            <Button variant="contained" color="secondary" size="small">
              Secondary
            </Button>
            <Button variant="contained" disabled size="small" color="info">
              Disabled
            </Button>
            <Button variant="contained" size="small" color="info">
              Link
            </Button>
          </Block>
        </Grid>

        <Grid item xs={12} md={6}>
          <Block title="Small with end icon" sx={style}>
            <Button variant="contained" color="primary" size="small" endIcon={<AddIcon />}>
              Primary
            </Button>
            <Button variant="contained" color="secondary" size="small" endIcon={<AddIcon />}>
              Secondary
            </Button>
            <Button variant="contained" disabled size="small" color="info" endIcon={<AddIcon />}>
              Disabled
            </Button>
            <Button variant="contained" size="small" color="info" endIcon={<AddIcon />}>
              Link
            </Button>
          </Block>
        </Grid>

        <Grid item xs={12} md={6}>
          <Block title="Small with start icon" sx={style}>
            <Button variant="contained" color="primary" size="small" startIcon={<AddIcon />}>
              Primary
            </Button>
            <Button variant="contained" color="secondary" size="small" startIcon={<AddIcon />}>
              Secondary
            </Button>
            <Button variant="contained" disabled size="small" color="info" startIcon={<AddIcon />}>
              Disabled
            </Button>
            <Button variant="contained" size="small" color="info" startIcon={<AddIcon />}>
              Link
            </Button>
          </Block>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ m: 1 }}>
        <Grid item xs={12} md={6}>
          <Block title="Size" sx={style}>
            <Button variant="contained" color="info" size="small">
              Small
            </Button>
            <Button variant="contained" color="info">
              Medium
            </Button>
            <Button variant="contained" color="info" size="large">
              Large
            </Button>
          </Block>
        </Grid>
        <Grid item xs={12} md={6}>
          <Block title="Sign up with google" sx={style}>
            <Button
              variant="text"
              color="primary"
              size="largeX"
              startIcon={<img src="/static/brand/google.png" alt="google" />}
            >
              Sign Up with Google
            </Button>
          </Block>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ m: 1 }}>
        <Grid item xs={12} md={6}>
          <Block title="Size" sx={style}>
            <Button variant="contained" startIcon={<AddIcon />}>
              Invite Members
            </Button>
            <Button variant="contained">Sign</Button>
          </Block>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ m: 1 }}>
        <Grid item xs={12} md={6}>
          <Block title="Play - Primary" sx={style}>
            <Grid container spacing={2} sx={{ mb: 1 }} xs={6} md={6}>
              <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} md={6}>
                <Typography variant="subtitle1">Default</Typography>
              </Grid>
              <Grid item md={6}>
                <Fab color="primary" size="large">
                  <PlayArrowIcon />
                </Fab>
              </Grid>
            </Grid>
          </Block>
        </Grid>
        <Grid item xs={12} md={6}>
          <Block title="Play - Primary small" sx={style}>
            <Grid container spacing={2} sx={{ mb: 1 }} xs={6} md={6}>
              <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} md={6}>
                <Typography variant="subtitle1">Default</Typography>
              </Grid>
              <Grid item md={6}>
                <Fab color="primary" size="small">
                  <PlayArrowIcon />
                </Fab>
              </Grid>
            </Grid>
          </Block>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ m: 1 }}>
        <Grid item xs={12} md={6}>
          <Block title="Play - Secondary" sx={style}>
            <Grid container spacing={2} sx={{ mb: 1 }} xs={6} md={6}>
              <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} md={6}>
                <Typography variant="subtitle1">Default</Typography>
              </Grid>
              <Grid item md={6}>
                <Fab color="secondary" size="large">
                  <PlayArrowIcon />
                </Fab>
              </Grid>
            </Grid>
          </Block>
        </Grid>
        <Grid item xs={12} md={6}>
          <Block title="Play - Secondary small" sx={style}>
            <Grid container spacing={2} sx={{ mb: 1 }} xs={6} md={6}>
              <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} md={6}>
                <Typography variant="subtitle1">Default</Typography>
              </Grid>
              <Grid item md={6}>
                <Fab color="secondary" size="small">
                  <PlayArrowIcon />
                </Fab>
              </Grid>
            </Grid>
          </Block>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ m: 1 }}>
        <Grid item xs={12} md={6}>
          <Block title="Play - Primary" sx={style}>
            <Grid container spacing={2} sx={{ mb: 1 }} xs={6} md={6}>
              <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} md={6}>
                <Typography variant="subtitle1">Default</Typography>
              </Grid>
              <Grid item md={6}>
                <Fab color="primary" variant="bordered" size="large" sx={{ border: theme.customBorder.b6 }}>
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
          </Block>
        </Grid>
      </Grid>
    </>
  );
}
