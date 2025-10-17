import { PUBLIC_API_URL } from "$env/static/public";

export const load = async ({ fetch }) => {
    const petsResponse = await fetch(`${PUBLIC_API_URL}/pets`);
    const petsUrls = await petsResponse.json();
    const responsePromises = petsUrls.map(relativeUrl => fetch(`${PUBLIC_API_URL}${relativeUrl}`));
    const responses = await Promise.all(responsePromises);
    const jsonPromises = responses.map(response => response.json());
    const petsData = await Promise.all(jsonPromises)
    const allPetTypes = petsData.map(petData => petData.type);
    const petTypes = new Set(['All', ...allPetTypes]);
    return { pets: petsData, petTypes: petTypes }
};