import "./styles.css";

const Hello2 = 'hey am from the menu file'

import image1 from './ktfo.jpeg'
import image2 from './tbs.jpg'

function renderMenu(){
    const content = document.getElementById('content')
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const imageFirst = document.createElement('img')
    const imageSecond = document.createElement('img')
    const intro1 = document.createElement('p')
    const intro2 = document.createElement('p')
    imageFirst.src = image1
    imageSecond.src = image2
    intro1.textContent = 'try our delicious cultural food, ktfo prepared with great care'
    intro1.textContent = 'try our delicious cultural food, tbs with its original flavor and love'
    div1.className = 'menuContent'
    div2.className = 'menuContent'
    div1.appendChild(imageFirst)
    div1.appendChild(intro1)
    div2.appendChild(imageSecond)
    div2.appendChild(intro2)
    content.id = 'content'
    content.appendChild(div1)
    content.appendChild(div2)
    
}


export {Hello2, renderMenu, image1,image2}