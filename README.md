<img src="https://static.wikia.nocookie.net/arnelify/images/c/c8/Arnelify-logo-2024.png/revision/latest?cb=20240701012515" style="width:336px;" alt="Arnelify Logo" />

![CvMaker](https://img.shields.io/badge/CvMaker%20SDK-0.5-blue) ![Node](https://img.shields.io/badge/Node-20.15.1-green)

## 🚀 About
**CvMaker SDK** - provides a convenient interface for interacting with the [CvMaker](https://cv.arnelify.com|CvMaker) API

## ⚙️ Before install

* MacOS or Linux
* Windows with WSL2
* Docker
* Git

## 📦 Installation

Download SDK via Git command:
```
$ git clone git@github.com:taronsarkisyan/cvmaker-sdk.git
```

Create .env and insert API key from CvMaker:
```
$ cd ./cvmaker-sdk
$ cp ./.env.local ./.env
```

Open SDK-container:
```
$ docker compose up -d
$ docker ps
$ docker exec -it YOUR_CONTAINER_ID bash
```
Install dependencies:
```
$ yarn install
```
See the Target Class:
```
$ cat ./src/core/cvmaker.js
```
## 🚀  Usage
Lets run our sample app:
```
$ yarn start
```

## Release Notes
Version 0.5 - Release

We are excited to introduce the first version of the CvMaker SDK. Target class is located in the ./src/core directory and is utilized in the ./src/index.js srcipt. You can further use it in any of your projects.

Key Features:

* Basic functionality
* Easy integration

The script reads, downloads, and writes files to disk. Please check the read and write permissions for files in the container.