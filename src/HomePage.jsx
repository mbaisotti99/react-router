import { useEffect, useState } from "react"
import MainNav from "./MainNav"
import { NavLink } from "react-router-dom"
import axios from "axios"


function HomePage() {
    const [newArr, setArr] = useState([])


    const getPosts = () => {
        axios.get("http://localhost:3000/posts").then((resp) => {
            console.log(resp.data);
            setArr(resp.data)

        })
    }


    useEffect(getPosts, [])

    return (
        <>
            <MainNav />
            <main className="home">
                <div className="container">
                    <h1>Le mie pizze</h1>
                    {newArr.map((curPizza) => {

                        return (
                            <div className="card text-center">
                                <img src={`http://localhost:3000/${curPizza.immagini}`} className="card-img-top my-5 w-50 m-auto" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{curPizza.titolo}</h5>
                                    <p className="card-text">{curPizza.descrizione}</p>
                                    <div className="btn btn-primary">
                                        <NavLink to={`/pizza/${curPizza.id}`}>Dettagli</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default HomePage