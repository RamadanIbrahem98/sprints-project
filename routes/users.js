const router = require("express").Router();
const usersController = require("../controllers/users");

router
  .route("/register")
  .get(usersController.getRegister)
  .post(usersController.postRegister);

router
  .route("/login")
  .get(usersController.getLogin)
  .post(usersController.postLogin);

module.exports = router;
