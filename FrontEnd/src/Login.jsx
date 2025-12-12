import { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Login({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!username || !password) return;

    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3002/login", {
        username: username,
        password: password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        handleLogin(true, username);
      }
    } catch (err) {
      console.error(err);
      setError("Senha ou e-mail incorretos. Tente novamente");
      handleLogin(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <img src="/Banner.png" alt="Banner O que devo jogar hoje?" className="login-banner" />

      <p className="login-subtitle">
        Faça o Login para uma Melhor Experiência!
      </p>

      <div className="login-container">
        <div className="input-group">
          <label className="input-label">E-MAIL:</label>
          <div className="input-wrapper">
            <input
              type="text"
              className="custom-input"
              placeholder="fulanodetal@gmail.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
            />
          </div>
        </div>
        
        <div className="input-group">
          <label className="input-label">SENHA:</label>
          <div className="input-wrapper">
            <input
              type="password"
              className="custom-input"
              placeholder="...................."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                      handleSubmit();
                  }
              }}
            />
          </div>
        </div>

        <button 
          className="login-btn"
          onClick={handleSubmit} 
          disabled={isLoading || !username || !password}
        >
          {isLoading ? 'Entrando...' : 'Entrar'}
        </button>

      </div>

      <div className="feedback-area">
        {isLoading ? (
          <div className="spinner"></div>
        ) : error ? (
          <div className="error-banner">
            {error}
          </div>
        ) : null}
      </div>
    </div>
  );
}