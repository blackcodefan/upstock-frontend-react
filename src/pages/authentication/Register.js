import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useSnackbar } from 'notistack';
import closeFill from '@iconify/icons-eva/close-fill';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Stack, Step, Stepper, StepLabel, Typography } from '@mui/material';
// routes
import { PATH_AUTH, PATH_DASHBOARD } from 'routes/paths';
// hooks
import useAuth from 'hooks/useAuth';
// layouts
import AuthLayout from 'layouts/AuthLayout';
// api
import { companySetup } from 'api';
// components
import Page from 'components/Page';
import { RegisterForm } from 'components/authentication/register';
import AuthLeftside from 'components/authentication/AuthLeftside';
import AuthSubheader from 'components/authentication/AuthSubheader';
import Step1 from 'components/authentication/register/steps/step1';
import Step2 from 'components/authentication/register/steps/step2';
import Step3 from 'components/authentication/register/steps/step3';
import Step4 from 'components/authentication/register/steps/step4';
import Step5 from 'components/authentication/register/steps/step5';
import Step6 from 'components/authentication/register/steps/step6';
import { MIconButton, MHidden } from 'components/@material-extend';
// ----------------------------------------------------------------------
const STEPS = [
  {
    label: 'Choose a plan'
  },
  {
    label: 'Payment'
  },
  {
    label: 'RSU or RTU'
  },
  {
    label: 'Equity'
  },
  {
    label: 'Agreements'
  },
  {
    label: 'Country'
  }
];

const RootStyle = styled(Page)({
  display: 'block',
  backgroundColor: '#F4F8FF',
  minHeight: '100vh'
});
const ContainerStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    itemsContent: 'start'
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(24, 12),
  backgroundColor: 'white',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(12, 4)
  }
}));

// ----------------------------------------------------------------------

