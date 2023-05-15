import { error,json, type RequestEvent } from '@sveltejs/kit';
import csv from 'csvtojson'


export async function GET({ params }: RequestEvent) {

    const data = await csv().fromFile("./boroughdata.csv")
    const nodefilter = data.filter(_=>_.borough === params.borough)    
    
    return json({message: `querying detail for ${params.borough}.`, data: nodefilter});
}