'use strict';


// Add token to local storage
// Interact with our own api, database

//Jquery
//Mustache

function userTokenStoreLs() {
  let tokenString = JSON.stringify(userToken);
  localStorage.setItem('token', tokenString);
}

function userTokenRetrieveLs() {
  let tokenFromLs = localStorage.getItem('token');
  let parsedToken = JSON.parse(tokenFromLs);
  return parsedToken;
}
