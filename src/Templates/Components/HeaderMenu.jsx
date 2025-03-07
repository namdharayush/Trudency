import React, { Fragment, useEffect, useState } from 'react'
import '../../Style/Components/headerMenu.css'
import { Box, Typography, AppBar, Tabs, Toolbar, Tab, Button, Grid2 } from '@mui/material'
import { NavLink } from 'react-router-dom'
import logo from '/images/logo.png'
import logo1 from '/images/Logo1.png'
import { useDispatch } from 'react-redux'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { keyframes } from '@mui/material'
import { ActiveHeaderAction } from '../../store/ActiveHeader'

function HeaderMenu() {

    const [mobileView, setMobileView] = useState(false)
    const [showOverlay, setShowOverlay] = useState(false);

    const dispatch = useDispatch()

    const growHeight = keyframes`
        0% {
            height: 0;
        }
        100% {
            height: 100vh;
        }
        `;
    const srinkHeight = keyframes`
        
        100% {
            height: 0vh;
        }
        0% {
            height: 100vh;
        }
        `;

    const growItemsHeight = keyframes`
        0% {
            height: 0px;
            padding:0 50px;
        }
        100% {
            height: max-content;
            padding: 50px
        }
        `;

    const growVisibleContent = keyframes`
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
        `;
    const shrinkVisibleContent = keyframes`
        
        100% {
            opacity:0;
        }
        0% {
            opacity:1;
        }
        `;


    const handleMenuClick = () => {
        if (!mobileView) {
            setShowOverlay(true);
            setMobileView(true);
            dispatch(ActiveHeaderAction.setActiveHeader(true))
        } else {
            setMobileView(false);
            setTimeout(() => {
                setShowOverlay(false);
                dispatch(ActiveHeaderAction.setActiveHeader(false))
            }, 1200);
        }
    };

    const handleUlClick = (event) => {
        const clickedElement = event.target.tagName;

        if ((clickedElement == 'BUTTON' || clickedElement == 'A') && showOverlay) {
            setMobileView(false);
            setTimeout(() => {
                setShowOverlay(false);
                dispatch(ActiveHeaderAction.setActiveHeader(false))
            }, 1200);
            window.scrollTo({
                top: 0,
                behavior: "smooth", // Enables smooth scrolling
            });
        }

    }

    return (
        <Fragment>


            <Box
                component="header"
                className="custom_header"
                sx={{
                    position: "fixed", // Keeps the header sticky at the top
                    top: "0", // Ensures it sticks to the very top of the page
                    left: "0", // Ensures it starts at the very left edge of the viewport
                    width: "100%", // Ensures the header spans the full width
                    zIndex: "50", // Ensures it appears above other content
                    height: "100px", // Fixed height for the header
                    padding: {
                        xs: "20px 20px",
                        sm: "20px 50px"
                    }, // Padding inside the header
                    display: "flex", // Flexbox for alignment
                    justifyContent: "space-between", // Spaces children evenly
                    alignItems: "center", // Vertically aligns content
                    boxSizing: "border-box", // Ensures padding is included in width/height calculations
                    backgroundColor: mobileView ? "#00454e" : "transparent", // Conditional background color
                    transition: "background-color 0.3s ease-in-out", // Smooth background color change
                }}
            >
                {/* Logo */}
                <NavLink to='/'>
                    <Box component="div" sx={{ width: "clamp(80px,5vw,150px)", height: "max-content", maskImage: '' }}>
                        <Box
                            component="img"
                            src={logo1}
                            alt="Logo"
                            sx={{ width: "100%", height: "100%" }}
                        />
                    </Box>
                </NavLink>

                {/* Menu and Contact Us */}
                <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
                    <Button
                        sx={{
                            padding: "0",
                            backgroundColor: "transparent",
                        }}
                        className="menubutton"
                        onClick={handleMenuClick}
                    >
                        <Box
                            component="div"
                            sx={{
                                display: "flex",
                                padding: "10px",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <Box
                                component="hr"
                                sx={{
                                    width: "50px",
                                    border: "2px solid white", // Ensure visibility
                                    position: 'relative',
                                    transform: `${mobileView ? 'translate(0 , 8px) rotate(30deg)' : 'translate(0 , 0) rotate(0deg)'}`,
                                    transition: 'all 0.2s linear'
                                }}
                            />
                            <Box
                                component="hr"
                                sx={{
                                    width: "50px",
                                    border: "2px solid white", // Ensure visibility
                                    position: 'relative',
                                    transform: `${mobileView ? 'translate(0 , -8px) rotate(-30deg)' : 'translate(0 , 0) rotate(0deg)'}`,
                                    transition: 'all 0.2s linear'
                                }}
                            />
                        </Box>
                    </Button>

                    <NavLink to='contact-us' style={{ textDecoration: 'none' }}>
                        <Button
                            sx={{
                                padding: "10px 30px", // Ensures consistent button size
                                textTransform: "capitalize",
                                fontSize: "20px", // Keeps font size consistent
                                color: "#00454e",
                                backgroundColor: "#7adcdb",
                                whiteSpace: "nowrap", // Prevents text wrapping
                                display: {
                                    xs: 'none',
                                    sm: 'block'
                                },
                                border: '1px solid transparent',
                                borderRadius: '40px',
                                marginLeft: '20px',
                                fontWeight: '550',
                                ":hover": {
                                    backgroundColor: '#00454e',
                                    color: '#7adcdb',
                                    border: '1px solid #7adcdb'
                                }
                            }}
                        >
                            Contact Us
                        </Button>
                    </NavLink>
                </Box>
            </Box>


            {showOverlay && (
                <>
                    <Box
                        component="div"
                        className="overlay_header"
                        sx={{
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            height: '100vh',
                            width: '100%',
                            zIndex: 1,
                            animation: `${mobileView ? growHeight : srinkHeight} ${mobileView ? 0.7 : 1.1}s forwards`,
                            backgroundColor: '#29646c',
                            overflow: 'hidden'
                        }}
                    />
                    <Box component='div' className='overlay_header'
                        sx={{
                            position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh', zIndex: '1', animation: `${mobileView ? growHeight : srinkHeight} ${mobileView ? 0.9 : 0.9}s forwards`, backgroundColor: '#7adcdb', overflow: 'hidden'
                        }}
                    >
                    </Box>
                    <Box component='div' className='overlay_header'
                        sx={{
                            position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh', zIndex: '1', animation: `${mobileView ? growHeight : srinkHeight} ${mobileView ? 1.1 : 0.7}s forwards`, backgroundColor: '#00454e', overflow: 'hidden'
                        }}
                    >
                    </Box>
                </>
            )}

            {
                showOverlay && (
                    <Box component='nav' className='mobile_view_header' sx={{
                        zIndex: '40', position: 'sticky', top: '0px', left: '0', width: '100%', height: 'max-content', padding: { xs: '10px 0', sm: '20px', md: '50px' }, overflowX: 'hidden', opacity: '1', backgroundColor: '#00454e', animation: `${mobileView ? growVisibleContent : shrinkVisibleContent} ${mobileView ? 3 : 0.7}s forwards`, boxSizing: 'border-box', display: `${!showOverlay ? 'none' : 'block'}`, marginTop: '50px'
                    }}>
                        <Box component='ul' onClick={handleUlClick} className='menu_header' sx={{ listStyle: 'none', width: '100%', padding: "0", position: 'relative' }}>

                            <Box component='li' sx={{
                                width: { xs: '100%', md: '50%' }, padding: '0',
                                '&:hover .sub_menu, &:focus .sub_menu': {
                                    display: 'block',
                                },
                                '&:hover .menu_item, &:focus .menu_item': {
                                    color: '#7adcdb',
                                },
                                '&:hover .MuiSvgIcon-root, &:focus .MuiSvgIcon-root': {
                                    opacity: 1,
                                },
                            }}>
                                <NavLink to='/about-us' className='nav_main_text' style={{
                                    textDecoration: 'none',

                                }}><Button className='menu_item' sx={{
                                    fontSize: { xs: '30px', sm: 'clamp(30px,5vw,40px)', lg: '50px' },
                                    padding: '5px 40px',
                                    textTransform: 'capitalize',
                                    color: 'white',
                                    fontWeight: '750',
                                    width: '100%',
                                    position: 'relative',
                                    // zIndex: 2,
                                    transition: 'all 0.2s linear',
                                    // display: 'flex',
                                    justifyContent: 'start',
                                    background: 'transparent',
                                    ":hover": {
                                        color: '#7adcdb',
                                        "& .MuiSvgIcon-root": {
                                            transition: 'all 0.2s linear',
                                            opacity: '1'
                                        },
                                    },
                                }}>About Us  <ArrowCircleRightIcon sx={{
                                    color: '#7adcdb',
                                    marginLeft: '10px',
                                    fontSize: '35px',
                                    opacity: '0',
                                    transform: {
                                        xs: 'rotate(90deg)',
                                        md: 'rotate(0)'
                                    }
                                }} /> </Button>
                                </NavLink>

                                <Box component='ul' className='sub_menu' sx={{
                                    listStyle: 'none', padding: '0', position: { xs: 'relative', md: 'absolute' }, top: { xs: '100%', md: '0' }, left: { xs: '0', md: '50%' }, width: '100%', height: '100%', display: 'none'
                                }}>
                                    <Box component='li' sx={{ maxWidth: '100%', fontSize: { xs: '18px', sm: '24px', md: '30px' }, padding: { xs: '10px 40px', md: '10px 0' }, fontWeight: '650', letterSpacing: '1px' }}  >
                                        <NavLink to='/about-us/meet-the-team' className='sub_menu_item' style={{ textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = '#7adcdb'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Meet the team</NavLink>
                                    </Box>
                                    <Box component='li' sx={{ maxWidth: '100%', fontSize: { xs: '18px', sm: '24px', md: '30px' }, padding: { xs: '10px 40px', md: '10px 0' }, fontWeight: '650', letterSpacing: '1px' }} >
                                        <NavLink to='/about-us/our-process' className='sub_menu_item' style={{ textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = '#7adcdb'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Our Process</NavLink>
                                    </Box>
                                    <Box component='li' sx={{ maxWidth: '100%', fontSize: { xs: '18px', sm: '24px', md: '30px' }, padding: { xs: '10px 40px', md: '10px 0' }, fontWeight: '650', letterSpacing: '1px' }} >
                                        <NavLink to='/about-us/case-studies' className='sub_menu_item' style={{ textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = '#7adcdb'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Case Studies</NavLink>
                                    </Box>
                                </Box>
                            </Box>

                            <Box component='li' sx={{
                                width: { xs: '100%', md: '50%' }, padding: '0', marginTop: '10px',
                                '&:hover .sub_menu, &:focus .sub_menu': {
                                    display: 'block',
                                },
                                '&:hover .menu_item, &:focus .menu_item': {
                                    color: '#7adcdb',
                                },
                                '&:hover .MuiSvgIcon-root, &:focus .MuiSvgIcon-root': {
                                    opacity: 1,
                                },
                            }}>
                                <NavLink to='/services' className='nav_main_text' style={{
                                    textDecoration: 'none',

                                }}><Button className='menu_item' sx={{
                                    fontSize: { xs: '30px', sm: 'clamp(30px,5vw,40px)', lg: '50px' },
                                    padding: '5px 40px',
                                    textTransform: 'capitalize',
                                    color: 'white',
                                    fontWeight: '750',
                                    width: '100%',
                                    position: 'relative',
                                    // zIndex: 2,
                                    transition: 'all 0.2s linear',
                                    // display: 'flex',
                                    justifyContent: 'start',
                                    background: 'transparent',
                                    ":hover": {
                                        color: '#7adcdb',
                                        "& .MuiSvgIcon-root": {
                                            transition: 'all 0.2s linear',
                                            opacity: '1'
                                        },
                                    },
                                }}>Services  <ArrowCircleRightIcon sx={{
                                    color: '#7adcdb',
                                    marginLeft: '10px',
                                    fontSize: '35px',
                                    opacity: '0',
                                    transform: {
                                        xs: 'rotate(90deg)',
                                        md: 'rotate(0)'
                                    }
                                }} /> </Button>
                                </NavLink>

                                <Box component='ul' className='sub_menu' sx={{
                                    listStyle: 'none', padding: '0px', position: { xs: 'relative', md: 'absolute' }, top: { xs: '100%', md: '0' }, left: { xs: '0', md: '50%' }, width: '100%', height: '100%', display: 'none'
                                }}>
                                    <Box component='li' sx={{ maxWidth: '100%', fontSize: { xs: '18px', sm: '24px', md: '30px' }, padding: { xs: '10px 40px', md: '10px 0' }, fontWeight: '650', letterSpacing: '1px' }} >
                                        <NavLink to='/services/outsourced-accounting-services' className='sub_menu_item' style={{ textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = '#7adcdb'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Outsourced Accounting Services</NavLink>
                                    </Box>
                                    <Box component='li' sx={{ maxWidth: '100%', fontSize: { xs: '18px', sm: '24px', md: '30px' }, padding: { xs: '10px 40px', md: '10px 0' }, fontWeight: '650', letterSpacing: '1px' }} >
                                        <NavLink to='/services/bookkeeping-services' className='sub_menu_item' style={{ textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = '#7adcdb'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Bookkeeping Services</NavLink>
                                    </Box>
                                    <Box component='li' sx={{ maxWidth: '100%', fontSize: { xs: '18px', sm: '24px', md: '30px' }, padding: { xs: '10px 40px', md: '10px 0' }, fontWeight: '650', letterSpacing: '1px' }} >
                                        <NavLink to='/services/payroll-outsourcing' className='sub_menu_item' style={{ textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = '#7adcdb'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Payroll Outsourcing</NavLink>
                                    </Box>
                                    <Box component='li' sx={{ maxWidth: '100%', fontSize: { xs: '18px', sm: '24px', md: '30px' }, padding: { xs: '10px 40px', md: '10px 0' }, fontWeight: '650', letterSpacing: '1px' }} >
                                        <NavLink to='/services/financial-director-services' className='sub_menu_item' style={{ textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = '#7adcdb'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Financial Director Services</NavLink>
                                    </Box>
                                </Box>
                            </Box>

                            <Box component='li' sx={{
                                width: { xs: '100%', md: '50%' }, padding: '0', marginTop: '10px',
                                '&:hover .sub_menu, &:focus .sub_menu': {
                                    display: 'block',
                                },
                                '&:hover .menu_item, &:focus .menu_item': {
                                    color: '#7adcdb',
                                },
                                '&:hover .MuiSvgIcon-root, &:focus .MuiSvgIcon-root': {
                                    opacity: 1,
                                },
                            }}>
                                <NavLink to='/specialisms' className='nav_main_text' style={{
                                    textDecoration: 'none',

                                }}><Button className='menu_item' sx={{
                                    fontSize: { xs: '30px', sm: 'clamp(30px,5vw,40px)', lg: '50px' },
                                    padding: '5px 40px',
                                    textTransform: 'capitalize',
                                    color: 'white',
                                    fontWeight: '750',
                                    width: '100%',
                                    position: 'relative',
                                    // zIndex: 2,
                                    transition: 'all 0.2s linear',
                                    // display: 'flex',
                                    justifyContent: 'start',
                                    background: 'transparent',
                                    ":hover": {
                                        color: '#7adcdb',
                                        "& .MuiSvgIcon-root": {
                                            transition: 'all 0.2s linear',
                                            opacity: '1'
                                        },
                                    },
                                }}>Specialisms  <ArrowCircleRightIcon sx={{
                                    color: '#7adcdb',
                                    marginLeft: '10px',
                                    fontSize: '35px',
                                    opacity: '0',
                                    transform: {
                                        xs: 'rotate(90deg)',
                                        md: 'rotate(0)'
                                    }
                                }} /> </Button>
                                </NavLink>

                                <Box component='ul' className='sub_menu' sx={{
                                    listStyle: 'none', padding: '0px', position: { xs: 'relative', md: 'absolute' }, top: { xs: '100%', md: '0' }, left: { xs: '0', md: '50%' }, width: '100%', height: '100%', display: 'none'
                                }}>
                                    <Box component='li' sx={{ maxWidth: '100%', fontSize: { xs: '18px', sm: '24px', md: '30px' }, padding: { xs: '10px 40px', md: '10px 0' }, fontWeight: '650', letterSpacing: '1px' }} >
                                        <NavLink to='/specification/limited-company-accountants' className='sub_menu_item' style={{ textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = '#7adcdb'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Limited Company Accountants</NavLink>
                                    </Box>
                                    <Box component='li' sx={{ maxWidth: '100%', fontSize: { xs: '18px', sm: '24px', md: '30px' }, padding: { xs: '10px 40px', md: '10px 0' }, fontWeight: '650', letterSpacing: '1px' }} >
                                        <NavLink to='/specification/corporate-accounting' className='sub_menu_item' style={{ textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = '#7adcdb'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Corporate Accounting</NavLink>
                                    </Box>
                                    <Box component='li' sx={{ maxWidth: '100%', fontSize: { xs: '18px', sm: '24px', md: '30px' }, padding: { xs: '10px 40px', md: '10px 0' }, fontWeight: '650', letterSpacing: '1px' }} >
                                        <NavLink to='/specification/accounting-for-letting-agents' className='sub_menu_item' style={{ textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = '#7adcdb'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Accounting for Letting Agents</NavLink>
                                    </Box>
                                </Box>
                            </Box>

                            <Box component='li' sx={{
                                width: { xs: '100%', md: '50%' }, padding: '0', marginTop: '10px',
                                '&:hover .sub_menu, &:focus .sub_menu': {
                                    display: 'block',
                                },
                                '&:hover .menu_item, &:focus .menu_item': {
                                    color: '#7adcdb',
                                },
                                '&:hover .MuiSvgIcon-root, &:focus .MuiSvgIcon-root': {
                                    opacity: 1,
                                },
                            }}>
                                <NavLink to='/knowledge' className='nav_main_text' style={{
                                    textDecoration: 'none',

                                }}><Button className='menu_item' sx={{
                                    fontSize: { xs: '30px', sm: 'clamp(30px,5vw,40px)', lg: '50px' },
                                    padding: '5px 40px',
                                    textTransform: 'capitalize',
                                    color: 'white',
                                    fontWeight: '750',
                                    width: '100%',
                                    position: 'relative',
                                    // zIndex: 2,
                                    transition: 'all 0.2s linear',
                                    // display: 'flex',
                                    justifyContent: 'start',
                                    background: 'transparent',
                                    ":hover": {
                                        color: '#7adcdb',
                                        "& .MuiSvgIcon-root": {
                                            transition: 'all 0.2s linear',
                                            opacity: '1'
                                        },
                                    },
                                }}>Knowledge  <ArrowCircleRightIcon sx={{
                                    color: '#7adcdb',
                                    marginLeft: '10px',
                                    fontSize: '35px',
                                    opacity: '0',
                                    transform: {
                                        xs: 'rotate(90deg)',
                                        md: 'rotate(0)'
                                    }
                                }} /> </Button>
                                </NavLink>

                                <Box component='ul' className='sub_menu' sx={{
                                    listStyle: 'none', padding: '0px', position: { xs: 'relative', md: 'absolute' }, top: { xs: '100%', md: '0' }, left: { xs: '0', md: '50%' }, width: '100%', height: '100%', display: 'none'
                                }}>
                                    <Box component='li' sx={{ maxWidth: '100%', fontSize: { xs: '18px', sm: '24px', md: '30px' }, padding: { xs: '10px 40px', md: '10px 0' }, fontWeight: '650', letterSpacing: '1px' }} >
                                        <NavLink to='/knowledge/view-all-posts' className='sub_menu_item' style={{ textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = '#7adcdb'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>View all posts</NavLink>
                                    </Box>
                                </Box>
                            </Box>

                            <Box component='li' sx={{
                                width: { xs: '100%', md: '50%' }, padding: '0', marginTop: '10px',
                                '&:hover .sub_menu, &:focus .sub_menu': {
                                    display: 'block',
                                },
                                '&:hover .menu_item, &:focus .menu_item': {
                                    color: '#7adcdb',
                                },
                                '&:hover .MuiSvgIcon-root, &:focus .MuiSvgIcon-root': {
                                    opacity: 1,
                                },
                            }}>
                                <NavLink to='/contact-us' className='nav_main_text' style={{
                                    textDecoration: 'none',

                                }}><Button className='menu_item' sx={{
                                    fontSize: { xs: '30px', sm: 'clamp(30px,5vw,40px)', lg: '50px' },
                                    padding: '5px 40px',
                                    textTransform: 'capitalize',
                                    color: 'white',
                                    fontWeight: '750',
                                    width: '100%',
                                    position: 'relative',
                                    // zIndex: 2,
                                    transition: 'all 0.2s linear',
                                    // display: 'flex',
                                    justifyContent: 'start',
                                    background: 'transparent',
                                    ":hover": {
                                        color: '#7adcdb',
                                        "& .MuiSvgIcon-root": {
                                            transition: 'all 0.2s linear',
                                            opacity: '1'
                                        },
                                    },
                                }}>Contact Us  <ArrowCircleRightIcon sx={{
                                    color: '#7adcdb',
                                    marginLeft: '10px',
                                    fontSize: '35px',
                                    opacity: '0',
                                    transform: {
                                        xs: 'rotate(90deg)',
                                        md: 'rotate(0)'
                                    }
                                }} /> </Button>
                                </NavLink>

                                <Box component='ul' className='sub_menu' sx={{
                                    listStyle: 'none', padding: '0px', position: { xs: 'relative', md: 'absolute' }, top: { xs: '100%', md: '0' }, left: { xs: '0', md: '50%' }, width: '100%', height: '100%', display: 'none'
                                }}>
                                    <Box component='li' sx={{ maxWidth: '100%', fontSize: { xs: '18px', sm: '24px', md: '30px' }, padding: { xs: '10px 40px', md: '10px 0' }, fontWeight: '650', letterSpacing: '1px' }} >
                                        <NavLink to='/contact/locations' className='sub_menu_item' style={{ textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = '#7adcdb'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Locations</NavLink>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>

                        <Box component='footer'>
                            <Grid2 container spacing={{ xs: 5, md: 2 }} mt='70px' sx={{ width: '100%', padding: '0 0 0 40px' }}>
                                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}  >
                                    <Box component='div' sx={{ color: 'rgb(255,255,255,0.8)' }}>
                                        <Typography variant='h5' sx={{ fontSize: 'clamp(20px,4vw,23px)', fontWeight: '650', color: 'white', marginBottom: '10px', letterSpacing: '1px' }}>
                                            Registered Office
                                        </Typography>
                                        <Typography variant='h6' sx={{ fontSize: 'clamp(14px,4vw,17px)', lineHeight: '26px', letterSpacing: '2px' }}>
                                            706, City Center, CG Road,  <br /> Ahmedabad- 380009 <br />Gujarat, India
                                        </Typography>
                                        <Typography variant='h6' sx={{ fontSize: 'clamp(14px,4vw,17px)', marginTop: '15px', letterSpacing: '1px' }}>
                                            Tel: <NavLink to='tel:+91 7984919378' className='call-link' style={{ textDecoration: 'none', color: 'rgb(255,255,255,0.8)' }}>7984919378</NavLink>
                                        </Typography>
                                        <Typography variant='h6' sx={{ fontSize: 'clamp(14px,4vw,17px)', letterSpacing: '1px' }}>
                                            Email: <NavLink to='mailto:dhruv@trudency.com' className='call-link' style={{ textDecoration: 'none', color: 'rgb(255,255,255,0.8)' }}>dhruv@trudency.com</NavLink>
                                        </Typography>
                                    </Box>
                                </Grid2>


                            </Grid2>

                        </Box>

                        <Box
                            component="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 262.11 244.75"
                            sx={{
                                position: "fixed",
                                bottom: "60px",
                                right: "60px",
                                width: "clamp(220px, 30vw, 400px)",
                                height: "auto",
                                transition: "all 0.3s linear",
                                transform: 'scale(1.1,1.1)',
                                color: '#336a71',
                                fill: 'currentcolor',
                                clipPath: "inset(0 0 0 0)",
                                zIndex: '-1'
                            }}
                        >
                            <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                        </Box>

                    </Box>

                )
            }

        </Fragment>
    )
}

export default HeaderMenu