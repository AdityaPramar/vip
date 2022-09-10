import React from "react";
import { Link } from "react-router-dom";
import tanmay from '../tanmay.jpg'
import azzam from '../azzam.jpg'
import ap from '../ap.jpg'
import ayam from '../ayam.jpg'
import '../App.css';


function Team(){
    return(
    <div className="Contact">
        <div className="contactContainer">
        <div className="RowContact">
            <div className="CardContact">
            <a target='_blank' href="https://www.linkedin.com/in/tanmay-tripathi-8426aa211/">
            <img className="card-body-pin"src={tanmay} />
            </a>
            </div>

            <div className="CardContact">
            <a target='_blank' href="https://www.linkedin.com/in/azzam-husain-69b759214/">
            <img className="card-body-ig" src={azzam} />
            </a>
            </div>

            <div className="CardContact">
            <a target='_blank' href="https://www.linkedin.com/in/adityapramar15/">
            <img className="card-body-mail" src={ap}/>
            </a>
            </div>


            <div className="CardContact">
            <a target='_blank' href="https://www.linkedin.com/in/ayam-bhura-44645a22b/">
            <img className="card-body-mail" src={ayam}/>
            </a>
            </div>
        </div>
        </div>
    </div>
    )}

export default Team;