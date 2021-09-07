import users from '../model/fakeDB.js'

export const getUserInfoList = async(userId) => {
    try {
        return users;
    } catch (e) {
        throw new Error(e.message)
    }
}


export const getUserById = async(userId) => {
    try {
        return users;
    } catch (e) {
        throw new Error(e.message)
    }
}

export const createUserInfo = async(user) =>{
    try {
        users.push({
            id: users.length+1,
            ...user
        })
            return 'ok';
    } catch (e) {
        throw new Error(e.message);
    }
}

export const updateUserInfo = async(id ,users)=>{
    try{
        const updateId = users.findIdex(e => e.id === id)
        user[updateId] = {
            id: updateId + 1,
            ...user
        }
        return 'ok';
    } catch(e){
        throw new Error(e.message)
    }
}

export const deleteUser = async(id) =>{
    try {
        users=users.filter(a => a.id !== parseInt(id,10));
        return 'ok'
    } catch (e) {
        throw new Error(e.message)
    }
}

