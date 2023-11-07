import doctorService from "../services/doctorService";

let getDetailDoctorById = async(req, res) => {
  try {
    const doctorId = req.query.id;
    const infor = await doctorService.getDetailDoctorById(doctorId);
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
    const info = await doctorService.getDetailDoctorByIds(id);
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
  const limit = req.query.limit;
    await doctorService.getTopDoctorHome(limit)
    .then((data) => res.status(200).json({ ...data }))
    .catch((error) => res.status(500).json({ ...error }))
};

module.exports = {
  getDetailDoctorById: getDetailDoctorById,
  getDetailDoctor: getDetailDoctor,
  getTopDoctorHome: getTopDoctorHome
}