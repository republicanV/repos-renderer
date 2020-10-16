### Simple React Application that renders list of GitHub repositories via search.

## API
This project is using the GitHub GrapQL API v4 for fetching the list of repos.
See the [GitHub GraphQL API documentation](https://docs.github.com/graphql) for more information.

## How to build the App:

### You need to have an Access Token to see the list of repos
1. Create an Access Token.
See the [Creating a personal access token documentation](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) for more information.
2. Create a `.env` file in the project root and put this line in it:
`REACT_APP_GITHUB_KEY = your_key_goes_here`

### Run the App with Docker
1. [Install Docker Compose](https://docs.docker.com/compose/install/).
2. Build and run the Docker service:
`docker-compose build dev` 
`docker-compose up dev`
3. Find out the IP address of running Docker engine:
`docker-machine ip default`
`-> 192.168.99.100`
4. You should be able to visit http://192.168.99.100:4680. Beware that your IP address and port may vary.

### Run tests with Docker
`docker-compose build test`
`docker-compose run --rm test`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Yarn Scripts

See the section about [available yarn scripts](docs/available-scripts.md) for more information.
