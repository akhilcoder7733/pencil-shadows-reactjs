import React from "react";
import { styled } from "@mui/system";
import { Box, Container, Tooltip, Typography } from "@mui/material";
import Owner from "../assets/newpinsta.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DrawImg from '../assets/draw.jpg'
import { Parallax } from "react-parallax";
import { Helmet } from "react-helmet";


const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "90vh",
  backgroundImage:
    "linear-gradient(180deg, transparent 30%, rgba(2,211,211,1) 30%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ParallaxContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1, // Ensure content is above the background image
  width: "90%",
  backgroundColor: "rgba(255,255,255,1)",
  borderRadius: "15px",
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxShadow: "0px 0px 36px 1px rgba(255,255,255,1)",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]:{
    flexDirection:"column",
    marginBottom:"20px"
   }
}));
const StyledTypo = styled(Typography)(({ theme }) => ({
  color: "#111",
  fontFamily: "Fredoka, sans-serif",
  textAlign: "center",
}));
const AboutBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "50vh",
  // backgroundColor: "green",
  display: "flex",
  [theme.breakpoints.down("sm")]:{
    flexDirection:"column",
    marginBottom:"20px"
   }
}));
const ImageBox = styled(Box)(({ theme }) => ({
  width: "40%",
  minHeight: "40vh",
  // backgroundColor: "red",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap:theme.spacing(1),
  [theme.breakpoints.down("sm")]:{
    width:"100%",
   }
}));
const ImageInnerBox = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "200px",
  overflow: "hidden",
  borderRadius: "50%",
  transition: "transform 0.3s ease-in-out",
  boxShadow: "0px 0px 36px 1px rgba(1,1,1,1)",
  padding:"3px",
   "&:hover .owner": {
    transform: "scale(1.1)",
    

  },
}));


const StyledBox = styled(Box)(({ theme }) => ({
  width: "60%",
  minHeight: "40vh",
  // backgroundColor: "blue",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap:theme.spacing(1),
  [theme.breakpoints.down("sm")]:{
    width:"100%"
   }
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "50%",
  transition: "transform 0.3s ease-in-out",
  "&:hover .owner": {
    transform: "scale(1.1)",
  },
}));

const IconBox = styled(Box)(({ theme }) =>({
  width:"40%",
  // backgroundColor:"red",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  flexDirection:"row",
  gap:theme.spacing(2),
  "&: hover .insta":{
    color:"red"
  },
  "&: hover .tele":{
    color:"skyblue"
  },
  "&: hover .maili":{
    color:"orange"
  },
  "&: hover .fbi":{
    color:"blue"
  },
  "&: hover .xti":{
    color:"green"
  },
  "&: hover .yti":{
    color:"red"
  },
  "&: hover .wti":{
    color:"green"
  },
  [theme.breakpoints.down("sm")]:{
    width:"70%"
   }
}))

const BackgroundImage = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${DrawImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1, // Behind the content
  filter:"brightness(20%)"
}));

function About() {
  return (
    <MainBox>
     <Helmet>
     <meta charSet="utf-8" />
      <title>About</title>
     </Helmet>
      <Parallax bgImage={DrawImg} strength={500}>
        <BackgroundImage />
      </Parallax>
      <ParallaxContainer>
        <StyledTypo variant="h3" fontWeight={600}>
          About Us
        </StyledTypo>
        <StyledTypo variant="body1" fontWeight={600}>
          Drawing is a visual art that uses an instrument to mark paper or
          another two-dimensional surface. The instrument might be pencils,
          crayons, pens with inks, brushes with paints, or combinations of
          these, and in more modern times, computer styluses with graphics
          tablets.
        </StyledTypo>
        <AboutBox>
          <ImageBox>
            <ImageInnerBox>
              <StyledImage src={Owner} alt="ownerpic" className="owner" />
            </ImageInnerBox>
            <StyledTypo variant="h4" fontWeight={600}>
              Akhil John
            </StyledTypo>
            <StyledTypo variant="subtitle1" fontWeight={600}>
              Pencil Shadows
            </StyledTypo>
          </ImageBox>
          <StyledBox  >
              <Tooltip title="Instagram Profile" placement="right">
            <IconBox data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
              <InstagramIcon style={{fontSize:"28px"}} className="insta"/> 
              <StyledTypo variant="h6">
                _.___.akhil.___._
              </StyledTypo>
            </IconBox>
              </Tooltip>
              <Tooltip title="Telegram Profile" placement="right">
            <IconBox data-aos="fade-in" data-aos-duration="2000" data-aos-delay="200">
              <TelegramIcon style={{fontSize:"28px"}} className="tele"/> 
              <StyledTypo variant="h6">
               Akhil John
              </StyledTypo>
            </IconBox>
              </Tooltip>
              <Tooltip title="Sent Mail" placement="right" >
            <IconBox data-aos="fade-in" data-aos-duration="2000" data-aos-delay="300">
              <MailOutlineIcon style={{fontSize:"28px"}} className="maili"/> 
              <StyledTypo variant="h6">
                akhil@gmail.com
              </StyledTypo>
            </IconBox>
              </Tooltip>
              
              <Tooltip title="FaceBook Profile" placement="right">
            <IconBox data-aos="fade-in" data-aos-duration="2000" data-aos-delay="400">
              <FacebookIcon style={{fontSize:"28px"}} className="fbi"/> 
              <StyledTypo variant="h6">
                Akhil John
              </StyledTypo>
            </IconBox>
              </Tooltip>
              <Tooltip title="X Profile" placement="right">
            <IconBox data-aos="fade-in" data-aos-duration="2000" data-aos-delay="500">
              <XIcon style={{fontSize:"28px"}} className="xti"/> 
              <StyledTypo variant="h6">
                akhilhappycoder
              </StyledTypo>
            </IconBox>
              </Tooltip>
              <Tooltip title="Youtube Profile" placement="right" >
            <IconBox data-aos="fade-in" data-aos-duration="2000" data-aos-delay="600">
              <YouTubeIcon style={{fontSize:"28px"}} className="yti"/> 
              <StyledTypo variant="h6">
                Pencil Shadows
              </StyledTypo>
            </IconBox>
              </Tooltip>
              <Tooltip title="Whatsapp" placement="right">
            <IconBox data-aos="fade-in" data-aos-duration="2000" data-aos-delay="700">
              <WhatsAppIcon style={{fontSize:"28px"}} className="wti"/> 
              <StyledTypo variant="h6" >
                +91 21548 2659
              </StyledTypo>
            </IconBox>
              </Tooltip>
          </StyledBox>
        </AboutBox>
      </ParallaxContainer>
    </MainBox>
  );
}

export default About;
