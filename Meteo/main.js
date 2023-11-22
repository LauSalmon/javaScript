let url = "https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=6f88826d767f323ad19cd282444924e9";


const apiMeteo = fetch(url)
                    .then(async response=>{
                        console.log(response);
                        const json = await response.json();
                        console.log(json);

                        let temp = (json.main.temp - 273.15).toFixed(2);
                        let lat = json.coord.lat;
                        let lon = json.coord.lon;
                        let name = json.name;


                        const main = document.createElement('div');
                        main.setAttribute("id", "div");

                        let temperature = document.createElement("p");
                        temperature.setAttribute("id", "p1");

                        let lattitude = document.createElement("p");
                        temperature.setAttribute("id", "p2");

                        let longitude = document.createElement("p");
                        temperature.setAttribute("id", "p3");

                        let nom = document.createElement("p");
                        temperature.setAttribute("id", "p4");

                        document.body.appendChild(main);
                        main.appendChild (temperature);
                        main.appendChild (lattitude);
                        main.appendChild (longitude);
                        main.appendChild (nom);

                        temperature.textContent = ("La température est de " +temp +"°C");
                        lattitude.textContent = ("La laittitude est : " + lat);
                        longitude.textContent = ("La longitude est : " + lon);
                        nom.textContent = ("Vous ètes à " + name);
                    });



