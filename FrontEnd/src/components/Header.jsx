import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import bannerImg from "/Banner.png";
import "./styles.css";

export default function Header({ userEmail, handleLogout, onNavigate }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuClick = (item) => {
    handleCloseNavMenu();
    if (item === "Quem Somos?") {
      onNavigate("quemSomos");
    } else if (item === "Jogos" || item === "Home") {
      onNavigate("home");
    } else {
      console.log("Navegar para:", item);
    }
  };

  const navItems = ["Quem Somos?", "Jogos", "Minha Lista"];

  return (
    <AppBar position="static" elevation={0} className="header-appbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="header-toolbar">

          <Box
            component="img"
            src={bannerImg}
            alt="Banner"
            onClick={() => onNavigate("home")} 
            className="header-logo"
          />

          <Box className="header-desktop-nav">
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleMenuClick(item)}
                className="header-nav-button"
              >
                {item}
              </Button>
            ))}

            <Box className="header-user-section">
              <Typography variant="body2" className="header-user-text">
                {userEmail || "Usuário"}
              </Typography>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={handleLogout}
                className="header-logout-button"
              >
                Sair
              </Button>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              className="header-mobile-menu-icon"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <Box className="header-mobile-menu-user">
                <Typography variant="caption" color="text.secondary">Logado como:</Typography>
                <Typography variant="subtitle2" className="header-mobile-user-email">{userEmail}</Typography>
              </Box>

              {navItems.map((item) => (
                <MenuItem key={item} onClick={() => handleMenuClick(item)}>
                  <Typography textAlign="center" className="header-mobile-item-text">{item}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogout} className="header-mobile-logout">
                <Typography textAlign="center" className="header-mobile-logout-text">Sair</Typography>
              </MenuItem>
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}