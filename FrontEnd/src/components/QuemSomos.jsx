import { Box, Typography, Container, Grid, Paper } from "@mui/material";

export default function QuemSomos() {
  return (
    <Container maxWidth="lg" className="about-container">

      <Box className="about-title-wrapper">
        <Box className="about-title-pill">
          <Typography variant="h5" className="about-title-text">
            Quem Somos?
          </Typography>
        </Box>
      </Box>

      <Paper elevation={0} className="about-paper">
        <Grid container spacing={6} alignItems="center">

          <Grid item xs={12} md={5}>
            <Box className="dev-cards-container">

              <Box className="dev-card">
                <Box className="dev-image-placeholder" />
                <Typography variant="caption" display="block" color="text.secondary">
                  DEV
                </Typography>
                <Typography variant="h6" className="dev-name">
                  Rhaiane
                </Typography>
              </Box>

              <Box className="dev-card">
                <Box className="dev-image-placeholder" />
                <Typography variant="caption" display="block" color="text.secondary">
                  DEV
                </Typography>
                <Typography variant="h6" className="dev-name">
                  Gabriel
                </Typography>
              </Box>

            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography variant="h4" className="objective-title">
              Nosso Objetivo:
            </Typography>
            
            <Typography variant="body1" className="objective-text">
              Sabemos que as vezes as pessoas estão ocupadas e cansadas e apenas querem encontrar algo que possa anima-las e diverti-las em um momento aborrecente, e que geralmente, nesse momentos, procurar algo para se divertir, torna-se uma tarefa árdua, tediosa e que leva tempo. Por isso criamos esse projeto, nosso objetivo é facilitar a busca para você, de forma que seja menos entediante e que leva menos tempo para você dar um 'Play', assim, podendo passar mais tempo com jogos que vão te agradar, em vez de buscar por horas algo que você nem sabe se é bom.
            </Typography>
          </Grid>

        </Grid>
      </Paper>
    </Container>
  );
}