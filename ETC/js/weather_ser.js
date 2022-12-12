const API_KEY ="5cb4f4a8cabfb7ea5c72264e6a5fd43d";

function onGeoOk (position) {
    //const lat = position.coords.latitude; // 위도  (해당되는 도시의 위도를 선택)
    //const lon = position.coords.longitude; // 경도 (해당되는 도사의 경도를 선택)
    //const lat_Value = document.querySelector("#lat.value");
    //const lon_Value = document.querySelector("#lon.value");
    //const lat = document.querySelector("#lat.value"); // 위도  위치를 가져오다. 
    //const lon =  document.querySelector("#lon.value"); // 경도 위치를 가져오다. 
    const lat = position.coords.latitude; // 위도  위치를 가져오다. 
    const lon = position.coords.longitude;
    console.log("You are live in ", lat, lon);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
       .then((response) => response.json())
       .then((data) => {
        const weather = document.querySelector("#weather_state");
        const city = document.querySelector("#city");
        const wind = document.querySelector("#wind");
        const state = document.querySelector("#state");
        const feel_weather = document.querySelector("#feel_like");
        const name = data.name;
        
        weather.innerText = data.main.temp;
        wind.innerText = data.wind.speed;
        state.innerText = data.weather[0].main;
        city.innerText = name;
        feel_weather.innerText = data.main.feels_like;
    });
 }
   function onGeoError() {
     alert("Can't your positin and whether infomation");
   }

   navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);   


