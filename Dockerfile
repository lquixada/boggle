FROM mhart/alpine-node:8

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
