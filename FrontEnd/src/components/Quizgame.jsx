import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Typography, Button, Box, Stack, CircularProgress } from '@mui/material';
import PopUp from './Popup';

const questionsData = [
  {
    text: "O que você prefere usar mais hoje: os reflexos ou a cabeça?", 
    options: [
      { label: "Reflexos rápidos (Ação/FPS/Luta)", keywords: ["ação", "fps", "tiro", "luta", "hack", "beat"] }, 
      { label: "A cabeça / Raciocínio (Estratégia/Puzzle)", keywords: ["estratégia", "puzzle", "quebra-cabeça", "tabuleiro"] }, 
      { label: "Um pouco dos dois", keywords: ["rpg", "plataforma", "aventura"] },
      { label: "Nenhum (Quero só relaxar)", keywords: ["simulação", "casual", "puzzle"] } 
    ]
  },
  {
    text: "Quanto a história importa para você agora?", 
    options: [
      { label: "É o principal, quero um filme jogável", keywords: ["aventura", "rpg", "interativo"] }, 
      { label: "Pouco importa, quero gameplay puro", keywords: ["esporte", "corrida", "luta", "arcade", "fps"] }, 
      { label: "Tanto faz", keywords: ["ação", "plataforma"] },
      { label: "Prefiro criar minha própria história", keywords: ["simulação", "sandbox", "estratégia"] } 
    ]
  },
  {
    text: "Qual o clima que você está procurando?", 
    options: [
      { label: "Tenso e assustador", keywords: ["horror", "terror", "survival"] }, 
      { label: "Leve e colorido", keywords: ["plataforma", "simulação", "puzzle", "aventura"] }, 
      { label: "Tanto faz / Neutro", keywords: ["ação", "rpg", "fps"] },
      { label: "Sombrio, mas sem sustos", keywords: ["rpg", "souls", "ação"] } 
    ]
  },
  {
    text: "Você gosta de gerenciar inventário, atributos e subir de nível?", 
    options: [
      { label: "Amo, quero ver números subindo", keywords: ["rpg"] }, 
      { label: "Detesto, quero ir direto para a ação", keywords: ["fps", "luta", "corrida", "esporte"] }, 
      { label: "Depende do jogo", keywords: ["ação", "aventura"] }, 
      { label: "Não sei / Indiferente", keywords: ["plataforma", "simulação"] }
    ]
  },
  {
    text: "Como você prefere ver o jogo?", 
    options: [
      { label: "Pelos olhos do personagem - 1ª Pessoa", keywords: ["fps", "tiro"] }, 
      { label: "Vendo o personagem de fora - 3ª Pessoa", keywords: ["aventura", "rpg", "ação", "plataforma"] }, 
      { label: "Tanto faz", keywords: ["ação"] },
      { label: "Visão de cima / Panorâmica", keywords: ["estratégia", "simulação", "moba"] } 
    ]
  },
  {
    text: "Você prefere mundos mágicos ou simulação da realidade?", 
    options: [
      { label: "Fantasia, Magia e Monstros", keywords: ["rpg", "plataforma", "aventura", "fantasia"] }, 
      { label: "Realismo, Esportes e Carros", keywords: ["esporte", "corrida", "simulação", "tiro"] }, 
      { label: "Tanto faz", keywords: ["ação"] },
      { label: "Ficção Científica", keywords: ["fps", "rpg", "estratégia", "sci-fi"] } 
    ]
  },
  {
    text: "Você prefere controlar um herói ou comandar tudo?", 
    options: [
      { label: "Sou um herói solitário", keywords: ["ação", "rpg", "plataforma", "fps"] }, 
      { label: "Sou o comandante/prefeito", keywords: ["estratégia", "simulação", "tycoon"] }, 
      { label: "Tanto faz", keywords: ["aventura"] },
      { label: "Prefiro controlar um time", keywords: ["esporte", "estratégia", "moba"] } 
    ]
  },
  {
    text: "Você gosta de explorar mapas labirínticos?", 
    options: [
      { label: "Sim, adoro explorar (Metroidvania)", keywords: ["plataforma", "rpg", "aventura", "metroidvania"] }, 
      { label: "Não, prefiro fases lineares", keywords: ["fps", "luta", "corrida"] }, 
      { label: "Tanto faz", keywords: ["ação"] },
      { label: "Odeio ficar perdido", keywords: ["esporte", "luta", "puzzle"] } 
    ]
  },
  {
    text: "Se tiver briga, como você prefere que seja?", 
    options: [
      { label: "Na bala / Tiroteio", keywords: ["fps", "tiro"] }, 
      { label: "Na mão / Espada / Combos", keywords: ["luta", "ação", "hack", "rpg"] }, 
      { label: "Por turnos / Estratégico", keywords: ["estratégia", "rpg"] }, 
      { label: "Prefiro evitar combate", keywords: ["simulação", "puzzle", "corrida", "esporte"] } 
    ]
  },
  {
    text: "O objetivo final hoje é relaxar ou ter um desafio intenso?", 
    options: [
      { label: "Relaxar e construir coisas", keywords: ["simulação", "puzzle"] }, 
      { label: "Desafio intenso e suar a camisa", keywords: ["rpg", "luta", "fps", "souls"] }, 
      { label: "Tanto faz", keywords: ["aventura"] },
      { label: "Quero apenas passar o tempo", keywords: ["puzzle", "plataforma", "casual"] } 
    ]
  }
];

