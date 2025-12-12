import { useState, useEffect } from "react";
import { Button, Grid, Stack, Box, Typography, Container, Paper } from "@mui/material";
import Login from "./Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        
        const tokenExpirado = payload.exp * 1000 < Date.now();
        
        if (payload.username && !tokenExpirado) {
          setUserEmail(payload.username);
          setIsLoggedIn(true);
          verificarPermissoes(payload.username);
        } else {
          handleLogout();
        }
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
        handleLogout();
      }
    }
  }, []);

  const verificarPermissoes = (email) => {
    if (email === "admin@playtoday.com") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  const handleLogin = (success, username = null) => {
    if (success && username) {
      setUserEmail(username);
      verificarPermissoes(username);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
    setIsAdmin(false);
    localStorage.removeItem("token");
  };

  if (!isLoggedIn) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mb: 4 }}>
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">
              Sistema Game Store
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="body2">
                Olá, {userEmail} {isAdmin ? "(ADMIN)" : "(USER)"}
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                size="small"
                onClick={handleLogout}
              >
                Sair
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Bem-vindo ao Painel
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Você está logado no sistema. Utilize o menu (futuro) para navegar.
              </Typography>
              
              {isAdmin && (
                <Box mt={2} p={2} bgcolor="#e3f2fd" borderRadius={1}>
                  <Typography variant="caption" color="primary">
                    Painel de Administrador Ativo: Você tem acesso total.
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}