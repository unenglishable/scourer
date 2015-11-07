var request = require('request');
var URI = require('urijs');
var clientId = require('./auth.json')['client_id'];
var gallerySearchURL = 'https://api.imgur.com/3/gallery/search/';

module.exports = function(params, callback) {
  var searchURI = URI(gallerySearchURL).query(params).toString();
  var options = {
    uri: searchURI,
    headers: {
      'Authorization': 'Client-ID ' + clientId
    }
  };
  request(options, callback);
};
