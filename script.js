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

//addCard(data.forEach);
//data.forEach(element => addCard(element))

for (element of data) {addCard(element)}