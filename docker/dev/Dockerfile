FROM node:9.8.0-slim
WORKDIR appdir/
COPY package.json .
COPY .eslintrc.json .


RUN npm install

CMD ["npm", "run", "dev"]
