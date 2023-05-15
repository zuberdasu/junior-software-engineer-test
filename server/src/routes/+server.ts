import { json } from '@sveltejs/kit';

export async function GET() {
    return json({message: "This is the coffee shops api. use this endpoint './coffeeshops' to query all available boroughs. Please use endpoint './allboroughs' list all boroughs' statistics."});
}