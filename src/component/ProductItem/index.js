import React, { useState } from 'react'
import "./product-item.scss"

export default function ProductItem({ product, handelTotal, handelRemove }) {

    const [value, setValue] = useState(0)

    const handelQuantity = (action, id) => {
        if(action == "add") setValue(value + 1)
        else if(value > 0) setValue(value - 1)

        handelTotal(action, id)
    }

    const handelDelete = (id) => {
        handelRemove(value,id)
        setValue(0)
    }
    
    return (
        <div className="product">
            <figure className="product-img">
               <img src={product.img} />     
            </figure>
            <div className="product-content">
                <div className="about-product">
                    <h2 className="title">{product.name}</h2>
                    <span className="price">Price: {product.price}</span>
                </div>
                <div className="add-to">
                    <button className="btn" disabled={(value <= 0)} onClick={() => handelQuantity("sub",product.id)}>-</button>
                    <input className="quantity" value={value} type="number" />
                    <button className="btn" onClick={() => handelQuantity("add",product.id)}>+</button>
                    <button className="remove" onClick={() => handelDelete(product.id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}
