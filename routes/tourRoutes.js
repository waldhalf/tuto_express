//_______________THIRD PARTY MODULE_______________
const express = require('express');

//_______________OWN MODULES_______________
const tourController = require(`../controllers/tourController`);

const router = express.Router();

router.param('id', tourController.checkID);

//_______________ROUTER_______________
router
    .route('/')
    .get(tourController.getAllTours)
    .post(
        tourController.checkBody,
        tourController.postNewTour,
    );

router
    .route('/:id')
    .get(tourController.getTourById)
    .patch(tourController.patchTour)
    .delete(tourController.deleteTour);

module.exports = router;
