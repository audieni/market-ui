FROM node:18.14.2
WORKDIR /app
COPY ./ /app
RUN npm install -g typescript
RUN npm install -g @angular/cli
RUN npm install --force
ENTRYPOINT [ "ng", "serve" ]
EXPOSE 4200