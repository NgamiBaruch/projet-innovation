FROM node:20 as build

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN npm run build

FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

COPY --from=build app/dist/eis--web/browser /usr/share/nginx/html

EXPOSE 80
