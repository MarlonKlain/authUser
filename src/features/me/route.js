import { endpoint } from './endpoint.js'
import { isAuthenticated } from '../shared/is-authenticated.js'

export default {
  method: 'GET',
  url: '/me',
  //preHandler will be the middleware action
  preHandler: isAuthenticated,
  handler: endpoint,
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type:'string' },
          name: { type:'string' },
          username: { type:'string' }
        }
      },
      401: {
        type: 'object',
        properties: {
          error: { type:'string' }
        }
      }
    }
  }
}