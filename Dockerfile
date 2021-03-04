FROM node:9-slim
WORKDIR /index
COPY package.json /index
RUN npm install
COPY . /index
EXPOSE 5555
CMD ["npm","start"]