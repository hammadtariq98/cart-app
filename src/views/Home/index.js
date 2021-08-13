import React, { useEffect } from 'react'
import ProductItem from 'component/ProductItem'
import "./home.scss"

function Home() {
    
    const [ productList, setProductList ] = React.useState([])
    const [ searchProductList, setSearchProductList ] = React.useState([])
    const [ total, setTotal ] = React.useState(0)

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/benirvingplt/products/products")
        .then( res => res.json())
        .then( res => setProductList(res))
    }, [])

    const handelTotal = (action,id) => {
        let price = productList.filter( product => product.id == id )
        price = price[0].price
        if(action == "add") setTotal(parseFloat(total) + parseFloat(price))
        else if(total > 0) setTotal(parseFloat(total) - parseFloat(price))
    }

    const handelRemove = (value,id) => {
        const deletedProduct = productList.filter( product => product.id == id )
        const detectedPrice = deletedProduct[0].price * value
        setTotal(total - detectedPrice)
        let updateProductList = productList.filter( product => product.id != id )
        setProductList(updateProductList)
    } 

    const onChange = (e) => {
        console.log(e.target.value)
        let updateProductList = productList.filter( product => product.colour == e.target.value )
        setSearchProductList(updateProductList)
    }

    return (
        <>
        <div className="home">
            <div className="container">
                <div className="product-filter">
                    <select onChange={(e) => onChange(e)} className="select">
                        <option value="">Select Color</option>
                        <option value="Red">Red</option>
                        <option value="Black">Black</option>
                        <option value="Stone">Stone</option>
                    </select>
                </div>
                <div className="product-list">
                    {searchProductList.length > 0 ? 
                        searchProductList.map( product => <ProductItem product={product} handelTotal={handelTotal} handelRemove={handelRemove} /> )
                        :
                        productList.map( product => <ProductItem product={product} handelTotal={handelTotal} handelRemove={handelRemove} /> 
                    )}
                    <span className="total">Total: <strong>{parseFloat(total).toFixed(2)}</strong></span>
                </div>
            </div>
        </div>
        </>
)
}


export default Home