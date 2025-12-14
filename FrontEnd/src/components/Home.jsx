import { useState } from "react";
import { Container, Box } from "@mui/material";
import Header from "../components/Header";
import MagicSection from "../components/MagicSection";
import FilterBar from "../components/FilterBar";
import GameGrid from "../components/GameGrid";
import QuemSomos from "../components/QuemSomos";
import MinhaLista from "../components/MinhaLista";
import AdminPanel from "../components/AdminPanel";

export default function Home({ userEmail, handleLogout }) {
  const [currentPage, setCurrentPage] = useState("home");

  const renderMainContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <FilterBar />
            <MagicSection />
            <GameGrid />
          </>
        );
      case "quemSomos":
        return <QuemSomos />;
      case "minhaLista":
        return <MinhaLista />;
      case "admin":
        return <AdminPanel />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh', pb: 8 }}>

      <Header 
        userEmail={userEmail} 
        handleLogout={handleLogout} 
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />

      <Container maxWidth="lg">
        {renderMainContent()}
      </Container>
    </Box>
  );
}