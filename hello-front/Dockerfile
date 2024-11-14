FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci
RUN npm install -g serve

RUN npm run build

CMD ["serve", "dist"]
