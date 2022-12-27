Cypress.Commands.add('login', ({ username, password }) => {
    cy.request('POST', 'http://localhost:3001/api/login', {
        username, password
    }).then((response) => {
        localStorage.setItem('loggedNoteappUser', JSON.stringify(response.body))
        cy.visit('http://localhost:3000')
    })
})


Cypress.Commands.add('createNote', ({ content, important }) => {

    cy.request({
        method: 'POST',
        url: 'http://localhost:3001/api/notes',
        body: { content, important },
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('loggedNoteappUser')).token}`
        }
    })
    cy.visit('http://localhost:3000')
})