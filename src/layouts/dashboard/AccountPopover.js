import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// material
import { alpha } from '@mui/material/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import MenuPopover from '../../components/MenuPopover';
//

import LogOutBtn from 'src/components/logoutBtn';
import { serverURL } from 'src/config';

// ----------------------------------------------------------------------


const ADMIN_MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/'
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    linkTo: '/dashboard/myaccount'
  },
  {
    label: 'Dashboard',
    icon: 'eva:pie-chart-2-fill',
    linkTo: '/dashboard/app'
  }
];

const USER_MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/'
  },
  {
    label: 'My Account',
    icon: 'eva:person-fill',
    linkTo: '/dashboard/myaccount'
  }]

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const user = useSelector(state => state.auth.user);

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getMenuOptions = (MENU_OPTIONS) => {
    return MENU_OPTIONS.map((option) => (
      <MenuItem
        key={option.label}
        to={option.linkTo}
        component={RouterLink}
        onClick={handleClose}
        sx={{ typography: 'body2', py: 1, px: 2.5 }}
      >
        <Iconify
          icon={option.icon}
          sx={{
            mr: 2,
            width: 24,
            height: 24
          }}
        />

        {option.label}
      </MenuItem>
    ))
  }

  return (
    <>
    
    
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar src={`${serverURL}/img/users/${user?.photo}`} alt="photoURL" />
      
      </IconButton>
      
      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {user?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {user.role ==='admin'?getMenuOptions(ADMIN_MENU_OPTIONS):getMenuOptions(USER_MENU_OPTIONS)}
        <LogOutBtn/>
        <Box sx={{ p: 2, pt: 1.5 }}>
          
        </Box>
      </MenuPopover>
    </>
  );
}
