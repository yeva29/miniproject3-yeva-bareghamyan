import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import {popularProducts} from "../data"
import Product from "./Product"
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([])
  // const [filter, setFilter] = useState([])

  useEffect(() =>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(
          cat 
            ? `http://localhost:8000/api/products?category=${cat}` 
            : "http://localhost:8000/api/products");
        setProducts(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getProducts()
  }, [cat])

/*   useEffect(()=>{
    console.log("filters changed", filters)
  },[filters]) */

  // useEffect(() => {
    // if (sort === "newest") {
    //   setProducts(prev => [...prev].sort((a,b) => a.createdAt - b.createdAt))
    // } else if (sort === "asc") {
    //   setProducts(prev => [...prev].sort((a,b) => a.price - b.price))
    // } else {
    //   setProducts(prev => [...prev].sort((a,b) => b.price - a.price))
    // }
  // }, [products, sort])
  return (
    <Container>
      {products.map((p, index) => {
  let canRender = false;
  for (let color of p.color) {
    if (filters) {
      if(filters.color == color)
      {
        canRender = true;
        break;
      }
    }
  }
  
  for (let size of p.size) {
    if (filters) {
      if(filters.size == size)
      {
        canRender = true;
        break;

      }
    }
  }
  return canRender == true ? <Product key={index} item={p} /> : null;
})}
    </Container>
  )
}

export default Products;