
import bcrypt from 'bcryptjs';
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

const createNewUser = async(data) => {
    return new Promise(async(resolve, reject) => {
      try {
        const hashPassWordFromBcrypt = await hashUserPassWord(data.password);
        await db.User.create({
          password: hashPassWordFromBcrypt,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          gender: data.gender == '1' ? true : false,
          roleId: data.roleId,
          phoneNumber: data.phoneNumber,
          positionId: data.positionId,
          image: data.image
        })
      resolve("ok!");

      } catch (error) {
          reject(error)
      }
    })
}

const hashUserPassWord = (password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashPassWord = await bcrypt.hashSync(password, salt);
            resolve(hashPassWord);
        } catch(e) {
            reject(e);
        }
    })
}

const putCrud = (data) => {
    return new Promise(async(reslove, reject) => {
        try {
            const user = db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                
                await user.save();
                let allUser = db.User.findAll();
                reslove(allUser);
            } else {
                reslove();
            }
        } catch (error) {
            reject(error);
        }
    })
}

const deleteCRUD = (userId) => {
    return new Promise(async(reslove, reject)=> {
        try {
            let user = await db.User.findOne({ 
                where: { id: userId }
            })

            if (user) {
                await user.destroy();
            };
            reslove();
        } catch(e) {
            reject(e)
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    deleteCRUD: deleteCRUD,
    putCrud: putCrud,
};