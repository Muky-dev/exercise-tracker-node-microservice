import express from 'express';
import * as controller from '../controller/root.js';

const router = express.Router();

router.get('/api/users', controller.getAllUsers);
router.post('/api/users', controller.postUser);
router.post('/api/users/:_id/exercises', controller.postExercise);
router.get('/api/users/:_id/logs', controller.getExercises);

export default router;