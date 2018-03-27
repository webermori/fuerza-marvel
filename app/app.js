// let CryptoJS = require('crypto-js');

// you will also have to setup the referring domains on your marvel developer portal
var PRIV_KEY = "ed09d964ea9baa31bd09b60dc4979fcd7cef48f1";
var PUBLIC_KEY = "020c8135bdd46af39055483d456ad085";

function getMarvelResponse() {

  var ts = new Date().getTime();
  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  
  // the api deals a lot in ids rather than just the strings you want to use
  var characterId = '1009718'; // wolverine                                                                             


  var url = 'http://gateway.marvel.com:80/v1/public/comics';

  console.log(url);
  $.getJSON(url, {
      ts: ts,
      apikey: PUBLIC_KEY,
      hash: hash,
      characters: characterId
    })
    .done(function(data) {
      // sort of a long dump you will need to sort through
      console.log(data);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

getMarvelResponse();