// THIRD PARTY MODULE
const morgan = require('morgan');
const express = require('express');

//_______________OWN MODULES_______________
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json()); // Permet d'ajouter un body à la request

app.use((req, res, next) => {
    req.resquestAt = new Date().toISOString();
    next();
});

app.use(express.static(`${__dirname}/public`));

//_______________ROUTES_______________

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
