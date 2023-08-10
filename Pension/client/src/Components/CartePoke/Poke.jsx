import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import "./poke.css";

const imageCache = {};

const Poke = (props) => {
    const [imgPoke, setImgPoke] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (imageCache[props.info.nomPokeEn]) {
            setImgPoke(imageCache[props.info.nomPokeEn]);
        } else {
            getAllImages(props.info.nomPokeEn);
        }
    }, [props.info.nomPokeEn]);

    const getAllImages = async (nomAnglais) => {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nomAnglais}`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }
        );
        const allImg = await response.json();
        const imgUrl = allImg.sprites.other["official-artwork"].front_default;
        imageCache[props.info.nomPokeEn] = imgUrl;
        setImgPoke(imgUrl);
    };

    const handleViewMore = () => {
        navigate(`/description-pokemon/${encodeURIComponent(props.info.nomPokeFr)}`, { state: { pokemonData: props.info } });
    };


    return (
        <div className="card">
            <div className="card-content">
                <div className="name-pic">
                    <p className="Name">{props.info.nomPokeFr}</p>
                    {imgPoke ? (
                        <img src={imgPoke} alt="image Poke" />
                    ) : (
                        <p>Chargement en cours...</p>
                    )}
                </div>
                <div className="breed">
                    <p className="Nature">Nature : {props.info.Nature}</p>
                    <p className="Talent">Talent : {props.info.Talent}</p>
                    <p className="Egg-Move">Egg-Moves : {props.info.Egg_moves}</p>
                    <p className="Breedeur">Breedeur(s) : {props.info.Breedeurs}</p>
                </div>
                <button className="buy-button" onClick={handleViewMore}>
                    Voir plus
                </button>
            </div>
        </div>
    );
};

export default Poke;
