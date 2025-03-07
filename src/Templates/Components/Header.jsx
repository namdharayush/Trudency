import React, { Fragment, useState } from 'react'
import '../../Style/Components/header.css'
import { Box, Typography, AppBar, Tabs, Toolbar, Tab, Button, IconButton, Drawer, Divider } from '@mui/material'
import List from '@mui/material/List'
import HomePage from '../HomePage'
import { Link, NavLink } from 'react-router-dom'
import AboutPage from '../About-Us/AboutPage'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

    const [mobileView, setMobileView] = useState(false)


    const drawList = (
        <Box className={`custom_drawer ${mobileView ? 'open' : 'close'}`} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <IconButton color='inherit' onClick={() => setMobileView(false)} sx={{ position: 'absolute', top: '50px', right: '50px' }} aria-label="Close drawer Icon">
                <CloseIcon fontSize='large' />
            </IconButton>
            <List sx={{ margin: 'auto' }}>
                {[['Home', '/'], ['About Us', '/about-us'], ['Services', '/services'], ['Contact Us', '/contact-us']].map((text, index) => (
                    <ListItem key={index} className='mobile_view_li' disablePadding>
                        <NavLink className='mobile_view_link' to={text[1]}>{text[0]}</NavLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <Fragment>
            <AppBar sx={{paddingLeft:'40px',paddingRight:'40px'}} position="static" color="primary">
                <Toolbar >
                    <Typography variant="h6">Trudency</Typography>
                    <Box sx={{ marginLeft: 'auto', display: { xs: 'none', md: 'block' } }} >
                        <ul className='cutsom_nav_ul'>
                            <li>
                                <NavLink className='nav_link' to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='nav_link' to='/about-us'>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink className='nav_link' to='/services'>Services</NavLink>
                            </li>
                            <li>
                                <NavLink className='nav_link' to='/contact-us'>Contact Us</NavLink>
                            </li>
                        </ul>
                    </Box>
                    <IconButton color='inherit' onClick={() => setMobileView(true)} sx={{ display: { md: 'none' }, marginLeft: 'auto' }} aria-label="Menu Icon">
                        <MenuOpenRoundedIcon />
                    </IconButton>
                    <Drawer
                        variant="temporary"
                        anchor="top"
                        open={mobileView}
                        onClose={() => setMobileView(false)}
                        ModalProps={{
                            keepMounted: true
                        }}
                        sx={{
                            display: { md: 'none' },
                            '& .MuiDrawer-paper': {
                                overflow: 'hidden',
                            },
                        }}
                    >
                        {drawList}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Header