FROM node:18
WORKDIR /app 
COPY package*.json /app 
RUN npm install 
RUN npm install pm2 -g
COPY . /app 
RUN npm run compile:prod
RUN npm run bundle:prod
CMD [ "pm2-runtime", "start", "npm", "--", "start" ] 
EXPOSE 9030