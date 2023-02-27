FROM node:latest

RUN npm install --location=global npm@latest

RUN npm config set fetch-timeout 1800000

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g @angular/cli

RUN npm install --save-dev @angular-devkit/build-angular

COPY . .

CMD ng serve --host 0.0.0.0

EXPOSE 4200/tcp



