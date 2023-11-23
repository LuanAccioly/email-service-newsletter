FROM node:18.16.0

# Create app directory
WORKDIR /usr/src/app

# .env
COPY .env ./

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8800

CMD ["npm", "start"]