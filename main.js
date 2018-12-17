const API_ROOT = 'http://localhost:5000/api/fetch'
/**
 * @type {HTMLFormElement}
 */
const formUser = document.getElementById('formUser')
const usersList = document.getElementById('usersList')

formUser.addEventListener('submit', async (ev) => {
    // Avoiding the standard Submit behavior
    ev.preventDefault()
    //
    let user = {
        name: formUser.name.value,
        age: formUser.age.value
    }
    formUser.name.value = ''
    formUser.age.value = 0
    //
    await createUser(user)
    await getUsers()
})

async function getUsers() {
    let response = await fetch(API_ROOT, {
        method: 'GET'
    })
    let users = await response.json()
    //
    usersList.innerHTML = ''
    for(let user of users) {
        let li = document.createElement('li')
        li.innerText = `${user.name} – ${user.age}`
        usersList.appendChild(li)
    }
    //
    return users
}

async function createUser(user) {
    let response = await fetch(API_ROOT, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.ok
}

window.addEventListener('load', async (ev) => {
    await getUsers()
})