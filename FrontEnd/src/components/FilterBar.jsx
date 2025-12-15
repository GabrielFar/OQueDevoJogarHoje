import { useState, useEffect } from "react";
import { Stack, Button, TextField, InputAdornment, Box, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import PopUp from "./Popup";
import "./styles.css";

export default function FilterBar({ currentFilters, onFilterChange }) {
  const [generos, setGeneros] = useState([]);
  const [plataformas, setPlataformas] = useState([]);
  
  const [tempGenero, setTempGenero] = useState("");
  const [tempPlataforma, setTempPlataforma] = useState("");
  const [tempDuracao, setTempDuracao] = useState("");

  useEffect(() => {
    const fetchFiltros = async () => {
      try {
        const [resGeneros, resPlataformas] = await Promise.all([
          axios.get("http://localhost:3002/generos/todos"),
          axios.get("http://localhost:3002/plataformas/todos")
        ]);
        
        setGeneros(resGeneros.data.generos || resGeneros.data);
        setPlataformas(resPlataformas.data.plataformas || resPlataformas.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFiltros();
  }, []);

  const handleApplyFilters = () => {
    onFilterChange({
      genre: tempGenero,
      platform: tempPlataforma,
      duration: tempDuracao
    });
  };

  const handleSearchChange = (event) => {
    onFilterChange({ search: event.target.value });
  };

  return (
    <Box className="filter-bar-container">
      <Stack 
        direction={{ xs: 'column-reverse', sm: 'row' }} 
        justifyContent="space-between" 
        alignItems="center" 
        spacing={2} 
      >
        <PopUp 
          trigger={
            <Button 
              variant="contained" 
              fullWidth={false}
              className="filter-button"
            >
              Filtros
            </Button>
          }
        >
          <Box className="filter-popup-content">
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
              Filtrar Jogos
            </Typography>

            <FormControl fullWidth size="small">
              <InputLabel>Gênero</InputLabel>
              <Select
                value={tempGenero}
                label="Gênero"
                onChange={(e) => setTempGenero(e.target.value)}
              >
                <MenuItem value=""><em>Todos</em></MenuItem>
                {generos.map((genero) => (
                  <MenuItem key={genero.id} value={genero.id}>
                    {genero.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Plataforma</InputLabel>
              <Select
                value={tempPlataforma}
                label="Plataforma"
                onChange={(e) => setTempPlataforma(e.target.value)}
              >
                <MenuItem value=""><em>Todas</em></MenuItem>
                {plataformas.map((plataforma) => (
                  <MenuItem key={plataforma.id} value={plataforma.id}>
                    {plataforma.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Duração</InputLabel>
              <Select
                value={tempDuracao}
                label="Duração"
                onChange={(e) => setTempDuracao(e.target.value)}
              >
                <MenuItem value=""><em>Qualquer</em></MenuItem>
                <MenuItem value="Curto">Curto</MenuItem>
                <MenuItem value="Médio">Médio</MenuItem>
                <MenuItem value="Longo">Longo</MenuItem>
              </Select>
            </FormControl>

            <Button 
              variant="contained" 
              fullWidth 
              onClick={handleApplyFilters}
              sx={{ mt: 1 }}
            >
              Aplicar
            </Button>
          </Box>
        </PopUp>

        <TextField
          placeholder="Pesquise aqui"
          variant="outlined"
          size="small"
          fullWidth
          className="filter-textfield"
          value={currentFilters.search || ""}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Box>
  );
}