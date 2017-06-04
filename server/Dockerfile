# docker build -t whatsapp .

FROM node
COPY . /code
WORKDIR /code
RUN npm install
CMD node /code/index.js