import express from 'express';
import validateInput from '../shared/validator';

let router = express.Router();

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  if(!isValid) res.status(400).send(errors);
 }
);

export default router;
