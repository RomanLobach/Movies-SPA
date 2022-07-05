import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';

import {selectMovieDetails} from '../../../../store/movies/selectors'
import {setDetails} from '../../../../store/movies/actions';

import { generateUrl, generateImageUrl, convertDate, generateRaiteng } from '../../utils';

import './styles.scss'

const Details = ({movieDetails, setDetails}) => {
  const { movieId } = useParams();
  
  useEffect( () => {
    fetch(generateUrl(movieId))
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [])

  return movieDetails && (
    <div className="details"> 
      <Container  maxWidth="lg">
        <section className="details__section">
          <div className="details__img">
            <img src={generateImageUrl(movieDetails.poster_path)} alt={movieDetails.original_title} height='400px'/>
          </div>
          <div className="details__content">
            <Typography variant="h4" component="h2" sx={{mb: '10px'}}>{movieDetails.original_title}</Typography>
            <Typography variant="body2" component="p" sx={{mb: '10px'}}>{convertDate(movieDetails.release_date)}</Typography>
            <span className="details__raiting">
              <Typography component="p">Raiting: </Typography>
              <Rating name="read-only" value={generateRaiteng(movieDetails.vote_average)} readOnly />
            </span>
            <Typography variant="h5" component="p" sx={{mb: '5px'}}>Overview</Typography>
            <Typography variant="body1" component="p">
              {movieDetails.overview}
            </Typography>
            <Typography variant="body1" component="span" sx={{mt: 'auto'}}>
              <Link to="/">Go Home</Link>
            </Typography>
          </div>
        </section>
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({
  movieDetails: selectMovieDetails(state)
});

const mapDispatatchToProps = {
  setDetails
};

export default connect(mapStateToProps, mapDispatatchToProps)(Details);