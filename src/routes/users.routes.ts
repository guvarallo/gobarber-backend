import { Router } from 'express';
import bodyParser from 'body-parser';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();
usersRouter.use(bodyParser.json());

usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default usersRouter;
