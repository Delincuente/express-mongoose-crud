import express from "express";
const router = express.Router();

import { getUsers, createUser, getUser, updateUser, deleteUser } from "../controllers/user.js";
import { createUserValidation } from "../middlewares/userValidation.js";
import validate from "../middlewares/validate.js";
router.route('/')
    .get(getUsers)
    .post([createUserValidation, validate], createUser);

router.route('/:id')
    .get(getUser)
    .put([createUserValidation, validate], updateUser)
    .delete(deleteUser)

export default router;