import react from "react";
import { Link } from "react-router-dom";
import '../App.css'

function Nav(){
    return(
        <div>
            <div className="navContainer">
                <ul className="navList">
                    <Link className="navLink" to='/'>
                    <li className="navLink">Home</li>
                    </Link>
                    <Link className="navLink" to='/about'>
                    <li className="navLink">About</li>
                    </Link>
                    <Link className="navLink" to='/team'>
                    <li className="navLink">The Team</li>
                    </Link>


                </ul>

            </div>

        </div>
    )
}

export default Nav;