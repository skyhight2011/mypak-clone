import React, { FC, ReactNode, useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  alpha,
  lighten,
  useTheme,
  styled
} from '@mui/material';

import Sidebar from './Sidebar';
import Header from './Header';

const drawerWidth = 240;

interface SidebarLayoutProps {
  children?: ReactNode;
}

interface Props {
  window?: () => Window;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}));

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="persistent"
        open={open}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}>
        <Sidebar />
      </Drawer>
      <Header />
    </Box>
  );
};

export default SidebarLayout;
