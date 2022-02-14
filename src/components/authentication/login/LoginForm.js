import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import Visibility from '@mui/icons-material/Visibility';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// material
import { Link, Stack, Alert, TextField, FormControlLabel, Typography, InputAdornment, IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH } from 'routes/paths';
// hooks
import useAuth from 'hooks/useAuth';
import useIsMountedRef from 'hooks/useIsMountedRef';
// components
import IOSSwitch from 'components/IOSSwitch';
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const isMountedRef = useIsMountedRef();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('The Email address field is required.'),
    password: Yup.string().required('The Password field is required.')
  });

  const formik = useFormik({
    initialValues: {
      email: 'tokentest@user.com',
      password: 'tokentestpassword',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        const result = await login(values.email, values.password);
        if (isMountedRef.current) {
          setSubmitting(false);
        }

        if (!result || !result.success) {
          setErrors({ afterSubmit: result?.message || 'Login failed' });
        } else {
          navigate(PATH_AUTH.company);
        }
      } catch (error) {
        console.error(error);
        resetForm();
        if (isMountedRef.current) {
          setSubmitting(false);
          setErrors({ afterSubmit: error.message });
        }
      }
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}
          <Typography variant="button" sx={{ color: 'text.secondary' }}>
            E-Mail
          </Typography>
          <TextField
            required
            fullWidth
            autoComplete="email"
            {...getFieldProps('email')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              )
            }}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <Typography variant="button" sx={{ color: 'text.secondary', pt: 2 }}>
            Password
          </Typography>
          <TextField
            fullWidth
            autoComplete="password"
            type={showPassword ? 'text' : 'password'}
            {...getFieldProps('password')}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.5 1.1875C7.12989 1.1875 7.73398 1.43772 8.17938 1.88312C8.62478 2.32852 8.875 2.93261 8.875 3.5625V8.3125H4.125V3.5625C4.125 2.93261 4.37522 2.32852 4.82062 1.88312C5.26602 1.43772 5.87011 1.1875 6.5 1.1875ZM10.0625 8.3125V3.5625C10.0625 2.61767 9.68717 1.71153 9.01907 1.04343C8.35097 0.375334 7.44483 0 6.5 0C5.55517 0 4.64903 0.375334 3.98093 1.04343C3.31283 1.71153 2.9375 2.61767 2.9375 3.5625V8.3125C2.30761 8.3125 1.70352 8.56272 1.25812 9.00812C0.812722 9.45352 0.5625 10.0576 0.5625 10.6875V16.625C0.5625 17.2549 0.812722 17.859 1.25812 18.3044C1.70352 18.7498 2.30761 19 2.9375 19H10.0625C10.6924 19 11.2965 18.7498 11.7419 18.3044C12.1873 17.859 12.4375 17.2549 12.4375 16.625V10.6875C12.4375 10.0576 12.1873 9.45352 11.7419 9.00812C11.2965 8.56272 10.6924 8.3125 10.0625 8.3125Z"
                      fill="#B0B7C3"
                    />
                  </svg>
                </InputAdornment>
              ),
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
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            label="Keep me signed in"
            labelPlacement="start"
            variant="body2"
            sx={{ color: 'text.disabled' }}
          />

          <Link component={RouterLink} variant="button" sx={{ color: 'text.secondary' }} to={PATH_AUTH.resetPassword}>
            Forgot Password
          </Link>
        </Stack>
        <Stack spacing={3}>
          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Sign in
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
