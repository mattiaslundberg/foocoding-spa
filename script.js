function getEndpoint(searchFor) {
  if (searchFor) return `http://127.0.0.1:8000/snippets/?q=${searchFor}`;
  return 'http://127.0.0.1:8000/snippets';
}

// Get snippets from api
const xhr = new XMLHttpRequest();
xhr.open('GET', getEndpoint());
xhr.addEventListener('load', evt => {
  const results = JSON.parse(evt.currentTarget.response).results;
  const list = document.getElementById('snippet-list');
  list.innerHTML = '';
  results.forEach(result => {
    addSnippetLinkToDOM(list, result);
  });
});
xhr.send();

function addSnippetLinkToDOM(parent, snippet) {
  const item = document.createElement('li');
  const link = document.createElement('a');
  link.textContent = snippet.title;
  link.setAttribute('href', '#');
  parent.appendChild(item);
  item.appendChild(link);

  link.addEventListener('click', evt => {
    const container = document.getElementById('snippet');
    container.textContent = snippet.code;
  });
}
