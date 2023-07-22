import { AppBar, Typography, Toolbar } from "@mui/material";
import { Container } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5">Mortgage Calculator</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
