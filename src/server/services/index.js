const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/user");


const findAll = (res, req) => {

}

const createUsers = async (body) => {

    // hash the password
    const results = await bcrypt
        .hash(body.password, 10)
        .then((hashedPassword) => {
            // create a new user instance and collect the data
            const user = new User({
                username: body.username,
                email: body.email,
                password: hashedPassword,
            });

            // save the new user
            const savedUser = user.save();
            return savedUser;


        })
        // catch error if the password hash isn't successful
        .catch((e) => {
            // response.status(500).send({
            //     message: "Password was not hashed successfully",
            //     e,
            // });

            console.log(e)
        });

    console.log("printin result results results", results);

    return results

}

const createLogIn = async (body) => {

    const data = await User.findOne({ email: body.email })

        // if email exists
        .then(async (user) => {
            // compare the password entered and the hashed password found
            return await bcrypt
                .compare(body.password, user.password)

                // if the passwords match
                .then((passwordCheck) => {

                    // check if password matches
                    if (!passwordCheck) {
                        return {
                            status: 400,
                            message: "Passwords does not match",
                            error,
                        };
                    }

                    //   create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" }
                    );

                    //   return success response
                    return {
                        status: 200,
                        message: "Login Successful",
                        data: {
                            email: user.email,
                            token,
                        }
                    }

                })
                // catch error if password does not match
                .catch((error) => {
                    return {
                        status: 400,
                        message: "Passwords does not match",
                        error,
                    };
                });
        })
        // catch error if email does not exist
        .catch((error) => {
            console.error(error)
            return {
                status: 404,
                message: "Email not found",
                error,
            };
        });

    console.log("printing data jkfhskdfhds", data);
    return data;

}

module.exports = {
    findAll,
    createUsers,
    createLogIn
}