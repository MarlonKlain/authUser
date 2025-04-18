import jwt from 'jsonwebtoken'

export async function verify(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        console.log(error);
        return false
    }
}


//payload will be the content that will be passed into the jwt token
export async function sign(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET)
}