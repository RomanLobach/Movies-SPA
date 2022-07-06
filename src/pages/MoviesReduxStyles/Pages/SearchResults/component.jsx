import { connect } from "react-redux";
import { useEffect} from "react";
import { Link, useParams } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import {selectSearchedMovies} from '../../../../store/movies/selectors'
import {setSearch} from '../../../../store/movies/actions';

import { generateSearchUrl, generateImageUrl, convertDate, generateRaiteng } from '../../utils';

import './styles.scss'

const SearchResults = ({searchedMovies, setSearch}) => {
  const {query} = useParams();

  useEffect(() => {
    fetch(generateSearchUrl(query))
      .then(res => res.json())
      .then(data => setSearch(data.results))
  }, [query])

  return (
    <section className="search-results">
    <Container  maxWidth="lg">
      <Typography
        variant='h4'
        noWrap
        component="h2"
        sx={{
          mr: 2,
          mb: 3,
          pt: 5,
          display: 'flex',
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Search results
      </Typography>
      <Box>
        <Grid 
          container 
          alignItems="stretch" 
          spacing={2}
          direction="row"
        >
          {searchedMovies.map(({id, title, backdrop_path, release_date, vote_average}) => (
            <Grid item alignItems="stretch" xs={8} sm={5} md={4} lg={3}>
              <div className='search-results__card' key={id}>
                <Link to={`/details/${id}`}>
                  <img className='popular__img' src={generateImageUrl(backdrop_path)} alt={title}/>
                </Link>
                <span className='raiting'>
                  <Typography component="legend">Raiting</Typography>
                  <Rating name="read-only" value={generateRaiteng(vote_average)} readOnly />
                </span>
                <Link to={`/details/${id}`}>
                  <Typography gutterBottom variant="subtitle1" component="p">
                    {title}
                  </Typography>
                </Link>
                  <Typography variant="body2" color="text.secondary">
                    {convertDate(release_date)}
                  </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
    </section>
  )
}

const mapStateToProps = state => ({
  searchedMovies: selectSearchedMovies(state)
});

const mapDispatatchToProps = {
  setSearch
};

export default connect(mapStateToProps, mapDispatatchToProps)(SearchResults);

