console.log('Client side javascript file is loaded ')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('#message-1')
const message1 = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    message.textContent = 'Loading...'
    message1.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message.textContent = data.error
            } else {
                message.textContent = data.location
                message1.textContent = data.forecast
            }
        })
    })
})