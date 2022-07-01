function getAPI(){
    fetch('https://jsonplaceholder.typicode.com/todos/').then((response) => {
        response.json(response)
    }) 
}
