FROM node:18.12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

#RUN npm install -g npm@9.2.0
RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

#RUN npm install --save-dev @angular/cli@14.1.0
EXPOSE 4200

CMD ["npm", "start"]

#FROM node:18.12-alpine
#WORKDIR /usr/src/app
#COPY package*.json ./
#RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install
#EXPOSE 4200
#CMD ["npm", "start"]