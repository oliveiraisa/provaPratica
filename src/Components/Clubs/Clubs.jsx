import { useState, useEffect } from "react";
import "./Clubs.css"
export default function Clubs() {
    const [apiResponse, setApiResponse] = useState([]);
    const [err, setErr] = useState(null);

    useEffect(() => {
        fetch(`https://api.cartola.globo.com/clubes`)
            .then(response => response.json())
            .then(data => {
                setApiResponse(Object.values(data) || [])
            })

            .catch(err => {
                console.log(err)
                setErr(err)
            })

            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="clubsList">
            {err !== null?
                <div className="error">
                    <p>Houve um erro ao buscar os clubes. Tente novamente mais tarde</p>
                </div>:

                <ul>
                {apiResponse.map((club) => (
                    <li>
                        <div className="club">
                            <img src={club.escudos['60x60']} />
                            <div>
                                <p>{club.nome}</p>
                                <p>{club.apelido}</p>
                            </div>
                        </div>
                    </li>
                 ))}
            </ul>}
     </div>
);}