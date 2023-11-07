import bcrypt from 'bcryptjs';
import db from "../models";
import tools from "../../src/tools/index";

const salt = bcrypt.genSaltSync(10);
const handleUserLogin = (email, password) => {
    return new Promise(async(resolve, reject) => {
      try {
          let userData = {};
          let isExits = await checkUserEmail(email);
          if (isExits) {
            const user = await db.User.findOne({
                where: { email: email },
                attributes: ["id", "email", "password", "roleId", "lastName", "firstName"],
                raw: true
            })
            if (user) {
                const match = await bcrypt.compareSync(password, user.password);
                if (match) {
                  const token = tools.gennerateToken({id: user.id}, "password", '360day');
                  const refreshToken = tools.gennerateRefreshToken({id: user.id}, "refresToken", '1day');
                  
                  userData.success = true;
                  delete user.password;
                  userData.user = {
                    ...user,
                    token,
                    refreshToken
                  }
                } else
                  userData.errCode = 5
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

const getAllUser = (params) => {
  const { limit, page } = params;
  return new Promise((resolve, reject) => {
    db.User.findAll({
      attributes: { exclude: ["password"]},
      order: [["createdAt", "DESC"]],
      limit: +limit,
      offset: ((+page - 1) * +limit),
      include: [
        { model: db.Allcodes, as: "data_position" },
        { model: db.Allcodes, as: "data_gender" }
      ],
      raw: true,
      nest: true
    })
    .then((data) => resolve({ data, success: true }))
    .catch((error) => reject({ error, success: false }))
  })
}

const createNewUser = (data) => {
  const { email, firstName, lastName, address, gender, roleId, phoneNumber, positionId, image, password } = data;
  return new Promise(async(resolve, reject) => {
    try {
      if (!data.email)
        reject({
          success: false,
          message: "email not empty!"
        });

      const checkEmail = await checkUserEmail(email);
      if (checkEmail == true)
        reject({
          success: false,
          message: "Your email already in used, plz try another email !"
        });

      const hashPassWordFromBcrypt = await hashUserPassWord(password);
      await db.User.create({
        password: hashPassWordFromBcrypt,
        email: email,
        firstName: firstName,
        lastName: lastName,
        address: address,
        gender: gender,
        roleId: roleId,
        phoneNumber: phoneNumber,
        positionId: positionId,
        image: image
      }).then((data) => resolve({ data, success: true  }))
    } catch(error) {
      reject({ error: error, success: true  })
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
  const { id, email, firstName, lastName, address, image, gender, phoneNumber, positionId } = req.body;
  return new Promise((reslove, reject) => {
    try {
      db.User.update({ id, email, firstName, lastName, address, image, gender, phoneNumber, positionId }, {
        where: { id: id }
      })
      .then(() => reslove({ success: true }))
      .catch((error)=> reject({ error, success: false }))
    } catch(error) {
      reject({ error, success: false });
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