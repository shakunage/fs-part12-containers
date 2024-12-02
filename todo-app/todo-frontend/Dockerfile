FROM node:20

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install -g serve

RUN npm ci

COPY . .

ENV VITE_BACKEND_URL=http://localhost:8080/api/

RUN npx jest

RUN npm run build

CMD ["serve", "-s", "dist", "--listen", "0.0.0.0:4173"]
