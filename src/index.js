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
  const { success: generatedFileUrl } = generateRes;
  console.log(`[${env.APP_NAME}]: Downloading CV: ${generatedFileUrl}`);
  await client.downloadCV(uploadDir, generatedFileUrl); //download request to API.
  console.log(`[${env.APP_NAME}]: Successfully saved in the folder: ${uploadDir}`);

  // Generate for fake User
  console.log(`[${env.APP_NAME}]: Generating CV (for fake user)...`);
  const generateForFakeUserRes = await client.generateForFakeUser({
    description, //job description
    first_name: "Artur",
    last_name: "Doyle",
    country: "USA",
    city: "New York",
    education: JSON.stringify([
      { key: "New York Academy", value: "2009 - 2016" }
    ]),
    customers: JSON.stringify([
      { key: "Apple", value: "Jan 2022 - Present (2 years)" },
      { key: "Google", value: "Jan 2020 - Jan 2022 (2 years)" },
      { key: "Meta", value: "Jan 2018 - Jan 2020 (2 years)" },
    ]),
    languages: JSON.stringify([
      { key: "English", value: "B2/C1" },
      { key: "German", value: "B1" },
      { key: "Ukrainian", value: "C2" }
    ]),
    contacts: JSON.stringify([
      { key: "Mobile", value: "+1XXXXXXXXXX" },
      { key: "E-Mail", value: "artur@example.com" },
      { key: "LinkedIn", value: "https://linkedin.com" },
    ]),
    managed: "1", //0 for false
    language: "en" //en, de, ua
  });

  if (generateRes.code !== 200) {
    console.log(generateRes.error);
    return;
  }

  // Download & Save CV to the folder
  const { success: generatedForFakeUserfileUrl } = generateForFakeUserRes;
  console.log(`[${env.APP_NAME}]: Downloading CV (for fake user): ${generatedForFakeUserfileUrl}`);
  await client.downloadCV(uploadDir, generatedForFakeUserfileUrl); //download request to API.
  console.log(`[${env.APP_NAME}]: Successfully saved in the folder: ${uploadDir}`);

  return 0;
}

main();