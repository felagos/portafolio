FROM node:14 as builder

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm i

COPY [".", "."]

RUN npm run export

FROM nginx:latest

COPY --from=builder /usr/src/app/out/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]