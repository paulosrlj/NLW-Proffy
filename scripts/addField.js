// Pegar o botão
document.querySelector('#add-time')
    .addEventListener('click', cloneField)


// Executar uma ação
function cloneField(){
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar 
    fields.forEach((field) => {
        field.value = ''
    })

    //colocar na página 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}