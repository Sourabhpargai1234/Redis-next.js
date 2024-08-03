export default async function getAllCarts(req, res){
    try {
        const response=await fetch('https://fakestoreapi.com/carts');
        const data=await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({error: 'Not found'})
    }
}