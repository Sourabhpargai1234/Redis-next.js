export default async function getAllCategories(req, res){
    try {
        const response=await fetch('https://fakestoreapi.com/products/categories');
        const data=await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({error: 'We have no categories at the moment'})
    }
}