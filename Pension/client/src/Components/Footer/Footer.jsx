import React from "react";
import { Link, useNavigate } from "react-router-dom";
import kata from "./Splashart_Kata.png"
import "./footer.css";


const Footer = () => {
    return (
        <footer>
            <div className="menu">
                <div className="txt">
                    <p>Qui sommes nous?</p>
                    <p>Colisée</p>
                    <p>Pension</p>
                    <p>Discord</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
