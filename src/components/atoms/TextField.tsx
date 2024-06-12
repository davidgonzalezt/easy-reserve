import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

const TextField: React.FC<MuiTextFieldProps> = (props) => {
  const { type, ...other } = props;

  if (type === 'date') {
    const currentDate = new Date().toISOString().split('T')[0];

    return (
      <MuiTextField
        {...other}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          ...other.InputProps,
          inputProps: {
            ...other.InputProps?.inputProps,
            min: currentDate,
          },
        }}
      />
    );
  }

  return <MuiTextField {...props} />;
};

export default TextField;
