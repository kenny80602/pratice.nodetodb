import * as UserService from '../services/db.user.service.js';

export const getUserList = async (req, res, next) => {
    let output = { status: 0, result: null, errMsgs: null };

    try {
        output.result = await UserService.getUserInfoList(userId);
        res.status(200).json(output);
    } catch (e) {
        console.log(e.message);
        output.status = 500;
        output.errMsgs = e.message;
        res.status(500).json(output);
    }
    next();
}

export const getUserById = async (req, res, next) => {
    let output = { status: 0, result: null, errMsgs: null };

    try {
        const userId  = parseInt(req.params.id);
        output.result = await UserService.getUserInfo(userId);
        res.status(200).json(output);
    } catch (e) {
        console.log(e.message);
        output.status = 500;
        output.errMsgs = e.message;
        res.status(500).json(output);
    }
    next();
}

export const createUser = async (req, res, next) => {
    let output = { status: 0, result: null, errMsgs: null };

    try {
        const user = req.body;
        output.result = await UserService.createUserInfo(user)
        res.status(200).json(output);
    } catch (e) {
        console.log(e.message);
        output.status = 500;
        output.errMsgs = e.message;
        res.status(500).json(output);
    }
    next();
}

export const updateUser = async (req, res, next) => {
    let output = { status: 0, result: null, errMsgs: null };

    try {
        let id = parseInt(req.params.id);
        const user = req.body;
        output.result = await UserService.updateUserInfo(id, user);
        res.status(200).json(output);
    } catch (e) {
        console.log(e.message);
        output.status = 500;
        output.errMsgs = e.message;
        res.status(500).json(output);
    }
    next();
}

export const deleteUser = async (req, res, next) => {
    let output = { status: 0, result: null, errMsgs: null };
    try {
        let id = req.params.id;
        output.result = await UserService.deleteUser(id);
        res.status(200).json(output);
    } catch (e) {
        console.log(e.message);
        output.status = 500;
        output.errMsgs = e.message;
        res.status(500).json(output);
    }
    next();
}




export const userLogin = async(req, res, next) =>{
    let output ={status: 0,result: null, errMsgs: null};
    try {
        let postData ={
            username: req.body.username,
            password: req.body.passport
        };
    } catch (e) {
        console.log(e.message);
    }

}

export const UserRegister = async(req, res, next) => {
    let output = { status: 0, result: null, errMsgs: null };
    try {
        let postData = {
            username: req.body.username,
            password: req.body.password,
            age: req.body.age,
            address: req.body.address
        };
        await UserService.register(postData)
        res.json(output)
    } catch (e) {
        console.log(e.message);
        output.status = 500;
        output.errMsgs = e.message;
        res.status(500).json(output);
    }
}

