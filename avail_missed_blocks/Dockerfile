FROM node:17-alpine

RUN yarn config set fetch-timeout 1800000

WORKDIR /app

COPY package.json .

COPY . . 

RUN yarn install

EXPOSE 5000

CMD ["yarn", "watch"]

