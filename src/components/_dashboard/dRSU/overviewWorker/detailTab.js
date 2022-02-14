import { PropTypes } from 'prop-types';
import { Box, Grid, Divider, Stack, Typography, useTheme } from '@mui/material';
import { PieChartFill } from 'react-bootstrap-icons';
import { fCurrency } from 'utils/formatNumber';

const DetailTab = ({ personalData }) => {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: 'primary.color' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Logged As
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{personalData?.name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Log ID
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">#{personalData?.logId}</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ border: 'none', height: '15px' }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            In Equity Pool
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Stack direction="row" spacing={0.5}>
            <PieChartFill size={16} color={theme.palette.primary.main} />
            <Typography variant="body2">{personalData?.equityPool}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Equity Type
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Stack direction="row" spacing={0.5}>
            <Typography variant="body2">{personalData?.equityType}</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            On Date
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{personalData?.date}</Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">12:00:00 am</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Created At
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{personalData?.createdAt}</Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">09:38:38 pm</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Time Logged
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{personalData?.timeLogged}</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Description
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          {typeof personalData?.description === 'object' ? (
            <ul style={{ paddingLeft: 20 }}>
              {personalData.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          ) : (
            <Typography variant="body2">{personalData?.description}</Typography>
          )}
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Cash Rate
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{fCurrency(personalData?.cashRate)}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Cash
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{fCurrency(personalData?.cash)}</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ height: 5, border: 'none' }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Max Cash
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{fCurrency(personalData?.maxCash)}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Max Hours
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{personalData?.maxDuration}</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
            Equity Multiplier
          </Typography>
          <Divider sx={{ border: 'none', height: '5px' }} />
          <Typography variant="body2">{personalData?.multiplier}x</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

DetailTab.propTypes = {
  personalData: PropTypes.object
};

export default DetailTab;
