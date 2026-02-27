import "./styles.css";

const Hello3 = 'and am from the about file, yup about'

function renderAbout(){
    const content = document.getElementById('content')
    const div = document.createElement('div')
    const intro = document.createElement('p')
    intro.textContent = 'Alazer restraunt, located in Worabe . we offer hotel standardarized foods prepared with care and Love, welcome abroad fellas'
    div.appendChild(intro)
    content.appendChild(div)
}

export {Hello3, renderAbout}