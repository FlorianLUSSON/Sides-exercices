import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./poke.css";

const Poke = (props) => {
    const [imgPoke, setImgPoke] = useState([]);

    useEffect(() => {
        getAllImages(props.info.nomPokeEn);
    }, [props.info.nomPokeEn]);

    const getAllImages = async (nomAnglais) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomAnglais}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const allImg = await response.json();
        setImgPoke(allImg.sprites.other["official-artwork"].front_default);
    };

    return (
        <div className="card">
            <div className="card-content">
                <div className="name-pic">
                    {imgPoke ? (
                        <img src={imgPoke} alt="image Poke" />
                    ) : (
                        <p>Chargement en cours...</p>
                    )}
                    <p className="Name">{props.info.nomPokeFr}</p>
                </div>
                <p className="Nature">Nature : {props.info.Nature}</p>
                <p className="Talent">Talent : {props.info.Talent}</p>
                <p className="Breedeur">Breedeur(s) : {props.info.Breedeurs}</p>
                <Link to="" className="buy-button">
                    Commander
                </Link>
            </div>
        </div>
    );
};

export default Poke;
