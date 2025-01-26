import React from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://backend:8080/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>E-Commerce Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;