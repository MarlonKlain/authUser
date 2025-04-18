import { verify } from "../../libs/jwt.js";

//this will be a middleware that will be responsible for the user authentication before the request is started on the server
//in Fastity, the syntax is the same as the route syntax
export async function isAuthenticated(request, reply) {
    const rawToken = request.headers?.authorization
    const tokenParts = rawToken.split('Bearer ')
    const accessToken = tokenParts?.[1]

    const payload = await verify(accessToken)

    console.log({payload})

    if(!payload){
        return reply.code(401)
        .send({
            error: "Invalid token"
        })
    }
}