// Create new element
const div = document.createElement('div');
parent.appendChild(div);
div.setAttribute('myattr', 'hello');
div.innerText = 'hello';

// Perform API call
const oReq = new XMLHttpRequest();
oReq.addEventListener('load', () => {
  oReq.responseText;
});

oReq.open('GET', 'https://test.com');
oReq.send();
