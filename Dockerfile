FROM node:10

ENV APPLICATION_ROOT /app/api-server

RUN mkdir /app/
ADD . /app/

WORKDIR $APPLICATION_ROOT

RUN npm install
