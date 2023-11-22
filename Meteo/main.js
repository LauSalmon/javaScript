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
                        let icon = json.weather.icon;


                        const main = document.createElement('div');
                        main.setAttribute("id", "div");

                        const temperature = document.createElement("p");
                        temperature.setAttribute("id", "p1");

                        const lattitude = document.createElement("p");
                        temperature.setAttribute("id", "p2");

                        const longitude = document.createElement("p");
                        temperature.setAttribute("id", "p3");

                        const nom = document.createElement("p");
                        temperature.setAttribute("id", "p4");

                        const image = document.createElement("img");
                        image.setAttribute("id", "img");
                        image.setAttribute("src", "https://openweathermap.org/img/wn/04d@2x.png");
                        image.setAttribute("alt", "icon du temps qu'il fait");

                        document.body.appendChild(main);
                        main.appendChild (temperature);
                        main.appendChild (lattitude);
                        main.appendChild (longitude);
                        main.appendChild (nom);
                        main.appendChild (image);

                        temperature.textContent = ("La température est de " +temp +"°C");
                        lattitude.textContent = ("La laittitude est : " + lat);
                        longitude.textContent = ("La longitude est : " + lon);
                        nom.textContent = ("Vous êtes à " + name);
                    });



