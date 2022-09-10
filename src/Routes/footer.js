import React from 'react';
import { Link } from "react-router-dom";
import homePic from '../homepic.png'


function Footer(){
    return (
        <div>
            <div className="footContainer">
                <ul className="footList">
                    <a target='_blank' className="footLink" href='/'>
                    <li className="navLink">Source</li>
                    </a>
                    <a target='_blank' className="footLink" href='https://docs.google.com/presentation/d/1TZVBjoIKdOkPGaExd-aBSWkpVAzE91_FfpmzE4UPYQM/edit?usp=sharing'>
                    <li className="navLink">Deck</li>
                    </a>
                    <a target='_blank' className="footLink" href='https://www.youtube.com/watch?v=6Tzi4pKklkA'>
                    <li className="navLink">Video</li>
                    </a>


                </ul>

            </div>

        </div>
    )
}

export default Footer;