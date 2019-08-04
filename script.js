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

  const cat = await fetch(catUrl);
  const catJson = await cat.json();
  addToDom(catJson.file);

  try {
    const dog = await fetch(dogUrl);
    const dogJson = await dog.json();
    addToDom(dogJson.url);
  } catch (e) {
    console.log('error dog');
  }
}
app();
