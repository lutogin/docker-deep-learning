FROM node:16-alpine

ARG DEFAULT_PORT=3000

WORKDIR app

COPY ./package.json /app

RUN npm i

COPY . /app

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

RUN npm run build

CMD ["npm", "run", "start:prod"]