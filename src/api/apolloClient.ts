// External dependencies
import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject
} from '@apollo/client';

// Local modules
import { API_URL, AUTH_TOKEN } from 'api/constants';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: API_URL,
    headers: {
        Authorization: AUTH_TOKEN,
    },
    cache: new InMemoryCache()
});

export default client;
