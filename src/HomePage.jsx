import MainNav from "./MainNav"
import { NavLink } from "react-router-dom"


function HomePage() {
    return (
        <>
            <MainNav />
            <main className="home">
                <div className="container">
                    <h1>MY HOME</h1>
                </div>
                <div className="home-urls">
                    <div className="home-link">
                        <NavLink to={"/contacts"}>CONTACTS</NavLink>
                    </div>
                    <div className="home-link">
                        <NavLink to={"/about"}>ABOUT</NavLink>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage