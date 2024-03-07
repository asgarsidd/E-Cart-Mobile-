import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = ({cart,setCart}) => {
    const { id } = useParams()

    const [product, setproduct] = useState({})
    const [relatedProducts, setrelatedProducts] = useState([])
    useEffect(() => {
        const filterProduct = items.filter((product) => product.id == id)
          // Here we are storing device wherever we click their data
        setproduct(filterProduct[0])

        const relatedProduct = items.filter((products) => products.category === product.category)
        //  console.log(relatedProduct);
        setrelatedProducts(relatedProduct); // Here similar category data storing
    }, [id, product.category])

    const addToCart = (id, price, title, description, imgSrc) => {
        const obj = {
            id, price, title, description, imgSrc
        }
        setCart([...cart, obj])
        console.log("cart element = ", cart)
        toast.success('Item added on Cart ', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
    }

    return (
        <>
        <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="container con">
                <div className="img">
                    <img src={product.imgSrc} alt="" />
                </div>
                <div className="text-center">
                    <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-3">
                        {product.price} ₹
                    </button>
                    <button onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                                                    className="btn btn-warning">Add to Cart</button>
                </div>
            </div>
            <h1 className='text-center'>Related Products</h1>
            <Product cart={cart} setCart={setCart} items={relatedProducts} />
        </>
    )
}

export default ProductDetail