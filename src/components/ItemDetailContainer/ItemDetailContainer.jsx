import { useEffect, useState } from "react"
import { datosCartas } from "../../helpers/pedirData"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"



export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)

        datosCartas()
            .then(r => {
                setItem( r.find(prod => prod.id === Number(itemId)) )
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}
