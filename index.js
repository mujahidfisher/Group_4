// Request Body 
const group = {
// First we use the GET method
    method: "GET",
// Then I add my API details in this group object.
    url: "https://jsonplaceholder.typicode.com/todos/1",
    headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "jsonplaceholder.typicode.com"
    },
    body: '{"url":"https://jsonplaceholder.typicode.com/todos/1"}'
}
//  I call the fetch API and provided it with the group object as a second parameter.
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
// I called the API and logged the response on the console after converting it to JSON.
      .then(json => console.log(json))
console.log(group);

