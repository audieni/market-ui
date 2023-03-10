FROM node:18.14.2 as node
WORKDIR /app
COPY . .
RUN npm install -g typescript
RUN npm install -g @angular/cli
RUN npm install --force
RUN npm run build --prod

FROM nginx:1.23.3
COPY --from=node /app/dist/market-ui /usr/share/nginx/html
EXPOSE 80
