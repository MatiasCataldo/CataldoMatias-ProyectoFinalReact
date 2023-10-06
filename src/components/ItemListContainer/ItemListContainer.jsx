import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import './ItemListContainer.css'

const ItemListContainer = () => { 
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { cid } = useParams()
    
    useEffect(()=>{
        if (cid){
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
            const queryFilter = query(queryCollection, where('category', '==', cid))
            getDocs(queryFilter)
            .then(resp => setProducts(resp.docs.map(prod =>( { id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else{
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(prod =>( { id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }, [cid])

    return (
        <center>
            <div className="row">
            { loading ? <h2>Loading... <div className="spinner-border"></div></h2> : <ItemList products={products}/> }
            </div>
        </center>
    )
}

export default ItemListContainer