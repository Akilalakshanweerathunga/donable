const Review = require('../models/reviewModel');
const factory = require('./handlerFactory');

exports.setCharityUserIds = (req, res, next) => {
  // Allow nested route
  if (!req.body.charity) req.body.charity = req.params.charityId;
  if (!req.body.user) req.body.user = req.user.id;

  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
