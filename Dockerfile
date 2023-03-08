FROM node:18.14.2
RUN npm install
ENTRYPOINT [ "ng", "serve" ]