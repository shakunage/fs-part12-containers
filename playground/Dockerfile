FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

COPY . .

CMD DEBUG=playground:* npm ci && npm start