import { Container, Typography, Box, Button } from '@mui/material'
import React, { Fragment, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function PageNotFound() {

    // useEffect(()=>{
    //     window.location = window.location.href;
    // },[])

    return (
        <Fragment>


            <Container component='div'
                sx={{
                    width: '100vw',
                    height: '90vh',
                    textAlign: "center",
                    // backgroundColor: 'red',
                    zIndex: '10',
                    fontFamily: '"Manrope", sans-serif',
                    overflow: 'hidden'
                }}
                maxWidth={false}>

                <Box
                    component="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 262.11 244.75"
                    sx={{
                        position: "absolute",
                        bottom: "20px",
                        right: "50px",
                        width: "clamp(220px, 30vw, 400px)",
                        height: "auto",
                        transition: "all 0.3s linear",
                        color: '#336a71',
                        fill: 'currentcolor',
                        clipPath: "inset(0 0 0 0)",
                    }}
                >
                    <path d="M150.11.04l-.14-.04L.36,42.5l-.36.1v164.95l113.83,37.15.15.05,147.78-45.6.35-.11V32.44L150.11.04ZM114.03,77.03l147.08-43.55v54.55l-88.34,28.14v109.39l-58.28,17.98-.45-166.52ZM173.77,169.14l86.23,29.51-86.23,26.61v-56.12ZM173.77,168.08v-51.18l87.34-27.82v108.89l-87.34-29.89ZM259.83,32.82l-146.3,43.32L2.29,42.99,149.97,1.04l109.86,31.78ZM1,43.65l112.03,33.38.45,166.51L1,206.83V43.65Z"></path>
                </Box>

                <Box component='div' sx={{
                    position: 'relative',
                    top: '50%',
                    left :'50%',
                    // backgroundColor:'red',
                    transform: 'translate(-50%,-50%)'
                }}>
                    <Typography variant='h1' 
                    sx={{
                        fontSize: '150px',
                        color: '#7ADCDB',
                        fontWeight: '750',
                        userSelect: 'none',
                        textShadow:"4px 4px 8px rgba(6, 6, 6, 0.2), 2px 2px 2px rgba(255, 255, 255, 0.73)"
                    }}><span>4</span> 😢 <span>4</span> </Typography>
                    <Typography variant='h5' 
                    sx={{
                        fontSize: '20px',
                        color: 'white',
                        mt: '20px',
                        mb: '20px',
                        letterSpacing: '3px',
                        opacity: '0.7',
                        fontWeight: '650'
                    }}>Oops! The Page you requested  was not found!</Typography>
                    <NavLink to='/'>
                        <Button type='button' sx={{
                            mt: '30px',
                            backgroundColor: 'transparent',
                            color: 'rgba(255,255,255)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            borderRadius: '10px 3px 10px 3px',
                            padding: '15px 20px',
                            fontWeight: '650',
                            transition: 'all 0.5s linear',
                            ":hover": {
                                backgroundColor: 'black',
                                border: '1px solid transparent',
                                borderRadius: '3px 10px 3px 10px',
                            }
                        }}>Back To Home</Button>
                    </NavLink>

                </Box>
            </Container>
        </Fragment>
    )
}

export default PageNotFound