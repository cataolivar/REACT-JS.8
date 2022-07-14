import React from "react"
import "./Items.css"
import { Link } from "react-router-dom"

const Items = ({product}) => {
    const { name, price, img, description} = product

    return (
        <>
            <div className="divItems">
                <h3 className="h3Items">{name}</h3>
                <img className="img1" src={img} alt="img" />
                <p>{description}</p>
                <h4><span>${price}</span></h4>
                <Link  to={`/detail/${product.id}`} className="itemsButton">Ver mas</Link>
            </div>
        </>
    )
}

export default Items