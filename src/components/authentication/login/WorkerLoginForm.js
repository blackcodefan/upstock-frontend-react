import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Icon } from '@iconify/react';
import closeFill from '@iconify/icons-eva/close-fill';
import PropTypes from 'prop-types';
import { useFormik, Form, FormikProvider } from 'formik';
// mui
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  InputAdornment,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH } from 'routes/paths';
// hooks
import useAuth from 'hooks/useAuth';
import useIsMountedRef from 'hooks/useIsMountedRef';
// components
import { MIconButton } from 'components/@material-extend';

// ----------------------------------------------------------------------
WorkerLoginForm.propTypes = {
  data: PropTypes.object.isRequired
};

export default function WorkerLoginForm({ data }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { workerLogin } = useAuth();
  const isMountedRef = useIsMountedRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    password: Yup.string().required('The Password field is required.'),
    conpassword: Yup.string().required('Confirm password is required')
  });

  const formik = useFormik({
    initialValues: {
      password: 'upstock12',
      conpassword: 'upstock12',
      agreed: false
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        const result = await workerLogin(data.token, values.password);

        if (!result || !result.success) {
          setErrors({ afterSubmit: result?.message || 'Login failed' });
        } else {
          enqueueSnackbar('Worker login success', {
            variant: 'success',
            action: (key) => (
              <MIconButton size="small" onClick={() => closeSnackbar(key)}>
                <Icon icon={closeFill} />
              </MIconButton>
            )
          });
          navigate(PATH_AUTH.company);
        }
        if (isMountedRef.current) {
          setSubmitting(false);
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

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps, setFieldValue } = formik;
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConPassword = () => {
    setShowConPassword(!showConPassword);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}
          <Stack>
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
            <Typography variant="button" sx={{ color: 'text.secondary', pt: 2 }}>
              Password Confirmation
            </Typography>
            <TextField
              fullWidth
              type={showConPassword ? 'text' : 'password'}
              {...getFieldProps('conpassword')}
              error={Boolean(touched.conpassword && errors.conpassword)}
              helperText={touched.conpassword && errors.conpassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowConPassword} edge="end">
                      {showConPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Stack>
          <Stack direction="row" sx={{ alignItems: 'center' }}>
            <Box>
              <Checkbox
                color="primary"
                checked={values.agreed}
                onChange={(e) => setFieldValue('agreed', e.target.checked)}
              />
            </Box>
            <Stack direction="row" sx={{ flexWrap: 'wrap' }} spacing={1}>
              <Typography color="color.text3">I have read and agree to the</Typography>
              <Link align="left" color="primary" sx={{ cursor: 'pointer' }}>
                Terms of services
              </Link>
              <Typography color="color.text3">and</Typography>
              <Link align="left" color="primary" sx={{ cursor: 'pointer' }}>
                privacy policy
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ justifyContent: 'space-between', mt: 4 }}>
          <Button fullWidth size="largeX" variant="contained" color="error">{`I'm not ${data.name}`}</Button>
          <LoadingButton size="large" variant="contained" loading={isSubmitting} onClick={handleSubmit}>
            Save
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
