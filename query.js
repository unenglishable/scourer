var request = require('request');
var URI = require('urijs');
var clientId = require('./auth.json')['client_id'];
var gallerySearchURL = 'https://api.imgur.com/3/gallery/search/';

module.exports = function(params, callback) {
  var queryParams = {
    q_all: params.all,
    q_any: params.any,
    q_exactly: params.exactly,
    q_not: params.not,
    q_type: params.type,
    q_size_px: params.size
  }
  var searchURI = URI(gallerySearchURL).query(queryParams).toString();
  var options = {
    uri: searchURI,
    headers: {
      'Authorization': 'Client-ID ' + clientId
    }
  };
  request(options, callback);
};
