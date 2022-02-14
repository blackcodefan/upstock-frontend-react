import React, { useState } from 'react';
import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { PropTypes } from 'prop-types';

const CustomToggleButtonGroup = styled(ToggleButtonGroup)`
  border: 1px solid ${(props) => props.theme.palette.grey[200]};
  background-color: ${(props) => props.theme.palette.primary.color};
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
  & .MuiToggleButtonGroup-grouped {
    margin: ${(props) => props.theme.spacing(0.5)};
    border: 0;
    &.Mui-disabled {
      border: 0;
    }
    &:not(:first-of-type) {
      border-radius: 10px;
    }
    &:first-of-type {
      border-radius: 10px;
    }
    &.Mui-selected {
      background-color: ${(props) => props.theme.palette.primary.main};
      color: ${(props) => props.theme.palette.primary.color};
      &:hover {
        background-color: ${(props) => props.theme.palette.primary.main};
      }
    }
  }
`;

const CustomToggleBtn = ({ initialValue, options, onChange }) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event, newValue) => {
    if (newValue) {
      setValue(newValue);
      if (onChange) onChange(newValue);
    }
  };

  return (
    <CustomToggleButtonGroup value={value} exclusive onChange={handleChange} size="small">
      {options.map((option) => (
        <ToggleButton value={option.value} key={option.value} sx={{ minWidth: '70px' }}>
          {option.label}
        </ToggleButton>
      ))}
    </CustomToggleButtonGroup>
  );
};

CustomToggleBtn.propTypes = {
  initialValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func
};

export default CustomToggleBtn;
