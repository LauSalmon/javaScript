


const bouton = document.querySelector("#bt");
bouton.addEventListener("click", function() {
    let ville = document.querySelector("#ville").value;
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+ ville + "&appid=6f88826d767f323ad19cd282444924e9";

    url.value;

    
    const apiMeteo = fetch(url)
                        .then(async response=>{
                            if (response.status == 200) {
                            console.log(response);
                            const json = await response.json();
                            console.log(json);

                            let city = json.name;
                            let temp = (json.main.temp-273.15).toFixed(1);
                            let weather = json.weather[0].main;

                            const nom = document.querySelector("#nom");
                            const temps = document.querySelector("#temps");
                            const temperature = document.querySelector("#temperature");

                            temperature.textContent = ("La température est de " +temp +"°C");
                            temps.textContent = ("Le temps est " + weather);

                        }else if (response.status == 404) {
                            temps.textContent = ("Erreur veuillez écrire un nom de ville valide");
                            temperatue.textContent = "";
                        }
                    });


})




