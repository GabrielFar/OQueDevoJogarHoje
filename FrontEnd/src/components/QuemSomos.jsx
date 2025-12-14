import { Box, Typography, Container, Grid, Paper } from "@mui/material";

export default function QuemSomos() {
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
            Quem Somos?
          </Typography>
        </Box>
      </Box>

      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 4, md: 8 }, 
          pt: { xs: 6, md: 8 },
          borderRadius: 8, 
          bgcolor: '#F5F5F5',
          minHeight: '400px'
        }}
      >
        <Grid container spacing={6} alignItems="center">

          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>

              <Box sx={{ textAlign: 'center', width: 150 }}>
                <Box 
                  sx={{ 
                    width: '100%', 
                    height: 150, 
                    bgcolor: '#cfcfcf',
                    borderRadius: 4, 
                    mb: 1.5
                  }} 
                />
                <Typography variant="caption" display="block" color="text.secondary">
                  Rhaiane Alena Allebrandt
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: '900', textTransform: 'uppercase' }}>
                  DEV FRONT
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center', width: 150 }}>
                <Box 
                  sx={{ 
                    width: '100%', 
                    height: 150, 
                    bgcolor: '#cfcfcf',
                    borderRadius: 4, 
                    mb: 1.5
                  }} 
                />
                <Typography variant="caption" display="block" color="text.secondary">
                  Gabriel Bochi Farina
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: '900', textTransform: 'uppercase' }}>
                  DEV BACK
                </Typography>
              </Box>

            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 3, 
                fontFamily: 'sans-serif', //gab, vou trocar pela fonte Condensed talvez depois
                color: 'black'
              }}
            >
              Nosso Objetivo:
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.6, 
                fontSize: '1.1rem',
                color: '#333',
                textAlign: 'justify'
              }}
            >
              Sabemos que as vezes as pessoas estão ocupadas e cansadas e apenas querem encontrar algo que possa anima-las e diverti-las em um momento aborrecente, e que geralmente, nesse momentos, procurar algo para se divertir, torna-se uma tarefa árdua, tediosa e que leva tempo. Por isso criamos esse projeto, nosso objetivo é facilitar a busca para você, de forma que seja menos entediante e que leva menos tempo para você dar um 'Play', assim, podendo passar mais tempo com jogos que vão te agradar, em vez de buscar por horas algo que você nem sabe se é bom.
            </Typography>
          </Grid>

        </Grid>
      </Paper>
    </Container>
  );
}