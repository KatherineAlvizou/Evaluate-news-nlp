 export function handleSubmit(event) {
    event.preventDefault()

    // check if url was put into the form field
    let url = document.getElementById('user-input').value
    Client.checkUrl(url)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}


