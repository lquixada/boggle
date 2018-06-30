FROM node:8

RUN apt-get update

RUN apt-get install htop

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn --production

COPY web ./web

COPY .process.yml .

COPY logs ./logs

EXPOSE 3000

CMD ["npm", "start"]
