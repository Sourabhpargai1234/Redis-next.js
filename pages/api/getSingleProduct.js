export default async function getSingleProduct(req,res){
    const {id}=req.query;
    if(!id){
        res.status(404).json({error: "No id given"})
    }
    try {
        const response=await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data=await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({error: 'Data not found'})
    }
}
