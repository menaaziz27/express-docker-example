FROM node:18.14.2-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 4000

CMD ["node", "index.js"]