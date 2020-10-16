# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:12 as builder

RUN mkdir -p /usr/src/app
 
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose
WORKDIR /usr/src/app
 
# Copies package.json and yarn.lock to Docker environment
COPY package.json yarn.lock ./

EXPOSE 3000
 
# Installs all node packages
RUN yarn
 
# Copies everything over to Docker environment
COPY . .
