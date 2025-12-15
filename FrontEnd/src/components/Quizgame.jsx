import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Typography, Button, Box, Stack, CircularProgress } from '@mui/material';
import PopUp from './Popup';
import GameCard from './GameCard';
import "./styles.css";

const questionsData = [
  {
    text: "Quanto tempo livre você tem para se dedicar a um jogo agora?",
    type: "tempo",
    options: [
      { label: "Tenho pressa (Partidas rápidas de 15-30min)", value: ["Curto"] },
      { label: "Tenho algumas horas (Sessões médias)", value: ["Médio", "Curto"] },
      { label: "Quero uma vida nova (Campanhas de +50 horas)", value: ["Longo"] },
      { label: "Indiferente", value: ["Curto", "Médio", "Longo"] }
    ]
  },
  {
    text: "Qual a vibe principal que você busca?",
    type: "keyword",
    options: [
      { label: "Adrenalina e Ação Frenética", keywords: ["ação", "fps", "luta", "hack", "beat", "corrida"] }, 
      { label: "Pensar, Planejar e Construir", keywords: ["estratégia", "puzzle", "simulação"] }, 
      { label: "Imersão em História e Fantasia", keywords: ["rpg", "aventura", "indie"] },
      { label: "Relaxar e Descontrair", keywords: ["simulação", "casual", "plataforma"] } 
    ]
  },
  {
    text: "Sobre a complexidade do jogo:",
    type: "keyword",
    options: [
      { label: "Gosto de mecânicas complexas (RPGs/Estratégia)", keywords: ["rpg", "estratégia", "simulação", "indie"] }, 
      { label: "Quero pegar o controle e sair jogando (Arcade)", keywords: ["luta", "esporte", "corrida", "plataforma"] }, 
      { label: "Gosto de tomar sustos ou sentir tensão", keywords: ["horror", "terror", "survival"] }, 
      { label: "Gosto de desafios mentais", keywords: ["puzzle", "estratégia"] }
    ]
  },
  {
    text: "Qual cenário te atrai mais visualmente?", 
    type: "keyword",
    options: [
      { label: "Futurista / Espacial / Militar", keywords: ["fps", "sci-fi", "estratégia", "tiro"] }, 
      { label: "Medieval / Mágico / Antigo", keywords: ["rpg", "aventura", "fantasia", "hack", "indie"] }, 
      { label: "Urbano / Realista / Esportes", keywords: ["esporte", "corrida", "simulação", "luta"] }, 
      { label: "Abstrato / Cartoon / Colorido", keywords: ["plataforma", "puzzle", "casual"] } 
    ]
  },
  {
    text: "Prefere jogar sozinho ou acompanhado?", 
    type: "keyword",
    options: [
      { label: "Single Player Focado (História)", keywords: ["rpg", "aventura", "horror", "metroidvania", "indie"] }, 
      { label: "Multiplayer Competitivo (PvP)", keywords: ["fps", "moba", "luta", "esporte", "corrida"] }, 
      { label: "Para jogar com amigos (Co-op)", keywords: ["simulação", "aventura", "plataforma"] },
      { label: "Tanto faz", keywords: ["ação"] } 
    ]
  }
];

export default function QuizGame({ trigger }) {
  const [generos, setGeneros] = useState([]);
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameScores, setGameScores] = useState({});
  const [finished, setFinished] = useState(false);
  const [suggestedGames, setSuggestedGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [genResponse, gamesResponse] = await Promise.all([
          axios.get("http://localhost:3002/generos/todos"),
          axios.get("http://localhost:3002/jogos/todos")
        ]);
        
        setGeneros(genResponse.data.generos || genResponse.data);
        setJogos(gamesResponse.data.jogos || gamesResponse.data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const initializeScores = () => {
    const initialScores = {};
    jogos.forEach(game => {
      initialScores[game.id] = Math.random(); 
    });
    return initialScores;
  };

  const getGenreIdsByKeywords = (keywords) => {
    if (!generos || generos.length == 0) return [];
    return generos
      .filter(g => keywords.some(key => g.nome.toLowerCase().includes(key.toLowerCase())))
      .map(g => g.id);
  };

  const handleAnswer = (option) => {
    let currentScores = Object.keys(gameScores).length == 0 
        ? initializeScores() 
        : { ...gameScores };

    const questionType = questionsData[currentQuestion].type;

    jogos.forEach(game => {
        if (questionType == "tempo") {
            if (option.value.includes(game.tempo)) {
                currentScores[game.id] += 3; 
            }
        } 
        else if (questionType == "keyword") {
            const matchedGenreIds = getGenreIdsByKeywords(option.keywords);
            if (matchedGenreIds.includes(game.generoId)) {
                currentScores[game.id] += 2; 
            }
        }
    });

    setGameScores(currentScores);
  
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(currentScores);
    }
  };

  const calculateResult = (finalScores) => {
    if (!jogos || jogos.length == 0) {
        setFinished(true);
        return;
    }

    const rankedGames = jogos.map(game => ({
      ...game,
      finalScore: finalScores[game.id] || 0
    }));

    rankedGames.sort((a, b) => b.finalScore - a.finalScore);

    setSuggestedGames(rankedGames.slice(0, 5));
    setFinished(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setGameScores({});
    setFinished(false);
    setSuggestedGames([]);
  };

  const renderContent = () => {
    if (loading) return <Box className="quiz-loader"><CircularProgress /></Box>;
  
    if (!loading && generos.length == 0) {
      return (
        <Box className="quiz-error">
          <Typography variant="body1" color="error">
            Erro ao carregar dados. Verifique a API.
          </Typography>
        </Box>
      )
    }

    if (finished) {
      return (
        <Box className="quiz-result-container">
          <Typography variant="h5" gutterBottom className="quiz-result-title">
            Seleção Personalizada
          </Typography>
          <Typography variant="body1">
            Combinamos suas respostas de gênero e tempo disponível:
          </Typography>
          
          <Box className="quiz-result-grid" sx={{ mt: 3 }}>
            {suggestedGames.length > 0 ? (
              suggestedGames.map((game) => (
                <Box key={game.id} className="quiz-game-wrapper">
                  <GameCard jogo={game} />
                </Box>
              ))
            ) : (
              <Typography variant="body2">Nenhum jogo encontrado.</Typography>
            )}
          </Box>

          <Button variant="contained" color="secondary" onClick={resetQuiz} fullWidth sx={{ mt: 3 }}>
            Refazer Quiz
          </Button>
        </Box>
      );
    }

    const question = questionsData[currentQuestion];

    return (
      <Box className="quiz-question-container">
        <Stack direction="row" justifyContent="space-between" alignItems="center" className="quiz-question-header">
             <Typography variant="caption" color="textSecondary">
                PERGUNTA {currentQuestion + 1} / {questionsData.length}
             </Typography>
        </Stack>
        
        <Typography variant="h6" className="quiz-question-text">
          {question.text}
        </Typography>
        
        <Stack spacing={1.5}>
          {question.options.map((option, index) => (
            <Button 
              key={index} 
              variant="outlined" 
              fullWidth 
              size="large"
              onClick={() => handleAnswer(option)}
              className="quiz-option-button"
            >
              {option.label}
            </Button>
          ))}
        </Stack>
      </Box>
    );
  };

  return (
    <PopUp trigger={
        trigger || (
            <Button variant="contained" color="warning" size="large" className="quiz-trigger-btn">
                🎲 O que devo jogar hoje?
            </Button>
        )
    }>
      {renderContent()}
    </PopUp>
  );
}