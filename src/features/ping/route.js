import { endpoint } from "./endpoint.js"

export default {
    //what is the request
    method: 'GET',
    //the url path
    url: '/ping',
    //the function that will handle this endpoint (ping)
    handler: endpoint,
    //the representation of the response, both at the entrance and at the exit
    schema: {
        //object
        response:{
            200: {
                //the body response will return a object, that is defined below
                type: 'object',
                //What will be the properties that will come along in the body
                properties: {
                    ping: {
                        //the type of the object string
                        type : 'string'
                    }
                }
            }
        }
    }
}