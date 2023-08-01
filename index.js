// Body Request

const group = {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos/1",
    headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "jsonplaceholder.typicode.com"
    },
    body: '{"url":"https://www.theguardian.com/world/2020/oct/24/thousands-join-poland-protests-against-strict-abortion-laws"}'
}
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
console.log(group);

