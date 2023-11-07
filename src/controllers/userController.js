const userServices = require("../services/userServices")
const handleLogin = async(req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(500).json({
      errCode: 1,
      message: "miss input email or password !"
    })

  let userData = await userServices.handleUserLogin(email, password);

  return res.status(200).json({ 
    errCode: userData.errCode,
    errMessage: userData.errMessage,
    ...userData
  });
};

const getAllUserController = async(req, res) => {
  await userServices.getAllUser(req.query)
    .then((data) => {
      return res.status(200).json({ ...data })
    })
    .catch((error) => {
      return res.status(500).json({ ...error })
    })
};

const createUser = async(req, res) => {
  const data = req.body;
  await userServices.createNewUser(data)
    .then((data) => {
      return res.status(200).json({ ...data})
    })
    .catch((error) => {
      return res.status(400).json({ ...error })
    })
}

const handleGetController = async(req, res) => {
  const data = await userServices.getAllCode();
  return res.status(200).json({ data });
};

const handleEditUser = async(req, res) => {
  const data = await userServices.editUser(req);
  return res.json({ ...data });
};

const handleDeleteUser = async(req, res) => {
  const { id } = req.params;
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