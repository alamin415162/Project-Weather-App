import "./styles.css";

// import homeImage from './home.jpg'
// import menuImage from './ktfo.jpeg'
// import menuImage2 from './tbs.jpg'

import { Hello1 , renderHome, imageHome} from "./home.js";
import { Hello2 , renderMenu, image1,image2} from "./menu.js";
import { Hello3 , renderAbout} from "./about.js";

console.log('my Restaurant')

console.log(Hello1)
console.log(Hello2)
console.log(Hello3)

const home = document.getElementById('home')
const menu = document.getElementById('menu')
const about = document.getElementById('about')

renderHome()
home.addEventListener('click', () =>{
    const indexContent = document.getElementById('content')
    indexContent.innerHTML = '';
    renderHome()

})
menu.addEventListener('click', ()=>{
  
    const indexContent = document.getElementById('content')
    indexContent.innerHTML = '';
    renderMenu()

})
about.addEventListener('click', ()=>{
   
    const indexContent = document.getElementById('content')
    indexContent.innerHTML = '';
    renderAbout()

})

