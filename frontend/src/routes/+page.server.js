import { PUBLIC_API_URL } from "$env/static/public";

export const load = async ({ fetch }) => {
    const petsResponse = await fetch(`${PUBLIC_API_URL}/pets`);
    const petsUrl = await petsResponse.json();
    let petsData = [];
    for (let u of petsUrl) {
        const url = `${PUBLIC_API_URL}${u}`;
        const response = await fetch(url);
        const petData = await response.json();
        petsData.push(petData);
    }
    return { pets: petsData }
};