const data = [
  { name: 'bob', age: 23 },
  { name: 'alice', age: 39 },
];

function addCard(data) {
  console.log(data);
  // clone the template
  const template = document
    .getElementById('card-template')
    .content.cloneNode(true);

  // populate the template
  template.querySelector('.card-title').innerText = data.name;
  template.querySelector('.card-text').innerText = data.age;

  // include the populated template into the page
  document.querySelector('#card-list').appendChild(template);
}



for (element of data) {
  addCard(element);
}
// portfolio section
const artist = {
  name: 'Van Gogh',
  portfolio: [
    {
      title: 'portrait',
      url: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image',
    },
    {
      title: 'sky',
      //keep trying to figure out why this pic wont load so i swapped links
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Vincent_van_Gogh_-_De_sterrennacht_-_Google_Art_Project.jpg/640px-Vincent_van_Gogh_-_De_sterrennacht_-_Google_Art_Project.jpg'
    },
  ]
};


const portfolioTemplate = document.getElementById('portfolio-template');
const portfolioContainer = document.getElementById('portfolio-list');

for (const piece of artist.portfolio) {
  const clone = portfolioTemplate.content.cloneNode(true);
//fill in image and title
const img = clone.querySelector('.card-img-top');

img.src = piece.url;
img.alt = `${piece.title} — ${artist.name}`;

//show the title and artist name
clone.querySelector('.card-title').innerText = `${piece.title} — ${artist.name}`;

//add card to page
portfolioContainer.appendChild(clone);
  
}