FROM node:16.1.0-alpine
WORKDIR /app
COPY package.json ./
COPY ./ ./
EXPOSE 8093
RUN npm install --save redux
RUN npm i
CMD ["npm", "run", "serve"]