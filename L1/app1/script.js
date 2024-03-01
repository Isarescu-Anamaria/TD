

function execute(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log(username,password);

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json =>
         console.log(json.length))
}