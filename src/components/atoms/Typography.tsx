import React from 'react';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';

interface TypographyProps extends MuiTypographyProps {
  text: string;
}

const Typography: React.FC<TypographyProps> = ({ text, ...props }) => {
  return <MuiTypography {...props}>{text}</MuiTypography>;
};

export default Typography;
