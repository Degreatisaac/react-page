import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {

    useEffect(() => {
        AOS.init();
    }, []);
       

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: 'Menu',
            icon: <HomeIcon/>
        },

        {
            text: 'About',
            icon: <InfoIcon/>
        },

        {
            text: 'Testimonials',
            icon: <CommentRoundedIcon/>
        },

        {
            text: 'Contact',
            icon: <PhoneRoundedIcon/>
        },

        {
            text: 'Cart',
            icon: <ShoppingCartRoundedIcon/>
        }
        

    ];

  return (
    <nav data-aos='zoom-in-down'>
        <div className='nav-logo-container'>
            <img src={Logo} alt="logo"/>
        </div>

        <div className="navbar-links-container">
            <a href="www.google.com">Home</a>
            <a href="www.google.com">About</a>
            <a href="www.google.com">Testimonials</a>
            <a href="www.google.com">Contact</a>
            <a href="www.google.com">
                <BsCart2 className="navbar"/>
            </a>

            <button className="primary-button">Bookings Now</button>
        </div>

        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
        </div>

        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box sx={ {width: 250}} role='presentation' onClick={() => setOpenMenu(false)} onkeyDown={() => setOpenMenu(false)}>

            <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
            </List>
        </Box>
        </Drawer>
    </nav>
  )
}

export default Navbar;