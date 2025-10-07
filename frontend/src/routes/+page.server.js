import { PUBLIC_API_URL } from "$env/static/public";

/**
 * Function to load appointments
 * @returns {Promise<{ appointments: any[]; } | { error: any; }>}
 */
export const load = async ({ fetch }) => {
    const petsResponse = await fetch(`${PUBLIC_API_URL}/pets`);
    const petsUrls = await petsResponse.json();
    let petsData = [];
    const petTypes = new Set(['All']);
    for (let e of petsUrls) {
        const url = `${PUBLIC_API_URL}${e}`;
        console.log(url);
        const response = await fetch(url);
        const petData = await response.json();
        petTypes.add(petData.type);
        petsData.push(petData);
    }
    console.log(petsUrls);
    console.log(petsData);
    return { pets: petsData, petTypes: petTypes }
};