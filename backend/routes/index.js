import express from 'express';
import { getAllPets, updatePet, getPet, getAllSpiders, deletePets } from '../controllers/petsController.js';
import { checkName, logHostname } from '../middleware/exampleMiddleware.js';
import cors from 'cors';
const router = express.Router();

// routes
router.get('/', cors(), logHostname, (req, res, next) => {
  res.json('hi');
});
router.get('/pets', cors(), logHostname, checkName, getAllPets);
router.get('/pets/spiders', cors(), logHostname, checkName, getAllSpiders);
router.get('/pets/:id', cors(), logHostname, checkName, getPet);
router.put('/pets/:id', cors(), logHostname, checkName, updatePet)
router.delete('/pets', cors(), logHostname, checkName, deletePets);

export default router;
