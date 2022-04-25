FROM node:16-alpine

ARG DEFAUL_PORT=3000

WORKDIR app

COPY ./package.json /app

RUN npm i

COPY . /app

ENV PORT $DEFAUL_PORT

EXPOSE $PORT

RUN npm run build

CMD ["npm", "run", "start:prod"]
