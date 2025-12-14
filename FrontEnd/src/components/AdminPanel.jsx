import { Box, Typography, Container, Paper, Grid } from "@mui/material";
import controllerImg from '/Logo.png';

export default function AdminPanel() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>

      <Box sx={{ display: 'flex', mb: -2.5, position: 'relative', zIndex: 1 }}>
        <Box 
          sx={{ 
            bgcolor: '#FF7043', 
            borderRadius: 20, 
            px: 4, 
            py: 1.5, 
            color: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'none' }}>
            Painel do Administrador
          </Typography>
        </Box>
      </Box>

      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 4, md: 6 }, 
          pt: { xs: 6, md: 8 }, 
          borderRadius: 8, 
          bgcolor: '#F5F5F5',
          minHeight: '600px'
        }}
      >
        <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
                 <Typography variant="h6" color="text.secondary">
                    Área do Formulário (Em construção...)
                 </Typography>
            </Grid>

            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <Box sx={{ 
                    width: 200, 
                    height: 300, 
                    bgcolor: '#e0e0e0', 
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    p: 2
                }}>
                     <Typography variant="caption">Imagem do Controle e Botões de Ação aqui</Typography>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box sx={{ mt: 4, p: 4, border: '2px dashed #ccc', borderRadius: 2, textAlign: 'center' }}>
                    <Typography>Tabela de Jogos (Em construção...)</Typography>
                </Box>
            </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}