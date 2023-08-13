const userServices = require("../services/userServices")
const handleLogin = async(req, res) => {
  const email = req.body.email;
  const passWord = req.body.password;

  if (!email || !passWord)
    return res.status(500).json({
      errCode: 1,
      message: "miss input email or password !"
    })

  let userData = await userServices.handleUserLogin(email, passWord);
  return res.status(200).json({ 
    errCode: userData.errCode,
    errMessage: userData.errMessage,
    user: userData?.user ? userData.user : {}
  })
}

const getAllUserController = async(req, res) => {
  let allUser = await userServices.getAllUser();
  return res.status(200).json({
    errCode: allUser.errCode,
    errMessage: allUser.errMessage,
    users: allUser
  })
}

const createUser = async(req, res) => {
  const data = req.body;
  const newUser = await userServices.createNewUser(data);
  return res.status(200).json({
    data: newUser,
    errCode: 0,
    errMessage: "crerate user success!"
  })
}

const handleGetController = async(req, res) => {
  const data = await userServices.getAllCode();
  return res.status(200).json({ data });
};

const handleEditUser = async(req, res) => {
  const data = await userServices.editUser(req);
  return res.status(200).json({ data });
};

const handleDeleteUser = async(req, res) => {
  const id = req.body.id;
  if (!id)
    return res.status(200).json({ error: "id not empty!" })
  const data = await userServices.deleteUser(id);
  return res.status(200).json({ data });
};

const getDetailUserById = async(req, res) => {
  const userId = req.query.id;
  if (!userId)
   return res.status(200).json({ errMessage: "not find user!" });
  const data = await userServices.getDetailUserByUserId(userId);
  return res.status(200).json({ data })
}

module.exports = {
  handleLogin: handleLogin,
  getAllUserController: getAllUserController,
  createUser: createUser,
  handleGetController: handleGetController,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
  getDetailUserById: getDetailUserById
}