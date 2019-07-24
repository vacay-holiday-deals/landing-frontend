# base image
FROM node:latest

# set working directory
WORKDIR /app

# copy all to folder
COPY . /app

# run npm install
RUN npm install --silent

#run npm build to build folder
RUN npm run build

# install server module
RUN npm i -g serve

# start app
CMD ["serve", "-s", "build"]