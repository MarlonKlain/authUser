import prisma from '../../libs/prisma.js'

export async function endpoint(request, reply) {
  //getting the raw token
  const rawToken = request.headers?.authorization
  //Spliting the token from the Bearer word that comes together with the token
  const tokenParts = rawToken.split('Bearer ')
  //Getting from the generated array only the token part
  const accessToken = tokenParts?.[1]

  //Since the JWT token has three parts, each one separated with .(period)
  //Where:
  // Header:
  // This part contains metadata about the token, including the type (JWT) and the signing algorithm used

  // Payload:
  // This is the core of the token, containing the claims (information) you want to transmit.
  // Claims can be standard (like user ID, expiration time) or custom.

  // Signature:
  // This part is generated using a secret key and the algorithm specified in the header, 
  // verifying the integrity of the token and ensuring it hasn't been tampered with. 

  //Here we want the payload part, so we split this at the .
  const rawPayload = accessToken.split(".")
  //Select the payload part (SECOND ONE) and decoded it 
  const user = JSON.parse(atob(rawPayload[1]))

  const userinformation = await prisma.user.findFirst({
    where:{
      id: user.id
    }
  })

  return reply.code(200)
    .send({
      id: userinformation.id,
      name: userinformation.name,
      username: userinformation.username
    })
}