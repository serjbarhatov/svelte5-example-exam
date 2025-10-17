import { JSONFilePreset } from "lowdb/node";

// Read or create db.json
// defaultData specifies the structure of the database
const defaultData = { meta: { "tile": "List of animals", "date": "September 2024" }, animals: [] }
const db = await JSONFilePreset('db.json', defaultData)
const animals = db.data.animals

export async function getAllPets(req, res) {
  try {
    if (!Array.isArray(animals)) {
      res.status(500).send("Animals data is not available.");
      return;
    }
    const animalUrls = animals.map(animal => `/pets/${animal.id}`);
    res.status(200).send(animalUrls);
  } catch (err) {
    res.status(500).send("Error retrieving pets.");
  }
}

export async function updatePet(req, res) {
  try {
    let id = Number(req.params.id);
    let animal = animals.find(animal => animal.id === id);
    if (!animal) {
      res.status(404).send(`Pet with id ${id} not found.`);
      return;
    }
    if (!req.body.name || !req.body.type || !req.body.icon) {
      res.status(400).send("Missing required fields: name, type, or icon.");
      return;
    }
    animal.name = req.body.name;
    animal.type = req.body.type;
    animal.icon = req.body.icon;
    animal.time = new Date().toLocaleString();
    await db.write();
    res.status(201).send(`I updated this pet: ${JSON.stringify(animal)}?`);
  } catch (err) {
    res.status(500).send("Error updating pet.");
  }
}

export async function getPet(req, res) {
  try {
    let id = Number(req.params.id);
    let animal = animals.find(animal => animal.id === id);
    if (animal) {
      res.status(200).send(animal);
    } else {
      res.status(404).send(`Pet with id ${id} not found`);
    }
  } catch (err) {
    res.status(500).send("Error retrieving pet.")
  }
}

export async function getSpiderIds(req, res) {
  try {
    if (!Array.isArray(animals)) {
      res.status(500).send("Pets data is not available.");
      return;
    }
    const spiders = animals.filter(animal => animal.type === 'Spider');
    if (spiders.length === 0) {
      res.status(404).send("No spiders found.");
      return;
    }
    const spiderIds = spiders.map(animal => animal.id)
    res.status(200).send(spiderIds);
  } catch (err) {
    res.status(500).send("Error retrieving spiders.")
  }
}

export async function deletePets(req, res) {
  try {
    const ids = Array.isArray(req.body) ? req.body : req.body?.ids;
    if (!Array.isArray(ids) || ids.length === 0) {
      res.status(400).send("No ids provided for deletion.");
      return;
    }
    let deletedIds = req.body.map(deleteAnimalById);
    if (deletedIds.length === 0) {
      res.status(404).send("No pets found for provided ids.");
      return;
    }
    await db.write();
    res.status(200).send(`Deleted pets with ids: ${deletedIds}`);
  } catch (err) {
    res.status(500).send("Error deleting pets.");
  }
}

function deleteAnimalById(id) {
  try {
    if (typeof id !== 'number') {
      id = Number(id);
      if (Number.isNaN(id)) return null;
    }
    const index = animals.findIndex(animal => animal.id === id);
    if (index > -1) {
      animals.splice(index, 1);
      return id;
    }
    return null;
  } catch (err) {
    return null;
  }
}