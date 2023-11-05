FROM node:21-alpine3.17

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./news-reader/package.json ./
COPY ./news-reader/package-lock.json ./
RUN npm install


COPY news-reader .
EXPOSE 5173

CMD ["npm", "run", "dev"]