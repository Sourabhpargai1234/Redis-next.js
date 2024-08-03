import { useEffect, useState } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from the API endpoint
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/getAllUsers');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      {error && <div className="text-red-600 mb-4">Error: {error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white flex justify-center items-center p-4 rounded-lg flex-col shadow-md">
            <p className='text-black'>Name: {product.name.firstname }{product.name.lastname}</p>
            <p className='text-black'>Email: ${product.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
