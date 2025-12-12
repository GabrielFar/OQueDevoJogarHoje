import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Login from "./Login";
import Home from "./components/Home";
import { theme } from "./theme";

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
    <ThemeProvider theme={theme}>
      <Home 
        userEmail={userEmail} 
        handleLogout={handleLogout} 
        isAdmin={isAdmin} 
      />
    </ThemeProvider>
  );
}