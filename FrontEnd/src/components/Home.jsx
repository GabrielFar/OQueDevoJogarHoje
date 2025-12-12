import { Container, Box } from "@mui/material";
import Header from "../components/Header";
import MagicSection from "../components/MagicSection";
import FilterBar from "../components/FilterBar";
import GameGrid from "../components/GameGrid";

export default function Home({ userEmail, handleLogout }) {
  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh', pb: 8 }}>
      <Header userEmail={userEmail} handleLogout={handleLogout} />
      <Container maxWidth="lg">
        <FilterBar />
        <MagicSection />
        <GameGrid />
      </Container>
    </Box>
  );
}