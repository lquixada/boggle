FROM node:8

ENV NODE_ENV production

WORKDIR /app

RUN apt-get update

RUN apt-get install htop

RUN mkdir -p ./logs

COPY package*.json ./

COPY yarn.lock ./

RUN yarn --production

COPY web ./web

COPY .process.yml .

EXPOSE 3000

CMD ["npm", "start"]
