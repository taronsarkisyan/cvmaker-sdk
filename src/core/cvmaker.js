const path = require("path");
const { mkdir, writeFile } = require("fs/promises");

/**
 * Target Class
 */
class CvMaker {

  url = "https://cv.arnelify.com/api/v0.5/generate";
  token = null;

  /**
   * Set Token
   * @param {string} value 
   */
  setToken(value) {
    
    value = value.trim();
    const hasValue = value || 0;
    if (hasValue) this.token = value;
  }

  /**
   * Get Token
   * @returns 
   */
  getToken() {
    return this.token;
  }

  /**
   * Request
   * @param {object} data 
   * @param {boolean} download 
   * @returns 
   */
  async request(data, download = false) {

    if (download) {

      const response = await fetch(data);
      if (!response.ok) return null;

      const arrayBuffer = await response.arrayBuffer();
      return Buffer.from(arrayBuffer);
    }

    const url = this.url;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {

      const { status, message } = await response.json();

      return {
        code: status,
        error: message
      }
    }

    return response.json();
  }

  /**
   * Generate
   * @param {string} description 
   * @returns 
   */
  async generate(description) {
    const user_token = this.token;
    return this.request({ user_token, description });
  }

  /**
   * Generate for fake user
   * @param {object} data 
   * @returns 
   */
  async generateForFakeUser(data) {
    const user_token = this.token;
    return this.request({ user_token, ...data });
  }

  /**
   * Download CV
   * @param {string} uploadDir 
   * @param {string} downloadUrl 
   */
  async downloadCV(uploadDir, downloadUrl) {

    await mkdir(uploadDir, { recursive: true });
    const buffer = await this.request(downloadUrl, true);

    const file = downloadUrl.split('/').pop();
    const filename = path.resolve(uploadDir, file);
    if (buffer) await writeFile(filename, buffer);
  }
}

module.exports = CvMaker;