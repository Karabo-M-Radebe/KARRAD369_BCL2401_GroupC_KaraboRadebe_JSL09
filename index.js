// code to fetch the background img from the existing Scrimba API
fetch ("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json()) //code blocks that run once the promise is fulfiled
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})` // 
        document.getElementById("author").textContent = `By: ${data.user.name}`
    }) 
    // code block for the promise rejection scenario
    .catch(err => {
        console.log("Query does not exist") 
        document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` //default background image if API fails to run the promise (API ) 
        document.getElementById("author").textContent = `By: Max Bender`
    }) 
    //the next code block focuses on fetching the crypto information from the coingecko API
fetch("https://api.coingecko.com/api/v3/coins/litecoin") //this line fetches all the data from the API
    .then(res => {
        if (!res.ok) { //this is for the rejected scenario, if the resolution returns false
            throw Error("Something went wrong")
        } return res.json()
    })
    .then(data => { // this block focuses on the innerHTML by using an ID to interact with it 
        document.getElementById("crypto-top").innerHTML = ` 
        <img src=${data.image.small} class />
        <span>${data.name}</span>
        `
        //this block uses the "crypto" id to disply the market data from the API
        document.getElementById("crypto").innerHTML += ` 
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))//catch method for "catching" the error message that was thrown at line 18
  
  //function block that displays the current time   
function getCurrentTime() { 
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "medium"})
}

setInterval(getCurrentTime, 1000)

//this code block fetches the weather symbols and styling from the API, then uses the computer's current location to sync the weather data    
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) { //if the fetch method returns false
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            //console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p>${Math.round(data.main.temp)}º</p>
                <p>${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});
