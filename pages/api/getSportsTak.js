import path from 'path';
import fs from 'fs';

export default async function(req, res){
    try {
        const filePath = path.join(process.cwd(), 'public', 'Sports_Tak_Api.json');
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        res.status(200).json(jsonData.item);
    } catch (error) {
        res.status(404).json({error: 'Got some issue when did api hit'})
    }
}