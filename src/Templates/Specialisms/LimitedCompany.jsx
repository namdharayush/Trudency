import { Box, Button, Container, Grid2, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import limited_accounting1 from '/images/Specialisms/limited_accounting1.jpg'
import cube from '/images/cube.svg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';

function LimitedCompany() {

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
                            Limited Company Accountants
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
                            Limited <Box component='span' sx={{
                                backgroundColor: '#7ADCDB',
                                color: '#00454e',
                                padding: '10px 20px',
                                borderRadius: '15px',
                                userSelect: 'none',
                                // display: 'block',
                                width: 'max-content'
                            }}>Company </Box>Accounting
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
                            Are you a growing, ambitious business looking for effective accounting services? Trudency is here to offer you a helping hand with your financial responsibilities.
                        </Box>

                        <Box
                            marginTop='50px'
                            width='max-content'>
                            <NavLink     to='/contact-us'>
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
                                }}>Speak To Us Today
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
                            What Trudency Offers
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
                            Outsourcing with us will ensure your accounting is handled accurately, freeing up more valuable time that can be spent boosting your business.
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
                                    <Box component='img' src={limited_accounting1} sx={{
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
                                        // overflow: "hidden",
                                        // zIndex: '0',
                                    }}>
                                    </Box>
                                </Box>
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6, lg: 6 }} order='2' sx={{ padding: { xs: '0 10px 0 10px', sm: '0 10px 0 25px', lg: '0 10px 0 10px' }, marginTop: { xs: '50px', sm: '0' } }} >

                                <Box component='div'>

                                    <Box component='div' sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>

                                        <Typography variant="h3" sx={{
                                            fontSize: {
                                                xs: '14px',
                                                sm: '16px',
                                                lg: '65px'
                                            },
                                            color: '#00454e',
                                            fontWeight: '650',
                                            textAlign: 'start',
                                            letterSpacing: '1px',
                                            // lineHeight: '30px',
                                            marginRight: '10px'
                                        }}>
                                            All-inclusive Limited Company Accounting
                                        </Typography>

                                        <Box component='p' sx={{
                                            textAlign: 'justify',
                                            fontSize: '24px',
                                            lineHeight: '30px',
                                            fontWeight: '450',
                                            opacity: '0.6'
                                        }}>
                                            As an alternative to employing an in-house accountant, Trudency is the all-in-one solution for your limited company accounting. <br /><br />
                                            We are ready to take on one, or several, accounting services required, so you only have to pay for the output you specifically require. Our expert team are equipped to work alongside your existing accounts team or take over tasks completely.
                                        </Box>

                                        <Typography variant='h4' sx={{ fontWeight: '650', fontSize: '24px', textAlign: 'start', color: '#00454e', marginBottom: '10px', opacity: '0.9' }}>
                                            Management of bookkeeping software
                                        </Typography>
                                        <Typography variant='h4' sx={{ fontWeight: '650', fontSize: '24px', textAlign: 'start', color: '#00454e', marginBottom: '10px', opacity: '0.9' }}>
                                            In-house management of supplier and customer communication
                                        </Typography>
                                        <Typography variant='h4' sx={{ fontWeight: '650', fontSize: '24px', textAlign: 'start', color: '#00454e', marginBottom: '10px', opacity: '0.9' }}>
                                            Processing invoices
                                        </Typography>
                                        <Typography variant='h4' sx={{ fontWeight: '650', fontSize: '24px', textAlign: 'start', color: '#00454e', marginBottom: '10px', opacity: '0.9' }}>
                                            Setting up supplier payments
                                        </Typography>
                                        <Typography variant='h4' sx={{ fontWeight: '650', fontSize: '24px', textAlign: 'start', color: '#00454e', marginBottom: '10px', opacity: '0.9' }}>
                                            Bank & credit card reconciliation
                                        </Typography>
                                        <Typography variant='h4' sx={{ fontWeight: '650', fontSize: '24px', textAlign: 'start', color: '#00454e', marginBottom: '10px', opacity: '0.9' }}>
                                            Raising & matching purchase orders
                                        </Typography>

                                    </Box>
                                    <Box
                                        marginTop='30px'
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
                                        }}>Let's Work Together <ArrowCircleRightIcon sx={{
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

                        {/* <Box component='p' sx={{ fontWeight: '550', fontSize: '45px', textAlign: 'center', color: '#00454e' }}>
                            Benefit from the support of dedicated payroll experts when you choose to outsource. Our specialists seamlessly integrate with your team, so your payroll processes can run smoothly without the added headache.
                        </Box> */}

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
                            backgroundColor: '#00454e',
                            color: 'white'
                        }}

                        className="section_2">

                        <Typography variant='h6' sx={{
                            textAlign: 'start',
                            color: 'white',
                            marginBottom: '30px',
                            fontSize: '25px',
                            // color: '#00454e'
                        }}>
                            Benefits of Using Outsourced Accounting Services
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
                            Outsourcing with us will ensure your accounting is handled accurately, freeing up more valuable time that can be spent boosting your business.
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
                                        <Box sx={{ fontWeight: '650', display: 'block', width: 'max-content', marginBottom: '20px' }} component='span'>Save Time</Box> Outsourcing your accounting responsibilities with us means you will save time and energy to manage and grow your limited company. Waste no time with our immediate start, so you can get your accounting on track.
                                    </Typography>
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
                                        <Box sx={{ fontWeight: '650', display: 'block', width: 'max-content', marginBottom: '20px' }} component='span'>Cost-effective</Box> Save on paying a full-time salary with our specialists who can fulfil the duties of several employees with their range of knowledge.
                                    </Typography>
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
                                        <Box sx={{ fontWeight: '650', display: 'block', width: 'max-content', marginBottom: '20px' }} component='span'>Accuracy</Box> Our team will ensure that your accounting is compliant, and all processes are completed accurately and within legal obligations.
                                    </Typography>
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
                                        <Box sx={{ fontWeight: '650', display: 'block', width: 'max-content', marginBottom: '20px' }} component='span'>Access to Highly Qualified Professionalse</Box> Choosing Trudency means you will have direct access to our experts who’s industry-based experience can benefit your business.
                                    </Typography>
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
                                        <Box sx={{ fontWeight: '650', display: 'block', width: 'max-content', marginBottom: '20px' }} component='span'>Scalability</Box> We grow flexibly with you and your needs. As your business develops, so can our services alongside you.
                                    </Typography>
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
                                        <Box sx={{ fontWeight: '650', display: 'block', width: 'max-content', marginBottom: '20px' }} component='span'>Software</Box> Our services are tailored to suit you and this approach extends to software, as Trudency is able to work with your existing systems in place. Let us seamlessly integrate into your business as part of your in-house team.
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
                            Specialisms
                            <span> / </span>
                            Limited Company Accountants
                        </Typography>
                    </Container>

                    <Footer />

                </>
            }
        </Fragment>
    )
}

export default LimitedCompany