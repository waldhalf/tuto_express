//_______________THIRD PARTY MODULES_______________
const express = require('express');

//_______________OWN MODULE_______________
const userController = require('../controllers/userController');

const router = express.Router();

//_______________ROUTER_______________

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
