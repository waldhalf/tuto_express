//_______________THIRD PARTY MODULES_______________
const dotenv = require('dotenv');

//_______________OWN MODULES_______________
dotenv.config({ path: './config.env' });
const app = require('./app');

const port = process.env.PORT || 3000;

//_______________SERVER LISTEN_______________
app.listen(port, () => {
    console.log(`Listening on port : ${port}...`);
});
