import { Container, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" component="h1">
        Weather Forecast
      </Typography>
    </Container>
  );
};

export default Header;
