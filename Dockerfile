FROM node:20.2.0-alpine
MAINTAINER Oleksandr Poriadin <ale.poriadin@gmail.com>

RUN apk update && apk upgrade

WORKDIR /usr/app/portfolio-ui
EXPOSE 3000
COPY ./ ./
RUN npm install -g npm@9.6.7
RUN npm install
CMD ["npm", "start"]
