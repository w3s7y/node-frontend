FROM node:latest
WORKDIR /usr/src/app
COPY *.js /usr/src/app
COPY *.json /usr/src/app
EXPOSE 8080
CMD [ "npm", "start" ]
