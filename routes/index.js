import express from 'express'
import { UserController, DbUserController } from '../controllers/index.js'

let router = express.Router()

//User
router.get('/user', UserController.getUserList);
router.get('/user/:id', UserController.getUserById);
router.post('/user', UserController.createUser);
router.put('/user/:id', UserController.updateUser);
router.delete('user/:id', UserController.deleteUser);


//DB
router.get('/DB/user', DbUserController.getUserList);
router.get('/DB/user/:id', DbUserController.getUserById);
router.post('/DB/user', DbUserController.createUser);
router.put('/DB/user/:id', DbUserController.updateUser);
router.delete('DB/user/:id', DbUserController.deleteUser);

//register

//router.get('/DB/user',DbUserController)

//router.get('/DB/user',DbUserController)


router.post('/DB/login', DbUserController.userLogin)
router.post('/DB/register', DbUserController.UserRegister)

export default router;