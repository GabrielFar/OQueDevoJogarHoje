import { Container, Box } from "@mui/material";
import Header from "../components/Header";
import MagicSection from "../components/MagicSection";
import FilterBar from "../components/FilterBar";
import GameGrid from "../components/GameGrid";
import "./styles.css";

export default function Home({ userEmail, handleLogout }) {
  return (
    <Box className="home-container">
      <Header userEmail={userEmail} handleLogout={handleLogout} />
      <Container maxWidth="lg">
        <FilterBar />
        <MagicSection />
        <GameGrid />
      </Container>
    </Box>
  );
}