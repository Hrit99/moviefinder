const { signupQuery, checkUserExistsQuery } = require("../dbqueries/authQueries")
const { createJWT, decodeJWT } = require("../utilities/jwt")

const signup = async (req, res, next) => {
    console.log("in signup api")
    let email = req.body.email
    let password = req.body.password

    signupQuery(email, password).then(signedUpUser => {
        if (signedUpUser != null) {
            let objForJwt = {
                "email": signedUpUser.email,
                "password": signedUpUser.password,
                "role": "user"
            }
            console.log(`kk ${objForJwt.email}`);
            let jwtToken = createJWT(objForJwt); 
                res.json({
                    stored: true,
                    token: jwtToken
                })
        } else {
            res.json({
                stored: false
            })
        }
    })
}

const signInWithToken = async (req, res, next) => {
    let decodedjwt = decodeJWT(req.body.token)
    try{
    if(decodedjwt.role == 'user'){
        res.json({
            success: true,
            email: decodedjwt.email,
        })
    }
    else {
        res.json({
            success: false
        })
    }
}
catch{
    res.json({
        success: false
    })
}
}

const signInWithoutToken = async (req, res, next) => {
    let email = req.body.email
    let password = req.body.password

    if(await checkUserExistsQuery(email, password)){
        let objForJwt = {
            "email": email,
            "password": password,
            "role": "user"
        }
        let jwtToken = createJWT(objForJwt); 
        res.json({
            success: true,
            token: jwtToken
        })
    } else {
        res.json({
            success: false
        })
    }
}

module.exports = { signup , signInWithToken, signInWithoutToken}