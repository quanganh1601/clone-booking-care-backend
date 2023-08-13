import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
    try {
      const data = await db.User.findAll();
      return res.send (JSON.stringify(data));
    } catch (error) {
      console.log("error", error);
    }
}

let getCRUD = (req, res) => {
  return res.send("getCrud", res);
}

const postCRUD = async(req, res) => {
  await CRUDService.createNewUser(req.body);
  return res.send("post-crud-user");
}

const deleteCRUD = async(req, res) => {
  const { id } = req.query;
  if (id) {
    await CRUDService.deleteCRUD(id);
    return res.send("delete success !!");
  } else {
    res.send("not find user !!");
  }
}

const putCRUD = async(req, res) => {
  const data = req.body;
  const allUsers = await CRUDService.putCrud(data);
  return res.send("allUser:");
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    deleteCRUD: deleteCRUD,
    putCRUD: putCRUD
}