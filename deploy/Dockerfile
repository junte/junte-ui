FROM node:10.13 as build

WORKDIR /src

COPY package.json .

RUN npm i \
  && cd projects/junte-ui \
  && npm i

COPY . .

RUN npm run build \
  && cd projects/junte-ui \
  && npm run publish:unstable


FROM nginx:1.17.4-alpine

WORKDIR /var/www

COPY deploy/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /src/dist/junte-ui-app .

EXPOSE 8080
