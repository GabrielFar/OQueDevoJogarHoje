import { Box } from "@mui/material";
import bannerImg from "../../public/Banner.png"; 
import "./styles.css";

export default function HeroBanner() {
  return (
    <Box className="hero-banner-wrapper">
      <Box
        component="img"
        src={bannerImg}
        alt="O que devo jogar hoje?"
        className="hero-banner-img"
      />
    </Box>
  );
}