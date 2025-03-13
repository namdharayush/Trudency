import { Box, Button, Container, Grid2, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import our_process_1 from '/images/AboutUs/our_process_1.jpg'
import our_process_2 from '/images/AboutUs/our_process_2.jpg'
import our_process_3 from '/images/AboutUs/our_process_3.jpg'
import our_process_4 from '/images/AboutUs/our_process_4.jpg'
import our_process_5 from '/images/AboutUs/our_process_5.jpg'
import our_process_6 from '/images/AboutUs/our_process_6.jpg'
import cube from '/images/cube.svg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';

import styles from '../../Style/About.module.css'

function OurProcess() {

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


    const smoothScrolling = () => {
        const containr_id = document.getElementById('scroll_id');
        if(containr_id){
            containr_id.scrollIntoView({
                behavior:'smooth',
                block:'start'
            })
        }
    }

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
                            Our Process
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
                            Understand <Box component='span' sx={{
                                backgroundColor: '#7ADCDB',
                                color: '#00454e',
                                padding: '10px 20px',
                                borderRadius: '15px',
                                userSelect: 'none',
                                display: 'block',
                                width: 'max-content'
                            }}>Outsourcing</Box>
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
                            Every business is different, which is why we tailor our outsourced accounting process to specifically meet your business requirements.
                        </Box>

                        <Box
                            marginTop='50px'
                            width='max-content'>
                            <Button onClick={smoothScrolling} sx={{
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
                            }}>Step by Step
                            </Button>
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
                                }}>Take me to an enquiry form
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
                            Our Bookkeeping Services
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
                            Save time, money and effort by outsourcing your books with Trudency
                        </Typography>


                        <Grid2 id='scroll_id' container spacing={{ sm: 3, md: 2 }} mt='130px' sx={{ width: '100%', height: '70vh' }}>

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
                                    <Box component='img' src={our_process_1} sx={{
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
                                                xs: '13px',
                                                sm: '15px',
                                                lg: '22px'
                                            },
                                            color: '#00454e',
                                            fontWeight: '750',
                                            textAlign: 'start',
                                            letterSpacing: '1px',
                                            marginBottom: '25px'
                                        }}>
                                            STEP 1
                                        </Typography>
                                        <Typography variant="h3" sx={{
                                            fontSize: {
                                                xs: '30px',
                                                sm: '40px',
                                                lg: '60px'
                                            },
                                            color: '#00454e',
                                            fontWeight: '750',
                                            textAlign: 'start',
                                            letterSpacing: '1px',
                                            marginRight: '10px'
                                        }}>
                                            Initial Review
                                        </Typography>
                                    </Box>

                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,21px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px',
                                        textAlign:'justify'
                                    }}>
                                        First, we'll document and review your current processes, workflow and existing systems to enable us to deliver your requirements.
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,21px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px',
                                        textAlign:'justify'
                                    }}>
                                        Following this, you will be assigned a dedicated team member and Finance Manager who will be on-hand for all your outsourced accounting needs.
                                    </Typography>


                                </Box>

                            </Grid2>

                        </Grid2>

                        <Grid2 container spacing={{ sm: 3, md: 2 }} mt='130px' sx={{ width: '100%' }}>

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
                                    <Box component='img' src={our_process_2} sx={{
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
                                                xs: '13px',
                                                sm: '15px',
                                                lg: '22px'
                                            },
                                            color: '#00454e',
                                            fontWeight: '750',
                                            textAlign: 'start',
                                            letterSpacing: '1px',
                                            marginBottom: '25px'
                                        }}>
                                            STEP 2
                                        </Typography>
                                        <Typography variant="h3" sx={{
                                            fontSize: {
                                                xs: '30px',
                                                sm: '40px',
                                                lg: '60px'
                                            },
                                            color: '#00454e',
                                            fontWeight: '750',
                                            textAlign: 'start',
                                            letterSpacing: '1px',
                                            marginRight: '10px'
                                        }}>
                                            Implementation & Transition
                                        </Typography>
                                    </Box>

                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,21px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px',
                                        textAlign:'justify'
                                    }}>
                                        We will replicate your exact processes to make sure you are comfortable with the transition of responsibility to Trudency. We will work with your existing software so there is no added stress of familiarising yourself with a new system.
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,21px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px',
                                        textAlign:'justify'
                                    }}>
                                        We will strategise with you to establish any efficiencies available which could help you work towards your business goals. We will agree milestones and a timeline to achieve this.
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,21px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px',
                                        textAlign:'justify'
                                    }}>
                                        Our transition plan will happen in smooth and controlled phases to ensure nothing is missed, until responsibilities are fully handed over to us. We'll then manage all processes to ensure your accounts are being handled correctly.
                                    </Typography>
                                </Box>


                            </Grid2>

                        </Grid2>

                        <Grid2 container spacing={{ sm: 3, md: 2 }} mt='130px' mb='130px' sx={{ width: '100%', height: '70vh' }}>

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
                                    <Box component='img' src={our_process_3} sx={{
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
                                                xs: '13px',
                                                sm: '15px',
                                                lg: '22px'
                                            },
                                            color: '#00454e',
                                            fontWeight: '750',
                                            textAlign: 'start',
                                            letterSpacing: '1px',
                                            marginBottom: '25px'
                                        }}>
                                            STEP 3
                                        </Typography>
                                        <Typography variant="h3" sx={{
                                            fontSize: {
                                                xs: '30px',
                                                sm: '40px',
                                                lg: '60px'
                                            },
                                            color: '#00454e',
                                            fontWeight: '750',
                                            textAlign: 'start',
                                            letterSpacing: '1px',
                                            marginRight: '10px'
                                        }}>
                                            Continuous Improvement
                                        </Typography>
                                    </Box>

                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,21px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px',
                                        textAlign:'justify'
                                    }}>
                                        Whilst working with you, our aim is to continually improve your processes and systems by regularly evaluating workflows.
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,21px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px',
                                        textAlign:'justify'
                                    }}>
                                        We have collaborative feedback sessions, performance reviews against objectives and we implement the highlighted improvements.
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: 'clamp(10px,4vw,21px)',
                                        color: '#00454e',
                                        fontWeight: '450',
                                        textAlign: 'start',
                                        marginTop: '20px',
                                        textAlign:'justify'
                                    }}>
                                        This will result in you having more efficient and better managed accounting processes saving time and money.
                                    </Typography>


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
                                            }}>Sound good? Enquire here <ArrowCircleRightIcon sx={{
                                                marginLeft: '10px',
                                                fontSize: {
                                                    xs: "25px",
                                                    sm: "30px",
                                                    lg: "35px",
                                                },
                                                transform: 'rotate(90deg)',
                                            }} />
                                            </Button>
                                        </NavLink>
                                    </Box>


                                </Box>

                            </Grid2>

                        </Grid2>






                    </Container>

                    <Container
                        component="div"
                        maxWidth={false}
                        disableGutters
                        
                        sx={{
                            height: "100vh",
                            // height: "max-content",
                            textAlign: "center",
                            overflow: "hidden",
                            position: "relative",
                            paddingTop: '100px',
                            paddingBottom: '100px',
                            paddingLeft: '120px',
                            paddingRight: '120px',
                            fontFamily: '"Manrope", sans-serif',
                            backgroundColor: '#00454e'
                        }}>
                        <Box coomponent='div'>
                            <Typography variant='h3' sx={{
                                fontSize: '70px',
                                fontWeight: '650',
                                textAlign: 'start',
                                color: 'white',
                                marginBottom: '50px'
                            }}>
                                Read more about our outsourced accounting services
                            </Typography>
                            <Grid2 container spacing={{ sm: 3, md: 2 }} sx={{ width: '100%', height: '100vh' }}>

                                <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} order='1'  >

                                    <NavLink to='/services/bookkeeping-services' style={{ textDecoration: 'none' }}>
                                        <Box component='div' sx={{
                                            width: '100%',
                                            height: 'max-content',
                                            overflow: 'hidden',
                                            transition: 'all 0.2s linear',
                                            ":hover": {
                                                transform: 'translateY(-10px)'
                                            }
                                        }}>
                                            <Box component='img' src={our_process_4} sx={{
                                                width: "100%",
                                                height: '300px',
                                                objectFit: "cover",
                                                zIndex: '0',
                                                borderRadius: '20px'
                                            }}>
                                            </Box>
                                            <Typography variant='h6' sx={{
                                                textAlign: 'start',
                                                padding: '10px 0',
                                                fontWeight: '650',
                                                fontSize: '22px',
                                                color: 'white'
                                            }}>
                                                Bookkeeping Services
                                            </Typography>
                                        </Box>
                                    </NavLink>
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} order='1'  >

                                    <NavLink to='/services/financial-director-services' style={{ textDecoration: 'none' }}>
                                        <Box component='div' sx={{
                                            width: '100%',
                                            height: 'max-content',
                                            overflow: 'hidden',
                                            transition: 'all 0.2s linear',
                                            ":hover": {
                                                transform: 'translateY(-10px)'
                                            }
                                        }}>
                                            <Box component='img' src={our_process_5} sx={{
                                                width: "100%",
                                                height: '300px',
                                                objectFit: "cover",
                                                zIndex: '0',
                                                borderRadius: '20px'
                                            }}>
                                            </Box>
                                            <Typography variant='h6' sx={{
                                                textAlign: 'start',
                                                padding: '10px 0',
                                                fontWeight: '650',
                                                fontSize: '22px',
                                                color: 'white'
                                            }}>
                                                Financial Director Services
                                            </Typography>
                                        </Box>
                                    </NavLink>
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} order='1'  >

                                    <NavLink to='/services/payroll-outsourcing' style={{ textDecoration: 'none' }}>
                                        <Box component='div' sx={{
                                            width: '100%',
                                            height: 'max-content',
                                            overflow: 'hidden',
                                            transition: 'all 0.2s linear',
                                            ":hover": {
                                                transform: 'translateY(-10px)'
                                            }
                                        }}>
                                            <Box component='img' src={our_process_6} sx={{
                                                width: "100%",
                                                height: '300px',
                                                objectFit: "cover",
                                                zIndex: '0',
                                                borderRadius: '20px'
                                            }}>
                                            </Box>
                                            <Typography variant='h6' sx={{
                                                textAlign: 'start',
                                                padding: '10px 0',
                                                fontWeight: '650',
                                                fontSize: '22px',
                                                color: 'white'
                                            }}>
                                                Payroll Outsourcing
                                            </Typography>
                                        </Box>
                                    </NavLink>
                                </Grid2>

                            </Grid2>

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

                        }}>

                        <Box component='div'>

                            <Typography variant='h3' sx={{
                                fontSize: '70px',
                                fontWeight: '650',
                                textAlign: 'start',
                                color: 'white',
                                marginBottom: '50px'
                            }}>
                                We've heard these before
                            </Typography>

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

                                    }}>Our qualified experts work with you to improve your financial processes. We aim to make them more efficient, scalable to support your business' growth and look for cost-saving opportunities. You would receive additional senior accounting advisory alongside the day-to-day process management.</Typography>
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
                                    }}>You can benefit from a qualified and dedicated team of experts managing your financial processes, ensuring your accounts are handled correctly and promptly. You can be assured of the quality of our management, giving you the peace of mind to free up valuable time to focus on other areas of the business.</Typography>
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

                                    }}>Our services are a cost-effective alternative to hiring in-house employees. We offer high-quality services at competitive prices that are fully bespoke, meaning you can pick which services you need. For a more accurate quote, contact our team today for a no-obligation consultation.</Typography>
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
                            Our Process
                        </Typography>
                    </Container>

                    <Footer />

                </>
            }
        </Fragment>
    )
}

export default OurProcess