import express from 'express';
import * as controller from '../controller/root.js';

const router = express.Router();

router.get('/', controller.getIndex);
router.post('/api/users', controller.postUser);

export default router;