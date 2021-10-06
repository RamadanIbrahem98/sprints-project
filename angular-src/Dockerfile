FROM node:14-alpine

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# We don't copy everything at once to take advantage of layer cache in docker
COPY package*.json /app/
 
# Install any needed packages
RUN npm ci
 
# Bundle app source
COPY . /app
 
EXPOSE 4200
 
CMD [ "npm", "start" ]