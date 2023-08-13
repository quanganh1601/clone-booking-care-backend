const express = require("express");
const homeControllers = require("../controllers/homeControllers");
const userController = require("../controllers/userController");
const doctorController = require("../controllers/doctorController");
const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeControllers.getHomePage);
    router.get('/crud', homeControllers.getCRUD);
    router.post('/postCRUD', homeControllers.postCRUD);
    router.delete('/deleteCRUD', homeControllers.deleteCRUD);
    router.put("/put-crud", homeControllers.putCRUD);

    router.post("/api/login", userController.handleLogin);
    router.get("/api/get-all-users", userController.getAllUserController);
    router.post("/api/create-new-user", userController.createUser);
    router.put("/api/edit-user", userController.handleEditUser)
    router.delete("/api/delete-user", userController.handleDeleteUser);

    router.get("/api/get-all-code", userController.handleGetController)

    router.get("/api/get-detail-doctor-by-id", doctorController.getDetailDoctorById);
    router.post("/api/get-detail-doctor", doctorController.getDetailDoctor);
    router.get("/api/get-detail-user-by-id", userController.getDetailUserById);
    router.get("/api/get-top-doctor-home", doctorController.getTopDoctorHome);

    return app.use("/", router);
}

module.exports = initWebRoutes;
