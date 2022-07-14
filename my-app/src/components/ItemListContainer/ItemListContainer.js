import React, { useEffect, useState} from "react"
import PacmanLoader from "react-spinners/PacmanLoader"
import "./ItemListContainer.css"
import fonts from "../../assets/fonts/fonts.css"
import {getProds} from "../../mocks/fakeApi";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
   

    useEffect (() => {
        setLoading(true)
        getProds (categoryId)
        .then((res)=> setProductList(res))
      //.catch((error) => console.log(error))
        .finally(()=> setLoading(false))

    }, [categoryId])

    return (
        <div>
            <span className= "greeting">{greeting}</span>
           <div className="spinners"> {loading ? <PacmanLoader color="#FFC0CB" size= {25} margin={0}/>
            : <ItemList productList={productList}/>} </div>
        </div>
    );
};

export default ItemListContainer