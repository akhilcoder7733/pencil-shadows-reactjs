import React from "react";
import { Box, Typography, Container } from "@mui/material";
import DrawImg from "../assets/draw.jpg";
import { styled } from "@mui/system";
import { Parallax } from "react-parallax";
import { useNavigate } from "react-router-dom";
import StyledButton from "../Components/StyledButton";
import { Helmet } from "react-helmet";

const MainBox = styled(Box)(({ theme }) => ({
  height: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
}));

const ParallaxContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1, // Ensure content is above the background image
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const BackgroundImage = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${DrawImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: -1, // Behind the content
  filter: "brightness(20%)",
}));

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <MainBox>
       <Helmet>
        <title>Home page</title>
        
      </Helmet>
      <Parallax bgImage={DrawImg} strength={500}>
        <BackgroundImage />
      </Parallax>
      <ParallaxContainer>
        <Typography
          variant="h2"
          align="center"
          style={{
            color: "#fff",
            fontFamily: "Fredoka, sans-serif",
            fontWeight: 600,
          }}
          gutterBottom
        >
          Welcome to{" "}
          <span
            style={{
              background: `linear-gradient(352deg, rgba(241,114,242,1) 0%, rgba(241,5,33,1) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600,
            }}
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="100"
          >
            Pencil Shadows
          </span>
        </Typography>
        <Typography
          variant="h5"
          align="center"
          paragraph
          style={{ color: "#fff", fontFamily: "Fredoka, sans-serif" }}
        >
          Showcase your drawings and paintings here!
        </Typography>
        <StyledButton
          onClick={() => navigate("/gallery")}
          data-aos="fade-in"
          data-aos-duration="3000"
          data-aos-delay="300"
        >
          See Gallery
        </StyledButton>
      </ParallaxContainer>
    </MainBox>
  );
};

export default Welcome;
