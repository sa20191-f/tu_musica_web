
FROM node:10-alpine
# Create app directory
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Install app dependencies
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 4100
CMD ["nginx", "-g", "daemon off;"]