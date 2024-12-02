FROM node:20

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY --chown=node:node . .

CMD ["npm", "start"]