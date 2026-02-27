import "./styles.css";

const Hello1 = 'Hey am from the Home file'

import imageHome from './home.jpg'
function renderHome(){
    const content = document.getElementById('content')
    const image = document.createElement('img')
    const div = document.createElement('div')
    image.src = imageHome;
    const intro = document.createElement('p')
    intro.textContent = 'Alazer Restaurant, The Best Restraunt with the best service you could ever have'
    div.id = 'homeContent'
    div.appendChild(image)
    div.appendChild(intro)
    content.appendChild(div)
    
}





export{Hello1, renderHome, imageHome}


