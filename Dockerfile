FROM node:8

RUN apt-get update

RUN apt-get install htop

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY web ./web

COPY .process.yml .

COPY logs ./logs

EXPOSE 3000

CMD ["npm", "start"]
