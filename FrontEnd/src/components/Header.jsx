import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import bannerImg from "../../public/Banner.png";

export default function Header({ userEmail, handleLogout }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navItems = ["Quem Somos?", "Gêneros", "Minha Lista"];

  const buttonStyle = {
    color: 'white',
    fontWeight: 'bold',
    display: 'block',
    px: 2,
    py: 1,
    borderRadius: 2,
    transition: 'all 0.3s ease',
    '&:hover': {
      bgcolor: '#ff6f00',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
    }
  };

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: '#9e3a0e' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>

          <Box
            component="img"
            src={bannerImg}
            alt="Banner"
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
                onClick={handleCloseNavMenu}
                sx={buttonStyle}
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
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Box sx={{ px: 2, py: 1, borderBottom: '1px solid #eee', mb: 1, bgcolor: '#f5f5f5' }}>
                <Typography variant="caption" color="text.secondary">Logado como:</Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#9e3a0e' }}>{userEmail}</Typography>
              </Box>

              {navItems.map((item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ fontWeight: '500' }}>{item}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogout} sx={{ color: 'error.main', mt: 1, borderTop: '1px solid #eee' }}>
                <Typography textAlign="center" sx={{ fontWeight: 'bold' }}>Sair</Typography>
              </MenuItem>
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}