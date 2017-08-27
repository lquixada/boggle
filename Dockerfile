FROM mhart/alpine-node:8

WORKDIR /app
COPY . .

RUN npm install --production

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
