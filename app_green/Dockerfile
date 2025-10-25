FROM node:20-slim

WORKDIR /usr/src/app

COPY server.js .

RUN npm init -y && npm install express

EXPOSE 8082

CMD ["node", "server.js"]
