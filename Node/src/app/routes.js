/**
 * All the routes goes here
 */

const { signup } = require("./user/signup");
const { signupMiddleware } = require("./../middleware/signup");
const { adminSignUp } = require("./admin/adminSignUp");
const { adminSignupMiddleware } = require("./../middleware/adminSignup");
const { login, adminLogin } = require("./user/login");
var bodyParser = require("body-parser");
const { addProducts } = require("./admin/addProducts");

exports.loadRoutes = (app) => {
    app.use(bodyParser.json());

    // user related goes here
    app.post('/signup', signupMiddleware, signup);
    app.post('/login', login);

    //routes related to admin activity
    app.post('/register', adminSignupMiddleware, adminSignUp);
    app.post('/addproduct', addProducts);


}
//routes related to home page - home page
//routes related to user activity - login, signup, checkout, order, address


