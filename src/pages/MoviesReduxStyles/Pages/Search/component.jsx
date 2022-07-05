import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './styles.scss';

const Search = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    query: Yup.string().required('Required').min(3, 'Request is too short!')
  });

  const formik = useFormik({
    initialValues: {
      query: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate(`search/${values.query}`);
    },
  });

  return (
    <section className="search">
      <Container maxWidth="md">
        <Typography
          variant="h2"
          noWrap
          component="h1"
          sx={{
            pt: 7,
            color: 'white'
          }}
        >
          Welcome to Movies SPA
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="p"
          sx={{
            mb: 3,
            color: 'white'
          }}
        >
          Millions of movies, TV shows and people to discover. Explore now.
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <form className="search__form" onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              name="query"
              label="Search"
              variant="outlined"
              value={formik.values.query}
              onChange={formik.handleChange}
            />
            <Button color="primary" variant="contained" type="submit">
              Search
            </Button>
          </form>
        </Box>
      </Container>
    </section>
  )
}

export default Search;