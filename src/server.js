import fastify from "fastify";
import pingRoute from "./features/ping/route.js"
import { 
    routerLoader,
    swaggerLoadder 
} from "./loaders/index.js";

// fastify is like a constructor that will iniatiate a new instance
const server = fastify({
    // logger is a property that will log on console what is happening everytime that a request is made to the server.
    logger: true
})

//this works exacty how the code below:
//but much more organized and well structured
// server.get('ping', (resquest, reply) => {
    //login
// })
// server.route(pingRoute)

try {
    //swagger must be declared before the routes
    await swaggerLoadder().load(server)
    await routerLoader().load(server);
    await server.listen({
        port: 3001
    })
    console.log(`
        Server Running!`);
    
} catch (error) {
    console.log(error);
    process.exit(1)
}