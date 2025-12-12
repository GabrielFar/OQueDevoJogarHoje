import { Card, CardContent, CardMedia, Typography, Rating, Box } from "@mui/material";

export default function GameCard() {
  return (
    <Card elevation={0} sx={{ bgcolor: 'transparent', maxWidth: 200, margin: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
        <Rating value={5} readOnly size="small" sx={{ color: '#D84315' }} />
      </Box>
      <CardMedia
        component="div"
        sx={{
          height: 140,
          bgcolor: '#E0E0E0',
          borderRadius: 2,
          position: 'relative'
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            right: 0, 
            height: '30%', 
            background: 'linear-gradient(transparent, rgba(0,0,0,0.2))',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8
          }} 
        />
        <Box 
          sx={{
             width: '100%',
             height: '100%',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center'
          }}
        >
          <Box 
             component="svg" 
             viewBox="0 0 24 24" 
             sx={{ width: 40, height: 40, fill: '#fff' }}
          >
             <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
          </Box>
        </Box>
      </CardMedia>
      <CardContent sx={{ px: 0, textAlign: 'center' }}>
        <Typography variant="body2" color="text.primary">
          Jo tal de tal que tal
        </Typography>
      </CardContent>
    </Card>
  );
}