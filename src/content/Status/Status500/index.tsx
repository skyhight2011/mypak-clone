import * as React from 'react';
import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment
} from '@mui/material';
// import { Helmet } from 'react-helmet-async';
// import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

import { styled } from '@mui/material/styles';

const MainContent = styled(Box)(
  () => `
      height: 100%;
      display: flex;
      flex: 1;
      overflow: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `
);

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
  `
);

const ButtonSearch = styled(Button)(
  ({ theme }) => `
      margin-right: -${theme.spacing(1)};
  `
);

function Status404() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Typography>this is 500 page</Typography>
      </Box>
    </>
  );
}

export default Status404;
