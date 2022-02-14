import PropTypes from 'prop-types';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { fCommaDecimalNumber, fCurrency } from 'utils/formatNumber';

const HistoryTab = ({ personalData }) => (
  <Box sx={{ bgcolor: 'primary.color' }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
          Who
        </Typography>
        <Divider sx={{ border: 'none', height: '5px' }} />
        <Typography variant="body2">{personalData?.name}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
          Status
        </Typography>
        <Divider sx={{ border: 'none', height: '5px' }} />
        <Typography variant="body2" color="success.main">
          Active
        </Typography>
      </Grid>
    </Grid>
    <Divider sx={{ border: 'none', height: '15px' }} />
    <Typography variant="subtitle1">Details</Typography>
    <Divider sx={{ mt: 2, mb: 2 }} />
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
          Created At
        </Typography>
        <Divider sx={{ border: 'none', height: '5px' }} />
        <Typography variant="body2">{personalData?.createdAt} at 2:24am</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
          On Date
        </Typography>
        <Divider sx={{ border: 'none', height: '5px' }} />
        <Typography variant="body2">{personalData?.date}</Typography>
        <Divider sx={{ border: 'none', height: '5px' }} />
        <Typography variant="body2">00:00 pm</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
          Duration
        </Typography>
        <Divider sx={{ border: 'none', height: '5px' }} />
        <Typography variant="body2">{personalData?.timeLogged}</Typography>
      </Grid>
    </Grid>
    <Divider sx={{ mt: 2, mb: 2 }} />
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
          Approval Status
        </Typography>
        <Divider sx={{ border: 'none', height: '5px' }} />
        <Typography variant="body2" color="success.main">
          Yes
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
          Approval Date
        </Typography>
        <Divider sx={{ border: 'none', height: '5px' }} />
        <Typography variant="body2">{personalData?.date}</Typography>
        <Divider sx={{ border: 'none', height: '5px' }} />
        <Typography variant="body2">00:00 pm</Typography>
      </Grid>
    </Grid>
    <Divider sx={{ mt: 2, mb: 2 }} />
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
          Cach
        </Typography>
        <Divider sx={{ border: 'none', height: '5px' }} />
        <Typography variant="body2">{fCurrency(personalData?.cash)}</Typography>
      </Grid>
    </Grid>
    <Divider sx={{ mt: 2, mb: 2 }} />
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body2" sx={{ fontSize: 11, color: 'color.text3' }}>
          Equity
        </Typography>
        <Divider sx={{ border: 'none', height: '5px' }} />
        <Typography variant="body2">{fCommaDecimalNumber(personalData?.equity)} pts</Typography>
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
  </Box>
);

HistoryTab.propTypes = {
  personalData: PropTypes.object
};

export default HistoryTab;
