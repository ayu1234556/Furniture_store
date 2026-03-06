import { useEffect, useState } from "react";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(data => {
      console.log("DATA:", data);   
      setProducts(data);
    })
    .catch(err => console.error(err));
}, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <div key={product._id} className="border p-4 rounded shadow">
          <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
          <h2 className="text-lg font-bold mt-2">{product.name}</h2>
          <p>₹{product.price}</p>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
