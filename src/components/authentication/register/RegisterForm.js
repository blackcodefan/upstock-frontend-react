import * as Yup from 'yup';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
  Alert,
  Box,
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ----------------------------------------------------------------------
RegisterForm.propTypes = {
  data: PropTypes.object.isRequired,
  handleNext: PropTypes.func.isRequired
};

export default function RegisterForm({ data, handleNext }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setConShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    company: Yup.string().required('Company Name is required'),
    password: Yup.string().required('Password is required'),
    conpassword: Yup.string().required('Confirm password is required')
  });

  const formik = useFormik({
    initialValues: { ...data, conpassword: 'upstock12' },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors }) => {
      try {
        const payload = { ...values };
        delete payload.conpassword;
        handleNext(payload);
      } catch (error) {
        console.error(error);
        setErrors({ afterSubmit: error.message });
      }
    }
  });

  const { values, errors, getFieldProps, setFieldValue, handleSubmit } = formik;
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleConShowPassword = () => {
    setConShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate>
        <Stack spacing={2}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}
          <Stack>
            <Typography variant="button" sx={{ color: 'text.secondary' }}>
              E-Mail
            </Typography>
            <TextField required fullWidth {...getFieldProps('email')} />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
            <Stack sx={{ width: '100%' }}>
              <Typography variant="button" sx={{ color: 'text.secondary' }}>
                First name
              </Typography>
              <TextField required fullWidth {...getFieldProps('firstName')} />
            </Stack>
            <Stack sx={{ width: '100%' }}>
              <Typography variant="button" sx={{ color: 'text.secondary' }}>
                Last name
              </Typography>
              <TextField required fullWidth {...getFieldProps('lastName')} />
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="button" sx={{ color: 'text.secondary', pt: 1 }}>
              Company Name
            </Typography>
            <TextField required fullWidth {...getFieldProps('company')} />
          </Stack>
          <Stack>
            <Typography variant="button" sx={{ color: 'text.secondary', pt: 1 }}>
              Password
            </Typography>
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              {...getFieldProps('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Stack>
          <Stack>
            <Typography variant="button" sx={{ color: 'text.secondary', pt: 1 }}>
              Password Confirmation
            </Typography>
            <TextField
              fullWidth
              type={showConPassword ? 'text' : 'password'}
              {...getFieldProps('conpassword')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleConShowPassword} edge="end">
                      {showConPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box>
              <Checkbox
                color="primary"
                checked={values.agreed}
                onChange={(e) => setFieldValue('agreed', e.target.checked)}
              />
            </Box>
            <Typography>I agree to the</Typography>
            <Box>
              <Link align="left" color="primary" sx={{ cursor: 'pointer' }}>
                Terms & Conditions
              </Link>
            </Box>
          </Stack>
        </Stack>
        <Stack sx={{ mt: 3 }}>
          <Button fullWidth size="large" type="button" onClick={handleSubmit} variant="contained">
            Create an Account
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
