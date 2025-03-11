import React, { Fragment, useEffect, useRef, useState } from "react";
import '../../Style/Components/footer.css';
import { Box, Button, Container, Grid2, Icon, Typography } from "@mui/material";
import paperPlaneImage from '/images/paper_plane.png'
import section3_image from '/images/section3_image.png'
import nature_in_cube from '/images/nature_in_cube.jpg'
import animal_in_cube from '/images/animal_in_cube.jpg'
import paper_in_cube from '/images/paper_in_cube.jpg'
import cube from '/images/cube.svg'
import logo1 from '/images/Logo1.png'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useSelector } from "react-redux";
import logo from '/images/logo.png'
import { NavLink } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <Fragment>
            <Container
                component="div"
                maxWidth={false}
                sx={{
                    height: 'max-content',
                    backgroundColor: '#00454e',
                    overflow: 'hidden',
                    padding: '60px 0',
                }}

                className="footer">

                <Box component='div' sx={{
                    paddingLeft: {
                        xs: "20px", // Extra small devices (mobile)
                        sm: "20px", // Small devices (tablet)
                        lg: "100px", // Large devices (desktop)
                    },
                    paddingRight: {
                        xs: "20px", // Extra small devices (mobile)
                        sm: "20px", // Small devices (tablet)
                        lg: "100px", // Large devices (desktop)
                    },
                }}>
                    <Grid2 container spacing={{ xs: 5, md: 2 }} sx={{ width: '100%' }}>

                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}  >
                            <Box component='div' sx={{ color: 'rgb(255,255,255)', maxWidth: 'max-content', boxSizing: 'border-box' }}>
                                <Typography variant='h5' sx={{ fontSize: 'clamp(25px,4vw,35px)', fontWeight: '650', color: 'white', marginBottom: '10px', letterSpacing: '1px' }}>
                                    Contact Us
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 'clamp(18px,4vw,20px)', lineHeight: '26px', marginBottom: '5px' }}>
                                    <NavLink to='tel:7984919378' style={{ textDecoration: 'none', color: 'rgb(255,255,255)' }}> 7984919378 </NavLink> | <NavLink to='mailto:dhruv@trudency.com' style={{ textDecoration: 'none', color: 'rgb(255,255,255)' }}>dhruv@trudency.com</NavLink>
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 'clamp(18px,4vw,20px)', lineHeight: '26px', marginBottom: '30px' }}>
                                    706, City Center, CG Road,
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 'clamp(18px,4vw,20px)', lineHeight: '26px', marginBottom: '8px' }}>
                                    Ahmedabad-380009
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 'clamp(18px,4vw,20px)', lineHeight: '26px', marginBottom: '8px' }}>
                                    Gujarat
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 'clamp(18px,4vw,20px)', lineHeight: '26px' }}>
                                    India
                                </Typography>
                            </Box>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}  >
                            <Box component='div' sx={{ color: 'rgb(255,255,255)', maxWidth: 'max-content', margin: { xs: 'none', lg: 'auto' } }}>
                                <Typography variant='h5' sx={{ fontSize: 'clamp(25px,4vw,35px)', fontWeight: '650', color: 'white', marginBottom: '10px', letterSpacing: '1px' }}>
                                    Services
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 'clamp(18px,4vw,20px)', lineHeight: '26px', marginBottom: '10px' }}>
                                    <NavLink to='/services/outsourced-accounting-services' className='footer-link' style={{ textDecoration: 'none', color: 'rgb(255,255,255)' }}>Outsourced Accounting</NavLink>
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 'clamp(18px,4vw,20px)', lineHeight: '26px', marginBottom: '10px' }}>
                                    <NavLink to='/services/bookkeeping-services' className='footer-link' style={{ textDecoration: 'none', color: 'rgb(255,255,255)' }}>Bookkeeping Services</NavLink>
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 'clamp(18px,4vw,20px)', lineHeight: '26px', marginBottom: '10px' }}>
                                    <NavLink to='services/payroll-outsourcing' className='footer-link' style={{ textDecoration: 'none', color: 'rgb(255,255,255)' }}>Financial Director Services</NavLink>
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 'clamp(18px,4vw,20px)', lineHeight: '26px', marginBottom: '10px' }}>
                                    <NavLink to='/services/financial-director-services' className='footer-link' style={{ textDecoration: 'none', color: 'rgb(255,255,255)' }}>Payroll Outsourcing</NavLink>
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 'clamp(18px,4vw,20px)', lineHeight: '26px', marginBottom: '10px' }}>
                                    <NavLink to='/about-us/our-process' className='footer-link' style={{ textDecoration: 'none', color: 'rgb(255,255,255)' }}>Our Process</NavLink>
                                </Typography>
                            </Box>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}  >
                            <Box component='div' sx={{ color: 'rgb(255,255,255)', maxWidth: 'max-content', margin: { xs: 'none', lg: 'auto' } }}>
                                <Typography variant='h5' sx={{ fontSize: 'clamp(25px,4vw,35px)', fontWeight: '650', color: 'white', marginBottom: '10px', letterSpacing: '1px' }}>
                                    Specialisms
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 'clamp(18px,4vw,20px)', lineHeight: '26px', marginBottom: '10px' }}>
                                    <NavLink to='/specialisms/limited-company-accounting/' className='footer-link' style={{ textDecoration: 'none', color: 'rgb(255,255,255)' }}>Limited Company Accountants</NavLink>
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 'clamp(18px,4vw,20px)', lineHeight: '26px', marginBottom: '10px' }}>
                                    <NavLink to='/specialisms/corporate-accounting/' className='footer-link' style={{ textDecoration: 'none', color: 'rgb(255,255,255)' }}>Corporate Accounting</NavLink>
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 'clamp(18px,4vw,20px)', lineHeight: '26px', marginBottom: '10px' }}>
                                    <NavLink to='/specialisms/accounting-for-letting-agents/' className='footer-link' style={{ textDecoration: 'none', color: 'rgb(255,255,255)' }}>Accounting for Letting Agents</NavLink>
                                </Typography>
                            </Box>
                        </Grid2>

                    </Grid2>

                    <Box component='hr' sx={{ marginTop: { xs: '40px', sm: '70px' }, marginBottom: '30px', border: '1px solid rgba(255,255,255,0.2)', }} />

                    <Box component='div' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' } }}>
                        <NavLink to='/'>
                            <Box component="div" sx={{ width: { md: '70px', sm: '120px', xs: '100px' }, height: "max-content", marginBottom: { xs: '15px', sm: '0' } }}>
                                <Box
                                    component="img"
                                    src={logo1}
                                    alt="Logo"
                                    sx={{ width: "100%", height: "100%" }}
                                />
                            </Box>
                        </NavLink>

                        <NavLink to='https://www.linkedin.com/company/trudency/' target="_blank"><LinkedInIcon sx={{ fontSize: '50px', color: 'white', ":hover": { color: 'rgb(122, 220, 219)', cursor: 'pointer' }, marginBottom: { xs: '15px', sm: '0' } }} /></NavLink>

                        <Typography varient='h6' sx={{ color: 'rgba(255,255,255,0.7)' }}>
                            Copyright © Trudency {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>

            </Container>
        </Fragment>
    )
}

export default Footer