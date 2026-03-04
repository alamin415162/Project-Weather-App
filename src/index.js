//import "./style.css"



async function currentWeather() {
    try {
        const value = document.getElementById('myInput').value.trim()
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}?unitGroup=us&key=FPRSMP72S77G52A9YAJDBNDPD`)
        if(!response) throw new Error('Error Happened')
        let weatherData = await response.json()
        Display(value, weatherData)
        return weatherData


    }catch(err){
        console.log(`error occured : ${err.message}`)

    }finally{
        console.log('an attempted is made')
    }
    
}

function Display(region, response){
    const div = document.getElementById('data')
    div.textContent = ''
    if(region.length <= 3){
        div.textContent = `Local Weather`
    }else{
        div.textContent = `${region}'s Weather`
    }
    document.getElementById('myInput').value = ''
    // creating individual paragraph elements
    const para1 = document.createElement('p')
    const para2 = document.createElement('p')
    const para3 = document.createElement('p')
    const para4 = document.createElement('p')
    const para5 = document.createElement('p')
    const para6 = document.createElement('p')
    const para7 = document.createElement('p')
    const para8 = document.createElement('p')
    const para9 = document.createElement('p')
    // assigning api data to individual paragraph elements
    
    para1.append("Description : " + response.description)
    para2.append("TimeZone    : "    + response.timezone)
    para3.append("alerts      : "    + response.alerts)
    para4.append("Humidity    : "    + response.currentConditions.humidity)
    para5.append("Temeprature : "    + response.currentConditions.temp)
    para6.append("WindSpeed   : "    + response.currentConditions.windspeed)
    para7.append("Pressure    : "    + response.currentConditions.pressure)
    para8.append("CloudCover  : "    + response.currentConditions.cloudcover)
    para9.append("Conditions  : "    + response.currentConditions.conditions)
    
    
    
    div.append(para1)
    div.append(para2)
    div.append(para3)
    div.append(para4)
    div.append(para5)
    div.append(para6)
    div.append(para7)
    div.append(para8)
    div.append(para9)
    
    //div.append(para1, para2, para3)
    

}
//Display('Addis Ababa')

const myForm = document.getElementById('myForm');

myForm.addEventListener("submit", currentWeather)