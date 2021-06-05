import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PokemonList() {
    const [ pokemonList, setList ] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => {
            setList(res.data.results)
        })
    }, [])
    return (
        <div>
            {pokemonList.map((ele) => {
                 return (
                     <Link key={ele.url} to={`/pokemon/${ele.name}`}>
                         <h2>{ele.name}</h2>
                     </Link>
                 )
            })}
        </div>
    )
}
