import React, { Fragment } from 'react'
import '../Style/homePage.css'
import img1 from '/images/main-banner.webp'
import img2 from '/images/IG-Office1.jpg'
import { Box, Button, ButtonGroup, Container, Paper, Typography, Grid2 } from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function HomePage() {

  return (
    <Fragment>
      <Container component='div' maxWidth={false} className='section_1'>
        <Box sx={{ height: 'max-content', width: '600px', top: '50%', position: 'relative', transform: 'translateY(-50%)', zIndex: '1', paddingLeft: '40px', paddingRight: '40px' }}>
          <Typography variant='h4' sx={{ mb: '25px', fontWeight: '750' }} color='white'>
            Welcome to a new era of financial excellence
          </Typography>
          <Typography variant='p' lineHeight='1.4' fontSize='16px' sx={{ textAlign: 'justify' }} color='white' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora deserunt assumenda quod sequi placeat nisi fuga laboriosam non voluptas, repellendus nesciunt odit et officia eum perspiciatis est, ullam cum. Expedita alias quae, recusandae consectetur numquam eos voluptatem, cupiditate animi nemo aliquam exercitationem fugiat quo perferendis, commodi debitis labore quaerat ipsam. Sit eveniet, totam fugiat nobis illum similique cupiditate animi iusto veritatis, asperiores commodi praesentium et voluptas eaque. Perspiciatis provident sed amet saepe id eligendi cumque iste obcaecati vero! Voluptatem.
          </Typography>
          <ButtonGroup variant="div" sx={{ mt: '30px' }} aria-label="Basic button group">
            <Button variant="contained" sx={{ marginRight: '20px', fontSize: '18px', padding: '10px 25px', ":hover": { backgroundColor: 'black', color: 'white', transition: 'all 0.5s linear', boxShadow: '0 0 10px 1px rgba(255, 255, 255, 0.2)' } }}>EXPLORE MORE</Button>
            <Button variant="outlined" sx={{ fontSize: '18px', color: 'white', padding: '10px 25px', ":hover": { backgroundColor: 'black', color: 'white', transition: 'all 0.5s linear', borderColor: 'black', boxShadow: '0 0 10px 1px rgba(255, 255, 255, 0.2)' } }}>GET IN TOUCH</Button>
          </ButtonGroup>
        </Box>
      </Container>

      <Container sx={{ padding: '60px 0' }} component='div' maxWidth={false} className='section_2' >

        <Box minWidth='50%' margin='auto' mb='90px' textAlign='center' sx={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <Typography fontWeight='530' variant='h2' mb='20px' fontSize={{ sm: '45px', xs: '30px' }}>Welcome to Initor Global</Typography>
          <Typography fontWeight='520' sx={{ opacity: '0.8' }} variant='p' fontSize='18px'>
            At Initor Global, our mission is to empower UK accountants with detailed, sincere, and transparent <b>outsourced accounting services.</b> We have been delivering <b>modern outsourced accounting solutions</b> since 2006, ensuring our services are fully compliant with accounting rules and regulations, including GDPR.
          </Typography>

        </Box>

        <Grid2 container spacing={{ sm: 3, md: 2 }} sx={{ width: '100%', paddingLeft: { xs: '20px' }, paddingRight: { xs: '20px' } }}>
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }} margin='auto' mb={{ xs: '20px' }} max-width={{ xs: '100%', sm: '380px' }} height='auto'>
            <Box component='img' sx={{ width: '100%', height: '100%', borderRadius: '5px', boxShadow: '0px 10px 20px 1px rgba(0, 0, 0, 0.2)' }} src={img2} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }} display={{ xs: 'none', sm: 'block' }}>
            <Box component='div' width='max-content' margin='auto' height='100%' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box >
                <Typography variant='h6' fontSize='12px' fontWeight='550' letterSpacing='2px' textTransform='uppercase' sx={{ opacity: '0.5' }} mb='5px'>Expertise</Typography>
                <Typography variant='p' fontSize='15px' fontWeight='550' letterSpacing='1px' sx={{ opacity: '0.7' }}>18+ Years of Experience</Typography>

                <Typography variant='h6' fontSize='12px' fontWeight='550' letterSpacing='2px' textTransform='uppercase' sx={{ opacity: '0.5' }} mb='5px' mt='30px'>Collaboration</Typography>
                <Typography variant='p' fontSize='15px' fontWeight='550' letterSpacing='1px' sx={{ opacity: '0.7' }}>250+ Team Member</Typography>

                <Typography variant='h6' fontSize='12px' fontWeight='550' letterSpacing='2px' textTransform='uppercase' sx={{ opacity: '0.5' }} mb='5px' mt='30px'>Excellence</Typography>
                <Typography variant='p' fontSize='15px' fontWeight='550' letterSpacing='1px' sx={{ opacity: '0.7' }}>Serving since 2006</Typography>
              </Box>
              <Button color='black' sx={{
                border: '1px solid rgba(0, 0, 0, 0.105)', padding: '10px', fontSize: '17px', fontWeight: '650', opacity: '0.7', ":hover": {
                  backgroundColor: 'black', color: 'white', transition: 'all 0.5s linear',
                  "& .MuiSvgIcon-root": {
                    color: 'white',
                    transition: 'all 0.5s linear',
                  }
                }
              }}>
                COMPANY <ArrowCircleRightIcon sx={{ marginLeft: '10px', fontSize: '30px', color: 'blue' }} />
              </Button>
            </Box>
          </Grid2>
          <Grid2 size={{ sm: 12, md: 4, lg: 4 }}>
            <Box component='div' height='100%' sx={{ maxWidth: "max-content", display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
              <Typography varient='p' mb={{ sm: '10px' }} fontSize={{ lg: '18px', md: '16px' }} >
                <b>Integrity:</b> Upholding the highest standards of integrity in all our actions.
              </Typography>
              <Typography varient='p' mb={{ sm: '10px' }} fontSize={{ lg: '18px', md: '16px' }}>
                <b>Innovation:</b>  Embracing change and continuously seeking new ways to deliver value.
              </Typography>
              <Typography varient='p' mb={{ sm: '10px' }} fontSize={{ lg: '18px', md: '16px' }}>
                <b>Excellence:</b> Aiming for excellence in each aspect of our business.
              </Typography>
              <Typography varient='p' mb={{ sm: '10px' }} fontSize={{ lg: '18px', md: '16px' }}>
                <b>Collaboration:</b> Believing in the power of teamwork and partnership with our clients.
              </Typography>
              <Typography varient='p' mb={{ sm: '10px' }} fontSize={{ lg: '18px', md: '16px' }}>
                <b>Commitment:</b> Dedicating ourselves to achieving the best outcomes for our clients.
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Container>

      {/* <Container sx={{ padding: '60px 0', backgroundColor: 'black', position: 'relative' }} component='div' maxWidth={false} className='section_3'>
        <Box className='section3_img'  component='img' sx={{ width: {lg:'350px',md:'300px',sm:'250px'}, height: {lg:'350px',md:'250px'}, borderRadius: '5px', boxShadow: '0px 0px 40px 1px rgba(255, 255, 255, 0.5)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} src={img2} />
        <Box component='div' maxWidth='50%'>
          <Typography variant='h2' color='white' textAlign='center' fontWeight='750' letterSpacing='15px' fontSize={{lg:'170px',md:'120px'}} sx={{ userSelect: 'none' }}>CRAFTING</Typography>
        </Box>
        <Box component='div'>
          <Typography variant='h2' sx={{
            ":hover": {
              letterSpacing: '50px',
            },
            color: 'blue',
            transition: 'all 0.5s linear',
            zIndex: '2',
            position: 'relative',
            cursor: 'pointer',
            userSelect: 'none'
          }} textAlign='center' letterSpacing='15px' fontWeight='750' fontSize={{lg:'170px',md:'120px'}}>
            TA
            <span className="border" style={{ color: 'transparent', WebkitTextStroke: '3px blue' }}>
              ILOR
            </span>
            ED
          </Typography>
        </Box>
        <Box component='div'>
          <Typography variant='h2' color='white' textAlign='center' letterSpacing='15px' fontWeight='750' fontSize={{lg:'170px',md:'120px'}} sx={{ userSelect: 'none' }}>STRATEGIES</Typography>
        </Box>
      </Container> */}

      <Container
        sx={{
          padding: { lg: '60px 0', md: '40px 0', sm: '30px 0', xs: '20px 0' },
          backgroundColor: 'black',
          position: 'relative',
        }}
        component="div"
        maxWidth={false}
        className="section_3"
      >
        <Box
          className="section3_img"
          component="img"
          sx={{
            width: { lg: '350px', md: '300px', sm: '250px', xs: '150px' },
            height: { lg: '350px', md: '300px', sm: '250px', xs: '150px' },
            borderRadius: '5px',
            boxShadow: '0px 0px 40px 1px rgba(255, 255, 255, 0.5)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          src={img2}
        />
        <Box
          component="div"
          sx={{
            maxWidth: '100%',
            padding: { lg: '20px 0', md: '15px 0', sm: '10px 0', xs: '5px 0' },
          }}
        >
          <Typography
            variant="h2"
            color="white"
            textAlign="center"
            fontWeight="750"
            letterSpacing={{ lg: '15px', md: '10px', sm: '8px', xs: '5px' }}
            fontSize={{ lg: '170px', md: '120px', sm: '90px', xs: '60px' }}
            sx={{ userSelect: 'none' }}
          >
            CRAFTING
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            maxWidth: '100%',
            padding: { lg: '20px 0', md: '15px 0', sm: '10px 0', xs: '5px 0' },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              ":hover": {
                letterSpacing: { lg: '50px', md: '40px', sm: '30px', xs: '20px' },
              },
              color: 'blue',
              transition: 'all 0.5s linear',
              zIndex: '2',
              position: 'relative',
              cursor: 'pointer',
              userSelect: 'none',
            }}
            textAlign="center"
            letterSpacing={{ lg: '15px', md: '10px', sm: '8px', xs: '5px' }}
            fontWeight="750"
            fontSize={{ lg: '170px', md: '120px', sm: '90px', xs: '60px' }}
          >
            TA
            <span
              className="border"
              style={{
                color: 'transparent',
                WebkitTextStroke: '3px blue',
              }}
            >
              ILOR
            </span>
            ED
          </Typography>
        </Box>

        <Box
          component="div"
          sx={{
            maxWidth: '100%',
            padding: { lg: '20px 0', md: '15px 0', sm: '10px 0', xs: '5px 0' },
          }}
        >
          <Typography
            variant="h2"
            color="white"
            textAlign="center"
            letterSpacing={{ lg: '15px', md: '10px', sm: '8px', xs: '5px' }}
            fontWeight="750"
            fontSize={{ lg: '170px', md: '120px', sm: '90px', xs: '60px' }}
            sx={{ userSelect: 'none' }}
          >
            STRATEGIES
          </Typography>
        </Box>
      </Container>

      <Container
        sx={{
          padding: { lg: '60px 0', md: '40px 0', sm: '30px 0', xs: '20px 0' }
        }}
        component="div"
        maxWidth={false}
        className="section_4"

      >
        <Button color='black' sx={{
          border: '1px solid rgba(0, 0, 0, 0.105)', width: 'max-content', margin: 'auto', left: '50%', transform: 'translateX(-50%)', padding: '10px', fontSize: '17px', fontWeight: '650', opacity: '0.7', ":hover": {
            backgroundColor: 'black', color: 'white', transition: 'all 0.5s linear',
            "& .MuiSvgIcon-root": {
              color: 'white',
              transition: 'all 0.5s linear',
            }
          }
        }}>
          ALL SERVICES <ArrowCircleRightIcon sx={{ marginLeft: '10px', fontSize: '30px', color: 'blue' }} />
        </Button>

        <Box component='div'>
          <Grid2 container spacing={{ sm: 3, md: 2 }}>
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }} margin='auto' mb={{ xs: '20px' }} max-width={{ xs: '100%', sm: '380px' }} height='auto'>
              <Box component='img' sx={{ width: '100%', height: '100%', borderRadius: '5px', boxShadow: '0px 10px 20px 1px rgba(0, 0, 0, 0.2)' }} src={img2} />
            </Grid2>
          </Grid2>
        </Box>

      </Container>



      {/* <Container
        sx={{
          padding: '60px 0',
          backgroundColor: 'black',
          position: 'relative',
        }}
        component="div"
        maxWidth={false}
        className="section_3"
      >
        <Box
          className="section3_img"
          component="img"
          sx={{
            width: '350px',
            height: '350px',
            borderRadius: '5px',
            boxShadow: '0px 10px 20px 1px rgba(0, 0, 0, 0.2)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1, // Place image behind the text
          }}
          src={img2}
        />
        <Box component="div" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            textAlign="center"
            fontWeight="750"
            letterSpacing="15px"
            fontSize="170px"
            sx={{
              userSelect: 'none',
              color: 'white',
            }}
          >
            CRAFTING
          </Typography>
        </Box>

        <Box component="div" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            sx={{
              ":hover span.border": {
                WebkitTextStroke: '2px blue', // Add border to specific letters
                color: 'transparent',
                transition: 'all 0.5s linear',
              },
              color: 'blue',
              transition: 'all 0.5s linear',
              zIndex: '2',
              position: 'relative',
              cursor: 'pointer',
              userSelect: 'none',
            }}
            textAlign="center"
            letterSpacing="15px"
            fontWeight="750"
            fontSize="170px"
          >
            TA
            <span className="border" style={{ color: 'transparent', WebkitTextStroke: '2px white' }}>
              ILOR
            </span>
            ED
          </Typography>
        </Box>

        <Box component="div" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            textAlign="center"
            letterSpacing="15px"
            fontWeight="750"
            fontSize="170px"
            sx={{
              userSelect: 'none',
              color: 'white',
            }}
          >
            STRATEGIES
          </Typography>
        </Box>
      </Container> */}




    </Fragment>
  )
}

export default HomePage