import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import MovieFlix from './pages/MovieFlix'
import SignUp from './pages/SignUp'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TvShows from './pages/TvShow'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/' element={<MovieFlix />} />
        <Route exact path='/movies' element={<Movies />} />
        <Route exact path='/tv' element={<TvShows />} />
        <Route exact path='/player' element={<Player />} />
      </Routes>
    </BrowserRouter>
  )
}
