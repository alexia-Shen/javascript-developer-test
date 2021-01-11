const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // To handle Arnie Quotes data
  return Promise.all(
    urls.map(url => httpGet(url))
  ).then(results => {
    // Resolve all responses from urls
    return results.map(result => {
      const body = JSON.parse(result.body);
      // Return Arnie Quote message when the quote is found, otherwise return error message
      return result.status === 200 ? {"Arnie Quote": body.message} : {"FAILURE": body.message};
    });
  }).catch((e) => {
    // Handle error
  });
};

module.exports = {
  getArnieQuotes,
};
