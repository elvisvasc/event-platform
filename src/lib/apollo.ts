import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oq0yww0o3b01yw8fh06u9e/master',
  cache: new InMemoryCache()
})