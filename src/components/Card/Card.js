import React from "react";

const Card = ({product}) => {
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <h4>{product.price}$</h4>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div> 
    )
}

export default Card;