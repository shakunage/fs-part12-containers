FROM node:20

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

ENV VITE_BACKEND_URL=http://localhost:8080/api/

EXPOSE 5173

RUN npx jest

CMD ["npm", "run", "dev"]
