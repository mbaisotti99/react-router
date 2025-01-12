import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function PizzaDetails() {

    const { id } = useParams()

    const [pizza, setPizza] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`).then((resp) => {
            setPizza(resp.data)
        })

    }, [])

    return ( pizza && (
        <div className="card text-center">
            <img src={`http://localhost:3000/${pizza.immagini}`} className="card-img-top w-50 m-auto" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{pizza.titolo}</h5>
                <p className="card-text">{pizza.descrizione}</p>
            </div>
        </div>)
    )
}

export default PizzaDetails