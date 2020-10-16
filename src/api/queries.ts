import gql from 'graphql-tag';

export const GET_REPOS = gql`
    query($search_term: String!, $first: Int) {
        search(query: $search_term, type: REPOSITORY, first: $first) {
            repositoryCount,
            edges {
                node {
                    ... on Repository {
                        id,
                        name,
                        owner {
                            login
                        },
                        url,
                        stargazers {
                            totalCount
                        },
                        forkCount,
                    }
                }
            }

            pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
            }
        }
    }
`;
