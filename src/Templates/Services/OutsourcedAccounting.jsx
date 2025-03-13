import { Box, Button, Container, Grid2, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import outsourced_1 from '/images/Services/outsourced_1.jpg'
import cube from '/images/cube.svg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';


function OutsourcedAccounting() {

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


    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
                            textAlign: "center",
                            overflow: "hidden",
                            position: "relative",
                            backgroundColor: '#00454e',
                            paddingTop: '50px',
                            paddingBottom: '120px',
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
                                    sm: `translateY(${Math.min(scrollY * 1, window.innerHeight - 350)}px) scale(1.1,1.1) rotate(${scrollY * 0.1}deg)`
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
                            Outsourced Accounting Services
                        </Typography>

                        <Typography
                            variant="h1"
                            className="text"

                            // mt='50px'
                            sx={{
                                transform: `translateX(${scrollY * 0}px)`,
                                fontSize: "250px",
                                fontSize: 'clamp(1rem,15.5vw,120px)',
                                transition: "all 0.3s linear",
                                fontWeight: "650",
                                // height: 'clamp(1rem,15.5vw,220px)',
                                maxWidth: 'max-content',
                                color: 'white',
                                textAlign: 'start',
                            }}
                        >
                            Your <Box component='span' sx={{
                                backgroundColor: '#7ADCDB',
                                color: '#00454e',
                                padding: '10px 20px',
                                borderRadius: '15px',
                                userSelect: 'none',
                                // display: 'block',
                                width: 'max-content'
                            }}>trusted</Box> <br />
                            financial partner
                        </Typography>

                        <Box
                            variant="p"
                            maxWidth="800px"
                            marginTop="clamp(20px,10vw,20px)"
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
                            Our outsourced accounting services are perfect for ambitious businesses looking to benefit from wide ranging industry and accountancy expertise. Save money, business time and resources by outsourcing with Trudency, as we work to maximise efficiency and remain compliant.
                        </Box>

                        <Box
                            marginTop='50px'
                            width='max-content'>
                            <NavLink to='/contact-us'>
                                <Button sx={{
                                    backgroundColor: 'white',
                                    fontSize: {
                                        xs: "14px",
                                        sm: "18px",
                                    },

                                    padding: {
                                        xs: "5px 20px",
                                        lg: "8px 25px",
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
                                }}>Outsource Your Accounting Today
                                </Button>
                            </NavLink>
                            <NavLink to='tel:7984919378'>
                                <Button sx={{
                                    backgroundColor: 'white',
                                    fontSize: {
                                        xs: "14px",
                                        sm: "18px",
                                    },
                                    marginLeft: '30px',
                                    padding: {
                                        xs: "5px 20px",
                                        lg: "8px 25px",
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
                                }}>Call us on 7984919378
                                </Button>
                            </NavLink>
                        </Box>

                    </Container>

                    <Container
                        ref={section2Ref}
                        component="div"
                        maxWidth={false}
                        disableGutters
                        sx={{
                            // height: "200vh",
                            height: "max-content",
                            textAlign: "center",
                            overflow: "hidden",
                            position: "relative",
                            // backgroundColor: '#00454e',
                            paddingTop: '100px',
                            paddingBottom: '100px',
                            paddingLeft: '120px',
                            paddingRight: '120px',
                            fontFamily: '"Manrope", sans-serif',
                            backgroundColor: '#7adcdb'
                        }}

                        className="section_2">

                        <Typography variant='h6' sx={{
                            textAlign: 'start',
                            color: 'white',
                            marginBottom: '30px',
                            fontSize: '25px',
                            color: '#00454e'
                        }}>
                            Outsourced Accounting Services
                        </Typography>


                        <Typography variant='h2' sx={{
                            textAlign: 'start',
                            color: 'white',
                            marginBottom: '50px',
                            fontSize: '65px',
                            fontWeight: '750',
                            color: '#00454e',
                            letterSpacing: '2px'
                        }}>
                            Build or improve your accounts department with outsourced accounting from Trudency
                        </Typography>


                        <Grid2 container spacing={{ sm: 3, md: 2 }} mt='70px' sx={{ width: '100%' }}>

                            <Grid2 size={{ xs: 12, sm: 6, lg: 6 }} order='2' sx={{ padding: { xs: '0 10px 0 10px', sm: '0 10px 0 25px', lg: '0 10px 0 10px' }, marginTop: { xs: '50px', sm: '0' } }} >
                                <Box component='div'>
                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,23px)',
                                        // color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px'
                                    }}>
                                        <Box sx={{ fontWeight: '650', display: 'block', width: 'max-content', marginBottom: '20px', fontSize: '30px' }} component='span'>Bookkeeping Services</Box> Our Outsourced Bookkeeping services include purchase ledger management, processing payments and invoices; all of which can be time-consuming for you.
                                    </Typography>
                                    <Box
                                        marginTop='50px'
                                        width='max-content'>
                                        <Button sx={{
                                            backgroundColor: 'white',
                                            fontSize: {
                                                xs: "14px",
                                                sm: "18px",
                                            },

                                            padding: {
                                                xs: "5px 20px",
                                                lg: "15px 30px",
                                            },
                                            borderRadius: '40px',
                                            textTransform: 'capitalize',
                                            border: '2px solid #00454e',
                                            color: '#00454e',
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
                                        }}>Hire a Bookkeeper <ArrowCircleRightIcon sx={{
                                            marginLeft: '10px',
                                            fontSize: {
                                                xs: "25px",
                                                sm: "30px",
                                                lg: "35px",
                                            },
                                            transform: 'rotate(90deg)',
                                        }}></ArrowCircleRightIcon>
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, lg: 6 }} order='2' sx={{ padding: { xs: '0 10px 0 10px', sm: '0 10px 0 25px', lg: '0 10px 0 10px' }, marginTop: { xs: '50px', sm: '0' } }} >
                                <Box component='div'>
                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,23px)',
                                        // color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px'
                                    }}>
                                        <Box sx={{ fontWeight: '650', display: 'block', width: 'max-content', marginBottom: '20px' }} component='span'>Payroll Outsourcing</Box> Benefit from the support of dedicated payroll experts when you choose to outsource. We seamlessly integrate with your team, so your payroll processes can run smoothly.
                                    </Typography>
                                    <Box
                                        marginTop='50px'
                                        width='max-content'>
                                        <Button sx={{
                                            backgroundColor: 'white',
                                            fontSize: {
                                                xs: "14px",
                                                sm: "18px",
                                            },

                                            padding: {
                                                xs: "5px 20px",
                                                lg: "15px 30px",
                                            },
                                            borderRadius: '40px',
                                            textTransform: 'capitalize',
                                            border: '2px solid #00454e',
                                            color: '#00454e',
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
                                        }}>Outsource your Payroll <ArrowCircleRightIcon sx={{
                                            marginLeft: '10px',
                                            fontSize: {
                                                xs: "25px",
                                                sm: "30px",
                                                lg: "35px",
                                            },
                                            transform: 'rotate(90deg)',
                                        }}></ArrowCircleRightIcon>
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, lg: 6 }} order='2' sx={{ padding: { xs: '0 10px 0 10px', sm: '0 10px 0 25px', lg: '0 10px 0 10px' }, marginTop: { xs: '50px', sm: '0' } }} >
                                <Box component='div'>
                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,23px)',
                                        // color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px'
                                    }}>
                                        <Box sx={{ fontWeight: '650', display: 'block', width: 'max-content', marginBottom: '20px' }} component='span'>Financial Director Services</Box> Our virtual services give you access to our team of strategic decision-makers who can create funding strategies and monitor spending.
                                    </Typography>
                                    <Box
                                        marginTop='50px'
                                        width='max-content'>
                                        <Button sx={{
                                            backgroundColor: 'white',
                                            fontSize: {
                                                xs: "14px",
                                                sm: "18px",
                                            },

                                            padding: {
                                                xs: "5px 20px",
                                                lg: "15px 30px",
                                            },
                                            borderRadius: '40px',
                                            textTransform: 'capitalize',
                                            border: '2px solid #00454e',
                                            color: '#00454e',
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
                                        }}>Hire an FD <ArrowCircleRightIcon sx={{
                                            marginLeft: '10px',
                                            fontSize: {
                                                xs: "25px",
                                                sm: "30px",
                                                lg: "35px",
                                            },
                                            transform: 'rotate(90deg)',
                                        }}></ArrowCircleRightIcon>
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid2>
                        </Grid2>



                    </Container>

                    <Container
                        ref={section2Ref}
                        component="div"
                        maxWidth={false}
                        disableGutters
                        sx={{
                            // height: "200vh",
                            height: "max-content",
                            textAlign: "center",
                            overflow: "hidden",
                            position: "relative",
                            backgroundColor: '#00454e',
                            paddingTop: '100px',
                            paddingBottom: '100px',
                            paddingLeft: '120px',
                            paddingRight: '120px',
                            fontFamily: '"Manrope", sans-serif',
                            // backgroundColor: '#7adcdb'
                        }}

                        className="section_2">

                        <Typography variant='h6' sx={{
                            textAlign: 'start',
                            color: 'white',
                            marginBottom: '30px',
                            fontSize: '30px',
                            // color: '#00454e'
                        }}>
                            Who We Work With
                        </Typography>


                        <Typography variant='h2' sx={{
                            textAlign: 'start',
                            color: 'white',
                            marginBottom: '50px',
                            fontSize: '65px',
                            fontWeight: '750',
                            // color: '#00454e',
                            letterSpacing: '2px'
                        }}>
                            Trudency works with a wide range of clients from a variety of sectors
                        </Typography>


                        <Grid2 container spacing={{ sm: 3, md: 2 }} mt='130px' sx={{ width: '100%' }}>

                            <Grid2 size={{ xs: 12, sm: 6, lg: 6 }} order='1'  >

                                <Box component='div' sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box component='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.11 244.75" sx={{
                                        position: 'absolute',
                                        top: '0',
                                        zIndex: '1',
                                        width: "100%",
                                        height: "500px",
                                        opacity: '0.7',
                                        fill: "rgba(255, 255, 255, 0.5)",
                                    }}>
                                        <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                                    </Box>
                                    <Box component='img' src={outsourced_1} sx={{
                                        width: "100%",
                                        position: 'absolute',
                                        top: '0',
                                        height: '500px',
                                        objectFit: "cover",
                                        maskImage: `url(${cube})`,
                                        maskRepeat: "no-repeat",
                                        WebkitMaskImage: `url(${cube})`,
                                        WebkitMaskRepeat: "no-repeat",
                                        maskPosition: 'center',
                                        overflow: "hidden",
                                        zIndex: '0',
                                    }}>
                                    </Box>
                                </Box>
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6, lg: 6 }} order='2' sx={{ padding: { xs: '0 10px 0 10px', sm: '0 10px 0 25px', lg: '0 10px 0 10px' }, marginTop: { xs: '50px', sm: '0' } }} >

                                <Box component='div'>

                                    <Box component='div' sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                                        <Typography variant="h3" sx={{
                                            fontSize: {
                                                xs: '22px',
                                                sm: '27px',
                                                lg: '35px'
                                            },
                                            color: 'white',
                                            fontWeight: '750',
                                            textAlign: 'start',
                                            letterSpacing: '1px',
                                            marginRight: '10px'
                                        }}>
                                            We provide outsourced accounting services across many industries, including:
                                        </Typography>
                                    </Box>

                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,23px)',
                                        color: 'white',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px'
                                    }}>
                                        <Box sx={{ fontWeight: '650', fontSize: '30px', lineHeight: '40px' }} component='span'>Construction <br />
                                            Property Development <br />
                                            Manufacturing <br />
                                            Technology <br />
                                            Ecommerce <br />
                                            Healthcare <br />
                                            Letting Agents <br /></Box><br /> There are many more sectors we provide accurate, prompt and personable services for. Get in touch with our team today to discuss your requirements.
                                    </Typography>

                                    <Box
                                        marginTop='50px'
                                        width='max-content'>
                                        <Button sx={{
                                            backgroundColor: '#00454e',
                                            fontSize: {
                                                xs: "14px",
                                                sm: "18px",
                                            },

                                            padding: {
                                                xs: "5px 20px",
                                                lg: "15px 30px",
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
                                                color: '#00454e',
                                                "& .MuiSvgIcon-root": {
                                                    transition: 'all 0.2s linear',
                                                    transform: 'rotate(0)'
                                                },
                                            }
                                        }}>Let's work Together <ArrowCircleRightIcon sx={{
                                            marginLeft: '10px',
                                            fontSize: {
                                                xs: "25px",
                                                sm: "30px",
                                                lg: "35px",
                                            },
                                            transform: 'rotate(90deg)',
                                        }} />
                                        </Button>
                                    </Box>


                                </Box>

                            </Grid2>

                        </Grid2>


                        {/* <Grid2 container spacing={{ sm: 3, md: 2 }} mt='130px' sx={{ width: '100%' }}>

                            <Grid2 size={{ xs: 12, sm: 6, lg: 6 }} order='2'  >

                                <Box component='div' sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box component='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.11 244.75" sx={{
                                        position: 'absolute',
                                        top: '0',
                                        zIndex: '1',
                                        width: "100%",
                                        height: "500px",
                                        opacity: '0.7',
                                        fill: "rgba(255, 255, 255, 0.5)",
                                    }}>
                                        <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                                    </Box>
                                    <Box component='img' src={bookkeeping_service2} sx={{
                                        width: "100%",
                                        position: 'absolute',
                                        top: '0',
                                        height: '500px',
                                        objectFit: "cover",
                                        maskImage: `url(${cube})`,
                                        maskRepeat: "no-repeat",
                                        WebkitMaskImage: `url(${cube})`,
                                        WebkitMaskRepeat: "no-repeat",
                                        maskPosition: 'center',
                                        overflow: "hidden",
                                        zIndex: '0',
                                    }}>
                                    </Box>
                                </Box>
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6, lg: 6 }} order='1' sx={{ padding: { xs: '0 10px 0 10px', sm: '0 10px 0 25px', lg: '0 10px 0 10px' }, marginTop: { xs: '50px', sm: '0' } }} >

                                <Box component='div'>

                                    <Box component='div' sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                                        <Typography variant="h3" sx={{
                                            fontSize: {
                                                xs: '30px',
                                                sm: '45px',
                                                lg: '70px'
                                            },
                                            color: '#00454e',
                                            fontWeight: '750',
                                            textAlign: 'start',
                                            letterSpacing: '1px',
                                            marginRight: '10px'
                                        }}>
                                            Bookkeeping Sub Services
                                        </Typography>
                                    </Box>

                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,23px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px'
                                    }}>
                                        <Box sx={{ fontWeight: '650' }} component='span'>Purchase Ledger Management -</Box> Monitor your business' outgoings and maintain supply chain.
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,23px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px'
                                    }}>
                                        <Box sx={{ fontWeight: '650' }} component='span'>Sales Ledger & Credit Management -</Box> Get a clearer picture of your financial situation throughout the year, improve cash flow.
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,23px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px'
                                    }}>
                                        <Box sx={{ fontWeight: '650' }} component='span'>Processing Payments & Invoices -</Box> Ensure payments are approved and processed correctly.
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,23px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px'
                                    }}>
                                        <Box sx={{ fontWeight: '650' }} component='span'>Bank Reconciliation -</Box>  Detect any possible errors in transactions recorded.
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,23px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px'
                                    }}>
                                        <Box sx={{ fontWeight: '650' }} component='span'>Construction Industry Scheme (CIS) Compliance -</Box>  Manage sub-contractor payments.
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,23px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px'
                                    }}>
                                        <Box sx={{ fontWeight: '650' }} component='span'>Making Tax Digital (MTD) -</Box>  Keep digital records and make submissions to HRMC electronically.
                                    </Typography>

                                    <Box
                                        marginTop='50px'
                                        width='max-content'>
                                        <Button sx={{
                                            backgroundColor: 'white',
                                            fontSize: {
                                                xs: "14px",
                                                sm: "18px",
                                            },

                                            padding: {
                                                xs: "5px 20px",
                                                lg: "15px 30px",
                                            },
                                            borderRadius: '40px',
                                            textTransform: 'capitalize',
                                            border: '2px solid #00454e',
                                            color: '#00454e',
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
                                        }}>Hiring Vs Outsourcing <ArrowCircleRightIcon sx={{
                                            marginLeft: '10px',
                                            fontSize: {
                                                xs: "25px",
                                                sm: "30px",
                                                lg: "35px",
                                            },
                                            transform: 'rotate(90deg)',
                                        }} />
                                        </Button>
                                    </Box>


                                </Box>

                            </Grid2>

                        </Grid2> */}
                    </Container>


                    <Container
                        component="div"
                        maxWidth={false}
                        disableGutters
                        sx={{
                            height: "mac-content",
                            // height: "200vh",
                            overflow: "hidden",
                            position: "relative",
                            // backgroundColor: '#00454e',
                            paddingTop: '100px',
                            paddingBottom: '100px',
                            paddingLeft: '120px',
                            paddingRight: '120px',
                            fontFamily: '"Manrope", sans-serif',
                            backgroundColor: '#7adcdb',
                            color: 'white',

                        }}

                        className="section_2">

                        <Box component='div' sx={{
                            // backgroundColor:'green',
                            display: 'flex',
                            justifyContent: 'space-between',
                            height: '1000px',
                            width: '100%',
                            position: 'relative'
                        }}>
                            <Box sx={{
                                width: '400px',
                                height: '400px',
                                backgroundColor: '#00454e',
                                position: 'absolute',
                                top: '100px',
                                zIndex: '1',
                                ":hover": {
                                    zIndex: '2'
                                },
                                overflow: 'hidden',
                                borderRadius: '10px',
                            }}>
                                <Box
                                    component="svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 262.11 244.75"
                                    sx={{
                                        position: "absolute",
                                        top: "-150px",
                                        // left: "80px",
                                        width: "clamp(220px, 30vw, 350px)",
                                        transform: 'scale(1.5,1.5)',
                                        height: "auto",
                                        transition: "all 0.3s linear",
                                        color: '#336a71',
                                        fill: 'currentcolor',
                                        clipPath: "inset(0 0 0 0)",
                                    }}
                                >
                                    <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                                </Box>

                                <Typography sx={{
                                    fontSize: '30px',
                                    fontWeight: '650',
                                    position: 'absolute',
                                    bottom: '0',
                                    padding: '25px',
                                    lineHeight: '40px'
                                }}>
                                    Fully Qualified & Experienced Accountants
                                </Typography>
                            </Box>

                            <Box sx={{
                                width: '400px',
                                height: '400px',
                                backgroundColor: '#2db9b8',
                                position: 'absolute',
                                top: '170px',
                                left: '430px',
                                zIndex: '2',
                                ":hover": {
                                    zIndex: '3'
                                },
                                borderRadius: '10px',
                                overflow: 'hidden'

                            }}>
                                <Box
                                    component="svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 262.11 244.75"
                                    sx={{
                                        position: "absolute",
                                        bottom: "-70px",
                                        left: "-70px",
                                        width: "clamp(220px, 30vw, 350px)",
                                        transform: 'scale(0.9,0.9)',
                                        height: "auto",
                                        transition: "all 0.3s linear",
                                        color: 'rgba(255,255,255,0.25)',
                                        fill: 'currentcolor',
                                        clipPath: "inset(0 0 0 0)",
                                    }}
                                >
                                    <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                                </Box>

                                <Typography sx={{
                                    fontSize: '30px',
                                    fontWeight: '650',
                                    position: 'absolute',
                                    bottom: '0',
                                    padding: '25px',
                                    lineHeight: '40px'
                                }}>
                                    Work With A Range Of Accounting Software
                                </Typography>
                            </Box>

                            <Box sx={{
                                width: '400px',
                                height: '400px',
                                backgroundColor: '#0098ab',
                                position: 'absolute',
                                top: '50px',
                                right: '20px',
                                zIndex: '3',
                                ":hover": {
                                    zIndex: '3'
                                },
                                borderRadius: '10px',
                                overflow: 'hidden'
                            }}>
                                <Box
                                    component="svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 262.11 244.75"
                                    sx={{
                                        position: "absolute",
                                        top: "-100px",
                                        right: "-100px",
                                        width: "clamp(220px, 30vw, 350px)",
                                        transform: 'scale(0.9,0.9)',
                                        height: "auto",
                                        transition: "all 0.3s linear",
                                        color: 'rgba(255,255,255,0.25)',
                                        fill: 'currentcolor',
                                        clipPath: "inset(0 0 0 0)",
                                    }}
                                >
                                    <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                                </Box>

                                <Typography sx={{
                                    fontSize: '30px',
                                    fontWeight: '650',
                                    position: 'absolute',
                                    bottom: '0',
                                    padding: '25px',
                                    lineHeight: '40px'
                                }}>
                                    Expertise Within A Range Of Sectors
                                </Typography>
                            </Box>

                            <Box sx={{
                                width: '400px',
                                height: '400px',
                                backgroundColor: '#00454e',
                                position: 'absolute',
                                bottom: '160px',
                                right: '100px',
                                zIndex: '2',
                                ":hover": {
                                    zIndex: '3'
                                },
                                borderRadius: '10px',
                                overflow: 'hidden'
                            }}>
                                <Box
                                    component="svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 262.11 244.75"
                                    sx={{
                                        position: "absolute",
                                        bottom: "-20px",
                                        right: "-50px",
                                        width: "clamp(220px, 30vw, 350px)",
                                        transform: 'scale(0.9,0.9)',
                                        height: "auto",
                                        transition: "all 0.3s linear",
                                        color: 'rgba(255,255,255,0.25)',
                                        fill: 'currentcolor',
                                        clipPath: "inset(0 0 0 0)",
                                    }}
                                >
                                    <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                                </Box>

                                <Typography sx={{
                                    fontSize: '30px',
                                    fontWeight: '650',
                                    position: 'absolute',
                                    bottom: '0',
                                    padding: '25px',
                                    lineHeight: '40px'
                                }}>
                                    Bespoke Service Tailored To Your Unique Requirements
                                </Typography>
                            </Box>

                            <Box sx={{
                                width: '400px',
                                height: '400px',
                                backgroundColor: '#0098ab',
                                position: 'absolute',
                                bottom: '110px',
                                left: '100px',
                                zIndex: '1',
                                ":hover": {
                                    zIndex: '3'
                                },
                                borderRadius: '10px',
                                overflow: 'hidden'
                            }}>
                                <Box
                                    component="svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 262.11 244.75"
                                    sx={{
                                        position: "absolute",
                                        bottom: "-70px",
                                        left: "-70px",
                                        width: "clamp(220px, 30vw, 350px)",
                                        transform: 'scale(0.9,0.9)',
                                        height: "auto",
                                        transition: "all 0.3s linear",
                                        color: 'rgba(255,255,255,0.25)',
                                        fill: 'currentcolor',
                                        clipPath: "inset(0 0 0 0)",
                                    }}
                                >
                                    <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                                </Box>

                                <Typography sx={{
                                    fontSize: '30px',
                                    fontWeight: '650',
                                    position: 'absolute',
                                    bottom: '0',
                                    padding: '25px',
                                    lineHeight: '40px'
                                }}>
                                    Cloud Or Remote Services Available For Your Convenience
                                </Typography>
                            </Box>

                        </Box>

                        <Box component='div' sx={{
                            fontSize: '45px',
                            fontWeight: '650',
                            textAlign: 'center',
                            color: '#00454e'
                        }}>
                            Established in 2022, Trudency is a India-based company that offers comprehensive Bookkeeping and accounting services for businesses nationwide. With the ability to work with various accounting software, we have built a solid reputation by successfully helping over 400 businesses save millions of pounds.
                        </Box>

                        <Box

                            width='max-content'
                            margin='auto'
                            marginTop='50px'
                        >
                            <Button sx={{
                                backgroundColor: 'red',
                                fontSize: {
                                    xs: "14px",
                                    sm: "18px",
                                },
                                padding: {
                                    xs: "5px 20px",
                                    lg: "15px 30px",
                                },
                                borderRadius: '40px',
                                textTransform: 'capitalize',
                                border: '2px solid #00454e',
                                color: '#00454e',
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
                            }}>More About Trudency <ArrowCircleRightIcon sx={{
                                marginLeft: '10px',
                                fontSize: {
                                    xs: "25px",
                                    sm: "30px",
                                    lg: "35px",
                                },
                                transform: 'rotate(90deg)',
                            }}></ArrowCircleRightIcon>
                            </Button>
                        </Box>

                    </Container>

                    <Container
                        component="div"
                        maxWidth={false}
                        disableGutters
                        sx={{
                            height: "mac-content",
                            overflow: "hidden",
                            position: "relative",
                            paddingTop: '100px',
                            paddingBottom: '100px',
                            paddingLeft: '120px',
                            paddingRight: '120px',
                            fontFamily: '"Manrope", sans-serif',
                            backgroundColor: '#00454e',
                            color: 'white',

                        }}

                        className="section_2">

                        <Box component='div'>
                            <Accordion disableGutters expanded={expanded === "panel1"} sx={{ borderBottom: '1px solid rgba(255,255,255,0.5)', padding: '10px 0', backgroundColor: 'transparent', color: 'white', opacity: '0.9', boxShadow: 'none' }} onChange={handleChange("panel1")}>
                                <AccordionSummary >
                                    <Typography variant='h4' sx={{
                                        fontWeight: '450',
                                        fontSize: '30px',

                                    }}>What are the benefits of outsourcing your accounting services with Trudency?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    <Typography variant='h4' sx={{
                                        fontWeight: '500',
                                        fontSize: '22px',
                                        opacity: '0.8'

                                    }}>Our services mean our qualified experts work as part of your extended team to take care of any accounting services you require. Benefit from an alternative to employment that is tailored to suit your unique business needs.</Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion disableGutters expanded={expanded === "panel2"} sx={{ backgroundColor: 'transparent', color: 'white', opacity: '0.9', boxShadow: 'none', borderBottom: '1px solid rgba(255,255,255,0.5)', padding: '10px 0', }} onChange={handleChange("panel2")}>
                                <AccordionSummary>
                                    <Typography variant='h4' sx={{
                                        fontWeight: '450',
                                        fontSize: '30px',

                                    }}>Why should my business consider outsourcing our accounting?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='h4' sx={{
                                        fontWeight: '500',
                                        fontSize: '22px',
                                        opacity: '0.8'
                                    }}>Trudency believes that any business can benefit from outsourcing their accounting services. Your business can rest assured knowing your accounts will be handled correctly and promptly, freeing up valuable time.</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion disableGutters expanded={expanded === "panel3"} sx={{ borderBottom: '1px solid rgba(255,255,255,0.5)', padding: '10px 0', backgroundColor: 'transparent', color: 'white', opacity: '0.9', boxShadow: 'none' }} onChange={handleChange("panel3")}>
                                <AccordionSummary>
                                    <Typography variant='h4' sx={{
                                        fontWeight: '450',
                                        fontSize: '30px',

                                    }}>How much do your outsourced accounting services cost?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='h4' sx={{
                                        fontWeight: '500',
                                        fontSize: '22px',
                                        opacity: '0.8'

                                    }}>Our services are a cost-effective alternative to hiring in-house. We offer competitive prices alongside our high-quality services. Our services are fully bespoke, meaning you can pick which services you need and how often you want them completed. For a more accurate quote, contact our team today for a no-obligation consultation.</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion disableGutters expanded={expanded === "panel4"} sx={{ borderBottom: '1px solid rgba(255,255,255,0.5)', padding: '10px 0', backgroundColor: 'transparent', color: 'white', opacity: '0.9', boxShadow: 'none' }} onChange={handleChange("panel4")}>
                                <AccordionSummary>
                                    <Typography variant='h4' sx={{
                                        fontWeight: '450',
                                        fontSize: '30px',

                                    }}>Which accounting software does Trudency specialise in?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='h4' sx={{
                                        fontWeight: '500',
                                        fontSize: '22px',
                                        opacity: '0.8'

                                    }}>Our services are tailored to suit you and this approach extends to software, as Trudency is able to work with your existing systems in place. Let us seamlessly integrate into your business as part of your in-house team.</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>

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
                            Services
                            <span> / </span>
                            Outsourced Accounting Services
                        </Typography>
                    </Container>

                    <Footer />

                </>
            }
        </Fragment>
    )
}

export default OutsourcedAccounting