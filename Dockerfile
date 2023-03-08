FROM node:18.14.2
WORKDIR /
RUN npm install
ENTRYPOINT [ "ng", "serve" ]