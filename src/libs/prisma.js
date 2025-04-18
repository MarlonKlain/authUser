import { PrismaClient } from '../generated/prisma/client.js'

//creating a new instance of PrismaClient and exporting it
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

export default prisma