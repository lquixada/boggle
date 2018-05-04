FROM node:10

RUN apt-get update

RUN apt-get install htop

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
