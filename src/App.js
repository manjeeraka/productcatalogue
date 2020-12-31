import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Card from './components/common/cards/cards';
import Charts from './components/charts/charts';
import { getProducts, saveProduct } from './components/services';



function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log('outside the function');
    getProducts().then(response => {
      setProducts(response.data);
    });
  }, [])

  const handleSave = (item) => {

    saveProduct(item).then(res => {
      console.log(res);
    })
  }

  return (
    <div className="App-section">
      <div className="App-cardslist">
      {
         products.map(product => {
          return <Card key={product.id} id={product.id} save={handleSave} name={product.name} image={product.image} price={product.price} count={product.count}/>
        }
        )
      }
      </div>
      <div className="App-graph">
      { products.length && <Charts todo={products}/>}
      </div>
    </div>
  );
}

export default App;