function PositionSelect() {
    var langSelect = document.getElementById("selectbox");
    var selectValue = langSelect.options[langSelect.selectedIndex].value;
    const lat = document.querySelector("#lat span");
    const lon = document.querySelector("#lon span");

    if (selectValue == "1") {
        console.log("화성시 선택");
        document.getElementById("here").style.display = "none";
        function onGeoOk (position) {
            //const lat = position.coords.latitude; // 위도  (해당되는 도시의 위도를 선택)
            //const lon = position.coords.longitude; // 경도 (해당되는 도사의 경도를 선택)
            //const lat_Value = document.querySelector("#lat.value");
            //const lon_Value = document.querySelector("#lon.value");
            //const lat = document.querySelector("#lat.value"); // 위도  위치를 가져오다. 
            //const lon =  document.querySelector("#lon.value"); // 경도 위치를 가져오다. 
            const lat = 37.19972; // 위도  위치를 가져오다. 
            const lon = 126.83139;
            console.log("You are live in ", lat, lon);
            const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            console.log(url);
            fetch(url)
               .then((response) => response.json())
               .then((data) => {
                const weather = document.querySelector("#weather_state");
                const city = document.querySelector("#city");
                const wind = document.querySelector("#wind");
                const state = document.querySelector("#state");
                const feel_weather = document.querySelector("#feel_like");
                const name = data.name;
                
                weather.innerText = data.main.temp;
                wind.innerText = data.wind.speed;
                state.innerText = data.weather[0].main;
                city.innerText = name;
                feel_weather.innerText = data.main.feels_like;
            });
          }
           function onGeoError() {
             alert("Can't your positin and whether infomation");
           }
      }   
      // 여기서부터 복사 
    if (selectValue == "2") {
        console.log("수원시 선택");
        document.getElementById("here").style.display = "none";
        function onGeoOk (position) {
            //const lat = position.coords.latitude; // 위도  (해당되는 도시의 위도를 선택)
            //const lon = position.coords.longitude; // 경도 (해당되는 도사의 경도를 선택)
            //const lat_Value = document.querySelector("#lat.value");
            //const lon_Value = document.querySelector("#lon.value");
            //const lat = document.querySelector("#lat.value"); // 위도  위치를 가져오다. 
            //const lon =  document.querySelector("#lon.value"); // 경도 위치를 가져오다. 
            const lat = 37.26389; // 위도  위치를 가져오다. 
            const lon = 127.02861;
            console.log("You are live in ", lat, lon);
            const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            console.log(url);
            fetch(url)
               .then((response) => response.json())
               .then((data) => {
                const weather = document.querySelector("#weather_state");
                const city = document.querySelector("#city");
                const wind = document.querySelector("#wind");
                const state = document.querySelector("#state");
                const feel_weather = document.querySelector("#feel_like");
                const name = data.name;
                
                weather.innerText = data.main.temp;
                wind.innerText = data.wind.speed;
                state.innerText = data.weather[0].main;
                city.innerText = name;
                feel_weather.innerText = data.main.feels_like;
            });
         }
           function onGeoError() {
             alert("Can't your positin and whether infomation");
           }
      } 
        // 여기까지 복사 
        if (selectValue == "3") {
            console.log("서울시 선택");
            document.getElementById("here").style.display = "none";
            function onGeoOk (position) {
                //const lat = position.coords.latitude; // 위도  (해당되는 도시의 위도를 선택)
                //const lon = position.coords.longitude; // 경도 (해당되는 도사의 경도를 선택)
                //const lat_Value = document.querySelector("#lat.value");
                //const lon_Value = document.querySelector("#lon.value");
                //const lat = document.querySelector("#lat.value"); // 위도  위치를 가져오다. 
                //const lon =  document.querySelector("#lon.value"); // 경도 위치를 가져오다. 
                const lat = 37.56667; // 위도  위치를 가져오다. 
                const lon = 126.97806;
                console.log("You are live in ", lat, lon);
                const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
                console.log(url);
                fetch(url)
                   .then((response) => response.json())
                   .then((data) => {
                    const weather = document.querySelector("#weather_state");
                    const city = document.querySelector("#city");
                    const wind = document.querySelector("#wind");
                    const state = document.querySelector("#state");
                    const feel_weather = document.querySelector("#feel_like");
                    const name = data.name;
                    
                    weather.innerText = data.main.temp;
                    wind.innerText = data.wind.speed;
                    state.innerText = data.weather[0].main;
                    city.innerText = name;
                    feel_weather.innerText = data.main.feels_like;
                });
             }
               function onGeoError() {
                 alert("Can't your positin and whether infomation");
               }
          }
          if (selectValue == "4") {
            console.log("문경시 선택");
            document.getElementById("here").style.display = "none";
            function onGeoOk (position) {
                //const lat = position.coords.latitude; // 위도  (해당되는 도시의 위도를 선택)
                //const lon = position.coords.longitude; // 경도 (해당되는 도사의 경도를 선택)
                //const lat_Value = document.querySelector("#lat.value");
                //const lon_Value = document.querySelector("#lon.value");
                //const lat = document.querySelector("#lat.value"); // 위도  위치를 가져오다. 
                //const lon =  document.querySelector("#lon.value"); // 경도 위치를 가져오다. 
                const lat = 36.58611; // 위도  위치를 가져오다. 
                const lon = 128.18611;
                console.log("You are live in ", lat, lon);
                const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
                console.log(url);
                fetch(url)
                   .then((response) => response.json())
                   .then((data) => {
                    const weather = document.querySelector("#weather_state");
                    const city = document.querySelector("#city");
                    const wind = document.querySelector("#wind");
                    const state = document.querySelector("#state");
                    const feel_weather = document.querySelector("#feel_like");
                    const name = data.name;
                    
                    weather.innerText = data.main.temp;
                    wind.innerText = data.wind.speed;
                    state.innerText = data.weather[0].main;
                    city.innerText = name;
                    feel_weather.innerText = data.main.feels_like;
                });
             }
               function onGeoError() {
                 alert("Can't your positin and whether infomation");
               }
          } // 여기까지 복사     
  
       navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

    }

/*function onGeoOk (position) {
    //const lat = position.coords.latitude; // 위도  (해당되는 도시의 위도를 선택)
    //const lon = position.coords.longitude; // 경도 (해당되는 도사의 경도를 선택)
    let lat = lat; // 위도  위치를 가져오다. 
    let lon = lon; // 경도 위치를 가져오다. 
    console.log("You are live in ", lat, lon);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
       .then((response) => response.json())
       .then((data) => {
        const weather = document.querySelector("#weather_state");
        const city = document.querySelector("#city");
        const wind = document.querySelector("#wind");
        const state = document.querySelector("#state");
        const feel_weather = document.querySelector("#feel_like");
        const name = data.name;
        
        weather.innerText = data.main.temp;
        wind.innerText = data.wind.speed;
        state.innerText = data.weather[0].main;
        city.innerText = name;
        feel_weather.innerText = data.main.feels_like;
    });
}

function onGeoError() {
 alert("Can't your positin and whether infomation");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);*/


