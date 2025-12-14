import { useState } from "react";
import { Container, Box } from "@mui/material";
import Header from "../components/Header";
import MagicSection from "../components/MagicSection";
import FilterBar from "../components/FilterBar";
import GameGrid from "../components/GameGrid";
import QuemSomos from "../components/QuemSomos";
import "./styles.css";

export default function Home({ userEmail, handleLogout }) {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Box className="home-container">
      <Header 
        userEmail={userEmail} 
        handleLogout={handleLogout} 
        onNavigate={setCurrentPage} 
      />

      <Container maxWidth="lg">
        {currentPage === "home" ? (
          <>
            <FilterBar />
            <MagicSection />
            <GameGrid />
          </>
        ) : currentPage === "quemSomos" ? (
          <QuemSomos />
        ) : (
          <Box sx={{ mt: 4 }}>Página em construção</Box>
        )}
      </Container>
    </Box>
  );
}