export default function QuizGame() {
  const [generos, setGeneros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [finished, setFinished] = useState(false);
  const [resultGenre, setResultGenre] = useState(null);

  useEffect(() => {
    const fetchGeneros = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3002/generos/todos");
        setGeneros(response.data.generos);
      } catch (err) {
        console.error("Erro ao buscar gêneros:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGeneros();
  }, []);

  const getIdsByKeywords = (keywords) => {
    if (!generos || generos.length === 0) return [];
  
    const matchingGenres = generos.filter(g => {
        const nomeGenero = g.nome.toLowerCase();
        return keywords.some(key => nomeGenero.includes(key.toLowerCase()));
    });

    return matchingGenres.map(g => g.id);
  };

  const handleAnswer = (keywords) => {
  
    const matchedIds = getIdsByKeywords(keywords);
    const newScores = { ...scores };
  
    if (matchedIds.length > 0) {
        matchedIds.forEach(id => {
          newScores[id] = (newScores[id] || 0) + 1;
        });
    }

    setScores(newScores);
  
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores) => {
  
    if (!generos || generos.length === 0) {
        setResultGenre("Nenhum gênero disponível no sistema.");
        setFinished(true);
        return;
    }

    let bestId = null;
    let maxScore = -1;
  
    for (const [id, score] of Object.entries(finalScores)) {
      if (score > maxScore) {
        maxScore = score;
        bestId = id;
      }
    }
  
    if (bestId) {
      const winnerId = Number(bestId);
    
      const found = generos.find(g => g.id === winnerId);
      
      if (found) {
        setResultGenre(found.nome);
      } else {
        
        setResultGenre(generos[0].nome);
      }
    } else {
      const randomGenre = generos[Math.floor(Math.random() * generos.length)];
      setResultGenre(randomGenre ? randomGenre.nome : "Jogos Diversos");
    }
    
    setFinished(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({});
    setFinished(false);
    setResultGenre(null);
  };

  const renderContent = () => {
    if (loading) return <Box p={3} textAlign="center"><CircularProgress /></Box>;
  
    if (!loading && generos.length === 0) {
      return (
        <Box p={3} textAlign="center">
          <Typography variant="body1" color="error">
            Não foi possível carregar os gêneros do banco de dados.
          </Typography>
        </Box>
      )
    }

    if (finished) {
      return (
        <Box textAlign="center" p={2}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>Resultado</Typography>
          <Typography variant="body1">Sua vibe de hoje combina com:</Typography>
          <Box 
            sx={{ 
                my: 3, 
                p: 2, 
                bgcolor: 'primary.light', 
                color: 'white', 
                borderRadius: 2,
                boxShadow: 3
            }}
          >
              <Typography variant="h3" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                {resultGenre}
              </Typography>
          </Box>
          <Button variant="contained" color="secondary" onClick={resetQuiz} fullWidth>
            Jogar Novamente
          </Button>
        </Box>
      );
    }

    const question = questionsData[currentQuestion];

    return (
      <Box p={1} sx={{ minWidth: '300px' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
             <Typography variant="caption" color="textSecondary">
                PERGUNTA {currentQuestion + 1} / {questionsData.length}
             </Typography>
        </Stack>
        
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 500 }}>
          {question.text}
        </Typography>
        
        <Stack spacing={1.5}>
          {question.options.map((option, index) => (
            <Button 
              key={index} 
              variant="outlined" 
              fullWidth 
              size="large"
            
              onClick={() => handleAnswer(option.keywords)}
              sx={{ 
                  justifyContent: "flex-start", 
                  textAlign: "left",
                  py: 1.5,
                  borderColor: 'primary.main',
                  '&:hover': {
                      bgcolor: 'primary.50',
                      borderColor: 'primary.dark'
                  }
              }}
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
        <Button variant="contained" color="warning" size="large" sx={{ fontWeight: 'bold' }}>
            🎲 O que devo jogar hoje?
        </Button>
    }>
      {renderContent()}
    </PopUp>
  );
}