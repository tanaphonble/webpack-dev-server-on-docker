FROM node:boron

# app directory
WORKDIR /usr/src/app

# copy package.json from local to docker workdir
COPY package.json .

# install npm packages
RUN npm install

COPY . .

# expost port 8080 to local
EXPOSE 8080

CMD ["npm", "start"]
