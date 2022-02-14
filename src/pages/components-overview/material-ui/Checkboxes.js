import { styled } from '@mui/material/styles';
import { Grid, Checkbox, FormGroup, Container, FormControl, FormControlLabel } from '@mui/material';
import Page from '../../../components/Page';
import { Block } from '../Block';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { m: '8px !important' }
};

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function RadioButtons() {
  return (
    <RootStyle title="Components: Checkboxes | Upstock">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Block title="Basic" sx={style}>
                  <Checkbox label="My checkbox" color="primary" />
                </Block>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Block title="Adding Colors">
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked color="default" />} label="Default" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Primary" />
                        <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Secondary" />
                        <FormControlLabel control={<Checkbox defaultChecked color="info" />} label="Info" />
                        <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Success" />
                        <FormControlLabel control={<Checkbox defaultChecked color="warning" />} label="Warning" />
                        <FormControlLabel control={<Checkbox defaultChecked color="error" />} label="Error" />
                        <FormControlLabel
                          disabled
                          control={<Checkbox defaultChecked color="error" />}
                          label="Disabled"
                        />
                      </FormGroup>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormControl component="fieldset">
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox defaultChecked indeterminate color="default" />}
                            label="Default"
                          />
                          <FormControlLabel control={<Checkbox defaultChecked indeterminate />} label="Primary" />
                          <FormControlLabel
                            control={<Checkbox defaultChecked indeterminate color="secondary" />}
                            label="Secondary"
                          />
                          <FormControlLabel
                            control={<Checkbox defaultChecked indeterminate color="info" />}
                            label="Info"
                          />
                          <FormControlLabel
                            control={<Checkbox defaultChecked indeterminate color="success" />}
                            label="Success"
                          />
                          <FormControlLabel
                            control={<Checkbox defaultChecked indeterminate color="warning" />}
                            label="Warning"
                          />
                          <FormControlLabel
                            control={<Checkbox defaultChecked indeterminate color="error" />}
                            label="Error"
                          />
                          <FormControlLabel
                            disabled
                            control={<Checkbox defaultChecked indeterminate color="error" />}
                            label="Disabled"
                          />
                        </FormGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Block>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
