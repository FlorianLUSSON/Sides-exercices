import React from "react";
import './header.css';
import logo from "./LogoVille.png";
import { Link, useNavigate } from "react-router-dom";
import { HashLink as Lien } from 'react-router-hash-link';



const Nav = () => {
    return (
        <div className="header">
            <Lien smooth to="/" className="Logo"><img src={logo} alt="Logo Vatnsborg" /></Lien>
            <div className="Menu">
                <Lien smooth to="/Presentation" className="nav">Qui sommes nous?</Lien>
                <Lien smooth to="/Colisee" className="nav">Le colisée</Lien>
                <Lien smooth to="/Pension" className="nav">Pension Pokémons</Lien>
            </div>
            <Link to="https://discord.gg/MranBKcR9y" className="Buttons">
                <Link to="https://discord.gg/MranBKcR9y" className="discord">Discord</Link>
            </Link>
        </div>
    );
}

export default Nav;