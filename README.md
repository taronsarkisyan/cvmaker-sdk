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

## Generate Payload

API URL:
```
https://cv.arnelify.com/api/v0.5/generate
```

Payload example (application/json)
```
{
  user_token: 'your-token-here',
  description: 'your-job-description',
}
```
You can also find an example of code in bash:
```
./src/examples/generate.sh
```

## Generate for fake User

API URL:
```
https://cv.arnelify.com/api/v0.5/generate
```

Payload example (application/json):
```
{
  "user_token": "your-token",
  "description": "your-job-description",
  "first_name": "Artur",
  "last_name": "Doyle",
  "country": "USA",
  "city": "New York",
  "education": "[{\"key\":\"New York Academy\",\"value\":\"2009 - 2016\"}]",
  "customers": "[{\"key\":\"Apple\",\"value\":\"Jan 2022 - Present (2 years)\"},{\"key\":\"Google\",\"value\":\"Jan 2020 - Jan 2022 (2 years)\"},{\"key\":\"Meta\",\"value\":\"Jan 2018 - Jan 2020 (2 years)\"}]",
  "languages": "[{\"key\":\"English\",\"value\":\"B2/C1\"},{\"key\":\"German\",\"value\":\"B1\"},{\"key\":\"Ukrainian\",\"value\":\"C2\"}]",
  "contacts": "[{\"key\":\"Mobile\",\"value\":\"+1XXXXXXXXXX\"},{\"key\":\"E-Mail\",\"value\":\"artur@example.com\"},{\"key\":\"LinkedIn\",\"value\":\"https://linkedin.com\"}]",
  "managed": "1",
  "language": "en"
}
```
You can also find an example of code in bash:
```
./src/examples/generateForFakeUser.sh
```

## Response Examples
Success Response:
```
{
  code: 200, //always 200
  success: "https://download-link-for-pdf" //always has success
}
```

Error Response:
```
{
  code: 409, //not only 409
  error: "Conflict" //always has error message (string)
}
```