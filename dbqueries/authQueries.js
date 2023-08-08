const { User } = require("../models/user")

/**
 * Signs up the user
 * @param {String} email
 * @param {String} password
 * @returns {User} returns signup successful or not.
 */
const signupQuery = async (email, password) => {
    console.log("in sign up")
    let newUser = new User( {
        email: email,
        password: password
    })
    try {
        await newUser.save()
    } catch (error) {
        return null
    }
    console.log(newUser);
    return newUser
}

const checkUserExistsQuery = async (email, password) => {
    console.log("in user exists")
    try {
        let userquery = await User.findOne({
            'email': email,
            'password': password
        })
        console.log(userquery);
        if (userquery == null) {
            console.log("here")
            return false
        } else {
            return true
        }
    } catch (error) {
        return false
    }
}


module.exports = {
    signupQuery, checkUserExistsQuery
}