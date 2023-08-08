const jwt = require('jsonwebtoken');
const secretKey = 'my_jwt_secret';

const createJWT = (user) => {
    const token = jwt.sign(user, secretKey, { expiresIn: '24h' });
    console.log('JWT token:', token);
    return token
}

const decodeJWT = (token) => {
    console.log(token);
    let decodedjwt;
        jwt.verify(token, secretKey, function (err, decoded) {
            if (err) {
                console.log(err);
                decodedjwt = null
            } else {
                console.log(decoded)
                decodedjwt = decoded
            }
        })
        return decodedjwt

}



module.exports = { createJWT, decodeJWT}


