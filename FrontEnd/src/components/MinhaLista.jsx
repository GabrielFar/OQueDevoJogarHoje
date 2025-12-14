import { Box, Typography, Container, Paper, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function MinhaLista() {
  const games = [1, 2, 3, 4];

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
            Minha Lista
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
          minHeight: '400px'
        }}
      >
        <Grid container spacing={4} alignItems="center">

          {games.map((item, index) => (
            <Grid item key={index} xs={6} sm={4} md={2.4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Box 
                  sx={{ 
                    width: '100%', 
                    aspectRatio: '3/4',
                    bgcolor: '#cfcfcf',
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }} 
                />
                <Typography variant="caption" align="center" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                  Jo tal de tal que tal {index + 1}
                </Typography>
              </Box>
            </Grid>
          ))}

          <Grid item xs={6} sm={4} md={2.4}>
            <Box 
              sx={{ 
                height: '100%', 
                minHeight: '150px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}
            >
              <IconButton 
                sx={{ 
                  bgcolor: 'black', 
                  color: 'white', 
                  width: 80, 
                  height: 80,
                  '&:hover': { bgcolor: '#333' }
                }}
              >
                <AddIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          </Grid>

        </Grid>
      </Paper>
    </Container>
  );
}