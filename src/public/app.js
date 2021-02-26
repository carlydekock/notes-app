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




/* function Note(jsonObject) {
  this.id = jsonObject.id;
  this.type = jsonObject.type;
  this.note = jsonObject.note;
  this.authorid = jsonObject.author_id;
}

Note.prototype.render = function () {
  const template = $('#note-template').html();
  const noteHTML = Mustache.render(template, this);
  $('ul').append(noteHTML);
}; */


/*   const $newAnimalOption = $('#templateSelector').find('option').clone(); */

/*   if (keywordArray.includes(this.keyword) !== true) {
    keywordArray.push(this.keyword);
    $newAnimalOption.attr('value', this.keyword);
    $newAnimalOption.text(this.keyword);
    $('#keyword').append($newAnimalOption); */
