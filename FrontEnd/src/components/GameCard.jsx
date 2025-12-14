import { Card, CardContent, CardMedia, Typography, Rating, Box } from "@mui/material";
import "./styles.css";

export default function GameCard(jogo) {
  const jogoInfo = jogo.jogo;

  return (
    <Card elevation={0} className="game-card">
      <CardMedia
        component="div"
        className="game-card-media"
      >
        <Box className="game-card-gradient" />
        
        <Box className="game-card-icon-wrapper">
            <Box 
              component="img" 
              src={jogoInfo.imagem}
              alt={jogoInfo.nome}
              className="game-card-icon"
            />
        </Box>
      </CardMedia>
      <CardContent className="game-card-content">
        <Typography variant="body2" color="text.primary">
          {jogoInfo.nome}
        </Typography>
      </CardContent>
    </Card>
  );
}