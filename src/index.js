const dotenv = require("dotenv");
const path = require("path");
const { readFile } = require("fs/promises");
const { parsed: env } = dotenv.config();

const CvMaker = require("./core/cvmaker"); //Target Class

/**
 * Main
 * @returns
 */
const main = async function () {

  // Path
  const uploadDir = path.resolve(env.UPLOAD_DIR_PATH); //see .env
  const filename = path.resolve("./src/data/001.txt"); //utf-8

  // Job Description
  const descriptionBuffer = await readFile(filename, 'utf-8');
  const description = descriptionBuffer.toString();

  // Token from .env
  const token = env.CVMAKER_API_TOKEN; //see .env

  // Init
  const client = new CvMaker();
  client.setToken(token);

  // Check init
  const hasToken = client.getToken();
  if (!hasToken) {
    console.log(`[${env.APP_NAME}]: .env is empty.`);
    return 1;
  }
  
  // Generate
  console.log(`[${env.APP_NAME}]: Generating CV...`);
  const generateRes = await client.generate(description); //request to API.
  if (generateRes.code !== 200) {
    console.log(generateRes.error);
    return;
  }

  // Download & Save CV to the folder
  const { success: fileUrl } = generateRes;
  console.log(`[${env.APP_NAME}]: Downloading CV: ${fileUrl}`);
  await client.downloadCV(uploadDir, fileUrl); //download request to API.
  console.log(`[${env.APP_NAME}]: Successfully saved in the folder: ${uploadDir}`);
  return 0;
}

main();