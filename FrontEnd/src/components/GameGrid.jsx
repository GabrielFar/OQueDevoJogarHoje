import { Grid, Container,Typography } from "@mui/material";
import GameCard from "./GameCard";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function GameGrid() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        const response = await axios.get("http://localhost:3002/jogos/todos");
        setJogos(response.data.jogos);
      } catch (err) {
        console.error("Erro ao buscar jogos:", err);
      };
    };
    fetchJogos();
  }, [])

  return (
    <Container maxWidth="lg" className="game-grid-container">
      <Typography 
        variant="h6" 
        className="title-small"
      >
        Recomendações:
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
        {jogos.map((jogo) => (
          <Grid item xs={6} sm={4} md={2.4} key={jogo.id}>
            <GameCard jogo={jogo}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}