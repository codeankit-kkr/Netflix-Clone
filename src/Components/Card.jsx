import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'
import video from "../assets/pathan.mp4"
import { IoPlayCircleSharp } from "react-icons/io5"
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri"
import { BsCheck } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiChevronDown } from "react-icons/bi";
import { useEffect } from 'react';
import { API_KEY } from '../utils/constants';
import ReactPlayer from 'react-player';
export default function Card({ movieData, isLiked = false }) {
  const [videoid, setVideoid] = useState(null);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieData.id}/videos?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(response => setVideoid(response.results[0].key))
      .catch(err => console.error(err));
  }, [])

  const navigate = useNavigate();
  const [ishovered, setIshovered] = useState(false);
  return (
    <>
      <Container onMouseEnter={() => setIshovered(true)} onMouseLeave={() => setIshovered(false)}>
        <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie" />
        {ishovered && (
          <div className="hover">
            <div className="image-video-container">
              <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie" onClick={() => navigate("/player")} />
              {/* <video src={video} autoPlay controls loop onClick={() => navigate("/player")}></video> */}
              <ReactPlayer className="reactpl"
                url={`https://www.youtube.com/embed/${videoid}`}
                playing={true}
                width="100%"
                height="150px"
              />
              {/* <iframe src={} title="video/" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoPlay></iframe> */}
            </div>
            <div className="info-container flex column">
              <h3 className='name' onClick={() => navigate("/player")}>{movieData.name}</h3>
              <div className="icons flex j-between">
                <div className="controls flex">
                  <IoPlayCircleSharp title='play' onClick={() => navigate("/player")} />
                  <RiThumbUpFill title='like' />
                  <RiThumbDownFill title='dislike' />
                  {
                    isLiked ? (<BsCheck title='Remove from list' />) : (<AiOutlinePlus title='Add to my list' />)
                  }
                </div>
                <div className="info">
                  <BiChevronDown title='More Info' />
                </div>
              </div>
              <div className="genres flex">
                <ul className='flex'>
                  {movieData.genres.map((genre) => {
                    return <li key={genre}>{genre}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  )
}


const Container = styled.div`
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-container {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      .reactpl {
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;