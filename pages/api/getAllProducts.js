import redis from '../../lib/redis';
import fetch from 'node-fetch';

export default async function getAllProducts(req, res) {
  try {
    // Check if the data is already in the cache
    const cachedData = await redis.get('allProducts');
    if (cachedData) {
      console.log('Serving from cache');
      return res.status(200).json(JSON.parse(cachedData));
    }
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    await redis.set('allProducts', JSON.stringify(data), 'EX', 3600);
    console.log('Data cached in redis')
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
