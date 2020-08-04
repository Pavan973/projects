import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Loader from '../Loader'
function Product(){
    const { id } = useParams()
    const url = `https://5f1028c600d4ab0016134834.mockapi.io/api/v1/products/${id}`
   const [product,setProduct] = useState({
       loading: false,
       data:null,
       error: false
   })
   let content = null
    useEffect(() =>{
        setProduct({
            loading: true,
            data:null,
            error: false
        })
        axios.get(url)
        .then(response => {
              setProduct({
                  loading: false,
                  data: response.data,
                  error: false
              })
        })
        .catch(error => {
            setProduct({
                loading: false,
                data:null,
                error: true
            })
        })
    },[url])

    if(product.loading){
        content = <Loader></Loader>
    }

    if(product.error){
        content =<p>
            ther was an error
        </p>
    }

    if(product.data){
        content = 
        <div>
            <h1 className ="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img src ={product.data.images}
                     alt ={product.data.name}
                />
              <div className ="font-bold text-xl mb-3">
                      {product.data.price}
              </div>
              <div>
                  {product.data.description}
              </div>
            </div>
        </div>
     }
    return(
        <div>
             {content}
        </div>
    )
}
export default Product;