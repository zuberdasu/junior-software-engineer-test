import { error,json } from '@sveltejs/kit';

export function GET() {
    

    return json({message: `borough api.`});
}