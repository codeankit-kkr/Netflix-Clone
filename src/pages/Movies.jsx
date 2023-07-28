import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import { styled } from 'styled-components';
import NotAvailable from '../Components/NotAvailable';
import SelectGenres from '../Components/SelectGenres';
import { API_KEY } from '../utils/constants';

export default function Movies() {
    const [isScrolled, setIsScrolled] = useState(false);
    const dispatch = useDispatch();
    const genresLoaded = useSelector((state) => state.movieflix.genresLoaded);
    const genres = useSelector((state) => state.movieflix.genres);
    const movies = useSelector((state) => state.movieflix.movies)
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getGenres())
    }, [])

    useEffect(() => {
        if (genresLoaded) dispatch(fetchMovies({ type: "movies" }));
    }, [genresLoaded]);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <>
            <Container>
                <div className="navbar">
                    <Navbar isScrolled={isScrolled} />
                </div>
                <div className="data">
                    <SelectGenres genres={genres} type="movie" />
                    {movies.length ? <Slider movies={movies} /> : <NotAvailable type="Movies" />}
                </div>
            </Container>
        </>
    )
}



const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;