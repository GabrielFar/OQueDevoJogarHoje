import { useState } from "react";
import { Container, Box } from "@mui/material";
import Header from "../components/Header";
import MagicSection from "../components/MagicSection";
import FilterBar from "../components/FilterBar";
import GameGrid from "../components/GameGrid";
import QuemSomos from "../components/QuemSomos";
import AdminPanel from "../components/AdminPanel";
import "./styles.css";

export default function Home({ userEmail, handleLogout, isAdmin }) {
  const [currentPage, setCurrentPage] = useState(isAdmin ? "admin" : "home");

  const [filters, setFilters] = useState({
    search: "",
    genre: "",
    platform: "",
    duration: ""
  });

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const renderMainContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <FilterBar 
              currentFilters={filters} 
              onFilterChange={handleFilterChange} 
            />
            <MagicSection />
            <GameGrid filters={filters}/>
          </>
        );
      case "quemSomos":
        return <QuemSomos />;
      case "admin":
        return isAdmin ? <AdminPanel /> : null;
      default:
        return null;
    }
  };

  return (
    <Box className="home-container">
      <Header 
        userEmail={userEmail} 
        handleLogout={handleLogout} 
        onNavigate={setCurrentPage}
        currentPage={currentPage}
        isAdmin={isAdmin}
      />

      <Container maxWidth="lg">
        {renderMainContent()}
      </Container>
    </Box>
  );
}