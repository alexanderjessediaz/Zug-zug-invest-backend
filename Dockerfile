FROM node:14
WORKDIR /index
COPY package.json /index
RUN npm install
COPY . .
CMD ["node","index.js"]