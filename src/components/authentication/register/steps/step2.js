import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Button, Box, Grid, Stack, TextField, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// components
import { MHidden } from 'components/@material-extend';

// ----------------------------------------------------------------------
Step2.propTypes = {
  data: PropTypes.object.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
};

export default function Step2({ data, handleBack, handleNext }) {
  const CardSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name on Card is required'),
    cardNumber: Yup.string().required('Last name required'),
    expiry: Yup.string().required('Expiry Date is required.'),
    cvv: Yup.string().required('CVV is required')
  });
  const formik = useFormik({
    initialValues: { ...data },
    validationSchema: CardSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        const payload = { ...values };
        setSubmitting(false);
        handleNext(payload);
      } catch (error) {
        console.error(error);
        setErrors({ afterSubmit: error.message });
        setSubmitting(false);
      }
    }
  });
  const { dirty, isValid, handleSubmit, getFieldProps, values } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={5}>
          <Typography variant="h5" align="center">
            Payment
          </Typography>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Stack sx={{ mr: 1 }} spacing={2}>
                <Stack>
                  <Typography variant="button" sx={{ color: 'text.info' }} gutterBottom>
                    Name on Card
                  </Typography>
                  <TextField required fullWidth {...getFieldProps('name')} placeholder="Name on Card" />
                </Stack>
                <Stack>
                  <Typography variant="button" sx={{ color: 'text.info' }} gutterBottom>
                    Card Number
                  </Typography>
                  <TextField required fullWidth {...getFieldProps('cardNumber')} placeholder="Card Number" />
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Stack>
                    <Typography variant="button" sx={{ color: 'text.info' }} gutterBottom>
                      Expiry
                    </Typography>
                    <TextField required fullWidth {...getFieldProps('expiry')} placeholder="MM/YY" />
                  </Stack>
                  <Stack>
                    <Typography variant="button" sx={{ color: 'text.info' }} gutterBottom>
                      CVV
                    </Typography>
                    <TextField required fullWidth {...getFieldProps('cvv')} placeholder="CVV" />
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <MHidden width="mdDown">
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Stack sx={{ ml: 10, position: 'relative' }}>
                  <img src="/static/auth/card.png" alt="card" />
                  <Box sx={{ position: 'absolute', bottom: 0, width: '100%', p: { md: '10px', lg: '25px' } }}>
                    <Typography variant="subtitle1" color="primary.light">
                      {values.name}
                    </Typography>
                    <br />
                    <Stack justifyContent="space-between" alignItems="center" flexDirection="row">
                      <Typography variant="body1" color="primary.color">
                        {values.cardNumber}
                      </Typography>
                      <Typography variant="body1" color="primary.color">
                        {values.expiry}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
            </MHidden>
          </Grid>
          <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
            <Button size="medium" startIcon={<ArrowBackIosNewIcon fontSize="small" />} onClick={handleBack}>
              Back
            </Button>
            <Button
              disabled={!isValid || !dirty}
              size="medium"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIosIcon fontSize="small" />}
              onClick={handleSubmit}
            >
              Next
            </Button>
          </Stack>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
