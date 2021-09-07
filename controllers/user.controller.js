import * as UserService from '../services/User.Service.js'

export const getUserList = async(req,res,next) =>{
    let output = {state:0 , result:null,errMgs:null};
    try{
        output.result =await UserService.getUserInfoList();
        res.state(200).json(output);
    }catch(e){
        console.log(e.message);
        output.status=500;
        output.errMgs = e.message;
        res.status(500).json(output);
    }
    next();
}

export const getUserById = async(req, res, next) =>{
    let output ={state:0,result:null,errMgs:null};
    try{
        output.result =await UserService.getUserInfoList();
        res.status(500).json(output);
    }catch(e){
        console.log(e.message);
        output.status = 500;
        output.errMgs = e.message;
        res.status(500).json(output);
    }
    next();
}

export const createUser =async(req,res,next) =>{
    let output ={state: 0,result: null,errMgs: null};
try{
    const user = req.body;
    output.result = await UserService.createUserInfo(user);
    res.status(200).json(output);
}catch(e){
    console.log(e.message);
    output.status = 500;
    output.errMgs = e.message;
    res.status(500).json(output);
    }
    next();

}

export const updateUser = async(req,res,next) =>{
    let output={state: 0,result: null,errMgs: null};
try{
    const user = req.body;
    output.result =await UserService.updateUserInfo(id,user);
    res.status(200).json(output);
}catch(e){
    console.log(e.message);
    output.status=500;
    output.errMgs=e.message;
    res.status(500).json(output);
}
    next();
}

export const deleteUser = async(req,res,next) => {
    let output = {status: 0,result: null,errMgs:null};
    try {
        let id=req.params.id;
        output.result = await UserService.deleteUser(id);
        res.status(200).json(output);
    } catch (e) {
        console.log(e.message);
        output.status=500;
        output.errMgs=e.message;
        res.status(500).json(output);
    }
    next();
}