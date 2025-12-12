import { Stack, Button, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function FilterBar() {
  return (
    <Box sx={{ px: 2, my: 4 }}>
      <Stack 
        direction={{ xs: 'column-reverse', sm: 'row' }} 
        justifyContent="space-between" 
        alignItems="center" 
        spacing={2} 
      >
        <Button 
          variant="contained" 
          fullWidth={false}
          sx={{ 
            borderRadius: 20, 
            bgcolor: '#A1887F', 
            px: 4,
            width: { xs: '100%', sm: 'auto' }, 
            '&:hover': { bgcolor: '#8D6E63' }
          }}
        >
          Filtros
        </Button>

        <TextField
          placeholder="Pesquise aqui"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ 
            maxWidth: { xs: '100%', sm: '300px' },
            '& .MuiOutlinedInput-root': { borderRadius: 20 }
          }}
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