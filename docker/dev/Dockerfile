FROM node:13
WORKDIR /usr/src/kakato
COPY package*.json .
COPY . .

RUN npm install

EXPOSE 4545

CMD ["npm", "run", "dev"]
