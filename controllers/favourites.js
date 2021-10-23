const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");

//@desc         Get All of one user favourite places
//@route        GET /api/v1/users/:userId/favourites
//@access       Private
exports.getFavourites = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.userId).populate("favourites");

  if (!user) {
    next(
      new ErrorResponse(`No user found with user id ${req.params.userId}`, 404),
    );
  }

  res.status(200).json({
    success: true,
    count: user.favourites.length,
    data: user.favourites,
  });
});

//@desc         Get one favourite place of one user
//@route        GET /api/v1/user/:userId/favourites/:favouriteId
//@access       Private
exports.getFavourite = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.userId).populate("favourites");

  if (!user) {
    next(new ErrorResponse(`User not found with id ${req.params.userId}`, 404));
  }

  const favourite = user.favourites.filter(
    (favourite) => favourite.id === req.params.favouriteId,
  );

  if (!favourite) {
    next(
      new ErrorResponse(
        `Favourite not found with id ${req.params.favouriteId}`,
        404,
      ),
    );
  }

  // if (!favourite) {
  //   next(
  //     new ErrorResponse(
  //       `Favourite not found with id ${req.params.favouriteId}`,
  //       404,
  //     ),
  //   );
  // }

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

  const favourite = user.favourites;

  favourite.push(req.body.favouriteId);

  const newFavourites = await User.findByIdAndUpdate(
    req.params.userId,
    { favourites: favourite },
    {
      new: true,
      runValidators: true,
    },
  );

  res.status(201).json({
    success: true,
    data: newFavourites.favourites,
  });
});

// //@desc         Update favourite places of one user
// //@route        PUT /api/v1/user/:userId/favourites/:favouriteId
// //@access       Private
// exports.updateFavourites = asyncHandler(async (req, res, next) => {
//   let user = await User.findById(req.params.userId);

//   if (!user) {
//     next(new ErrorResponse(`User not found with id ${req.params.userId}`, 404));
//   }

//   const favourites = user.favourites;

//   if (!favourites) {
//     next(
//       new ErrorResponse(
//         `Favourite not found with id ${req.params.favouriteId}`,
//         404,
//       ),
//     );
//   }

//   for (let i = 0; i < favourites.length; i++) {
//     if (favourites[i].id === req.params.favouriteId) {
//       favourites[i] = req.body;
//       user = await User.findByIdAndUpdate(
//         req.params.userId,
//         { favourites },
//         { new: true, runValidators: true },
//       );
//       break;
//     }
//   }

//   res.status(200).json({
//     success: true,
//     data: user.favourites,
//   });
// });

//@desc         Delete a favourite place of one user
//@route        DELETE /api/v1/user/:userId/favourites/:favouriteId
//@access       Private
exports.deleteFavourite = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    next(new ErrorResponse(`User not found with id ${req.params.userId}`, 404));
  }

  let favourites = user.favourites;

  if (!favourites) {
    next(
      new ErrorResponse(
        `Favourite not found with id ${req.params.favouriteId}`,
        404,
      ),
    );
  }

  favourites = favourites.filter((favourite) => {
    return favourite.toString() !== req.params.favouriteId;
  });

  await User.findByIdAndUpdate(
    req.params.userId,
    { favourites },
    { new: true, runValidators: true },
  );

  res.status(200).json({
    success: true,
    data: {},
  });
});
