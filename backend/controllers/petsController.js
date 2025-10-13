import { JSONFilePreset } from "lowdb/node";

// Read or create db.json
// defaultData specifies the structure of the database
const defaultData = { meta: {"tile": "List of animals","date": "September 2024"}, animals : [] }
const db = await JSONFilePreset('db.json', defaultData)
const animals = db.data.animals

export async function getAllPets(req, res) {
  const animalUrls = animals.map(animal => `/pets/${animal.id}`);
  res.status(200).send(animalUrls);
}

export async function updatePet(req, res) {
  let id = Number(req.params.id);
  let animal = animals.find(animal => animal.id === id);
  if (!animal) {
    res.status(404).send(`Animal with ${id} not found!!!!`);
    return
  }
  animal.name = req.body.name;
  animal.type = req.body.type;
  animal.icon = req.body.icon;
  animal.time = new Date().toLocaleString();
  await db.write();

  res.status(201).send(`I added this client: ${JSON.stringify(animal)}?`);
}

export async function getPet(req, res) {
  let id = Number(req.params.id);
  let animal = animals.find(animal => animal.id === id);
  if (animal) {
    res.status(200).send(animal);
  } else {
    res.status(404).send('Animal not found');
  }
}

export async function getAllSpiders(req, res) {
  const spiders = animals.filter(animal => animal.type === 'Spider');
  const spiderIds = spiders.map(animal => animal.id)
  res.status(200).send(spiderIds);
}
