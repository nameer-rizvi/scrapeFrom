const axios = require("axios");

const { log, isString } = require("../shared/index");

module.exports = ({ url, params }) =>
  new Promise((resolve, reject) =>
    axios
      .get(url.trim(), { params })
      .then(res =>
        isString(res.data)
          ? resolve(res.data)
          : reject(log("url GET response is not a string"))
      )
      .catch(err => reject(err.message))
  );
