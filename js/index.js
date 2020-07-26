const root = document.querySelector('#root')
const textTitle = 'Dificuldade'



// TAGGED TEMPLETE STING
const title = Title `
    color: #82589f;
    font-size: 2.5rem;
    letter-spacing: 2px;
    margin-bottom: 4rem;
    ${textTitle}
  
`


root.insertAdjacentHTML("beforeend", title)
root.insertAdjacentHTML("beforeend", wrapperCharacters)
root.insertAdjacentHTML('beforeend', slide)