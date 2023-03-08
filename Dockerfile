FROM node:18.14.2
WORKDIR /app
COPY ./ /app
RUN npm install --force
ENTRYPOINT [ "npm", "run", "start" ]
EXPOSE 4200