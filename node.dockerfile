FROM node:20.15.1

WORKDIR /var/www/sdk

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install sudo tzdata nano gcc g++ wget gnupg curl jq zip unzip -y
ENV TZ=Europe/Kiev

EXPOSE 3000