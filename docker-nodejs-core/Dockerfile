FROM node:16-alpine

ARG DEFAUL_PORT=80

WORKDIR app

COPY ./package.json /app

RUN npm i

COPY . /app

ENV PORT $DEFAUL_PORT

EXPOSE $PORT

VOLUME ["/app/data"]

CMD ["npm", "run", "start:dev"]