import { Link } from "react-router-dom";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import './styles.scss';

const FooterContent = () => {
  return (
    <footer className="footer">
      <Container  maxWidth="lg">
        <div className="footer__wraper">
          <Typography
            variant='h4'
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <Link to={`/`}>mockLogo</Link>
          </Typography>
          <div className="footer__content">mock footer</div>
        </div>
      </Container>
    </footer>
  )
}

export default FooterContent