import redis from '../../lib/redis';
import fetch from 'node-fetch';

export default async function getAllUsers(req, res){
    try {
        const cachedData=await redis.get('allUsers');
        if(cachedData){
            console.log('Serving from cache');
            return res.status(200).json(JSON.parse(cachedData));
        }
        const response=await fetch('https://fakestoreapi.com/users');
        const data=await response.json();
        await redis.set('allUsers', JSON.stringify(data), 'EX', 3600);
        console.log('Data cached in redis');
        res.status(200).json(data);
    } catch (error) {
        res.status(200).json({error: "There are no users"})
    }
}