import { Box } from "@mui/material";
import bannerImg from "../../public/Banner.png"; 

export default function HeroBanner() {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 2 }}>
      <Box
        component="img"
        src={bannerImg}
        alt="O que devo jogar hoje?"
        sx={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: 4,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}
      />
    </Box>
  );
}