const root = document.querySelector('#root')
const textTitle = 'Alberto'



// TAGGED TEMPLETE STING
const title = Title `
    color: red;
    font-size: 20px;
    ${textTitle}
  
`

root.insertAdjacentHTML("beforeend", title)