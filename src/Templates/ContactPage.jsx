import React, { Fragment, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Box, Button, Container, Grid2, Icon, Typography } from "@mui/material";
import emailjs from '@emailjs/browser'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Footer from './Components/Footer';
import { useSelector } from 'react-redux';

function ContactPage() {

    const { active_header } = useSelector(state => state.active_header)

    const form = useRef()

    const [scrollY, setScrollY] = useState(0);

    const [activeState, setActiveState] = useState(false)


    const handleScroll = () => {

        const viewportHeight = window.innerHeight;

        if (window.scrollY >= viewportHeight / 2) {
            setScrollY(viewportHeight / 2)
        }
        else {
            if (window.scrollY <= 20) {
                setScrollY(0)
            }
            else {
                setScrollY(window.scrollY)
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o08tdod', 'template_cg1u1ux', form.current, {
            publicKey: 'TUU_kEBP3WxH0nmQ0'
        }).then((result) => {
            alert('Email Sent Successfully ')
            form.current.reset()
        }).catch((err) => {
            console.log('Some Error ', err)
        })
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Enables smooth scrolling
        });
    }, [])

    return (
        <Fragment>
            {
                !active_header && <>
                    <Container
                        component="div"
                        // disableGutters
                        sx={{
                            height: "max-content",
                            textAlign: "center",
                            // overflow: "hidden",
                            position: "relative",
                            backgroundColor: '#00454e',
                            paddingTop: '100px',
                            paddingBottom: '100px',
                            zIndex: '10',
                            fontFamily: '"Manrope", sans-serif'
                        }}
                        maxWidth={false}
                    // className="section_1"
                    >
                        <Box
                            component="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 262.11 244.75"
                            sx={{
                                position: "absolute",
                                top: "20px",
                                right: "50px",
                                width: "clamp(220px, 30vw, 400px)",
                                transform: {
                                    xs: `translateY(${Math.min(scrollY * 0.5, window.innerHeight - 450)}px) scale(1.1,1.1) rotate(${scrollY * 0.1}deg)`,
                                    sm: `translateY(${Math.min(scrollY * 0.5, window.innerHeight - 450)}px) scale(1.1,1.1) rotate(${scrollY * 0.1}deg)`
                                },
                                height: "auto",
                                transition: "all 0.3s linear",
                                color: '#336a71',
                                fill: 'currentcolor',
                                clipPath: "inset(0 0 0 0)",
                            }}
                        >
                            <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                        </Box>

                        <Typography
                            variant="h1"
                            className="text"

                            // mt='50px'
                            sx={{
                                transform: `translateX(${2}px)`,
                                // fontSize: "250px",
                                fontSize: 'clamp(1rem,10vw,200px)',
                                transition: "all 0.3s linear",
                                fontWeight: "650",
                                height: 'clamp(1rem,10vw,220px)',
                                maxWidth: '100%',
                                color: 'white',
                                textAlign: 'start',
                                letterSpacing: 'clamp(2px,1vw,7px)',
                                paddingLeft: '80px'
                            }}
                        >
                            Contact Us
                        </Typography>

                        <Box
                            variant="p"
                            maxWidth="800px"
                            marginTop="clamp(20px,10vw,80px)"
                            className="text"
                            sx={{
                                fontSize: {
                                    xs: "16px", // Extra small devices (mobile)
                                    sm: "18px", // Small devices (tablet)
                                    md: "22px", // Medium devices (small laptops)
                                    lg: "28px", // Large devices (desktop)
                                },
                                marginLeft: {
                                    xs: "20px", // Extra small devices (mobile)
                                    sm: "20px", // Small devices (tablet)
                                    lg: "100px", // Large devices (desktop)
                                },
                                lineHeight: {
                                    xs: "24px", // Adjust line height for mobile
                                    sm: "28px",
                                    md: "30px",
                                    lg: "35px",
                                },
                                color: "white",
                                textAlign: 'start',
                                position: 'relative',
                                zIndex: '1'
                            }}
                        >
                            No matter how unique or individual your business is, our aim is to deliver a personalised service and to create a bespoke solution that matches your individual needs.
                        </Box>

                    </Container>

                    <Container
                        component="div"
                        maxWidth={false}
                        sx={{
                            height: "max-content",
                            textAlign: "center",
                            overflow: "visible",
                            position: "relative",
                            backgroundColor: '#00454e',
                            paddingTop: '0',
                            paddingBottom: '100px',
                            zIndex: '1',
                            fontFamily: '"Manrope", sans-serif'
                        }}

                    >
                        <Grid2 container spacing={{ sm: 3, md: 2 }} sx={{ width: '90%', margin: 'auto', marginTop: '130px' }}>

                            <Grid2 size={{ xs: 12, sm: 6, lg: 6 }} order='1'  >

                                <Box component='form' ref={form} onSubmit={handleSubmit} sx={{ textAlign: 'start', backgroundColor: '#29646c', padding: '40px 30px', borderRadius: '10px' }}>

                                    <Typography varient='h4' sx={{
                                        fontSize: '75px',
                                        fontWeight: '650',
                                        color: 'white',
                                        maxWidth: '400px',
                                        marginBottom: '50px',
                                        lineHeight: '70px'
                                    }}>Send us a message</Typography>

                                    <Box component='div' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Box component='div' sx={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                                            <Box component='label' htmlFor='name' sx={{ marginBottom: '15px', fontSize: '23px', color: 'white' }}>Your Name *</Box>
                                            <Box component='input' name='name' required={true} id='name' type='text' sx={{ borderRadius: '5px', marginRight: '10px', maxWidth: '100%', outline: 'none', border: 'none', fontSize: '20px', padding: '15px', backgroundColor: '#00454e', color: 'white' }} />
                                        </Box>

                                        <Box component='div' sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                            <Box component='label' htmlFor='email' sx={{ marginBottom: '15px', fontSize: '23px', color: 'white' }}>Your Email *</Box>
                                            <Box component='input' name='email' required={true} id='email' type='email' sx={{ borderRadius: '5px', maxWidth: '100%', outline: 'none', border: 'none', fontSize: '20px', padding: '15px', backgroundColor: '#00454e', color: 'white' }} />
                                        </Box>
                                    </Box>

                                    <Box component='div' sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', marginTop: '20px' }}>
                                        <Box component='label' htmlFor='subject' sx={{ marginBottom: '15px', fontSize: '23px', color: 'white' }}>Subject *</Box>
                                        <Box component='input' name='subject' required={true} id='subject' type='text' sx={{ borderRadius: '5px', maxWidth: '100%', outline: 'none', border: 'none', fontSize: '20px', padding: '15px', backgroundColor: '#00454e', color: 'white' }} />
                                    </Box>

                                    <Box component='div' sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', marginTop: '20px' }}>
                                        <Box component='label' htmlFor='message' sx={{ marginBottom: '15px', fontSize: '23px', color: 'white' }}>Message *</Box>
                                        <Box component='textarea' name='message' required={true} id='message' rows='7' cols='50' sx={{ borderRadius: '5px', maxWidth: '100%', outline: 'none', border: 'none', fontSize: '20px', padding: '15px', backgroundColor: '#00454e', color: 'white', resize: 'vertical', minHeight: '25px', maxHeight: '150px' }} />
                                    </Box>


                                    <Box
                                        marginTop='50px'
                                        width='max-content'>
                                        <Button type='submit' sx={{
                                            backgroundColor: 'white',
                                            fontSize: {
                                                xs: "14px",
                                                sm: "18px",
                                                lg: "21px",
                                            },

                                            // padding: '15px 40px',
                                            padding: {
                                                xs: "5px 20px", // Extra small devices (mobile)
                                                sm: "10px 30px", // Small devices (tablet)
                                                lg: "15px 40px", // Large devices (desktop)
                                            },
                                            borderRadius: '40px',
                                            textTransform: 'capitalize',
                                            border: '2px solid #7adcdb',
                                            color: '#7adcdb',
                                            background: 'rgba(0, 0, 0, 0)',
                                            fontWeight: '750',
                                            transition: 'all 0.2s linear',
                                            ":hover": {
                                                background: '#7adcdb',
                                                color: 'black',
                                                "& .MuiSvgIcon-root": {
                                                    transition: 'all 0.2s linear',
                                                    transform: 'rotate(0)'
                                                },
                                            },
                                        }}>Submit </Button>


                                    </Box>

                                </Box>

                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6, lg: 6 }} order='2' sx={{ padding: { xs: '0 10px 0 10px', sm: '0 10px 0 25px', lg: '0 30px 0 30px' }, marginTop: { xs: '50px', sm: '0' } }}>
                                <Box component='div' sx={{ color: 'rgb(255,255,255,0.8)', textAlign: 'start' }}>
                                    <Typography variant='h5' sx={{ fontSize: 'clamp(20px,4vw,30px)', fontWeight: '650', color: 'white', marginBottom: '10px', letterSpacing: '1px' }}>
                                        Registered Office
                                    </Typography>
                                    <Typography variant='h6' sx={{ fontSize: 'clamp(14px,4vw,20px)', lineHeight: '26px', letterSpacing: '2px' }}>
                                        706, City Center, CG Road,  <br /> Ahmedabad- 380009 <br />Gujarat, India
                                    </Typography>
                                    <Typography variant='h6' sx={{ fontSize: 'clamp(14px,4vw,20px)', marginTop: '15px', letterSpacing: '1px' }}>
                                        Tel: <NavLink to='tel:+91 7984919378' className='call-link' style={{ textDecoration: 'none', color: 'rgb(255,255,255,0.8)' }}>7984919378</NavLink>
                                    </Typography>
                                    <Typography variant='h6' sx={{ fontSize: 'clamp(14px,4vw,20px)', letterSpacing: '1px' }}>
                                        Email: <NavLink to='mailto:dhruv@trudency.com' className='call-link' style={{ textDecoration: 'none', color: 'rgb(255,255,255,0.8)' }}>dhruv@trudency.com</NavLink>
                                    </Typography>
                                </Box>
                            </Grid2>

                        </Grid2>
                    </Container>

                   
                    <Container
                        // ref={section5Ref}
                        component="div"
                        maxWidth={false}
                        sx={{
                            height: {
                                xs: '70vh',
                                sm: '90vh'
                            },
                            textAlign: "center",
                            backgroundColor: '#7ADCDB',
                            overflow: 'hidden',
                            padding: '0',
                            fontFamily: '"Manrope", sans-serif'
                        }}

                        className="section_6">

                        <Box component='div' sx={{
                            maxWidth: { xs: '100%', sm: '70%' }, margin: 'auto', position: "relative",
                            top: '50%', transform: 'translateY(-50%)'
                        }}>
                            <Typography variant="h2" sx={{ fontSize: 'clamp(70px,10vw,100px)', fontWeight: '750', color: '#00454e' }}>
                                Let's take the hard work out of accounting
                            </Typography>

                            <Box

                                sx={{
                                    width: {
                                        xs: '100%',
                                        sm: 'max-content'
                                    }
                                }}
                                margin='auto'
                                marginTop='60px'
                            >
                                <Button sx={{
                                    fontSize: {
                                        xs: '18px',
                                        sm: '14px',
                                        lg: '18px'
                                    },
                                    padding: {
                                        xs: '10px 30px',
                                        sm: '10px 20px',
                                        lg: '20px 40px'
                                    },
                                    borderRadius: '40px',
                                    textTransform: 'capitalize',
                                    border: '2px solid #00454e',
                                    color: 'black',
                                    background: 'rgba(0, 0, 0, 0)',
                                    fontWeight: '750',
                                    transition: 'all 0.2s linear',
                                    ":hover": {
                                        background: '#00454e',
                                        color: 'white',
                                        "& .MuiSvgIcon-root": {
                                            transition: 'all 0.2s linear',
                                            transform: 'rotate(0)'
                                        },
                                    }
                                }}>Get in touch today <ArrowCircleRightIcon sx={{
                                    marginLeft: '10px',
                                    fontSize: {
                                        xs: '30px',
                                        sm: '20px',
                                        lg: '30px'
                                    },
                                    transform: 'rotate(90deg)',
                                }} /> </Button>


                            </Box>
                        </Box>


                    </Container>
                    <Container
                        // ref={section5Ref}
                        component="div"
                        maxWidth={false}
                        sx={{
                            height: 'max-content',
                            backgroundColor: '#00454e',
                            overflow: 'hidden',
                            padding: '15px 0',
                            borderBottom: '1px solid rgba(255,255,255,0.2)',
                            fontFamily: '"Manrope", sans-serif'
                        }}

                        className="breadcrumb">
                        <Typography varient='h6' sx={{
                            paddingLeft: {
                                xs: "20px", // Extra small devices (mobile)
                                sm: "20px", // Small devices (tablet)
                                lg: "100px", // Large devices (desktop)
                            },
                            paddingRight: {
                                xs: "20px", // Extra small devices (mobile)
                                sm: "20px", // Small devices (tablet)
                                lg: "100px", // Large devices (desktop)
                            }, fontWeight: '500', fontSize: '16px', color: 'white', letterSpacing: '2px'
                        }}>
                            <NavLink to='/' style={{textDecoration:'none',color:'white'}}>Home</NavLink>
                            <span> / </span>
                            Contact Us
                        </Typography>
                    </Container>


                    <Footer />

                </>
            }
        </Fragment>
    )
}

export default ContactPage