import express from 'express';
import { login, register, getAll } from '../controller/user';

const router = express.Router();

router.get('/',getAll);
router.post('/login', login);
router.post("/register", register);

export default router;