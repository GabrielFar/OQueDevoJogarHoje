import { Box, Typography, Button } from "@mui/material";
import QuizGame from "./QuizGame";
import "./styles.css";

export default function MagicSection() {
  return (
    <Box className="magic-section">
      <Typography 
        variant="h4" 
        color="primary" 
        className="magic-title-large"
      >
        NÃO SABE O QUE JOGAR?
      </Typography>

      <QuizGame 
        trigger={
          <Button 
            variant="contained" 
            size="large"
            className="magic-button"
          >
            Clique e veja a mágica acontecer!
          </Button>
        }
      />
    </Box>
  );
}