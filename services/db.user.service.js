import MongoDB from '../model/db.js';
import crypto from 'crypto';


// let a = [1,2,3]
// let [b, c, e] = a;
// console.log(b);

export const getUserInfoList = async (userId) => {
    try {
        const users = await MongoDB.collection('user').find({}).toArray();
        return users;
    } catch (e) {
        throw new Error(e.message)
    }
}

export const getUserInfo = async (userId) => {
    try {
        const [user] = await MongoDB.collection('user').find({ _id: userId }).toArray();
        return user;
    } catch (e) {
        throw new Error(e.message)
    }
}

export const createUserInfo = async (user) => {
    try {
        users.push({
            id: users.length + 1,
            ...user
        })
        return 'ok';
    } catch (e) {
        throw new Error(e.message)
    }
}

export const updateUserInfo = async (id, user) => {
    try {
        const updateId = users.findIndex(e => e.id === id);
        //const updateId = id;
        users[updateId] = {
            id: updateId + 1,
            ...user
        };
        return 'ok';
    } catch (e) {
        throw new Error(e.message)
    }
}

export const deleteUser = async (id) => {
    try {
        users = users.filter(a => a.id !== parseInt(id, 10));
        return 'ok';
    } catch (e) {
        throw new Error(e.message)
    }
}

export const register = async (userInfo) => {
    try {
       let newPassword = crypto.createHmac('sha256',userInfo.password).update('aaa').digest('hex')
        userInfo.password=newPassword;
        let exist = await MongoDB.collection('user').findOne({ username: userInfo.username });
        if (exist) {
            throw new Error('This user name is exists.')
        }
        const result = await MongoDB.collection('user').insertOne(userInfo)
        if (!result.acknowledged) throw new Error('register failed.')
        return null;
    } catch (e) {
        throw new Error(e.message)
    }
}

export const login = async (userInfo) => {
    try {
        let newPassword = crypto.createHmac('sha256',userInfo.password).update('aaa').digest('hex')

        let exist = await MongoDB.collection('user').findOne({ username: userInfo.username, password: newPassword})
        if (exist) {
            return '????????????';
        } else {
            throw new Error('?????????????????????');
        }
        return null;
    } catch (e) {
        throw new Error(e.message)
    }
}
