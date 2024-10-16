FROM node:20.15.1

WORKDIR /var/www/pod

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install sudo tzdata nano gcc g++ wget gnupg curl jq zip unzip -y
ENV TZ=Europe/Kiev

RUN yarn install

EXPOSE 3000