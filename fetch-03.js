// frist we fetch the url which we got from  https://jsonplaceholder.typicode.com/
// we got promise from that url and convert it to json promise
// then we console.log that json promise


/*
Variant: 01

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
*/

/*
Variant: 02

const url = "https://jsonplaceholder.typicode.com/todos/1"
fetch(url)
.then(responce => responce.json())
.then(json => console.log(json))
*/

// Variant: 03

function loadData() {
    const url = "https://jsonplaceholder.typicode.com/todos/1"
    fetch(url)
        .then(respence => respence.json())
        .then(json => console.log(json))
}