import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { Parallax } from "react-parallax";
import DrawImg from "../assets/draw.jpg";
import image1 from "../assets/drawings/images (1).jpg";
import image2 from "../assets/drawings/images (2).jpg";
import image3 from "../assets/drawings/images (3).jpg";
import image4 from "../assets/drawings/images (4).jpg";
import image5 from "../assets/drawings/images (5).jpg";
import image6 from "../assets/drawings/images (6).jpg";
import image7 from "../assets/drawings/images (7).jpg";
import image8 from "../assets/drawings/images (8).jpg";
import image9 from "../assets/drawings/images (9).jpg";
import image10 from "../assets/drawings/images (10).jpg";
import image11 from "../assets/drawings/images (11).jpg";
import image12 from "../assets/drawings/images (12).jpg";
import image13 from "../assets/drawings/images (13).jpg";
import image14 from "../assets/drawings/images (14).jpg";
import image15 from "../assets/drawings/images (15).jpg";
import image16 from "../assets/drawings/images (16).jpg";
import image17 from "../assets/drawings/images (17).jpg";
import image18 from "../assets/drawings/images (18).jpg";
import image19 from "../assets/drawings/images (19).jpg";
import image20 from "../assets/drawings/images (20).jpg";
import image21 from "../assets/drawings/images (21).jpg";
import image22 from "../assets/drawings/images (22).jpg";
import image23 from "../assets/drawings/images (23).jpg";
import image24 from "../assets/drawings/images (24).jpg";
import image25 from "../assets/drawings/images (25).jpg";
import image26 from "../assets/drawings/images (26).jpg";
import image27 from "../assets/drawings/images (27).jpg";
import image28 from "../assets/drawings/images (28).jpg";
import image29 from "../assets/drawings/images (29).jpg";
import image30 from "../assets/drawings/images (30).jpg";
import image31 from "../assets/drawings/images (31).jpg";
import image32 from "../assets/drawings/images (32).jpg";
import image33 from "../assets/drawings/images (33).jpg";
import image34 from "../assets/drawings/images (34).jpg";
import image35 from "../assets/drawings/images (35).jpg";
import image36 from "../assets/drawings/images (36).jpg";
import image37 from "../assets/drawings/images (37).jpg";
import image38 from "../assets/drawings/images (38).jpg";
import { PanZoom } from "react-easy-panzoom";
import { Helmet } from "react-helmet";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
}));

const ParallaxContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1, // Ensure content is above the background image
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

const MasonryGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {},
}));

const MasonryGridBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {},
}));
const StyledCard = styled(Card)(({ theme }) => ({
  width: "400px",
  borderRadius: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "400px",
  },
}));
const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "red",
  border: "0px",
  boxShadow: 24,
  p: 4,

  [theme.breakpoints.down("sm")]: {
    width: 390  ,
  },
}));

const unsplashImages1 = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image38,
  image36,
];

const unsplashImages2 = [
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image37,
];

const unsplashImages3 = [
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MainBox>
      <Helmet>
        <title>Gallery</title>
        <meta name="description" content="Welcome to my website" />
        {/* Add more meta tags as needed */}
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
          Welcome to Pencil Shadows
        </Typography>
        <Typography
          variant="h2"
          align="center"
          // style={{ color: "#fff" }}
          gutterBottom
        >
          <span
            style={{
              background: `linear-gradient(352deg, rgba(241,114,242,1) 0%, rgba(241,5,33,1) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600,
              fontFamily: "Fredoka, sans-serif",
            }}
          >
            Image Gallery
          </span>
        </Typography>
        <Typography
          variant="h5"
          align="center"
          paragraph
          style={{
            color: "#fff",
            fontFamily: "Fredoka, sans-serif",
            // fontWeight: 600,
          }}
        >
          Showcase your drawings and paintings here!
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <MasonryGrid>
              {unsplashImages1.map((imageUrl, index) => (
                <MasonryGridBox
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  onClick={() => handleOpen(imageUrl)}
                >
                  <StyledCard>
                    <CardMedia
                      component="img"
                      image={imageUrl}
                      alt={`Image ${index + 1}`}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Description for Image {index + 1}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </MasonryGridBox>
              ))}
            </MasonryGrid>
          </Grid>

          <Grid item xs={6} md={4}>
            <MasonryGrid>
              {unsplashImages2.map((imageUrl, index) => (
                <MasonryGridBox
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="2000"
                  onClick={() => handleOpen(imageUrl)}
                >
                  <StyledCard>
                    <CardMedia
                      component="img"
                      image={imageUrl}
                      alt={`Image ${index + 1}`}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Description for Image {index + 1}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </MasonryGridBox>
              ))}
            </MasonryGrid>
          </Grid>

          <Grid item xs={12} md={4}>
            <MasonryGrid>
              {unsplashImages3.map((imageUrl, index) => (
                <MasonryGridBox
                  key={index}
                  data-aos="fade-up"
                  // data-aos-delay="2000"
                  data-aos-duration="1000"
                  onClick={() => handleOpen(imageUrl)}
                >
                  <StyledCard>
                    <CardMedia
                      component="img"
                      image={imageUrl}
                      alt={`Image ${index + 1}`}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Description for Image {index + 1}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </MasonryGridBox>
              ))}
            </MasonryGrid>
          </Grid>
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox>
  <PanZoom>
    <img
      src={selectedImage}
      alt="Selected"
      style={{ width: "100%", height: "auto" }}
      data-aos="zoom-in"
    />
  </PanZoom>
</ModalBox>

        </Modal>
      </ParallaxContainer>
    </MainBox>
  );
}

export default Gallery;
