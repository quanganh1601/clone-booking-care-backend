
import bcrypt from 'bcryptjs';
import db from "../models";
//import bcrypt from 'bcrypt'dd;
const salt = bcrypt.genSaltSync(10);

const handleUserLogin = (email, password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userData = {};
            let isExits = await checkUserEmail(email);
            if (isExits) {
                const user = await db.User.findOne({
                    where: { email: email },
                    attributes: ["email", "password", "roleId"],
                    raw: true
                })
                if (user) {
                    const match = await bcrypt.compareSync(password, user.password);
                    if (match) {
                        userData.errCode = 0,
                        userData.errMessage = "login susscess !",
                        delete user.password;
                        userData.user = user
                    } else {
                        userData.errCode = 5
                    }
                } else {
                    userData.errCode = 3,
                    userData.errMessage = "user not found  !!"
                }
            } else {
                userData.errCode = 1;
                userData.errMessage = `email is not system !`
            }
            resolve(userData);
        } catch (error) {
            reject(error);
        }
    })
}

const checkUserEmail = (userEmail) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) resolve(true);
            else resolve(false);
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

const getAllUser = () => {
  return new Promise(async(resolve, reject) => {
    try {
      let user = '';
        user = await db.User.findAll({
          attributes: {
            exclude: ["password"]
          },
         // limit: 1
        });
        console.log("user", user)
      resolve(user);
    } catch (error) {
      reject(error);
    }
  })
}

const createNewUser = (data) => {
  return new Promise(async(resolve, reject) => {
    try {
      if (!data.email) {
        resolve({
          errCode: 1,
          errMessage: "email not empty!"
        })
      }
      const checkEmail = await checkUserEmail(data.email);
      if (checkEmail == true) {
        resolve({
          errCode: 1,
          errMessage: "Your email already in used, plz try another email !"
        })
      }
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
    resolve({
      errCode: 0,
      errMessage: "create user success !",
      user: data
    });
    } catch (error) {
      reject(error);
    }
  })
}

const getAllCode = () => {
  return new Promise(async(reslove, reject) => {
    try {
      const data = await db.Allcodes.findAll();
      reslove({
        errCode: 0,
        Message: "Get allcode succes !!",
        data
      })
    } catch (error) {
      console.log("err", error)
      reject(error)
    }
  })
};

const deleteUser = (userId) => {
  return new Promise(async(reslove, reject) => {
    let message;
    try {
      db.User.destroy({
        where: { id: userId }
      }).then((res) => {
        if (res > 0) message = "delete user success!"
        else message = "not exits user!"
        reslove({
          errCode: 0,
          message
        })
      })
      .catch((err) => {
        reject({ 
          errCode: 1,
          errMessage: "no exits user"
        })
      })
    } catch (error) {
      reject({
        errCode: 1,
        errMessage: "no exits user!"
      })
    }
  })
};

const editUser = (req) => {
  const { id, email, firstName, lastName, address } = req.body;
  let message;
  return new Promise((reslove, reject) => {
    try {
      db.User.update({
        email,
        firstName,
        lastName,
        address
      }, {
        where: {
          id: id
        }
      })
      .then((result) => {
        if (result > 0) message = "update successly!"
        else message = "update error!"
        reslove({
          errCode: 0,
          message
        })
      })
      .catch((err)=> {
        reject({
          errCode: 1,
          errMessage: "error"
        })
      })
    } catch(err) {
      reject({
        errCode: 2,
        err
      })
    }
  })
};

module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUser: getAllUser,
    createNewUser: createNewUser,
    getAllCode: getAllCode,
    deleteUser: deleteUser,
    editUser: editUser,
   // getDetailUserByUserId: getDetailUserByUserId
}