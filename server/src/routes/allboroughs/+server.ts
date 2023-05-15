import { error,json } from '@sveltejs/kit';
import csv from 'csvtojson'
export async function GET() {
    
    const data = await csv().fromFile("./boroughdata.csv")
    
    return json({message: `this is all borough api route! the borough data is available here.`, borough: data});
}