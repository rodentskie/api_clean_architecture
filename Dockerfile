FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./

USER root

RUN npm install
COPY . .
EXPOSE 2001

CMD ["npm", "start"]