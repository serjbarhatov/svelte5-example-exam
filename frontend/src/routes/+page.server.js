import { PUBLIC_API_URL } from "$env/static/public";

export const load = async ({ fetch }) => {
    const petsResponse = await fetch(`${PUBLIC_API_URL}/pets`);
    const petsUrls = await petsResponse.json();
    let petsData = [];
    let responsePromises = [];
    const petTypes = new Set(['All']);
    for (let e of petsUrls) {
        const url = `${PUBLIC_API_URL}${e}`;
        console.log(url);
        const responsePromise = fetch(url);
        responsePromises.push(responsePromise);
    }
    let responses = await Promise.all(responsePromises);
    let jsonPromises = [];
    for (let response of responses) {
        const jsonPromise = response.json();
        jsonPromises.push(jsonPromise);
    }
    petsData = await Promise.all(jsonPromises)
    for (let petData of petsData) {
        petTypes.add(petData.type);

    }
    console.log(petsUrls);
    console.log(petsData);
    return { pets: petsData, petTypes: petTypes }
};