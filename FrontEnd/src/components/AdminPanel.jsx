import { useState, useEffect } from "react";
import axios from "axios";
import { 
  Box, Typography, Container, Paper, Grid, TextField, Button, 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Select, MenuItem, Tabs, Tab, FormControl, CircularProgress
} from "@mui/material";
import "./styles.css";

export default function AdminPanel() {
  const [tabValue, setTabValue] = useState(0);
  const [jogos, setJogos] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [plataformas, setPlataformas] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    generoId: "",
    plataformasId: [],
    tempo: "",
    imagem: ""
  });

  const API_URL = "http://localhost:3002";

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [resJogos, resGeneros, resPlataformas] = await Promise.all([
        axios.get(`${API_URL}/jogos/todos`),
        axios.get(`${API_URL}/generos/todos`),
        axios.get(`${API_URL}/plataformas/todos`)
      ]);

      setJogos(resJogos.data.jogos || resJogos.data);
      setGeneros(resGeneros.data.generos || resGeneros.data);
      setPlataformas(resPlataformas.data.plataformas || resPlataformas.data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      id: "",
      nome: "",
      generoId: "",
      plataformasId: [],
      tempo: "",
      imagem: ""
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectRow = (item) => {
    if (tabValue === 0) {
      setFormData({
        id: item.id,
        nome: item.nome,
        generoId: item.generoId,
        plataformasId: item.plataformasId || [],
        tempo: item.tempo,
        imagem: item.imagem
      });
    } else {
      setFormData({
        id: item.id,
        nome: item.nome
      });
    }
  };

  const getEndpoint = () => {
    if (tabValue === 0) return "jogos";
    if (tabValue === 1) return "generos";
    return "plataformas";
  };

  const getCreatePayload = () => {
    const basePayload = { id: formData.id, nome: formData.nome };
    
    if (tabValue === 0) {
      return {
        ...basePayload,
        generoId: Number(formData.generoId),
        plataformasId: formData.plataformasId,
        tempo: formData.tempo,
        imagem: formData.imagem
      };
    }
    return basePayload;
  };

  const handleCreate = async () => {
    const endpoint = getEndpoint();
    const payload = getCreatePayload();

    try {
      const response = await axios.post(`${API_URL}/${endpoint}`, payload);
      
      if (response.data) {
        await fetchAllData();
        resetForm();
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao criar registro. Verifique o console.");
    }
  };

  const handleEdit = async () => {
    if (!formData.id) return alert("Selecione um item na tabela para editar.");
    
    const endpoint = getEndpoint();
    
    let originalItem = null;
    if (tabValue === 0) originalItem = jogos.find(j => j.id == formData.id);
    else if (tabValue === 1) originalItem = generos.find(g => g.id == formData.id);
    else originalItem = plataformas.find(p => p.id == formData.id);

    if (!originalItem) return;

    let payload = {};

    if (tabValue === 0) {
      payload = {
        id: formData.id !== "" ? formData.id : originalItem.id,
        nome: formData.nome !== "" ? formData.nome : originalItem.nome,
        generoId: formData.generoId ? Number(formData.generoId) : originalItem.generoId,
        plataformasId: (formData.plataformasId && formData.plataformasId.length > 0) 
          ? formData.plataformasId 
          : originalItem.plataformasId,
        tempo: formData.tempo !== "" ? formData.tempo : originalItem.tempo,
        imagem: formData.imagem !== "" ? formData.imagem : originalItem.imagem
      };
    } else {
      payload = {
        id: formData.id !== "" ? formData.id : originalItem.id,
        nome: formData.nome !== "" ? formData.nome : originalItem.nome
      };
    }

    try {
      const response = await axios.put(`${API_URL}/${endpoint}/${formData.id}`, payload);

      if (response.data) {
        await fetchAllData();
        resetForm();
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao editar registro. Verifique o console.");
    }
  };

  const handleDelete = async () => {
    if (!formData.id) return alert("Selecione um item na tabela para excluir.");
    const endpoint = getEndpoint();

    try {
      const response = await axios.delete(`${API_URL}/${endpoint}/${formData.id}`);
      
      if (response.status === 200 || response.data) {
        await fetchAllData();
        resetForm();
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao excluir registro. Verifique o console.");
    }
  };

  const renderFormFields = () => {
    return (
      <>
        <div className="admin-form-row">
          <div className="admin-label-chip">ID</div>
          <TextField
            name="id"
            variant="outlined" 
            size="small" 
            value={formData.id} 
            onChange={handleInputChange}
            className="admin-input-field"
            placeholder="ID"
          />
        </div>

        <div className="admin-form-row">
          <div className="admin-label-chip">NOME</div>
          <TextField 
            name="nome"
            variant="outlined" 
            size="small" 
            value={formData.nome} 
            onChange={handleInputChange}
            className="admin-input-field"
            placeholder={tabValue === 0 ? "Nome do Jogo" : "Nome"}
          />
        </div>

        {tabValue === 0 && (
          <>
            <div className="admin-form-row">
              <div className="admin-label-chip">DURAÇÃO</div>
              <FormControl size="small" className="admin-input-field">
                <Select
                  name="tempo"
                  value={formData.tempo}
                  onChange={handleInputChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>Selecione a duração</MenuItem>
                  <MenuItem value="curto">Curto</MenuItem>
                  <MenuItem value="medio">Médio</MenuItem>
                  <MenuItem value="longo">Longo</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="admin-form-row">
              <div className="admin-label-chip">GÊNERO</div>
              <FormControl size="small" className="admin-input-field">
                <Select
                  name="generoId"
                  value={formData.generoId}
                  onChange={handleInputChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>Selecione o gênero</MenuItem>
                  {generos.map(g => (
                    <MenuItem key={g.id} value={g.id}>{g.nome}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="admin-form-row">
              <div className="admin-label-chip">PLATAFORMA</div>
              <FormControl size="small" className="admin-input-field">
                <Select
                  name="plataformasId"
                  multiple
                  value={formData.plataformasId}
                  onChange={handleInputChange}
                  renderValue={(selected) => {
                    if (selected.length === 0) return <em>Selecione...</em>;
                    return selected.map(id => plataformas.find(p => p.id === id)?.nome).join(', ');
                  }}
                >
                  {plataformas.map(p => (
                    <MenuItem key={p.id} value={p.id}>{p.nome}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="admin-form-row">
              <div className="admin-label-chip">IMAGEM</div>
              <TextField 
                name="imagem"
                variant="outlined" 
                size="small" 
                value={formData.imagem} 
                onChange={handleInputChange} 
                className="admin-input-field"
                placeholder="URL da imagem"
              />
            </div>
          </>
        )}
      </>
    );
  };

  const renderTable = () => {
    let headers = [];
    let data = [];

    if (tabValue === 0) {
      headers = ["ID", "Nome do Jogo", "Duração", "Gênero", "Plataformas"];
      data = jogos;
    } else {
      headers = ["ID", "Nome"];
      data = tabValue === 1 ? generos : plataformas;
    }

    return (
      <TableContainer className="admin-table-container">
        <Table size="small">
          <TableHead className="admin-table-head">
            <TableRow>
              {headers.map((h, i) => (
                <TableCell key={i} className="admin-table-header-cell">{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              const isSelected = row.id === formData.id;
              return (
                <TableRow 
                  key={row.id} 
                  onClick={() => handleSelectRow(row)}
                  className={`admin-table-row ${isSelected ? 'admin-table-row-selected' : ''}`}
                >
                  <TableCell className="admin-table-cell">{row.id}</TableCell>
                  <TableCell className="admin-table-cell">{row.nome}</TableCell>
                  
                  {tabValue === 0 && (
                    <>
                      <TableCell className="admin-table-cell">{row.tempo}</TableCell>
                      <TableCell className="admin-table-cell">
                        {generos.find(g => g.id === row.generoId)?.nome || row.generoId}
                      </TableCell>
                      <TableCell className="admin-table-cell">
                        {row.plataformasId?.map(pid => 
                           plataformas.find(p => p.id === pid)?.nome
                        ).join(', ')}
                      </TableCell>
                    </>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Container maxWidth="lg" className="admin-container">
      
      <Box className="admin-header-wrapper">
        <Box className="admin-header-pill">
          <Typography className="admin-header-text">Painel do Administrador</Typography>
        </Box>
      </Box>

      <Paper elevation={0} className="admin-paper">
        
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          className="admin-tabs"
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: '#E65100' } }}
        >
          <Tab label="Jogos" className={tabValue === 0 ? "admin-tab-selected" : ""} />
          <Tab label="Gêneros" className={tabValue === 1 ? "admin-tab-selected" : ""} />
          <Tab label="Plataformas" className={tabValue === 2 ? "admin-tab-selected" : ""} />
        </Tabs>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 8 }}>
            <CircularProgress size={60} sx={{ color: '#E65100' }} />
          </Box>
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Box sx={{ pr: { md: 4 } }}>
                {renderFormFields()}
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box className="admin-actions-container">              
                <Button onClick={handleCreate} className="admin-action-btn btn-create">
                  CRIAR
                </Button>
                <Button onClick={handleEdit} className="admin-action-btn btn-edit">
                  EDITAR
                </Button>
                <Button onClick={handleDelete} className="admin-action-btn btn-delete">
                  EXCLUIR
                </Button>
                <Button onClick={resetForm} className="admin-action-btn btn-clear">
                  LIMPAR SELEÇÃO
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12}>
              {renderTable()}
            </Grid>
          </Grid>
        )}

      </Paper>
    </Container>
  );
}