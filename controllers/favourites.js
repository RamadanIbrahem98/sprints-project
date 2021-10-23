const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");

//@desc         Get All of one user favourite places
//@route        GET /api/v1/user/:userId/favourites
//@access       Private
exports.getFavourites = asyncHandler(async (req, res, next) => {
  const favourites = await User.findById(req.params.userId).populate(
    "favourites",
  );

  if (!favourites) {
    next(
      new ErrorResponse(
        `No favourites found for user ${req.params.userId}`,
        404,
      ),
    );
  }

  res.status(200).json({
    success: true,
    count: favourites.length,
    data: favourites,
  });
});

//@desc         Get one favourite place of one user
//@route        GET /api/v1/user/:userId/favourites/:favouriteId
//@access       Private
exports.getFavourite = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    next(new ErrorResponse(`User not found with id ${req.params.userId}`, 404));
  }

  const favourite = await user.favourites.findById(req.params.favouriteId);

  if (!favourite) {
    next(
      new ErrorResponse(
        `Favourite not found with id ${req.params.favouriteId}`,
        404,
      ),
    );
  }

  res.status(200).json({
    success: true,
    data: favourite,
  });
});

//@desc         Post one favourite place of one user
//@route        POST /api/v1/user/:userId/favourites
//@access       Private
exports.addFavourite = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    next(new ErrorResponse(`User not found with id ${req.params.userId}`, 404));
  }

  console.log(user.favourites);

  const favourite = user.favourites.push(req.body.favouriteId);

  user.save();

  res.status(200).json({
    success: true,
    data: favourite,
  });
});

//@desc         Update favourite places of one user
//@route        PUT /api/v1/user/:userId/favourites/:favouriteId
//@access       Private
exports.updateFavourites = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    next(new ErrorResponse(`User not found with id ${req.params.userId}`, 404));
  }

  const favourites = await user.favourites.find();

  if (!favourites) {
    next(
      new ErrorResponse(
        `Favourite not found with id ${req.params.favouriteId}`,
        404,
      ),
    );
  }

  for (let i = 0; i < favourites.length; i++) {
    if (favourites[i].id === req.params.favouriteId) {
      favourites.splice(i, 1);
      await user.favourites.update(favourites);
      break;
    }
  }

  res.status(200).json({
    success: true,
    data: favourites,
  });
});

//@desc         Delete a favourite place of one user
//@route        DELETE /api/v1/user/:userId/favourites/:favouriteId
//@access       Private
exports.deleteFavourite = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    next(new ErrorResponse(`User not found with id ${req.params.userId}`, 404));
  }

  const favourites = await user.favourites.findByIdAndRemove(
    req.params.favouriteId,
  );

  if (!favourites) {
    next(
      new ErrorResponse(
        `Favourite not found with id ${req.params.favouriteId}`,
        404,
      ),
    );
  }

  res.status(200).json({
    success: true,
    data: {},
  });
});
