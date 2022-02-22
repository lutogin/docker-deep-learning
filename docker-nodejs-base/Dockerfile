FROM node:16-alpine

WORKDIR app

COPY ./package.json /app

RUN npm i

COPY . /app

EXPOSE 3000

VOLUME ["/app/data"]

CMD ["npm", "run", "start:dev"]