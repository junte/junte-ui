FROM node:10.9 as build

RUN npm install -g @angular/cli@8.3.3

WORKDIR /src

COPY package.json .
RUN npm install

COPY . .

RUN npm run build:prod \
    && npm run build


FROM nginx:1.17.4-alpine

WORKDIR /var/www

COPY deploy/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /src/dist/junte-ui-app/* .

EXPOSE 8080
