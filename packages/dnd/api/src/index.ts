import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema'
 
// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema })
 
// Pass it into a server to hook into request handlers.
const server = createServer(yoga)
 
if (import.meta.env.PROD) {
  // Modified server startup
  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}
// Start the server and you're done!

export const viteNodeApp = yoga;