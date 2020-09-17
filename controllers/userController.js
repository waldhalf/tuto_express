//_______________ROUTE HANDLERS_______________
exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.resquestAt,
        data: {
            users: '<all users>',
        },
    });
};

exports.createUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.resquestAt,
        data: {
            user: '<new user>',
        },
    });
};

exports.getUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.resquestAt,
        data: {
            user: '<get user>',
        },
    });
};

exports.updateUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.resquestAt,
        data: {
            user: '<update user>',
        },
    });
};

exports.deleteUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.resquestAt,
        data: {
            user: '<delete user>',
        },
    });
};
