import db from "../models";
const getDetailDoctorById = (doctorId) => {
  return new Promise((resolve, reject) => {
    try {
      if (!doctorId) {
        resolve({
          errCode: 1,
          errMessage: "missing required params ?"
        })
      } else {
        db.User.findOne({
          where: { id: 7 },
          attributes: {
            exclude: ["password"]
          },
          include: [
            { model: db.Allcodes, as: "posionData" },
            { model: db.Allcodes, as: "genderData" }
          ],
          raw: true,
          nest: true
        }).then((res) => resolve(res))
          .catch((err) => console.log("err", err))
      }
    } catch (error) {
      reject(error);
    }
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
      const doctor = await db.User.findAll({
        where: {
          roleId: "R2"
        },
        limit: limit,
        order: [['createdAt', 'DESC']],
        attributes: {
          exclude: "password"
        }
      });
      reslove({
        errCode: 0,
        data: doctor
      })
    } catch (error) {
      reject({
        errCode: 1,
        errMessage: "server error ...!"
      })
    }
  })
}

module.exports = {
    getDetailDoctorById: getDetailDoctorById,
    getDetailDoctorByIds: getDetailDoctorByIds,
    getTopDoctorHome: getTopDoctorHome
}