import { Stack, Button, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.css";

export default function FilterBar() {
  return (
    <Box className="filter-bar-container">
      <Stack 
        direction={{ xs: 'column-reverse', sm: 'row' }} 
        justifyContent="space-between" 
        alignItems="center" 
        spacing={2} 
      >
        <Button 
          variant="contained" 
          fullWidth={false}
          className="filter-button"
        >
          Filtros
        </Button>

        <TextField
          placeholder="Pesquise aqui"
          variant="outlined"
          size="small"
          fullWidth
          className="filter-textfield"
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