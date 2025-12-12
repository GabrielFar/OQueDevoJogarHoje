import { Box, Typography, Button } from "@mui/material";

export default function MagicSection() {
  return (
    <Box sx={{ 
      textAlign: 'center', 
      mb: 6, 
      mt: 2, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      px: 2
    }}>
      <Typography 
        variant="h6" 
        sx={{ 
          fontWeight: 'bold', 
          mb: 0.5, 
          color: '#000',
          fontSize: { xs: '1rem', md: '1.25rem' }
        }}
      >
        Recomendações:
      </Typography>

      <Typography 
        variant="h4" 
        color="primary" 
        sx={{ 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          mb: 2,
          fontSize: { xs: '1.5rem', md: '2.125rem' }
        }}
      >
        JOGO DO DIA!
      </Typography>

      <Button 
        variant="contained" 
        size="large"
        sx={{ 
          borderRadius: 8, 
          px: { xs: 3, md: 5 }, 
          py: 1.5,
          width: { xs: '100%', sm: 'auto' },
          textTransform: 'none',
          fontSize: { xs: '1rem', md: '1.1rem' },
          bgcolor: '#E65100',
          boxShadow: '0 4px 10px rgba(230, 81, 0, 0.3)',
          '&:hover': { bgcolor: '#BF360C' }
        }}
      >
        Clique e veja a mágica acontecer!
      </Button>
    </Box>
  );
}