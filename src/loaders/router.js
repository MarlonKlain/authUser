import path from 'node:path'
import url from 'node:url'

//this lib helps the file search in the system based in a pattern provided
import { glob } from 'glob'

//this function will be responsible for automatically search all the routes that exists in our project
export function routerLoader() {
    return {
        //This is return as an object because it allows the possibility to load all the routes when it is just necessary
        async load(fastify){
            const routesPath = path.resolve(
                //Defining what is the path that will be looked for.
                path.dirname(''),
                    //it start from the root of the project (userauth)
                    //then goes into
                    'src',
                    //then goes into
                    'features',
                    //then will loof for every folder that contains any file with the "route.js" at the end of the name
                    // * is used as placeholder
                    '**/*route.js'
            )

            //loading all the routes/files found 
            const routes = await glob(routesPath, {
                //only for windows systems
                windowsPathsNoEscape: true
            })

            // after all the routes been loaded this for loop will be responsible for import into the server
            //For every route/file found it will... :
            for (const route of routes) {
                //pathToFileURL will be responsible for taking the file url and import into the server indeed 
                const urlRoute = url.pathToFileURL(route)
                //dinamically import
                const routeDefinition = await import(urlRoute)
                //because the route.js has a object has exported as default it can only be access using the .default
                fastify.route(routeDefinition.default)
            }
        }
    }
}