FROM node:20.2.0-alpine
MAINTAINER Oleksandr Poriadin <ale.poriadin@gmail.com>

WORKDIR /app/portfolio-front
EXPOSE 3000
COPY package.json package-lock.json* ./
RUN npm install --production
COPY ./ ./

CMD ["npm", "start"]

