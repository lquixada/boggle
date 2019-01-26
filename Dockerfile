FROM node:10

ENV NODE_ENV production

RUN apt-get update

RUN apt-get install -y htop vim

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY logs ./logs

COPY web ./web

EXPOSE 3000

CMD ["node", "./web/app.js"]
