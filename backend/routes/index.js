import express from 'express';
import { getAllPets, updatePet, getPet, getSpiderIds, deletePets } from '../controllers/petsController.js';
import { checkName } from '../middleware/exampleMiddleware.js';
import cors from 'cors';
const router = express.Router();

// routes
router.get('/', cors(), (req, res, next) => {
  res.json('hi');
});
router.get('/pets', cors(), checkName, getAllPets);
router.get('/pets/:id', cors(), checkName, getPet);
router.put('/pets/:id', cors(), checkName, updatePet)
router.get('/spiders', cors(), checkName, getSpiderIds);
router.delete('/pets', cors(), checkName, deletePets);

export default router;
