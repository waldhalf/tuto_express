//_______________CORE MODULES_______________
const fs = require('fs');

//_______________VARIABLES_______________
const tours = JSON.parse(
    fs.readFileSync(
        `${__dirname}/../dev-data/data/tours-simple.json`,
    ),
);

//_______________FUNCTIONS POUR PARAM_______________
exports.checkID = (req, res, next, val) => {
    const tour = tours.find((el) => el.id === val * 1);
    if (tour === undefined) {
        return res.status(404).json({
            status: 'failure',
            message: 'invalid ID',
        });
    }
    next();
};

exports.checkBody = (req, res, next) => {
    if (!req.body.name || req.body.price) {
        return res.status(400).json({
            satus: 'Failure',
            message: 'Body misformed',
        });
    }
    next();
};
//_______________ROUTES HANDLER_______________

exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        requestedAt: req.resquestAt,
        data: {
            tours: tours,
        },
    });
};

exports.postNewTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = {
        id: newId,
        ...req.body,
    };
    tours.push(newTour);
    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        (err) => {
            res.status(201).json({
                status: 'success',
                data: {
                    tour: newTour,
                },
            });
        },
    );
};

exports.getTourById = (req, res) => {
    const tour = tours.find(
        (el) => el.id === req.params.id * 1,
    );
    res.status(200).json({
        status: 'success',
        data: {
            tour: tour,
        },
    });
};

exports.patchTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'The tour has been updated',
    });
};

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        message: 'The tour has been deleted',
    });
};
