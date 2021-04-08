import { Router } from 'express';

const router = Router();

const todos = [];

router.get('/', (req, res, next) => {
  res.status(200).json({ todos: todos });
});

export default router;