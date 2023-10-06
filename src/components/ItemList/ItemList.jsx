import Filter from "../FIlter/Filter"
import Item from "../Item/Item"

import './ItemList.css'

const handleProductFilter = ({ products, filterState, handleFilterChange }) => (
  <div className="body">  
    <center>
      <h2>Buscador</h2>
      <input type="text" value={filterState} onChange={handleFilterChange} />
    </center>
      { 
        filterState === '' ? 
            products.map(product => <Item key={product.id} product={product} /> )  
        : 
            products.filter(product => product.name.toLowerCase().includes(filterState.toLowerCase())).map(product => <Item key={product.id} product={product} /> )  
      }
  </div>
)

const ItemList = ({products}) => {
  return (            
    <>
        <Filter products={products}>
            {handleProductFilter}
        </Filter>
    </>
  )
}

export default ItemList