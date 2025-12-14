import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import bannerImg from "../../public/Banner.png";

export default function Header({ userEmail, handleLogout, onNavigate, currentPage }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuClick = (item) => {
    handleCloseNavMenu();
    if (item === "Admin") onNavigate("admin");
    else if (item === "Quem Somos?") onNavigate("quemSomos");
    else if (item === "Minha Lista") onNavigate("minhaLista");
  };

  const navItems = ["Admin", "Quem Somos?", "Minha Lista"];

  const getButtonStyle = (itemName) => {
    const pageMap = {
      "Admin": "admin",
      "Quem Somos?": "quemSomos",
      "Minha Lista": "minhaLista"
    };

    const isActive = currentPage === pageMap[itemName];

    if ((itemName === "Minha Lista" || itemName === "Admin") && isActive) {
      return {
        bgcolor: '#FF7043',
        color: 'white',
        fontWeight: 'bold',
        px: 3,
        py: 1,
        borderRadius: 20,
        textTransform: 'none',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        '&:hover': { bgcolor: '#F4511E' }
      };
    }

    return {
      color: 'white',
      fontWeight: 'bold',
      px: 2,
      py: 1,
      borderRadius: 2,
      textTransform: 'none',
      '&:hover': {
        bgcolor: 'rgba(255,255,255,0.1)',
      }
    };
  };

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: '#9e3a0e' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>

          <Box
            component="img"
            src={bannerImg}
            alt="Banner"
            onClick={() => onNavigate("home")}
            sx={{
              maxWidth: { xs: '140px', sm: '200px', md: '350px' },
              height: 'auto',
              objectFit: 'contain',
              mr: 2,
              cursor: 'pointer'
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleMenuClick(item)}
                sx={getButtonStyle(item)}
              >
                {item}
              </Button>
            ))}

            <Box sx={{ display: 'flex', alignItems: 'center', ml: 3, gap: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'white', opacity: 0.9 }}>
                {userEmail || "Usuário"}
              </Typography>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={handleLogout}
                sx={{ 
                  color: 'white', 
                  borderColor: 'rgba(255,255,255,0.5)',
                  px: 3,
                  '&:hover': { 
                    borderColor: '#fff', 
                    bgcolor: '#d84315',
                    fontWeight: 'bold'
                  }
                }}
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
              sx={{ color: 'white' }}
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
               {navItems.map((item) => (
                <MenuItem key={item} onClick={() => handleMenuClick(item)}>
                  <Typography 
                      textAlign="center" 
                      sx={{ 
                          fontWeight: '500',
                          color: (item === "Minha Lista" || item === "Admin") && getButtonStyle(item).bgcolor ? '#FF7043' : 'inherit'
                      }}
                  >
                      {item}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center" color="error">Sair</Typography>
              </MenuItem>
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}