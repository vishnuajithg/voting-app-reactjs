FROM node:20.15.1
    WORKDIR /usr/src/app
    COPY package*.json ./
    RUN npm install
    COPY . .
    RUN npm install -g nodemon 
    CMD [ "npm","start" ]