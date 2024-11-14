FROM node:20

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci && npm install -g nodemon

COPY --chown=node:node . .

EXPOSE 3000

CMD ["nodemon", "run", "dev"]