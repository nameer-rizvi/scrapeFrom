const validate = require("./validate");
const axios = require("./axios");
const { cheerio } = require("../fn/index");

module.exports = customConfig => {
  return new Promise((resolve, reject) => {
    validate(customConfig)
      .then(() => {
        return axios(customConfig.api);
      })
      .then(html => {
        const {
          selector: { container, text, attr }
        } = customConfig;

        const data = cheerio({ html, container, text, attr });

        resolve(data);
      })
      .catch(err => reject(err));
  });
};
