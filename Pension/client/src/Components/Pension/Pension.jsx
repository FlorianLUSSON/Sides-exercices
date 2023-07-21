import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"
import './pension.css';
import baner from "./coliseeProvisoire.png"
import Poke from "../CartePoke/Poke"

const Pension = () => {
    const [pokemon, setPokemon] = useState([]);
    const [poke, setPoke] = useState("")

    useEffect(() => {
        getAllPokemons();
    }, []);

    const getAllPokemons = async () => {
        const response = await fetch(`http://localhost:3000/list`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const allPokemons = await response.json();
        setPokemon(allPokemons);
    };


    return (
        <div className="Pension">
            <div>
                <img src={baner} alt="Baniere Pension" />
            </div>
            <div className="search-bar-container">
                <div className='input-container'>
                    <FaSearch id='Search-icon' />
                    <input type="text" placeholder='Rechercher un Pokemon...' className='recherche' onChange={(e) => setPoke(e.target.value)} />
                </div>
            </div>
            <div className="poke">
                {pokemon.filter(ShopPokemon => ShopPokemon.nomPokeFr.toLowerCase().includes(poke)).map(
                    (ShopPokemon) => (
                        <div className="poke-item">
                            <Poke info={ShopPokemon} />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Pension;
