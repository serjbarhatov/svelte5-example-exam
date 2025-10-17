import express from 'express';
import { getAllPets, updatePet, getPet, getSpiderIds, deletePets } from '../controllers/petsController.js';
import { checkName, logHostname } from '../middleware/exampleMiddleware.js';
import cors from 'cors';
const router = express.Router();

// routes
router.get('/', cors(), (req, res, next) => {
  res.json('hi');
});
router.get('/pets', cors(), checkName, logHostname, getAllPets);
router.get('/pets/:id', cors(), checkName, logHostname, getPet);
router.put('/pets/:id', cors(), checkName, logHostname, updatePet)
router.get('/spiders', cors(), checkName, logHostname, getSpiderIds);
router.delete('/pets', cors(), checkName, logHostname, deletePets);

export default router;
