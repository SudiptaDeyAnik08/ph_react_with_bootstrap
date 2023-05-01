import React from "react";
import Card from "../Card/Card";

const Card_Group = () => {

    const products  = [
        { 
            id:1,
            title:"MAC Pro",
            price:140000

        },
        { 
            id:2,
            title:"Apple Iphone",
            price:130000

        },
        { 
            id:3,
            title:"Apple Tab",
            price:40000

        }
    ]

    return (
        <div className="card-group">

            {
                products.map( res => <Card key={res.id} product = {res}></ Card>)
            }
           
            
        </div>
    );
}

export default Card_Group;