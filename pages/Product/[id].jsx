import { useRouter } from 'next/router';
import useSWR from 'swr';

// Fetcher function for SWR
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Error fetching data');
  }
  return res.json();
};

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Use SWR for data fetching
  const { data: product, error } = useSWR(id ? `/api/getSingleProduct?id=${id}` : null, fetcher);

  if (error) return <div className='flex justify-center items-center h-screen'>Error loading product</div>;
  if (!product) return <div className='flex justify-center items-center h-screen'>Loading...</div>;

  return (
    <div className='flex justify-center items-start h-screen flex-col px-6'>
      <h1>Product {id}</h1>
      <p>Name: {product.title}</p>
      <p>Price: ${product.price}</p>
      <p>Description: ${product.description}</p>
      <p>Category: ${product.category}</p>
      <img src={product.image} alt="Some image" style={{ maxWidth: '200px',maxHeight: '500px', height: 'auto' }}/>
    </div>
  );
};

export default ProductPage;
