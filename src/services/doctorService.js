import db from "../models";
const getDetailDoctorById = (doctorId) => {
  return new Promise((resolve, reject) => {
    if (!doctorId)
      return reject({ message: "Not exist doctor!", success: false });

    db.User.findOne({
      where: { id: doctorId },
      attributes: { exclude: ["password"]},
      include: [
        { model: db.Allcodes, as: "data_position" },
        { model: db.Allcodes, as: "data_gender" }
      ],
      raw: true,
      nest: true
    })
    .then((res) => resolve(res))
    .catch((error) => reject({ error, success: false }))
  })
}

const getDetailDoctorByIds = (userId) => {
  return new Promise(async(resolve, reject) => {
    try {
      if (!userId) {
        resolve({
          errCode: 1,
          errMessage: "missing required params ?"
        })
      } else {
        const data = await db.Markdown.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"]
          },
          include: [
            { model: db.User }
          ],
          raw: true,
          nest: true
        })
        resolve({
          errCode: 0,
          data
        });
      }
    } catch (error) {
      reject({
        errCode: 1,
        error
      })
    }
  })
}

const getTopDoctorHome = (limit) => {
  return new Promise(async(reslove, reject) => {
    try {
      if (!limit) limit = 10;
      await db.User.findAll({
        where: { roleId: "R2" },
        limit: limit,
        order: [['createdAt', 'DESC']],
        attributes: { exclude: ["password", "image"] },
        include: [
          { model: db.Allcodes, as: "data_position" },
          { model: db.Allcodes, as: "data_gender" }
        ],
        raw: true,
        nest: true
      })
      .then((data) => reslove({ data: data, success: true }))
      .catch((error) => reject({ error: error, success: false }))
    } catch (error) {
      reject({ success: false, message: "server error ...!"})
    }
  })
}

module.exports = {
  getDetailDoctorById: getDetailDoctorById,
  getDetailDoctorByIds: getDetailDoctorByIds,
  getTopDoctorHome: getTopDoctorHome
}