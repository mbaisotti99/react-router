import { NavLink } from "react-router-dom"


function MainNav() {
    return(
    <nav>
        <ul>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/about">ABOUT</NavLink></li>
            <li><NavLink to="/contacts">CONTACTS</NavLink></li>
        </ul>
    </nav>
    )
}

export default MainNav