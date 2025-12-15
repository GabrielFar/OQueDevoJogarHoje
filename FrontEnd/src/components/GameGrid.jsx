import { Grid, Container, Typography } from "@mui/material";
import GameCard from "./GameCard";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function GameGrid({ filters }) {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        const response = await axios.get("http://localhost:3002/jogos/todos");
        setJogos(response.data.jogos || response.data);
      } catch (err) {
        console.error(err);
      };
    };
    fetchJogos();
  }, []);

  const filteredJogos = jogos.filter((jogo) => {
    if (filters.search && !jogo.nome.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }

    if (filters.genre && jogo.generoId != filters.genre) {
      return false;
    }

    if (filters.platform && !jogo.plataformasId.includes(filters.platform)) {
      return false;
    }

    if (filters.duration && jogo.tempo != filters.duration) {
      return false;
    }

    return true;
  });

  return (
    <Container maxWidth="lg" className="game-grid-container">
      <Typography 
        variant="h6" 
        className="title-small"
      >
        Recomendações: ({filteredJogos.length})
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
        {filteredJogos.length > 0 ? (
          filteredJogos.map((jogo) => (
            <Grid item xs={6} sm={4} md={2.4} key={jogo.id}>
              <GameCard jogo={jogo}/>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ mt: 4, color: 'text.secondary' }}>
            Nenhum jogo encontrado com esses filtros.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}