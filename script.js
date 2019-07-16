const addResponse = (item, parent) => {
    const li = document.createElement("li");
    parent.appendChild(li);
    const a = document.createElement("a");
    li.appendChild(a);
    a.setAttribute("href", item.link);
    a.textContent = item.title;
};

const addResponses = (rT, parent) => {
    parent.innerHTML = "";
    const response = JSON.parse(rT);
    const items = response.results;
    items.forEach(i => addResponse(i, parent));
};

const result = document.getElementById("result")
const input = document.getElementById("q");
const form = document.getElementById("form")

const getFromServer = (e) => {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", () => {
        addResponses(oReq.responseText, result);
    });

    oReq.open("GET", `http://127.0.0.1:8000/snippets/?q=${input.value}`);
    oReq.send();
};

form.addEventListener("submit", (e) => { e.preventDefault(); getFromServer() });
input.addEventListener("keyup", getFromServer);

getFromServer();