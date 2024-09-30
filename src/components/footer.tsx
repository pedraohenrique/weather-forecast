import { Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Container>
      <Typography variant="body1" component="p">
        Weather App
      </Typography>
      <Typography variant="body2" component="p">
        by Pedro Corado
      </Typography>
    </Container>
  );
};

export default Footer;
