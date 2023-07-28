import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { styled } from 'styled-components'
import pathan from '../assets/pathan.mp4'
import { useNavigate } from 'react-router-dom'
export default function Player() {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="player">
                <div className="back">
                    <BsArrowLeft onClick={() => navigate(-1)} />
                </div>
                <video src={pathan} autoPlay loop controls ></video>

            </div>
        </Container>
    )
}


const Container = styled.div`
    .player{
        width:100vw;
        height:100vh;
        .back{
            position:absolute;
            padding:1rem;
            z-index:1;
            svg{
                font-size:3rem;
                curson:pointer;
            }
        }
        video{
            height:100%;
            width:100%;
            object-fit:cover;
        }
    }
`;