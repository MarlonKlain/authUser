import  prisma  from '../../libs/prisma.js'
import { hash } from '../../libs/argon2.js'

export async function endpoint(request, reply) {
    //Receiving the user information
  const { name, username, password } = request.body

  //Verifying if already exists a user with the username that the user filled
  //The way this function is doing it, it is by counting how many user already exist with the user name provided
  // and comparing with 0 to return a boolean
  const isUsernameAvailable = await prisma.user.count({
    where: {
      username
    }
  }) === 0

  //if the comparing is false, it will early return an error informing that username already exists
  if (!isUsernameAvailable) {
    return reply.code(400)
      .send({
        error: 'Username not available!'
      })
  }

  //if does not already exists it will create a record with the user's information in the database
  const user = await prisma.user.create({
    data: {
      name,
      username,
      //the password is hashed
      password: await hash(password)
    }
  })

  //if all correctly it will return a status 201 and the user id
  return reply.code(201)
    .send({
      id: user.id.toString()
    })
}