async function getData(){
    try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE2MDUyZjMzODEzZjAwMTUwZGRkZmMiLCJpYXQiOjE2NTUwNDc0NzEsImV4cCI6MTY1NjI1NzA3MX0.RuPTjsVlL5PTIeAwgZdDYvGnBcVcM-80vKdBJGRII6E"
        }
        })
    const dataBody = await response.json()
    console.log(dataBody)
    }
    catch (error) {
        console.log(error)
    }
}
getData()