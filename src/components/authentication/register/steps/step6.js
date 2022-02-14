import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Button, MenuItem, Stack, TextField, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------
Step6.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
};

export default function Step6({ data, loading, handleBack, handleNext }) {
  const Schema = Yup.object().shape({
    country: Yup.string().required('Country is required'),
    currency: Yup.string().required('Currency required'),
    street1: Yup.string().required('Street is required.'),
    city: Yup.string().required('City is required.'),
    state: Yup.string().required('State is required.'),
    comCountry: Yup.string().required('Company Country is required.')
  });
  const formik = useFormik({
    initialValues: { ...data },
    validationSchema: Schema,
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
  const { dirty, isValid, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={5} sx={{ minWidth: '450px' }}>
          <Typography variant="h5" align="center">
            Finalize Your Registration
          </Typography>
          <Typography variant="body1" align="center">
            Please confirm the legal name and company legal address for document signing
          </Typography>
          <Stack sx={{ mr: 1 }} spacing={2}>
            <Stack>
              <Typography sx={{ color: 'text.info' }} gutterBottom>
                Country
              </Typography>
              <TextField select placeholder="Country" {...getFieldProps('country')}>
                <MenuItem value={20}>Canada</MenuItem>
                <MenuItem value={30}>United Kingdom</MenuItem>
                <MenuItem value={10}>United States</MenuItem>
              </TextField>
            </Stack>
            <Stack>
              <Typography sx={{ color: 'text.info' }} gutterBottom>
                Currency
              </Typography>
              <TextField fullWidth {...getFieldProps('currency')} placeholder="Currency" />
            </Stack>
            <Stack>
              <Typography sx={{ color: 'text.info' }} gutterBottom>
                Street
              </Typography>
              <TextField fullWidth {...getFieldProps('street1')} placeholder="Street" />
            </Stack>
            <Stack>
              <Typography sx={{ color: 'text.info' }} gutterBottom>
                Apt
              </Typography>
              <TextField fullWidth {...getFieldProps('street2')} placeholder="Apt" />
            </Stack>
            <Stack>
              <Typography sx={{ color: 'text.info' }} gutterBottom>
                Postal Code
              </Typography>
              <TextField fullWidth type="number" {...getFieldProps('postalCode')} placeholder="#####" />
            </Stack>
            <Stack>
              <Typography sx={{ color: 'text.info' }} gutterBottom>
                City
              </Typography>
              <TextField fullWidth {...getFieldProps('city')} placeholder="city" />
            </Stack>
            <Stack>
              <Typography sx={{ color: 'text.info' }} gutterBottom>
                State
              </Typography>
              <TextField fullWidth {...getFieldProps('state')} placeholder="state" />
            </Stack>
            <Stack>
              <Typography sx={{ color: 'text.info' }} gutterBottom>
                Company Country
              </Typography>
              <TextField select placeholder="Country" {...getFieldProps('comCountry')}>
                <MenuItem value={20}>Canada</MenuItem>
                <MenuItem value={30}>United Kingdom</MenuItem>
                <MenuItem value={10}>United States</MenuItem>
              </TextField>
            </Stack>
          </Stack>
          <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
            <Button size="medium" startIcon={<ArrowBackIosNewIcon fontSize="small" />} onClick={handleBack}>
              Back
            </Button>
            <LoadingButton
              disabled={!isValid || !dirty}
              size="medium"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIosIcon fontSize="small" />}
              onClick={handleSubmit}
              loading={loading}
            >
              Next
            </LoadingButton>
          </Stack>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
