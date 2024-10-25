FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

COPY . .

CMD npm ci && npm start