import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import nature_in_cube from '/images/nature_in_cube.jpg'
import dheeraj from '/images/Dheeraj.png'
import Dhruv from '/images/Dhruv.png'
import Anubhav from '/images/Anubhav.png'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';
import styles from '../../Style/About.module.css'

function MeetTheTeam() {

    const { active_header } = useSelector(state => state.active_header)

    const [scrollY, setScrollY] = useState(0);

    const [section2Scroll, setSection2Scroll] = useState(0);
    const section2Ref = useRef(null);

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

        if (section2Ref.current) {
            const rect = section2Ref.current.getBoundingClientRect();
            const isVisible = rect.top < viewportHeight && rect.bottom > 0;

            if (isVisible) {
                const scrollOffset = Math.min(
                    Math.max(0, viewportHeight - rect.top),
                    viewportHeight
                );
                setSection2Scroll(scrollOffset);
            } else {
                setSection2Scroll(0);
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Fragment>
            {
                !active_header && <>
                    <Container

                        component="div"
                        disableGutters
                        sx={{
                            height: "max-content",
                            // height: "100vh",
                            textAlign: "center",
                            overflow: "hidden",
                            position: "relative",
                            backgroundColor: '#00454e',
                            paddingTop: '50px',
                            paddingBottom: '50px',
                            paddingLeft: '120px',
                            paddingRight: '120px',
                            marginTop: '50px',
                            fontFamily: '"Manrope", sans-serif'
                        }}
                        maxWidth={false}
                        className="section_1"
                    >
                        <Box
                            component="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 262.11 244.75"
                            sx={{
                                position: "absolute",
                                top: "20px",
                                left: "80px",
                                width: "clamp(220px, 30vw, 350px)",
                                transform: {
                                    xs: `translateY(${Math.min(scrollY * 0.5, window.innerHeight - 550)}px) scale(1.1,1.1) rotate(${scrollY * 0.1}deg)`,
                                    sm: `translateY(${Math.min(scrollY * 1, window.innerHeight - 550)}px) scale(1.1,1.1) rotate(${scrollY * 0.1}deg)`
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

                        <Typography variant='h6' sx={{
                            textAlign: 'start',
                            color: 'white',
                            marginBottom: '50px',
                            opacity: '0.6',
                            fontSize: '25px'
                        }}>
                            Meet the team
                        </Typography>

                        <Typography
                            variant="h1"
                            className="text"

                            // mt='50px'
                            sx={{
                                transform: `translateX(${scrollY * 0}px)`,
                                // fontSize: "250px",
                                fontSize: 'clamp(1rem,15.5vw,120px)',
                                transition: "all 0.3s linear",
                                fontWeight: "650",
                                height: 'clamp(1rem,15.5vw,220px)',
                                maxWidth: '100%',
                                color: 'white',
                                textAlign: 'start',
                            }}
                        >
                            Meet the <Box component='span' sx={{
                                backgroundColor: '#7ADCDB',
                                color: '#00454e',
                                padding: '10px 20px',
                                borderRadius: '15px',
                                userSelect: 'none'
                            }}>Team</Box>
                        </Typography>

                        <Box
                            variant="p"
                            maxWidth="800px"
                            // marginTop="clamp(20px,10vw,20px)"
                            className="text"
                            sx={{
                                fontSize: {
                                    xs: "16px", // Extra small devices (mobile)
                                    sm: "18px", // Small devices (tablet)
                                    md: "22px", // Medium devices (small laptops)
                                    lg: "28px", // Large devices (desktop)
                                },
                                lineHeight: {
                                    xs: "24px", // Adjust line height for mobile
                                    sm: "28px",
                                    md: "30px",
                                    lg: "40px",
                                },
                                color: "white",
                                textAlign: 'start',
                                position: 'relative',
                                zIndex: '1',

                            }}
                        >
                            Get to know more about the team below or give us a call to find out how we can help with your bookkeeping and accounting.
                        </Box>

                        <Box
                            marginTop='50px'
                            width='max-content'
                            sx={{
                                // marginLeft: {
                                //     xs: "0px", // Extra small devices (mobile)
                                //     sm: "20px", // Small devices (tablet)
                                //     lg: "100px", // Large devices (desktop)
                                // },
                            }}>
                            <Button sx={{
                                backgroundColor: 'white',
                                fontSize: {
                                    xs: "14px",
                                    sm: "18px",
                                    lg: "20px",
                                },
                                // padding: '15px 40px',
                                padding: {
                                    xs: "5px 20px", // Extra small devices (mobile)
                                    lg: "8px 25px", // Large devices (desktop)
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
                                }
                            }}>Speak To Us Today
                                {/* <ArrowCircleRightIcon
                             sx={{
                                marginLeft: '10px',
                                fontSize: {
                                    xs: "25px",
                                    sm: "30px",
                                    lg: "35px",
                                },
                                transform: 'rotate(90deg)',
                            }} />  */}
                            </Button>

                        </Box>

                    </Container>

                    <Container
                        ref={section2Ref}
                        component="div"
                        maxWidth={false}
                        sx={{
                            height: "max-content",
                            textAlign: "center",
                            overflow: "hidden",
                            position: "relative",
                            backgroundColor: '#00454e',
                            paddingTop: '50px',
                            paddingBottom: '50px',
                            fontFamily: '"Manrope", sans-serif'
                        }}

                        className="section_2">

                        <Grid2 container spacing={{ sm: 3, md: 2 }} mt='100px' sx={{ width: '100%' }}>

                            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} order='1'  >

                                <Box component='div' sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                                    <NavLink to='/about-us/meet-the-team' className={({ isActive }) => (isActive ? "active" : "")}
                                        style={{
                                            textDecoration: 'none'
                                        }}>
                                        {({ isActive }) => (
                                            <Typography
                                                variant="h5"
                                                className={isActive ? styles.active : ""}
                                                sx={{
                                                    color: "white",
                                                    marginLeft: "100px",
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    padding: "10px",
                                                    fontWeight: "650",
                                                    cursor: "pointer",
                                                    ":hover .right-icon": {
                                                        marginRight: "20px",
                                                        transition: "all 0.3s linear",
                                                    },
                                                    ":hover": {
                                                        color: "#7adcdb",
                                                    },
                                                }}
                                            >
                                                Meet the Team
                                                <ArrowCircleRightIcon className="right-icon" sx={{
                                                    marginRight: "50px",
                                                    color: "#7adcdb",
                                                    fontSize: { xs: "25px", sm: "20px", lg: "30px" },
                                                }} />
                                            </Typography>
                                        )}
                                    </NavLink>
                                    <NavLink to='/about-us/our-process' className={({ isActive }) => (isActive ? "active" : "")} style={{
                                        textDecoration: 'none'
                                    }}>
                                        {({ isActive }) => (
                                            <Typography
                                                variant="h5"
                                                className={isActive ? styles.active : ""}
                                                sx={{
                                                    color: "white",
                                                    marginLeft: "100px",
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    padding: "10px",
                                                    fontWeight: "650",
                                                    cursor: "pointer",
                                                    ":hover .right-icon": {
                                                        marginRight: "20px",
                                                        transition: "all 0.3s linear",
                                                    },
                                                    ":hover": {
                                                        color: "#7adcdb",
                                                    },
                                                }}
                                            >
                                                Our Process
                                                <ArrowCircleRightIcon className="right-icon" sx={{
                                                    marginRight: "50px",
                                                    color: "#7adcdb",
                                                    fontSize: { xs: "25px", sm: "20px", lg: "30px" },
                                                }} />
                                            </Typography>
                                        )}
                                    </NavLink>
                                    <NavLink to='/about-us/case-studies' className={({ isActive }) => (isActive ? "active" : "")} style={{ textDecoration: 'none' }}>
                                        {({ isActive }) => (
                                            <Typography
                                                variant="h5"
                                                className={isActive ? styles.active : ""}
                                                sx={{
                                                    color: "white",
                                                    marginLeft: "100px",
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    padding: "10px",
                                                    fontWeight: "650",
                                                    cursor: "pointer",
                                                    ":hover .right-icon": {
                                                        marginRight: "20px",
                                                        transition: "all 0.3s linear",
                                                    },
                                                    ":hover": {
                                                        color: "#7adcdb",
                                                    },
                                                }}
                                            >
                                                Case Studies
                                                <ArrowCircleRightIcon className="right-icon" sx={{
                                                    marginRight: "50px",
                                                    color: "#7adcdb",
                                                    fontSize: { xs: "25px", sm: "20px", lg: "30px" },
                                                }} />
                                            </Typography>
                                        )}
                                    </NavLink>
                                </Box>
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6, lg: 8 }} order='2' sx={{ padding: { xs: '0 10px 0 10px', sm: '0 10px 0 25px', lg: '0 60px 0 10px' }, marginTop: { xs: '50px', sm: '0' } }} >

                                <Box component='div'>

                                    <Typography variant='h6' sx={{
                                        textAlign: 'justify',
                                        fontSize: '28px',
                                        lineHeight: '38px',
                                        color: 'white',
                                        fontWeight: '550'
                                    }}>
                                        Meet the team that make up Trudency. Everyone brings their expertise and experience to deliver top-rated outsourced accounting services for our clients. We carefully partner our accountants to ensure you're receiving the best possible care and specialist knowledge for your business sector.
                                    </Typography>


                                    <Typography variant='h6' sx={{
                                        textAlign: 'justify',
                                        fontSize: '20px',
                                        lineHeight: '30px',
                                        marginTop: '30px',
                                        color: 'white',
                                        fontWeight: '550'
                                    }}>
                                        Working across a wide range of industries and offering an even broader range of accounting services, your accountants will bring their expertise without overwhelming you with jargon - just straightforward, professional and accessible advice and services when you need it.
                                    </Typography>

                                    <Grid2 container spacing={{ sm: 3, md: 2 }} mt='50px' sx={{ width: '100%' }}>
                                        <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} sx={{
                                            position: 'relative', overflow: 'hidden', ":hover .overlay1": {
                                                backgroundColor: 'white',
                                                color: 'black',
                                                transition: 'all 0.5s linear'
                                            }, cursor: 'pointer'
                                        }}>
                                            <Box component='img' src={dheeraj} sx={{
                                                width: "100%",
                                                height: "300px",
                                                objectFit: "cover",
                                                maskPosition: 'center',
                                                overflow: "hidden",
                                                zIndex: '0',
                                                borderRadius: '10px 10px 0 0'
                                            }}>
                                            </Box>
                                            <Typography variant='h6' className='overlay1' sx={{
                                                position: 'absolute',
                                                content: '""',
                                                bottom: '0',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                                width: '100%',
                                                height: '55px',
                                                fontWeight: '650',
                                                color: 'white',
                                                padding: '5px 10px',
                                                fontSize: '18px',
                                            }}>
                                                CA. Dheeraj Somani - Founder - ManagingPartner
                                            </Typography>
                                        </Grid2>
                                        <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} sx={{
                                            position: 'relative', overflow: 'hidden', ":hover .overlay1": {
                                                backgroundColor: 'white',
                                                color: 'black',
                                                transition: 'all 0.5s linear'
                                            }, cursor: 'pointer'
                                        }}>
                                            <Box component='img' src={Anubhav} sx={{
                                                width: "100%",
                                                height: "300px",
                                                objectFit: "cover",
                                                maskPosition: 'center',
                                                overflow: "hidden",
                                                zIndex: '0',
                                                borderRadius: '10px 10px 0 0'
                                            }}>
                                            </Box>
                                            <Typography variant='h6' className='overlay1' sx={{
                                                position: 'absolute',
                                                content: '""',
                                                bottom: '0',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                                width: '100%',
                                                height: '55px',
                                                fontWeight: '650',
                                                color: 'white',
                                                padding: '5px 10px',
                                                fontSize: '18px'

                                            }}>
                                                CA. Anubhav Maloo - Founder - CMO
                                            </Typography>
                                        </Grid2>
                                        <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} sx={{
                                            position: 'relative', overflow: 'hidden', ":hover .overlay1": {
                                                backgroundColor: 'white',
                                                color: 'black',
                                                transition: 'all 0.5s linear'
                                            }, cursor: 'pointer'
                                        }}>
                                            <Box component='img' src={Dhruv} sx={{
                                                width: "100%",
                                                height: "300px",
                                                objectFit: "cover",
                                                maskPosition: 'center',
                                                overflow: "hidden",
                                                zIndex: '0',
                                                borderRadius: '10px 10px 0 0'
                                            }}>
                                            </Box>
                                            <Typography variant='h6' className='overlay1' sx={{
                                                position: 'absolute',
                                                content: '""',
                                                bottom: '0',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                                width: '100%',
                                                height: '55px',
                                                fontWeight: '650',
                                                color: 'white',
                                                padding: '5px 10px',
                                                fontSize: '18px',
                                                lineHeight: '55px'
                                            }}>
                                                Dhruv Bhavsar - Founder - COO
                                            </Typography>
                                        </Grid2>
                                    </Grid2>


                                    {/* <Box component='div' sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                                        <Typography variant="h3" sx={{
                                            fontSize: {
                                                xs: '30px',
                                                sm: '45px',
                                                lg: '55px'
                                            },
                                            color: '#7adcdb',
                                            fontWeight: '750',
                                            textAlign: 'start',
                                            letterSpacing: '1px',
                                            marginRight: '10px'
                                        }}>
                                            Outsourced
                                        </Typography>
                                        <Typography variant="h3" sx={{
                                            fontSize: {
                                                xs: '30px',
                                                sm: '45px',
                                                lg: '55px'
                                            },
                                            color: '#7adcdb',
                                            fontWeight: '750',
                                            textAlign: 'start',
                                            letterSpacing: '1px',
                                        }}>
                                            Accounting
                                        </Typography>
                                        <Typography variant="h3" sx={{
                                            fontSize: {
                                                xs: '30px',
                                                sm: '45px',
                                                lg: '55px'
                                            },
                                            color: '#7adcdb',
                                            fontWeight: '750',
                                            textAlign: 'start',
                                            letterSpacing: '1px'
                                        }}>
                                            Services
                                        </Typography>
                                    </Box> */}

                                    {/* <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,35px)',
                                        color: 'white',
                                        fontWeight: '550',
                                        textAlign: 'start',
                                        lineHeight: {
                                            xs: '25px',
                                            sm: '35px',
                                            lg: '40px',
                                        },
                                        marginTop: '20px'
                                    }}>
                                        Ensure all your finances are up-to-date and remove the need for additional management.
                                    </Typography> */}

                                    {/* <Box
                                        marginTop='50px'
                                        width='max-content'>
                                        <Button sx={{
                                            backgroundColor: 'white',
                                            fontSize: {
                                                xs: '18px',
                                                sm: '14px',
                                                lg: '18px'
                                            },
                                            padding: {
                                                xs: '10px 15px',
                                                sm: '10px 20px'
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
                                            }
                                        }}>Outsourced Accounting Services 
                                        <ArrowCircleRightIcon sx={{
                                            marginLeft: '10px',
                                            fontSize: {
                                                xs: '25px',
                                                sm: '20px',
                                                lg: '30px'
                                            },
                                            transform: 'rotate(90deg)',
                                        }} /> 
                                        </Button>

                                    </Box> */}

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

                            <NavLink to='/contact-us'>
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

                            </NavLink>

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
                            <NavLink to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</NavLink>
                            <span> / </span>
                            About Us
                            <span> / </span>
                            Meet the team
                        </Typography>
                    </Container>

                    <Footer />

                </>
            }
        </Fragment>
    )
}

export default MeetTheTeam