export default function Register() {
  const { companyRegister } = useAuth();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [regState, setRegState] = useState({
    info: {
      firstName: 'First',
      lastName: 'Last',
      email: 'test@test.com',
      company: 'company',
      password: '123456',
      conPassword: '123456',
      agreed: false
    },
    plan: 'demo_2022',
    payment: {
      name: 'test',
      cardNumber: '123123123123',
      expiry: '12/24',
      cvv: '442'
    },
    unit: '',
    equity: {
      type: '',
      dynamicEquityType: ''
    },
    doc: false,
    final: {
      country: '',
      state: '',
      city: '',
      street1: '',
      street2: '',
      postalCode: '',
      currency: '$',
      comCountry: '' // Company Address
    }
  });
  const handleSubmit = async (field, value) => {
    const newState = { ...regState };
    newState[field] = value;

    if (field !== 'final') {
      setRegState(newState);
      // NOTE: after get stripe token from billing info
      if (step === 2) {
        setLoading(true);
        const payload = {
          email: regState.info.email,
          first_name: regState.info.firstName,
          last_name: regState.info.lastName,
          company_name: regState.info.company,
          password: regState.info.password,
          password_confirmation: regState.info.conPassword,
          stripe_token: 'test',
          plan: regState.plan
        };
        try {
          await companyRegister(payload);
          enqueueSnackbar('Register success', {
            variant: 'success',
            action: (key) => (
              <MIconButton size="small" onClick={() => closeSnackbar(key)}>
                <Icon icon={closeFill} />
              </MIconButton>
            )
          });
          setLoading(false);
          setStep(step + 1);
        } catch (error) {
          enqueueSnackbar(error.toString(), {
            variant: 'error',
            action: (key) => (
              <MIconButton size="small" onClick={() => closeSnackbar(key)}>
                <Icon icon={closeFill} />
              </MIconButton>
            )
          });
          setLoading(false);
          // FIXME - following line is for testing only
          setStep(step + 1);
        }
      } else {
        setStep(step + 1);
      }
    } else {
      setLoading(true);
      const payload = {
        shares_type: regState.unit,
        equity_type: regState.equity.type,
        tracking_type: regState.equity.dynamicEquityType,
        legal: regState.doc,
        country_iso: regState.final.country,
        jurisdiction_us_state: regState.final.country,
        address_line1: regState.final.street1,
        address_line2: regState.final.street2,
        address_postal_code: regState.final.postalCode,
        address_city: regState.final.city,
        address_state: regState.final.state,
        address_country_iso: regState.final.comCountry
      };
      try {
        await companySetup(payload);
        enqueueSnackbar('Company setup success', {
          variant: 'success',
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          )
        });
        setLoading(false);
        navigate(PATH_DASHBOARD.root);
      } catch (error) {
        enqueueSnackbar(error.toString(), {
          variant: 'error',
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          )
        });
        setLoading(false);
      }
    }
  };

  return (
    <RootStyle title="Register | Upstock">
      {step === 0 && (
        <>
          <AuthLayout>
            Already have an account? &nbsp;
            <Link underline="none" variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
              Sign in
            </Link>
          </AuthLayout>
          <ContainerStyle>
            <MHidden width="mdDown">
              <AuthLeftside />
            </MHidden>
            <ContentStyle>
              <AuthSubheader
                title="Getting Started"
                desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco"
              />
              <RegisterForm data={regState.info} handleNext={(value) => handleSubmit('info', value)} />
              <MHidden width="smUp">
                <Typography variant="subtitle2" sx={{ textAlign: 'center', marginTop: '40px', marginBottom: '-100px' }}>
                  Already have an account? &nbsp;
                  <Link underline="none" variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
                    Sign in
                  </Link>
                </Typography>
              </MHidden>
            </ContentStyle>
          </ContainerStyle>
        </>
      )}
      {step > 0 && (
        <>
          <AuthLayout />
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            sx={{ pt: { xs: 10, md: 16 }, px: { xs: 1, md: 10 }, pb: '50px', maxWidth: '1500px', mx: 'auto' }}
          >
            <MHidden width="mdDown">
              <Box sx={{ width: '250px' }}>
                <Stepper activeStep={step - 1} orientation="vertical">
                  {STEPS.map((step) => (
                    <Step key={step.label}>
                      <StepLabel>{step.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </MHidden>
            <MHidden width="mdUp">
              <Box sx={{ overflowX: 'auto', mb: 5 }}>
                <Stepper activeStep={step - 1} sx={{ minWidth: '720px' }}>
                  {STEPS.map((step) => (
                    <Step key={step.label}>
                      <StepLabel>{step.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </MHidden>
            <Box
              sx={{
                flex: 1,
                background: '#FFFFFF',
                border: '1px solid rgba(138, 148, 166, 0.1)',
                boxShadow: '0px 10px 64px rgba(176, 183, 195, 0.06)',
                borderRadius: '10px',
                p: '52px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  maxWidth: '900px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                {step === 1 && <Step1 data={regState.plan} handleNext={(value) => handleSubmit('plan', value)} />}
                {step === 2 && (
                  <Step2
                    data={regState.payment}
                    handleBack={() => setStep(step - 1)}
                    handleNext={(value) => handleSubmit('payment', value)}
                  />
                )}
                {step === 3 && (
                  <Step3
                    data={regState.unit}
                    handleBack={() => setStep(step - 1)}
                    handleNext={(value) => handleSubmit('unit', value)}
                  />
                )}
                {step === 4 && (
                  <Step4
                    data={regState.equity}
                    handleBack={() => setStep(step - 1)}
                    handleNext={(value) => handleSubmit('equity', value)}
                  />
                )}
                {step === 5 && (
                  <Step5 handleBack={() => setStep(step - 1)} handleNext={(value) => handleSubmit('doc', value)} />
                )}
                {step === 6 && (
                  <Step6
                    data={regState.final}
                    loading={loading}
                    handleBack={() => setStep(step - 1)}
                    handleNext={(value) => handleSubmit('final', value)}
                  />
                )}
              </Box>
            </Box>
          </Stack>
        </>
      )}
    </RootStyle>
  );
}
