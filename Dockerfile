FROM node:14 as builder

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn

COPY [".", "."]

RUN yarn export

FROM nginx:latest

COPY --from=builder /usr/src/app/out/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]