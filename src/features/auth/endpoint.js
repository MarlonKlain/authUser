import prisma from "../../libs/prisma.js";
import { verify } from "../../libs/argon2.js";
import { sign } from "../../libs/jwt.js";

//validteUserAndPassword receives a boolean based on user && await verify
const validteUserAndPassword = async (user, password) => {
    return user && await verify(user.password, password)
  }

export async function endpoint(request, reply) {
    //Receiving the information
    const { username, password } = request.body
    

    //return the first result found
    const user = await prisma.user.findFirst({
        where : {
            username
        }
    })

    const isValidCredentials = await validteUserAndPassword(user, password)

    // When dealing with sensitive information, such as during a login process,
// and an error occurs with the provided credentials, there are two main approaches
// to handling and displaying these errors to the user:

// 1. Return a generic error message, such as:
//    "Incorrect information, please try again."
//    Why?
//    This approach avoids giving hints to potential attackers. For example,
//    if the message says "Incorrect username", it might indicate that the username exists,
//    which helps a malicious user confirm valid accounts. 
//    A generic message reduces the chances of revealing useful information to attackers.

// 2. Return specific error messages, such as:
//    "Incorrect username" or "Incorrect password".
//    This approach sacrifices some security in favor of better UX (User Experience).
//    It helps guide legitimate users by clearly indicating what went wrong,
//    which can make the login experience smoother and less frustrating.

    if (!isValidCredentials) {
        return reply.code(401)
        .send({
            error: 'Invalid credentials'
        })
    }

    //creating a token that will carry the user id
    const accessToken = await sign({
        id: user.id
    })
    return reply.code(200)
    .send({
        accessToken
    })
}