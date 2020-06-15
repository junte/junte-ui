FROM node:10.13 as build

WORKDIR /src

COPY package.json .

RUN npm i

COPY projects/junte-ui/package.json projects/junte-ui/package.json

RUN cd projects/junte-ui && npm i

COPY . .

RUN npm run build

###

FROM nginx:1.17.4-alpine

WORKDIR /var/www

COPY deploy/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /src/dist/junte-ui-app .

EXPOSE 8080
