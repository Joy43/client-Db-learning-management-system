// import Link from "next/link";

// export const NavItemsData = [
//     {
//         name: "Home",
//         url: "/",
//     },
//     {
//         name: "Courses",
//         url: "/courses"
//     },
//     {
//         name: "About",
//         url: "/about"
//     },
//     {
//         name: "Policy",
//         url: "/policy"
//     },
//     {
//         name: "FAQ",
//         url: "/faq"
//     }
// ];

// type Props = {
//     activeItem: number;
//     isMobile: boolean;
// }

// const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
//     return (
//         <div>
//             <div className="hidden md:flex">
//                 {
//                     NavItemsData && NavItemsData.map((item, index) => (
//                         <Link href={item.url} key={index} passHref>
//                             <span
//                                 className={`${activeItem === index 
//                                     ? "dark:text-[#37a39a] text-[crimson]" 
//                                     : "dark:text-white text-black"} text-[18px] px-6 font-Poppins font-[1400]`}
//                             >
//                                 {item.name}
//                             </span>
//                         </Link>
//                     ))
//                 }
//             </div>
//             {
//                 isMobile && (
//                     <div className="800px:hidden mt-5">
//                         <div className="w-full text-center py-6">
//                             {
//                                 NavItemsData && NavItemsData.map((item, index) => (
//                                     <Link href={item.url} key={index} passHref>
//                                         <span 
//                                             className={`${activeItem === index 
//                                                 ? "dark:text-[#37a39a] text-[crimson]" 
//                                                 : "dark:text-white text-black"} text-[18px] px-6 font-Poppins font-[1400]`}
//                                         >
//                                             {item.name}
//                                         </span>
//                                     </Link>
//                                 ))
//                             }
//                         </div>
//                     </div>
//                 )
//             }
//         </div>
//     );
// };

// export default NavItems;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link'; // Import Link from Next.js
import CustomizedSwitches from './themes';

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Courses', url: '/course' },
  { name: 'About', url: '/about' },
  { name: 'Policy', url: '/policy' },
  { name: 'FAQ', url: '/faq' }
 
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DB-Learn
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link href={page.url}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BD-Learning
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link href={page.url}>{page.name}</Link>
              </Button>
            ))}
          </Box>
{/* --------------end option------- */}
          <div className='flex gap-6 p-2'>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CustomizedSwitches></CustomizedSwitches>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
