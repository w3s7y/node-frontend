FROM node:latest

WORKDIR /usr/src/app
COPY *.js /usr/src/app
COPY *.json /usr/src/app

RUN npm install

EXPOSE 8080
ENTRYPOINT [ "npm", "start" ]
