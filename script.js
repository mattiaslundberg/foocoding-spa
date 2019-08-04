/* eslint-disable no-console */
function addToDom(imgUrl) {
  const container = document.getElementById('container');
  const img = document.createElement('img');
  img.setAttribute('src', imgUrl);
  img.setAttribute('width', 400);
  container.appendChild(img);
}

async function app() {
  const catUrl = 'https://aws.random.cat/meow'; // file
  const dogUrl = 'https://random.dog/woof.json'; // url
  const foxUrl = 'https://randomfox.ca/floof/'; // image

  Promise.all([fetch(catUrl), fetch(dogUrl)])
    .then(([cat, dog]) => {
      if (!cat.ok || !dog.ok) {
        console.warn('Something failed in fetch');
      }
      cat.json().then(data => {
        addToDom(data.file);
      });
      dog.json().then(dogData => {
        addToDom(dogData.url);
      });
    })
    .catch(error => {
      console.warn(error);
    });
}
app();
