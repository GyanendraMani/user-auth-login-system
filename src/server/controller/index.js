
const userServices = require('../services/index');




const findAll = (req, res) => {
    // const { mode } = req.query;

    try {
        const allUsers = null; //workoutService.getAllWorkouts({ mode });
        console.log("printing try block")
        res.send({ status: "OK", data: "get all user" });
    } catch (error) {
        console.log("printing catch block", error)

        res.send({ status: "Failed", data: { error: error?.message || error } });
    }
}

const logInUser = async (req, res) => {

    const { body } = req;

    try {
        const createLogIn = await userServices.createLogIn(body);
        console.log("printing try block", createLogIn)
        res.send({ status: createLogIn.status, message: createLogIn.message, data: createLogIn.data });

    } catch (error) {
        res.send({ status: "Failed", data: { error: error?.message || error } });
    }


}

const createUsers = async (req, res) => {

    const { body } = req;

    try {
        const createUser = await userServices.createUsers(body);
        console.log("printing try block", createUser)
        res.send({ status: "OK", data: createUser });

    } catch (error) {
        res.send({ status: "Failed", data: { error: error?.message || error } });
    }

}


module.exports = { findAll, createUsers, logInUser };