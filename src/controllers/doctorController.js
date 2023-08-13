import userService from "../services/doctorService";
import doctorService from "../services/doctorService";

let getDetailDoctorById = async(req, res) => {
  try {
    const doctorId = req.query.id;
    const infor = await userService.getDetailDoctorById(doctorId);
    res.status(200).json(infor);
  } catch (error) {
    res.status(200).json({
      errCode: "1",
      messageCode: "server error ..."
    })
  }
}

const getDetailDoctor = async(req, res) => {
  try {
    const id = req.body.id;
    const info = await userService.getDetailDoctorByIds(id);
    res.status(200).json(info);
  } catch (error) {
    res.status(200).json({
      errCode: "1",
      messageCode: "server error ...",
      err: error
    })
  }
}

const getTopDoctorHome = async(req, res) => {
  try {
    const limit = req.query.limit;
    const users = await doctorService.getTopDoctorHome(limit);
    res.status(200).json({data: users})
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      errCode: 1,
      messageCode: "server error ...!"
    })
  }
}

module.exports = {
  getDetailDoctorById: getDetailDoctorById,
  getDetailDoctor: getDetailDoctor,
  getTopDoctorHome: getTopDoctorHome
}