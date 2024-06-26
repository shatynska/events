FROM node:20.10-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.17.1-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY .docker/nginx/conf.d/nginx.conf /etc/nginx/nginx.conf
