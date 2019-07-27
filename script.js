function getEndpoint(searchFor) {
  if (searchFor) return `http://127.0.0.1:8000/snippets/?q=${searchFor}`;
  return 'http://127.0.0.1:8000/snippets';
}
