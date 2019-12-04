'use strict';

// keyword goes into dropdown
// url, title, description goes into section
// horns are a stretch goal

const animalsArray = [];

// constructor for the animal
function Animals(animalObj) {
  this.title = animalObj.title;
  this.image_url = animalObj.image_url;
  this.description = animalObj.description;
  this.keyword = animalObj.keyword;
  this.horns = animalObj.horns;

  animalsArray.push(this);
}

// render the object
Animals.prototype.render = function () {

  // get the template
  const myTemplate = $('#photo-template').html();

  // make a new section
  const $newSection = $('<section></section>');

  // set newsection's html content to the template
  $newSection.html(myTemplate);

  // put the title into the section
  $newSection.find('h2').text(this.title);

  // put the image into the section
  $newSection.find('img').attr('src', this.image_url);
  $newSection.find('img').attr('alt', this.title);

  // put description into section
  $newSection.find('p').text(this.description);

  // append newsection to parent (main)
  $('main').append($newSection);
};

// getting the data and making a new animal object
$.get('./data/page-1.json', function (animal) {
  for (let i = 0; i < animal.length; i++) {
    new Animals(animal[i]).render();
  }
});
