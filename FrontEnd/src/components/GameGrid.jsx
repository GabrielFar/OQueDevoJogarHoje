import { Grid, Container } from "@mui/material";
import GameCard from "./GameCard";

export default function GameGrid() {
  const games = Array.from({ length: 10 }); 

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, md: 0 } }}>
      <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
        {games.map((_, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
            <GameCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}