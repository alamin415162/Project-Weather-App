//import "./style.css"



async function currentWeather(region) {
    try {
        const value = document.getElementById('myInput').value.trim()
        let response = await new Promise((resolve) => resolve('success'))
        if(!response) throw new Error('Error Happened')
        let weatherData = await response
        Display(value)
        return weatherData


    }catch(err){
        console.log(`error occured : ${err.message}`)

    }finally{
        console.log('an attempted is made')
    }
    
}

function Display(region){
    const div = document.getElementById('data')
    div.textContent = ''
    if(region.length <= 3){
        div.textContent = `Local Weather`
    }else{
        div.textContent = `${region}'s Weather`
    }
    document.getElementById('myInput').value = ''
}
//Display('Addis Ababa')

const myForm = document.getElementById('myForm');

myForm.addEventListener("submit", currentWeather)