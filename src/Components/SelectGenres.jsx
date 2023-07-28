import React from 'react'
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components'
import { fetchDataByGenre } from '../store';

export default function SelectGenres({ genres, type }) {
    const dispatch = useDispatch();
    return (
        <>
            <Select className='flex' onChange={(e) => {
                return dispatch(fetchDataByGenre({ genre: e.target.value, type }));
            }}>
                {genres.map((genre) => {
                    return <option value={genre.id} key={genre.id}>{genre.name}</option>
                })}
            </Select>
        </>
    )
}

const Select = styled.select`
    margin-left:50px;
    font-size:1.2rem;
    cursor:pointer;
    height:2rem;
    background-color:rgba(0,0,0,0.4);
    color:white;
`;
