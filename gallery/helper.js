module.exports = {
  handle: function(error, response, body, callback) {
    if (error) { callback(error); }
    else if (response.statusCode === 200) {
      callback(null, JSON.parse(body).data);
    }
    else {
      callback(new Error(response.body));
    }
  }
};
