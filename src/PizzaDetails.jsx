import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

function PizzaDetails() {

    const { id } = useParams()

    const navigate = useNavigate()

    const [pizza, setPizza] = useState(null)
    useEffect(() => {
        axios
        .get(`http://localhost:3000/posts/${id}`)
        .then((resp) => {
            setPizza(resp.data)
        })
        .catch((err) =>{
            if (err.status = 404){
                navigate("/not-found")
            }
        })

    }, [])



    return (
        <div className="bg">
        <div className="container d-flex align-items-center justify-content-center">
            {pizza && (
            <div className="card text-center my-5">
                <img src={`http://localhost:3000/${pizza.immagini}`} className="card-img-top w-50 m-auto py-5" alt="..." />
                <div className="card-body">
                    <h5 className="card-title my-1">{pizza.titolo}</h5>
                    <p className="card-text my-5">{pizza.descrizione}</p>
                    <div className="tags my-5">
                        {pizza.tags.map((curTag) =>{
                            return(
                                <div className="singleTag mx-5">
                                    {curTag.toUpperCase()}
                                </div>
                            )
                        })}
                    </div>
                    <div className="btn btn-primary my-5" onClick={() =>{navigate(-1)}}>
                        Indietro
                    </div>
                </div>
            </div>)
}
        </div> 
        </div>
)

}

export default PizzaDetails