import PropTypes from 'prop-types';
import { AccordionSummary, Button, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import IconSuffixLabel from 'components/IconSuffixLabel';
import { CheckCircle, ThreeDots } from 'react-bootstrap-icons';

const DocumentAccordionHeader = ({
  btnDisabled,
  buttonLabel,
  chip,
  date,
  description,
  people,
  onBtnClick,
  onClick,
  title
}) => {
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const theme = useTheme();

  return (
    <AccordionSummary>
      <Stack direction={sm ? 'row' : 'column'} justifyContent="space-between" spacing={2} sx={{ width: '100%' }}>
        <Stack spacing={0.5} onClick={onClick}>
          <Typography variant="h6">{title}</Typography>
          <IconSuffixLabel>
            {people.map((person, index) => (
              <Stack key={index} direction="row" alignItems="center" spacing={1}>
                <Typography variant="body1">{person.name}</Typography>
                {person.signed && <CheckCircle color={theme.palette.success.main} />}
              </Stack>
            ))}
          </IconSuffixLabel>
          <Typography variant="body2" color="color.text3">
            {description}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          {date && (
            <Typography variant="body2" color="color.text3">
              {date}
            </Typography>
          )}
          {chip}
          <Button variant="contained" sx={{ width: 'fit-content' }} onClick={onBtnClick} disabled={btnDisabled}>
            {buttonLabel}
          </Button>
          <IconButton>
            <ThreeDots />
          </IconButton>
        </Stack>
      </Stack>
    </AccordionSummary>
  );
};

DocumentAccordionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  people: PropTypes.array.isRequired,
  date: PropTypes.string,
  chip: PropTypes.node,
  buttonLabel: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func,
  btnDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default DocumentAccordionHeader;
