import React, { Fragment, useEffect, useRef, useState } from "react";
import "../Style/mainHomePage.css";
import { Box, Button, Container, Grid2, Icon, Typography } from "@mui/material";
import paperPlaneImage from '/images/paper_plane.png'
import section3_image from '/images/section3_image.png'
import nature_in_cube from '/images/nature_in_cube.jpg'
import animal_in_cube from '/images/animal_in_cube.jpg'
import paper_in_cube from '/images/paper_in_cube.jpg'
import cube from '/images/cube.svg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useSelector } from "react-redux";
import Footer from "./Components/Footer";

function MainHomePage() {

    const { active_header } = useSelector(state => state.active_header)

    const [scrollY, setScrollY] = useState(0);

    const [activeState, setActiveState] = useState(false)

    const [section2Scroll, setSection2Scroll] = useState(0);
    const section2Ref = useRef(null);

    const [section3Scroll, setSection3Scroll] = useState(0);
    const section3Ref = useRef(null);

    const [section4Scroll, setSection4Scroll] = useState(0);
    const section4Ref = useRef(null);

    const [section5Scroll, setSection5Scroll] = useState(0);
    const section5Ref = useRef(null);



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

        //section2 Scroll

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


        //section3 Scroll

        if (section3Ref.current) {
            const rect = section3Ref.current.getBoundingClientRect();
            const isVisible = rect.top < viewportHeight && rect.bottom > 0;

            if (isVisible) {
                const scrollOffset = Math.min(
                    Math.max(0, viewportHeight - rect.top),
                    viewportHeight
                );
                setSection3Scroll(scrollOffset);
            } else {
                setSection3Scroll(0);
            }
        }


        //section4 scroll


        if (section4Ref.current) {
            const rect = section4Ref.current.getBoundingClientRect();
            const isVisible = rect.top < viewportHeight && rect.bottom > 0;

            if (isVisible) {
                const scrollOffset = Math.min(
                    Math.max(0, viewportHeight - rect.top),
                    viewportHeight
                );
                setSection4Scroll(scrollOffset);
            } else {
                setSection4Scroll(0);
            }
        }


        //section5 scroll


        if (section5Ref.current) {
            const rect = section5Ref.current.getBoundingClientRect();
            const isVisible = rect.top < viewportHeight && rect.bottom > 0;

            if (isVisible) {
                const scrollOffset = Math.min(
                    Math.max(0, viewportHeight - rect.top),
                    viewportHeight
                );
                setSection5Scroll(scrollOffset);
            } else {
                setSection5Scroll(0);
            }
        }



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
                        // disableGutters
                        sx={{
                            height: "max-content",
                            textAlign: "center",
                            overflowX: "hidden",
                            position: "relative",
                            backgroundColor: '#00454e',
                            paddingTop: '50px',
                            paddingBottom: '50px',
                            marginTop:'50px',
                            fontFamily : '"Manrope", sans-serif'
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
                                left: "50px",
                                width: "clamp(220px, 30vw, 400px)",
                                transform: {
                                    xs: `translateY(${Math.min(scrollY * 0.5, window.innerHeight - 450)}px) scale(1.1,1.1) rotate(${scrollY * 0.1}deg)`,
                                    sm: `translateY(${Math.min(scrollY * 1, window.innerHeight - 450)}px) scale(1.1,1.1) rotate(${scrollY * 0.1}deg)`
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
                                transform: `translateX(${scrollY * 2}px)`,
                                // fontSize: "250px",
                                fontSize: 'clamp(1rem,15.5vw,280px)',
                                transition: "all 0.3s linear",
                                fontWeight: "650",
                                height: 'clamp(1rem,15.5vw,220px)',
                                maxWidth: '100%',
                                color: 'white',
                                textAlign: 'start',
                                letterSpacing: 'clamp(2px,1vw,15px)'
                            }}
                        >
                            Outsourced
                        </Typography>

                        <Typography
                            variant="h1"
                            className="text move-top-right"
                            sx={{
                                transform: `translateX(-${scrollY * 2}px)`,
                                // fontSize: "250px",
                                fontSize: 'clamp(1rem,15.5vw,280px)',
                                transition: "all 0.3s linear",
                                fontWeight: "650",
                                height: 'clamp(1rem,15.5vw,220px)',
                                maxWidth: '100%',
                                color: 'white',
                                textAlign: 'start',
                                letterSpacing: 'clamp(2px,1vw,15px)'
                            }}
                        >
                            accounting
                        </Typography>

                        <Box
                            variant="p"
                            maxWidth="550px"
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
                                position : 'relative',
                                zIndex : '1',
                                
                            }}
                        >
                            Trudency empowers businesses to make dynamic, strategic financial decisions.
                        </Box>



                        <Box
                            marginTop='50px'
                            width='max-content'
                            sx={{
                                marginLeft: {
                                    xs: "0px", // Extra small devices (mobile)
                                    sm: "20px", // Small devices (tablet)
                                    lg: "100px", // Large devices (desktop)
                                },
                            }}>
                            <Button sx={{
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
                                }
                            }}>Discover More  <ArrowCircleRightIcon sx={{
                                marginLeft: '10px',
                                fontSize: {
                                    xs: "25px",
                                    sm: "30px",
                                    lg: "35px",
                                },
                                transform: 'rotate(90deg)',
                            }} /> </Button>

                        </Box>

                        <Box
                            component="img"
                            src={paperPlaneImage}
                            sx={{
                                position: "absolute",
                                bottom: "0px",
                                right: {
                                    xs: "50px",
                                    sm: "100px",
                                    lg: "400px",
                                },
                                maxWidth: "clamp(150px, 33vw, 627px)",
                                height: "auto",
                                transform: `translate(${scrollY * 2}px, -${scrollY * 2}px)`,
                                transition: "all 0.2s linear",
                            }}
                        />
                    </Container>

                    <Container
                        ref={section2Ref}
                        component="div"
                        maxWidth={false}
                        sx={{
                            height: "max-content",
                            textAlign: "center",
                            overflow: 'visible',
                            position: "relative",
                            backgroundColor: '#00454e',
                            paddingTop: '100px',
                            paddingBottom: '100px',
                            zIndex: '1',
                            scrollbarWidth: '0',
                            fontFamily : '"Manrope", sans-serif'
                        }}

                        className="section_2"
                    >
                        <Box
                            component="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 262.11 244.75"
                            sx={{
                                position: "absolute",
                                top: "30px",
                                right: "100px",
                                width: "clamp(220px, 30vw, 400px)",
                                transform: {
                                    xs: `translateY(${section2Scroll * 0.5}px)`,
                                },
                                height: "auto",
                                transition: {
                                    xs: "all 1s linear",
                                    lg: "all 0.3s linear"
                                },
                                color: '#336a71',
                                fill: 'currentcolor',
                                clipPath: "inset(0 0 0 0)", // Clip within bounds
                            }}
                        >
                            <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                        </Box>

                        <Typography variant="h6" sx={{
                            textAlign: 'start',
                            color: 'white',
                            fontWeight: '650',
                            fontSize: 'clamp(20px ,2vw,28px)',
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
                            letterSpacing: '3px',
                            transform: `translateY(${Math.max(50 - scrollY * 0.5, 0)}px)`, // Subtle upward motion
                            transition: "transform 1s ease"
                        }}>
                            Accounting responsibilities can be never-ending
                        </Typography>
                        <Box component='p' sx={{
                            textAlign: 'start',
                            color: 'white',
                            fontWeight: '650',
                            fontSize: 'clamp(40px,5vw,70px)',
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
                            color: "#7adcdb",
                            transform: `translateY(${Math.max(50 - scrollY * 0.5, 0)}px)`,
                            transition: "transform 1s ease",
                        }}>
                            What if there was a cost-effective alternative to employment that could provide an all-in-one solution to your accounting needs?
                        </Box>
                    </Container>

                    <Container
                        ref={section3Ref}
                        component="div"
                        maxWidth={false}
                        sx={{
                            height: "max-content",
                            textAlign: "center",
                            overflow: "hidden",
                            position: "relative",
                            backgroundColor: 'rgba(122, 220, 219,1)',
                            paddingTop: '100px',
                            paddingBottom: '100px',
                            fontFamily : '"Manrope", sans-serif'
                        }}

                        className="section_3">

                        <Box
                            component="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 262.11 244.75"
                            sx={{
                                position: "absolute",
                                top: "0px",
                                left: "60px",
                                width: "clamp(220px, 30vw, 400px)",
                                transform: `translateY(${section3Scroll * 0.5}px) scale(1.1,1.1) rotate(-10deg)`,
                                height: "auto",
                                transition: "all 0.5s linear",
                                color: 'rgba(0, 69, 78,0.2)',
                                fill: 'currentcolor',
                                clipPath: "inset(0 0 0 0)",
                            }}
                        >
                            <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                        </Box>



                        <Typography variant="h2" sx={{
                            textAlign: 'start',
                            color: '#00454e',
                            fontWeight: '650',
                            fontSize: 'clamp(25px,5vw,60px)',
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
                            letterSpacing: {
                                xs: '2px',
                                sm: '3px'
                            },
                            transform: `translateY(${Math.max(50 - scrollY * 0.5, 0)}px)`, // Subtle upward motion
                            transition: "transform 1s ease"
                        }}>
                            Welcome to Trudency
                        </Typography>

                        <Box component='div' sx={{
                            textAlign: 'start',
                            fontWeight: '650',
                            fontSize: 'clamp(20px,5vw,34px)',
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
                            color: '#00454e',
                            opacity: '0.85',
                            transform: `translateY(${Math.max(50 - scrollY * 0.5, 0)}px)`,
                            transition: "transform 1s ease",
                            lineHeight: {
                                xs: '30px',
                                sm: '50px'
                            },
                            marginTop: {
                                xs: '30px',
                            },
                            position:'relative',
                            zIndex:'1'
                        }}>
                            Since 2022, Trudency has provided tailored support to growing businesses across the country. <br />Our expert team delivers reliable accounting services that help businesses save time and money, so you can focus on what's important.
                            <br /> <Typography sx={{
                                textAlign: 'start',
                                fontWeight: '650',
                                fontSize: 'clamp(20px,5vw,34px)',
                                color: '#00454e',
                                opacity: '0.85',
                                maxWidth: {
                                    xs: '100%',
                                    lg: '40%'
                                },
                            }}>Stay in complete control, as we seamlessly integrate with your pre-existing software for your convenience.</Typography>
                        </Box>

                        <Box

                            width='max-content'
                            sx={{
                                marginTop: {
                                    xs: '50px',
                                    lg: '150px'
                                },
                                marginLeft: {
                                    xs: "0px", // Extra small devices (mobile)
                                    sm: "20px", // Small devices (tablet)
                                    lg: "100px", // Large devices (desktop)
                                },
                                // backgroundColor:'red',
                                display: 'flex',
                                flexDirection: {
                                    xs: 'column',
                                    lg: 'row'
                                }
                            }}>
                            <Button sx={{
                                marginRight: '30px',
                                marginBottom: {
                                    xs: '20px',
                                    lg: '0'
                                },
                                backgroundColor: 'white',
                                fontSize: 'clamp(18px,5vw,21px)',
                                padding: {
                                    xs: '10px',
                                    sm: '15px 40px'
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
                                },
                                width: {
                                    xs: '100%',
                                    lg: 'max-content'
                                }
                            }}>Discover Our Services  <ArrowCircleRightIcon sx={{
                                marginLeft: '10px',
                                fontSize: 'clamp(30px,5vw,35px)',
                                transform: 'rotate(90deg)',
                            }} /> </Button>

                            <Button sx={{
                                marginRight: '30px',
                                backgroundColor: 'white',
                                fontSize: 'clamp(18px,5vw,21px)',
                                padding: {
                                    xs: '10px',
                                    sm: '15px 40px'
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
                                },
                                width: {
                                    xs: '100%',
                                    lg: 'max-content'
                                }
                            }}>Our Process  <ArrowCircleRightIcon sx={{
                                marginLeft: '10px',
                                fontSize: 'clamp(30px,5vw,35px)',
                                transform: 'rotate(90deg)',
                            }} /> </Button>

                        </Box>


                        <Box
                            component='img'
                            src={section3_image}
                            sx={{
                                position: {
                                    xs: 'relative',
                                    lg: 'absolute'
                                },

                                marginTop: {
                                    xs: '50px',
                                    lg: '0'
                                },

                                bottom: {
                                    xs: '0',
                                    lg: '100px'
                                },
                                right: {
                                    xs: '-100px',
                                    sm: '-100px'
                                },
                                transform: {
                                    xs: `translateX(-${section3Scroll * 0.1}px)`,
                                    lg: `translateX(-${section3Scroll * 0.14}px)`
                                },
                                transition: "all 0.5s linear",
                                maxWidth: '100%'
                            }}
                        >

                        </Box>


                    </Container>

                    <Container
                        ref={section4Ref}
                        component="div"
                        maxWidth={false}
                        sx={{
                            height: "max-content",
                            textAlign: "center",
                            overflow: "hidden",
                            position: "relative",
                            backgroundColor: '#00454e',
                            paddingTop: '100px',
                            paddingBottom: '100px',
                            fontFamily : '"Manrope", sans-serif'
                        }}

                        className="section_4">

                        <Box
                            component="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 262.11 244.75"
                            sx={{
                                position: "absolute",
                                top: "0px",
                                left: "50px",
                                width: "clamp(220px, 30vw, 400px)",
                                transform: {
                                    xs: `translateY(${section4Scroll * 0.2}px)  rotate(-5deg)`,
                                    sm: `translateY(${section4Scroll * 0.4}px)  scale(1.1,1.1) rotate(-5deg)`
                                },
                                height: "auto",
                                transition: "all 0.3s linear",
                                color: '#336a71',
                                fill: 'currentcolor',
                                clipPath: "inset(0 0 0 0)", // Clip within bounds
                            }}
                        >
                            <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                        </Box>



                        <Typography
                            variant="h2"
                            className="text"

                            sx={{
                                transform: `translateX(${-140 + section4Scroll * 0.1}%)`,
                                fontSize: {
                                    xs: '70px',
                                    sm: '150px',
                                    lg: '250px'
                                },
                                transition: "all 0.3s linear",
                                fontWeight: "650",
                                color: 'white',
                                padding: '0',
                                whiteSpace: 'nowrap',
                                position: "relative",
                                top: '0',
                                left: "0%",
                                letterSpacing: '15px'
                            }}
                        >
                            Accounting Services Accounting Services
                        </Typography>

                        <Typography
                            variant="h2"
                            className="text"

                            sx={{
                                transform: `translateX(${-10 - section4Scroll * 0.1}%)`,
                                fontSize: {
                                    xs: '70px',
                                    sm: '150px',
                                    lg: '250px'
                                },
                                transition: "all 0.3s linear",
                                fontWeight: "650",
                                color: 'white',
                                padding: '0',
                                whiteSpace: 'nowrap',
                                position: "relative",
                                top: {
                                    xs: '0',
                                    sm: '-30px',
                                    lg: '-50px'
                                },
                                left: "0%",
                                letterSpacing: '15px'
                            }}
                        >
                            Accounting Services Accounting Services
                        </Typography>

                        <Grid2 container spacing={{ sm: 3, md: 2 }} mt='130px' sx={{ width: '100%' }}>

                            <Grid2 size={{ xs: 12, sm: 6, lg: 6 }} order='1'  >

                                <Box component='div' sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box component='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.11 244.75" sx={{
                                        position: 'absolute',
                                        top: '0',
                                        zIndex: '1',
                                        width: "100%",
                                        height: '100%',
                                        opacity: '0.7',
                                        fill: "rgba(255, 255, 255, 0.5)",
                                    }}>
                                        <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                                    </Box>
                                    <Box component='img' src={nature_in_cube} sx={{
                                        width: "100%",
                                        height: "100%",
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
                                    </Box>

                                    <Typography variant="h6" sx={{
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
                                    </Typography>

                                    <Box
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
                                        }}>Outsourced Accounting Services <ArrowCircleRightIcon sx={{
                                            marginLeft: '10px',
                                            fontSize: {
                                                xs: '25px',
                                                sm: '20px',
                                                lg: '30px'
                                            },
                                            transform: 'rotate(90deg)',
                                        }} /> </Button>

                                    </Box>

                                </Box>

                            </Grid2>

                        </Grid2>


                        <Grid2 container spacing={{ sm: 3, md: 2 }} mt={{ xs: '80px', sm: '130px' }} sx={{ width: '100%' }}>

                            <Grid2 size={{ xs: 12, sm: 6 }} order={{ xs: 1, sm: 2 }}  >

                                <Box component='div' sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box component='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.11 244.75" sx={{
                                        position: 'absolute',
                                        top: '0',
                                        zIndex: '1',
                                        width: "100%",
                                        height: '100%',
                                        opacity: '1',
                                        fill: "rgba(255, 255, 255, 0.8)",
                                    }}>
                                        <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                                    </Box>
                                    <Box component='img' src={animal_in_cube} sx={{
                                        width: "100%",
                                        height: "100%",
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

                            <Grid2 size={{ xs: 12, sm: 6 }} order='1' sx={{ padding: { xs: '0 10px 0 10px', sm: '0 10px 0 25px', lg: '0 10px 0 10px' }, marginTop: { xs: '50px', sm: '0' } }} >

                                <Box component='div' sx={{marginLeft : {lg:'80px'}}}>
                                    <Box component='div' sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                                        <Typography variant="h3" sx={{
                                            fontSize: {
                                                xs: '40px',
                                                sm: '45px',
                                                lg: '55px'
                                            },
                                            color: '#7adcdb',
                                            fontWeight: '750',
                                            textAlign: 'start',
                                            letterSpacing: '1px',
                                            marginRight: '20px'
                                        }}>
                                            Bookkeeping
                                        </Typography>
                                        <Typography variant="h3" sx={{
                                            fontSize: {
                                                xs: '40px',
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
                                    </Box>


                                    <Typography variant="h6" sx={{
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
                                        Rest assured knowing that your bookkeeping will be correct and on time with us.
                                    </Typography>

                                    <Box
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
                                                xs: '10px 30px',
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
                                        }}>Bookkeeping Services <ArrowCircleRightIcon sx={{
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
                            </Grid2>

                        </Grid2>


                        <Grid2 container spacing={{ sm: 3, md: 2 }} mt={{ xs: '80px', sm: '130px' }} sx={{ width: '100%' }}>

                            <Grid2 size={{ xs: 12, sm: 6 }} order='1'  >

                                <Box component='div' sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box component='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.11 244.75" sx={{
                                        position: 'absolute',
                                        top: '0',
                                        zIndex: '1',
                                        width: "100%",
                                        height: '100%',
                                        opacity: '1',
                                        fill: "rgba(255, 255, 255, 0.8)",
                                    }}>
                                        <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                                    </Box>
                                    <Box component='img' src={paper_in_cube} sx={{
                                        width: "100%",
                                        height: "100%",
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

                            <Grid2 size={{ xs: 12, sm: 6 }} order='2' sx={{ padding: { xs: '0 10px 0 10px', sm: '0 10px 0 25px', lg: '0 10px 0 10px' }, marginTop: { xs: '50px', sm: '0' } }} >

                                <Box component='div'>
                                    <Box component='div' sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
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
                                            marginRight: '20px'
                                        }}>
                                            Financial Director
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
                                    </Box>



                                    <Typography variant="h6" sx={{
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
                                        Our experts offer personalised financial reporting and guidance for businesses.
                                    </Typography>

                                    <Box
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
                                                xs: '10px 30px',
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
                                        }}>Financial Director Services <ArrowCircleRightIcon sx={{
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
                            </Grid2>

                        </Grid2>

                    </Container>

                    <Container
                        ref={section5Ref}
                        component="div"
                        maxWidth={false}
                        sx={{
                            height: "max-content",
                            textAlign: "center",
                            backgroundColor: '#00454e',
                            paddingTop: {
                                xs: '0px',
                                sm: '150px'
                            },
                            paddingBottom: '150px',
                            overflow: 'hidden',
                            fontFamily : '"Manrope", sans-serif'
                        }}

                        className="section_5">


                        <Box component='div' sx={{
                            maxWidth: {
                                xs: '100%',
                                lg: '80%'
                            },
                            height: 'max-content',
                            padding: {
                                xs: "50px", // Extra small devices (mobile)
                                sm: "50px", // Small devices (tablet)
                                lg: "100px", // Large devices (desktop)
                            },
                            position: "relative",
                            backgroundColor: '#7ADCDB',
                            borderRadius: '20px',
                            margin: 'auto',
                            overflow: 'hidden'
                        }}>

                            <Box
                                component="svg"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 262.11 244.75"
                                sx={{
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    width: "clamp(220px, 30vw, 400px)",
                                    transform: {
                                        xs: `translateY(${section5Scroll * 0.7}px) rotate(10deg)`,
                                        sm: `translateY(${section5Scroll * 0.4}px) rotate(10deg)`
                                    },
                                    height: "auto",
                                    transition: {
                                        xs: "all 1s linear",
                                        sm: "all 0.3s linear"
                                    },
                                    color: '#336a71',
                                    fill: 'currentcolor',
                                    opacity: '0.3',
                                    clipPath: "inset(0 0 0 0)", // Clip within bounds
                                }}
                            >
                                <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                            </Box>

                            <Typography variant="h3" sx={{
                                fontSize: 'clamp(30px,5vw,55px)',
                                color: '#00454e',
                                fontWeight: '750',
                                textAlign: 'start',
                                letterSpacing: '1px'
                            }}>
                                Our Process
                            </Typography>

                            <Typography variant="h6" sx={{
                                fontSize: 'clamp(14px,5vw,20px)',
                                color: 'black',
                                fontWeight: '450',
                                textAlign: 'start',
                                lineHeight: '38px',
                                letterSpacing: '1.5px',
                                marginTop: '20px',
                                opacity: '0.6'
                            }}>
                                From initial contact, to implementation of strategy, to continuous improvement, our outsourced accounting process is designed to help your business thrive. We’ll work with you to create a tailor made financial strategy, and you'll work closely with our team of specialists to improve efficiency whilst saving time and money.
                            </Typography>


                            <Box
                                marginTop='40px'
                                maxWidth='max-content'>
                                <Button sx={{
                                    fontSize: {
                                        xs: '18px',
                                        sm: '14px',
                                        lg: '18px'
                                    },
                                    padding: {
                                        xs: '10px 30px',
                                        sm: '10px 20px'
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
                                }}>Understand Outsourced Accounting <ArrowCircleRightIcon sx={{
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
                            height: {
                                xs: '70vh',
                                sm: '90vh'
                            },
                            textAlign: "center",
                            backgroundColor: '#7ADCDB',
                            overflow: 'hidden',
                            padding: '0',
                            fontFamily : '"Manrope", sans-serif'
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
                            borderBottom:'1px solid rgba(255,255,255,0.2)',
                            fontFamily : '"Manrope", sans-serif'
                        }}

                        className="breadcrumb">
                        <Typography varient='h6' sx={{paddingLeft: {
                                xs: "20px", // Extra small devices (mobile)
                                sm: "20px", // Small devices (tablet)
                                lg: "100px", // Large devices (desktop)
                            },
                            paddingRight: {
                                xs: "20px", // Extra small devices (mobile)
                                sm: "20px", // Small devices (tablet)
                                lg: "100px", // Large devices (desktop)
                            },fontWeight:'550',fontSize:'16px',color: 'white',letterSpacing:'2px'}}>
                            Home
                        </Typography>
                    </Container>
                    

                    <Footer />
                </>
            }

        </Fragment>
    );
}

export default MainHomePage;
