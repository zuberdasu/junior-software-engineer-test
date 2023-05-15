import { error,json } from '@sveltejs/kit';
import csv from 'csvtojson'
export async function GET() {
    
    const data = await csv().fromFile("./coffeeshops.csv")
    const returndata = data.map(_=>{
        const string = _.revenue
        _.revenue = Number(string)
        return _
    })
    
    return json({message: `coffee shops data.`, coffeeshops: data});
}