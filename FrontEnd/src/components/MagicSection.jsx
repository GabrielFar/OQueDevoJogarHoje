import { Box, Typography, Button } from "@mui/material";
import "./styles.css";

export default function MagicSection() {
  return (
    <Box className="magic-section">
      <Typography 
        variant="h6" 
        className="magic-title-small"
      >
        Recomendações:
      </Typography>

      <Typography 
        variant="h4" 
        color="primary" 
        className="magic-title-large"
      >
        JOGO DO DIA!
      </Typography>

      <Button 
        variant="contained" 
        size="large"
        className="magic-button"
      >
        Clique e veja a mágica acontecer!
      </Button>
    </Box>
  );
}