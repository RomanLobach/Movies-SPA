import { Link } from "react-router-dom";

import Container from '@mui/material/Container';

import './styles.scss'

const Error = () => {
  return (
    <Container maxWidth="lg">
      <div className="error">
        <h2>Oops! We can't find the page you're looking for</h2>
        <div>You can run <Link to={`/`}>Home</Link></div>
      </div>
    </Container>
  )
}

export default Error;