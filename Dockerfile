#FROM docker.paziresh24.info/node:14.18.2-alpine
FROM docker.devneeds.ir/node:18-alpine AS base
WORKDIR /app

COPY package.json ./ 

RUN npm config set fetch-retry-mintimeout 100000 && npm config set fetch-retry-maxtimeout 600000 
RUN npm config set registry https://npm.devneeds.ir/
RUN npm install --force && npm cache clean --force

COPY . .


RUN npm run build && npm cache clean --force

EXPOSE 3000

ENV PORT 3000

#CMD ["yarn", "start"]
CMD ["npm", "start"]
