import * as React from 'react';
import { IconButton, styled, Typography, useTheme } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type Props = {};

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 3),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}));

const SidebarHeader = (props: Props) => {
  const theme = useTheme();

  return (
    <DrawerHeader>
      <Typography variant="h4">This is logo</Typography>
    </DrawerHeader>
  );
};

export default SidebarHeader;
