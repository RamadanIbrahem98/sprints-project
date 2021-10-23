const router = require("express").Router();
const usersController = require("../controllers/users");
const { protect, authorize } = require("../middleware/auth");

const favouritesRoutes = require("./favourites");

router.use("/:userId/favourites", favouritesRoutes);

router
  .route("/photo")
  .post(
    protect,
    authorize("user", "admin"),
    usersController.profilePhotoUpload,
  );

module.exports = router;
