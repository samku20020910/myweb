let travel_spot = [
    {
        name: '東大門夜市',
        img: '/img/東大門夜市.jpg',
        address: '970花蓮縣花蓮市中山路50號',
        google_maps_url: 'https://www.google.com/maps/search/%E6%9D%B1%E5%A4%A7%E9%96%80%E5%A4%9C%E5%B8%82/@23.9730635,121.6100125,18z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        description: '東大門夜市是花蓮著名的觀光景點，提供多樣化的美食和娛樂活動，是遊客必訪的夜市之一。',
    },
    {
        name: '七星潭',
        img: '/img/七星潭.jpg',
        address: "花蓮縣新城鄉北埔村",
        google_maps_url: 'https://www.google.com/maps/place/%E4%B8%83%E6%98%9F%E6%BD%AD/@24.0393707,121.619815,17z/data=!3m1!4b1!4m6!3m5!1s0x34689d1ee9ad980b:0x7b3e7935f9e6e907!8m2!3d24.0393659!4d121.6246859!16s%2Fg%2F11trnqm00_?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        description: '七星潭是花蓮著名的海濱景點，以蔚藍的海洋、獨特的卵石沙灘和寧靜的氣氛聞名，是欣賞海景與拍攝日出的絕佳地點。',
    },
    {
        name: '太魯閣國家公園',
        img: '/img/太魯閣國家公園.jpg',
        address: "花蓮縣秀林鄉富世村富世291號",
        google_maps_url: 'https://www.google.com/maps/place/%E5%A4%AA%E9%AD%AF%E9%96%A3%E5%9C%8B%E5%AE%B6%E5%85%AC%E5%9C%92/@24.1939295,121.4880919,17z/data=!3m1!4b1!4m6!3m5!1s0x346882845fc2e7ef:0xddd9fd85e0b0aa31!8m2!3d24.1939246!4d121.4906668!16zL20vMDI1YzNs?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        description: '太魯閣國家公園以壯麗的峽谷地形和自然美景聞名，是喜歡戶外活動與大自然愛好者的最佳選擇。',
    },
    {
        name: '遠雄海洋公園',
        img: '/img/遠雄海洋公園.jpg',
        address: "花蓮縣壽豐鄉鹽寮村福德189號",
        google_maps_url: 'https://www.google.com/maps/place/%E9%81%A0%E9%9B%84%E6%B5%B7%E6%B4%8B%E5%85%AC%E5%9C%92/@23.9012645,121.6009614,17z/data=!3m1!4b1!4m6!3m5!1s0x3468a0ed6d6407f9:0x2f6eb4ab11dcd20a!8m2!3d23.9012596!4d121.6035363!16s%2Fm%2F0k60_zd?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        description: '遠雄海洋公園是一個結合海洋主題與娛樂設施的大型樂園，適合全家大小一同遊玩，並有各種精彩的海洋生物表演和豐富的遊樂設施。',
    },
    {
        name: '慕谷慕魚',
        img: '/img/慕谷慕魚.jpg',
        address: "花蓮縣秀林鄉花專1線",
        google_maps_url: 'https://www.google.com/maps/place/972%E8%8A%B1%E8%93%AE%E7%B8%A3%E7%A7%80%E6%9E%97%E9%84%89%E8%8A%B1%E5%B0%881%E7%B7%9A/@23.9720771,121.4655623,17z/data=!3m1!4b1!4m6!3m5!1s0x3468a2c77630c079:0xf41e93ab800b0269!8m2!3d23.9720722!4d121.4681372!16s%2Fg%2F1q5blks30?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        description: '慕谷慕魚是一處被譽為人間秘境的天然景觀，以清澈的溪水、茂密的森林和寧靜的氛圍吸引遊客，是享受大自然的絕佳去處。',
    },
    {
        name: '鯉魚潭',
        img: '/img/鯉魚潭.jpg',
        address: "花蓮縣壽豐鄉池南村環潭北路100號",
        google_maps_url: 'https://www.google.com/maps/place/%E9%AF%89%E9%AD%9A%E6%BD%AD/@23.9297309,121.5007069,16z/data=!4m15!1m8!3m7!1s0x3468a24cacdddfff:0x2c9272ce4914dd7d!2zOTc06Iqx6JOu57ij5aO96LGQ6YSJ55Kw5r2t5YyX6LevMTAw6Jmf!3b1!8m2!3d23.9349901!4d121.5079381!16s%2Fg%2F11c5pm8jsd!3m5!1s0x3468a3b46b47e5dd:0x2ee599e52a8cafd4!8m2!3d23.9278268!4d121.5098787!16s%2Fm%2F010hq7x5?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        description: '鯉魚潭是花蓮縣最大的內陸湖泊，以清澈的湖水、周圍群山環繞的景色聞名，是划船、騎自行車和享受湖畔悠閒時光的理想地點。',
    },
    {
        name: '翡翠谷',
        img: '/img/翡翠谷.jpg',
        address: "花蓮縣秀林鄉銅門村榕樹路",
        google_maps_url: 'https://www.google.com/maps/place/Feicui+Gu/@23.9719632,121.4883114,15z/data=!3m1!4b1!4m6!3m5!1s0x3468a27ba22e9a3b:0xe56f8c44d0c7fb02!8m2!3d23.9719444!4d121.4986111!16s%2Fg%2F1xpwgj8n?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        description: '翡翠谷因其碧綠如玉的溪水而得名，是花蓮秘境之一，擁有壯麗的峽谷景色和天然的清涼水池，適合喜愛探索自然的旅人。',
    },
    {
        name: '石梯坪',
        img: '/img/石梯坪.jpg',
        address: "花蓮縣豐濱鄉石梯坪52號",
        google_maps_url: 'https://www.google.com/maps/place/977%E8%8A%B1%E8%93%AE%E7%B8%A3%E8%B1%90%E6%BF%B1%E9%84%89%E7%9F%B3%E6%A2%AF%E5%9D%AA/@23.4829409,121.4972373,15z/data=!3m1!4b1!4m6!3m5!1s0x346f509158fe8045:0x197ceca9a712cdd!8m2!3d23.482922!4d121.507537!16s%2Fg%2F1vyk07xl?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        description: '石梯坪位於花蓮縣豐濱鄉，是一處擁有獨特岩石地形的海岸景點，岩層如梯階狀延伸，並擁有美麗的海景和岩石沙灘，是觀光與拍照的熱門場所。',
    },
    {
        name: '新光兆豐休閒農場',
        img: '/img/新光兆豐休閒農場.JPG',
        address: "花蓮縣鳳林鎮永福街20號",
        google_maps_url: 'https://www.google.com/maps/place/%E5%A2%BE%E5%A4%A2%E8%8E%8A%E5%9C%92%EF%BC%88%E6%96%B0%E5%85%89%E5%85%86%E8%B1%90%E8%BE%B2%E5%A0%B4%EF%BC%89/@23.8015635,121.4625634,18.5z/data=!4m10!1m2!2m1!1z5paw5YWJ5YWG6LGQ5LyR6ZaS6L6y5aC0!3m6!1s0x3468afeeba9fe293:0x9e78918af3f7405!8m2!3d23.8020008!4d121.463043!15sChjmlrDlhYnlhYbosZDkvJHplpLovrLloLRaHiIc5paw5YWJIOWFhiDosZAg5LyR6ZaSIOi-suWgtJIBE2Zhcm1faG91c2Vob2xkX3RvdXLgAQA!16s%2Fg%2F11bbt1dk1z?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        description: '新光兆豐休閒農場是一個結合農業體驗、休閒娛樂與自然景觀的旅遊景點，遊客可以體驗農作物採摘、手作課程、動物互動等活動，是親子及家庭出遊的好去處。',
    },
    {
        name: '林田山林業文化園區',
        img: '/img/林田山林業文化園區.jpg',
        address: "花蓮縣鳳林鎮森榮里林森路99巷99號",
        google_maps_url: 'https://www.google.com/maps/place/%E6%9E%97%E7%94%B0%E5%B1%B1%E6%9E%97%E6%A5%AD%E6%96%87%E5%8C%96%E5%9C%92%E5%8D%80/@23.7180935,121.3963799,17z/data=!3m1!4b1!4m6!3m5!1s0x3468b3b324f0ebdf:0xc446f59d4de5731e!8m2!3d23.7180886!4d121.3989548!16s%2Fg%2F155sql89?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        description: '林田山林業文化園區是花蓮著名的歷史景點，原本是日本時代的木材伐採基地，現今轉型為文化園區，提供遊客了解台灣林業歷史、參觀古老的木材加工設施以及體驗自然生態的好地方。',
    },
    {
        name: '四八高地',
        img: '/img/四八高地.jpg',
        address: "花蓮市海岸路與華西路交叉處",
        google_maps_url: 'https://www.google.com/maps/place/%E5%9B%9B%E5%85%AB%E9%AB%98%E5%9C%B0%E7%9E%AD%E6%9C%9B%E5%8F%B0/@24.0226587,121.6347041,17.5z/data=!4m5!3m4!1s0x346620a5f04e32df:0x34d8b68d7bf28604!8m2!3d24.0222858!4d121.6348723?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        description: '四八高地是花蓮的一個重要歷史景點，曾是二戰期間的戰略高地，擁有壯麗的山景和遠眺太平洋的視野。這裡不僅是登山健行的好地方，也是了解當地歷史的最佳場所。',
    },
];


document.querySelector('.travel-spot-info').style.display = 'none';



function handleSelection(value)
{
    let day = [    
        {
            date_final: "",
            date_count: 0, 
        },
        {
            date_final: "",
            date_count: 0,
        },
        {
            date_final: "",
            date_count: 0,
        },
        {
            date_final: "",
            date_count: 0,
        },
        {
            date_final: "",
            date_count: 0,
        },
    ]

    if(value === '東大門夜市'){
        document.querySelector('.travel-spot-info').style.display = 'flex';
        document.querySelector(".travel-spot-info").innerHTML = 
        `<div class="spot-picture">
            <img src="${travel_spot[0].img}" alt="東大門夜市" class="spot-picture">
        </div>
        <div class="travel-spot-info-right">
            <div class="travel-spot-info-right-top-adjust">
                <div class="map">
                    <i class='bx bx-map' ></i>
                    <p>${travel_spot[0].address}</p> <!-- 顯示地址 -->
                </div>
                <p class="description">${travel_spot[0].description}</p> <!-- 顯示描述 -->
            </div>
            <div class="travel-spot-info-right-bottom-adjust">
                <a href="${travel_spot[0].google_maps_url}" class="google_maps_url" target="_blank">查看 Google 地圖</a> <!-- 顯示 Google 地圖網址 -->
                <button class="add-to-schedule-btn">
                    <span class="icon">+</span>
                    <span class="text">加入行程</span>
                </button>
            </div>
        </div>`;
        const addButton = document.querySelector(".add-to-schedule-btn");
    
    let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
    const spotInfo = {
        name: "東大門夜市",
        img: travel_spot[0].img,
        address: travel_spot[0].address,
        google_maps_url: travel_spot[0].google_maps_url,
        description: travel_spot[0].description
    };
    
    const isAlreadyAdded = schedule.some(spot => spot.name === spotInfo.name);
    if (isAlreadyAdded) {
        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;
    }
    
    addButton.addEventListener("click", function() {
        
        if (isAlreadyAdded) {
            return;
        }

      
        schedule.push(spotInfo);
        localStorage.setItem("schedule", JSON.stringify(schedule));

        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;

        alert("已加入行程！");
    });


        
        const location_ = spot_weather.records.Locations[0].Location;
        const targetCity = "花蓮市";
        const locationIndex = location_.findIndex(Location => Location.LocationName === targetCity);
        const date_temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[0].StartTime.slice(5, 10);
        day[0].date_final = date_temp;
        let j =0;
        for(let i=0; i<32; i++){
            const date_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(5, 10);
            if(date_ !== day[j].date_final){
                j++;
                if (j > 4) { 
                    j = 4;
                }
                day[j].date_final = date_;
            }
            day[j].date_count ++;
        }
        
        console.log(day)

        let html = "";
        let html_circle = "";
        let html_weather_info = "";

       
        let count = 0;
        let count_temp = 0;
        for(let n=0; n<5; n++){
            if(day[n].date_final !== ""){
                html_circle += `<div class="circle">
                            <p>${day[n].date_final}</p>
                            </div>
                           `;

                count += day[n].date_count;
                for(let i = count_temp; i< count; i++){
                    const time = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(11, 16);
                    const time_check = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime;
                    const weather = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].ElementValue[0].Weather;
                    const temp_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time;
                    const temp_index = temp_.findIndex(Time => Time.DataTime === time_check)
                    const temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time[temp_index].ElementValue[0].Temperature;
                    html_weather_info += `<div class="weather-info">
                                            <p>${time}</p>
                                            ${weathericon(weather)}
                                            <p>${temp}°C</p>
                                        </div>
                                        `;
                }
                html += `<div id="weather">` + html_circle + html_weather_info + `<div class="space"></div>` + `</div>`;

                html_circle = ""; 
                html_weather_info = ""; 
                count_temp = count;
            }
            else{
                break;
            }
        }

        document.querySelector(".weather-adjust").innerHTML = html;
        document.querySelector(".travel-spot-info").style.backgroundColor = "rgba(198, 195, 195, 0.382)";
    }

    if(value === '七星潭'){
        document.querySelector('.travel-spot-info').style.display = 'flex';
        document.querySelector(".travel-spot-info").innerHTML = 
        `<div class="spot-picture">
            <img src="${travel_spot[1].img}" alt="七星潭" class="spot-picture">
        </div>
        <div class="travel-spot-info-right">
            <div class="travel-spot-info-right-top-adjust">
                <div class="map">
                    <i class='bx bx-map' ></i>
                    <p>${travel_spot[1].address}</p> <!-- 顯示地址 -->
                </div>
                <p class="description">${travel_spot[1].description}</p> <!-- 顯示描述 -->
            </div>
            <div class="travel-spot-info-right-bottom-adjust">
                <a href="${travel_spot[1].google_maps_url}" class="google_maps_url" target="_blank">查看 Google 地圖</a> <!-- 顯示 Google 地圖網址 -->
                <button class="add-to-schedule-btn">
                    <span class="icon">+</span>
                    <span class="text">加入行程</span>
                </button>
            </div>
        </div>`;

        const addButton = document.querySelector(".add-to-schedule-btn");
    
    let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
    const spotInfo = {
        name: "七星潭",
        img: travel_spot[1].img,
        address: travel_spot[1].address,
        google_maps_url: travel_spot[1].google_maps_url,
        description: travel_spot[1].description
    };
    
    const isAlreadyAdded = schedule.some(spot => spot.name === spotInfo.name);
    if (isAlreadyAdded) {
        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;
    }
    
    addButton.addEventListener("click", function() {
        
        if (isAlreadyAdded) {
            return;
        }

        
        schedule.push(spotInfo);
        localStorage.setItem("schedule", JSON.stringify(schedule));

       
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;

        alert("已加入行程！");
    });

        
        const location_ = spot_weather.records.Locations[0].Location;
        const targetCity = "新城鄉";
        const locationIndex = location_.findIndex(Location => Location.LocationName === targetCity);
        const date_temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[0].StartTime.slice(5, 10);
        day[0].date_final = date_temp;
        let j =0;
        for(let i=0; i<32; i++){
            const date_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(5, 10);
            if(date_ !== day[j].date_final){
                j++;
                if (j > 4) { 
                    j = 4;
                }
                day[j].date_final = date_;
            }
            day[j].date_count ++;
        }
        
        console.log(day)

        let html = "";
        let html_circle = "";
        let html_weather_info = "";

        
        let count = 0;
        let count_temp = 0;
        for(let n=0; n<5; n++){
            if(day[n].date_final !== ""){
                html_circle += `<div class="circle">
                            <p>${day[n].date_final}</p>
                            </div>
                           `;

                count += day[n].date_count;
                for(let i = count_temp; i< count; i++){
                    const time = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(11, 16);
                    const time_check = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime;
                    const weather = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].ElementValue[0].Weather;
                    const temp_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time;
                    const temp_index = temp_.findIndex(Time => Time.DataTime === time_check)
                    const temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time[temp_index].ElementValue[0].Temperature;
                    html_weather_info += `<div class="weather-info">
                                            <p>${time}</p>
                                            ${weathericon(weather)}
                                            <p>${temp}°C</p>
                                        </div>
                                        `;
                }
                html += `<div id="weather">` + html_circle + html_weather_info + `<div class="space"></div>` + `</div>`;

                html_circle = ""; 
                html_weather_info = ""; 
                count_temp = count;
            }
            else{
                break;
            }
        }

        document.querySelector(".weather-adjust").innerHTML = html;
        document.querySelector(".travel-spot-info").style.backgroundColor = "rgba(198, 195, 195, 0.382)";
    }


    if(value === '太魯閣國家公園'){
        document.querySelector('.travel-spot-info').style.display = 'flex';
        document.querySelector(".travel-spot-info").innerHTML = 
        `<div class="spot-picture">
            <img src="${travel_spot[2].img}" alt="太魯閣國家公園" class="spot-picture">
        </div>
        <div class="travel-spot-info-right">
            <div class="travel-spot-info-right-top-adjust">
                <div class="map">
                    <i class='bx bx-map' ></i>
                    <p>${travel_spot[2].address}</p> <!-- 顯示地址 -->
                </div>
                <p class="description">${travel_spot[2].description}</p> <!-- 顯示描述 -->
            </div>
            <div class="travel-spot-info-right-bottom-adjust">
                <a href="${travel_spot[2].google_maps_url}" class="google_maps_url" target="_blank">查看 Google 地圖</a> <!-- 顯示 Google 地圖網址 -->
                <button class="add-to-schedule-btn">
                    <span class="icon">+</span>
                    <span class="text">加入行程</span>
                </button>
            </div>
        </div>`;

    const addButton = document.querySelector(".add-to-schedule-btn");
    
    let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
    const spotInfo = {
        name: "太魯閣國家公園",
        img: travel_spot[2].img,
        address: travel_spot[2].address,
        google_maps_url: travel_spot[2].google_maps_url,
        description: travel_spot[2].description
    };
    
    const isAlreadyAdded = schedule.some(spot => spot.name === spotInfo.name);
    if (isAlreadyAdded) {
        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;
    }
    
    addButton.addEventListener("click", function() {
        
        if (isAlreadyAdded) {
            return;
        }

      
        schedule.push(spotInfo);
        localStorage.setItem("schedule", JSON.stringify(schedule));

        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;

        alert("已加入行程！");
    });

    
    const location_ = spot_weather.records.Locations[0].Location;
    const targetCity = "新城鄉";
    const locationIndex = location_.findIndex(Location => Location.LocationName === targetCity);
    const date_temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[0].StartTime.slice(5, 10);
    day[0].date_final = date_temp;
    let j =0;
    for(let i=0; i<32; i++){
        const date_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(5, 10);
        if(date_ !== day[j].date_final){
            j++;
            if (j > 4) { 
                j = 4;
            }
            day[j].date_final = date_;
        }
        day[j].date_count ++;
    }
    
    console.log(day)

    let html = "";
    let html_circle = "";
    let html_weather_info = "";

    
    let count = 0;
    let count_temp = 0;
    for(let n=0; n<5; n++){
        if(day[n].date_final !== ""){
            html_circle += `<div class="circle">
                        <p>${day[n].date_final}</p>
                        </div>
                       `;

            count += day[n].date_count;
            for(let i = count_temp; i< count; i++){
                const time = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(11, 16);
                const time_check = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime;
                const weather = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].ElementValue[0].Weather;
                const temp_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time;
                const temp_index = temp_.findIndex(Time => Time.DataTime === time_check)
                const temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time[temp_index].ElementValue[0].Temperature;
                html_weather_info += `<div class="weather-info">
                                        <p>${time}</p>
                                        ${weathericon(weather)}
                                        <p>${temp}°C</p>
                                    </div>
                                    `;
            }
            html += `<div id="weather">` + html_circle + html_weather_info + `<div class="space"></div>` + `</div>`;

            html_circle = ""; 
            html_weather_info = ""; 
            count_temp = count;
        }
        else{
            break;
        }
    }

    document.querySelector(".weather-adjust").innerHTML = html;
    document.querySelector(".travel-spot-info").style.backgroundColor = "rgba(198, 195, 195, 0.382)";
}

if(value === '遠雄海洋公園'){
    document.querySelector('.travel-spot-info').style.display = 'flex';
    document.querySelector(".travel-spot-info").innerHTML = 
    `<div class="spot-picture">
            <img src="${travel_spot[3].img}" alt="遠雄海洋公園" class="spot-picture">
        </div>
        <div class="travel-spot-info-right">
            <div class="travel-spot-info-right-top-adjust">
                <div class="map">
                    <i class='bx bx-map' ></i>
                    <p>${travel_spot[3].address}</p> <!-- 顯示地址 -->
                </div>
                <p class="description">${travel_spot[3].description}</p> <!-- 顯示描述 -->
            </div>
            <div class="travel-spot-info-right-bottom-adjust">
                <a href="${travel_spot[3].google_maps_url}" class="google_maps_url" target="_blank">查看 Google 地圖</a> <!-- 顯示 Google 地圖網址 -->
                <button class="add-to-schedule-btn">
                    <span class="icon">+</span>
                    <span class="text">加入行程</span>
                </button>
            </div>
        </div>`;
    const addButton = document.querySelector(".add-to-schedule-btn");
  
    let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
    const spotInfo = {
        name: "遠雄海洋公園",
        img: travel_spot[3].img,
        address: travel_spot[3].address,
        google_maps_url: travel_spot[3].google_maps_url,
        description: travel_spot[3].description
    };
    
    const isAlreadyAdded = schedule.some(spot => spot.name === spotInfo.name);
    if (isAlreadyAdded) {
        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;
    }
    
    addButton.addEventListener("click", function() {
        
        if (isAlreadyAdded) {
            return;
        }

        
        schedule.push(spotInfo);
        localStorage.setItem("schedule", JSON.stringify(schedule));

        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;

        alert("已加入行程！");
    });


    
    const location_ = spot_weather.records.Locations[0].Location;
    const targetCity = "壽豐鄉";
    const locationIndex = location_.findIndex(Location => Location.LocationName === targetCity);
    const date_temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[0].StartTime.slice(5, 10);
    day[0].date_final = date_temp;
    let j =0;
    for(let i=0; i<32; i++){
        const date_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(5, 10);
        if(date_ !== day[j].date_final){
            j++;
            if (j > 4) { 
                j = 4;
            }
            day[j].date_final = date_;
        }
        day[j].date_count ++;
    }
    
    console.log(day)

    let html = "";
    let html_circle = "";
    let html_weather_info = "";

   
    let count = 0;
    let count_temp = 0;
    for(let n=0; n<5; n++){
        if(day[n].date_final !== ""){
            html_circle += `<div class="circle">
                        <p>${day[n].date_final}</p>
                        </div>
                       `;

            count += day[n].date_count;
            for(let i = count_temp; i< count; i++){
                const time = spot_weather.records.Locations[5].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(11, 16);
                const time_check = spot_weather.records.Locations[5].Location[locationIndex].WeatherElement[8].Time[i].StartTime;
                const weather = spot_weather.records.Locations[5].Location[locationIndex].WeatherElement[8].Time[i].ElementValue[0].Weather;
                const temp_ = spot_weather.records.Locations[5].Location[locationIndex].WeatherElement[0].Time;
                const temp_index = temp_.findIndex(Time => Time.DataTime === time_check)
                const temp = spot_weather.records.Locations[5].Location[locationIndex].WeatherElement[0].Time[temp_index].ElementValue[0].Temperature;
                html_weather_info += `<div class="weather-info">
                                        <p>${time}</p>
                                        ${weathericon(weather)}
                                        <p>${temp}°C</p>
                                    </div>
                                    `;
            }
            html += `<div id="weather">` + html_circle + html_weather_info + `<div class="space"></div>` + `</div>`;

            html_circle = "";
            html_weather_info = ""; 
            count_temp = count;
        }
        else{
            break;
        }
    }

    document.querySelector(".weather-adjust").innerHTML = html;
    document.querySelector(".travel-spot-info").style.backgroundColor = "rgba(198, 195, 195, 0.382)";
}

if(value === '慕谷慕魚'){
    document.querySelector('.travel-spot-info').style.display = 'flex';
    document.querySelector(".travel-spot-info").innerHTML = 
    `<div class="spot-picture">
            <img src="${travel_spot[4].img}" alt="慕谷慕魚" class="spot-picture">
        </div>
        <div class="travel-spot-info-right">
            <div class="travel-spot-info-right-top-adjust">
                <div class="map">
                    <i class='bx bx-map' ></i>
                    <p>${travel_spot[4].address}</p> <!-- 顯示地址 -->
                </div>
                <p class="description">${travel_spot[4].description}</p> <!-- 顯示描述 -->
            </div>
            <div class="travel-spot-info-right-bottom-adjust">
                <a href="${travel_spot[4].google_maps_url}" class="google_maps_url" target="_blank">查看 Google 地圖</a> <!-- 顯示 Google 地圖網址 -->
                <button class="add-to-schedule-btn">
                    <span class="icon">+</span>
                    <span class="text">加入行程</span>
                </button>
            </div>
        </div>`;
    
    const addButton = document.querySelector(".add-to-schedule-btn");
    
    let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
    const spotInfo = {
        name: "慕谷慕魚",
        img: travel_spot[4].img,
        address: travel_spot[4].address,
        google_maps_url: travel_spot[4].google_maps_url,
        description: travel_spot[4].description
    };
    
    const isAlreadyAdded = schedule.some(spot => spot.name === spotInfo.name);
    if (isAlreadyAdded) {
        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;
    }
    
    addButton.addEventListener("click", function() {
       
        if (isAlreadyAdded) {
            return;
        }

        
        schedule.push(spotInfo);
        localStorage.setItem("schedule", JSON.stringify(schedule));

       
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;

        alert("已加入行程！");
    });


    
    const location_ = spot_weather.records.Locations[0].Location;
    const targetCity = "秀林鄉";
    const locationIndex = location_.findIndex(Location => Location.LocationName === targetCity);
    const date_temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[0].StartTime.slice(5, 10);
    day[0].date_final = date_temp;
    let j =0;
    for(let i=0; i<32; i++){
        const date_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(5, 10);
        if(date_ !== day[j].date_final){
            j++;
            if (j > 4) { 
                j = 4;
            }
            day[j].date_final = date_;
        }
        day[j].date_count ++;
    }
    
    console.log(day)

    let html = "";
    let html_circle = "";
    let html_weather_info = "";

    
    let count = 0;
    let count_temp = 0;
    for(let n=0; n<5; n++){
        if(day[n].date_final !== ""){
            html_circle += `<div class="circle">
                        <p>${day[n].date_final}</p>
                        </div>
                       `;

            count += day[n].date_count;
            for(let i = count_temp; i< count; i++){
                const time = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(11, 16);
                const time_check = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime;
                const weather = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].ElementValue[0].Weather;
                const temp_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time;
                const temp_index = temp_.findIndex(Time => Time.DataTime === time_check)
                const temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time[temp_index].ElementValue[0].Temperature;
                html_weather_info += `<div class="weather-info">
                                        <p>${time}</p>
                                        ${weathericon(weather)}
                                        <p>${temp}°C</p>
                                    </div>
                                    `;
            }
            html += `<div id="weather">` + html_circle + html_weather_info + `<div class="space"></div>` + `</div>`;

            html_circle = ""; 
            html_weather_info = ""; 
            count_temp = count;
        }
        else{
            break;
        }
    }

    document.querySelector(".weather-adjust").innerHTML = html;
    document.querySelector(".travel-spot-info").style.backgroundColor = "rgba(198, 195, 195, 0.382)";
}

if(value === '鯉魚潭'){
    document.querySelector('.travel-spot-info').style.display = 'flex';
    document.querySelector(".travel-spot-info").innerHTML = 
    `<div class="spot-picture">
            <img src="${travel_spot[5].img}" alt="慕谷慕魚" class="spot-picture">
        </div>
        <div class="travel-spot-info-right">
            <div class="travel-spot-info-right-top-adjust">
                <div class="map">
                    <i class='bx bx-map' ></i>
                    <p>${travel_spot[5].address}</p> <!-- 顯示地址 -->
                </div>
                <p class="description">${travel_spot[5].description}</p> <!-- 顯示描述 -->
            </div>
            <div class="travel-spot-info-right-bottom-adjust">
                <a href="${travel_spot[5].google_maps_url}" class="google_maps_url" target="_blank">查看 Google 地圖</a> <!-- 顯示 Google 地圖網址 -->
                <button class="add-to-schedule-btn">
                    <span class="icon">+</span>
                    <span class="text">加入行程</span>
                </button>
            </div>
        </div>`;
    const addButton = document.querySelector(".add-to-schedule-btn");
    
    let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
    const spotInfo = {
        name: "鯉魚潭",
        img: travel_spot[5].img,
        address: travel_spot[5].address,
        google_maps_url: travel_spot[5].google_maps_url,
        description: travel_spot[5].description
    };
    
    const isAlreadyAdded = schedule.some(spot => spot.name === spotInfo.name);
    if (isAlreadyAdded) {
        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;
    }
    
    addButton.addEventListener("click", function() {
       
        if (isAlreadyAdded) {
            return;
        }

        
        schedule.push(spotInfo);
        localStorage.setItem("schedule", JSON.stringify(schedule));

        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;

        alert("已加入行程！");
    });

    
    const location_ = spot_weather.records.Locations[0].Location;
    const targetCity = "壽豐鄉";
    const locationIndex = location_.findIndex(Location => Location.LocationName === targetCity);
    const date_temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[0].StartTime.slice(5, 10);
    day[0].date_final = date_temp;
    let j =0;
    for(let i=0; i<32; i++){
        const date_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(5, 10);
        if(date_ !== day[j].date_final){
            j++;
            if (j > 4) { 
                j = 4;
            }
            day[j].date_final = date_;
        }
        day[j].date_count ++;
    }
    
    console.log(day)

    let html = "";
    let html_circle = "";
    let html_weather_info = "";

    
    let count = 0;
    let count_temp = 0;
    for(let n=0; n<5; n++){
        if(day[n].date_final !== ""){
            html_circle += `<div class="circle">
                        <p>${day[n].date_final}</p>
                        </div>
                       `;

            count += day[n].date_count;
            for(let i = count_temp; i< count; i++){
                const time = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(11, 16);
                const time_check = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime;
                const weather = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].ElementValue[0].Weather;
                const temp_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time;
                const temp_index = temp_.findIndex(Time => Time.DataTime === time_check)
                const temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time[temp_index].ElementValue[0].Temperature;
                html_weather_info += `<div class="weather-info">
                                        <p>${time}</p>
                                        ${weathericon(weather)}
                                        <p>${temp}°C</p>
                                    </div>
                                    `;
            }
            html += `<div id="weather">` + html_circle + html_weather_info + `<div class="space"></div>` + `</div>`;

            html_circle = ""; 
            html_weather_info = ""; 
            count_temp = count;
        }
        else{
            break;
        }
    }

    document.querySelector(".weather-adjust").innerHTML = html;
    document.querySelector(".travel-spot-info").style.backgroundColor = "rgba(198, 195, 195, 0.382)";
}

if(value === '翡翠谷'){
    document.querySelector('.travel-spot-info').style.display = 'flex';
    document.querySelector(".travel-spot-info").innerHTML = 
    `<div class="spot-picture">
            <img src="${travel_spot[6].img}" alt="翡翠谷" class="spot-picture">
        </div>
        <div class="travel-spot-info-right">
            <div class="travel-spot-info-right-top-adjust">
                <div class="map">
                    <i class='bx bx-map' ></i>
                    <p>${travel_spot[6].address}</p> <!-- 顯示地址 -->
                </div>
                <p class="description">${travel_spot[6].description}</p> <!-- 顯示描述 -->
            </div>
            <div class="travel-spot-info-right-bottom-adjust">
                <a href="${travel_spot[6].google_maps_url}" class="google_maps_url" target="_blank">查看 Google 地圖</a> <!-- 顯示 Google 地圖網址 -->
                <button class="add-to-schedule-btn">
                    <span class="icon">+</span>
                    <span class="text">加入行程</span>
                </button>
            </div>
        </div>`;
    const addButton = document.querySelector(".add-to-schedule-btn");
    
    let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
    const spotInfo = {
        name: "翡翠谷",
        img: travel_spot[6].img,
        address: travel_spot[6].address,
        google_maps_url: travel_spot[6].google_maps_url,
        description: travel_spot[6].description
    };
    
    const isAlreadyAdded = schedule.some(spot => spot.name === spotInfo.name);
    if (isAlreadyAdded) {
       
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;
    }
    
    addButton.addEventListener("click", function() {
        
        if (isAlreadyAdded) {
            return;
        }

       
        schedule.push(spotInfo);
        localStorage.setItem("schedule", JSON.stringify(schedule));

        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;

        alert("已加入行程！");
    });

    
    const location_ = spot_weather.records.Locations[0].Location;
    const targetCity = "秀林鄉";
    const locationIndex = location_.findIndex(Location => Location.LocationName === targetCity);
    const date_temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[0].StartTime.slice(5, 10);
    day[0].date_final = date_temp;
    let j =0;
    for(let i=0; i<32; i++){
        const date_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(5, 10);
        if(date_ !== day[j].date_final){
            j++;
            if (j > 4) { 
                j = 4;
            }
            day[j].date_final = date_;
        }
        day[j].date_count ++;
    }
    
    console.log(day)

    let html = "";
    let html_circle = "";
    let html_weather_info = "";

    
    let count = 0;
    let count_temp = 0;
    for(let n=0; n<5; n++){
        if(day[n].date_final !== ""){
            html_circle += `<div class="circle">
                        <p>${day[n].date_final}</p>
                        </div>
                       `;

            count += day[n].date_count;
            for(let i = count_temp; i< count; i++){
                const time = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(11, 16);
                const time_check = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime;
                const weather = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].ElementValue[0].Weather;
                const temp_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time;
                const temp_index = temp_.findIndex(Time => Time.DataTime === time_check)
                const temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time[temp_index].ElementValue[0].Temperature;
                html_weather_info += `<div class="weather-info">
                                        <p>${time}</p>
                                        ${weathericon(weather)}
                                        <p>${temp}°C</p>
                                    </div>
                                    `;
            }
            html += `<div id="weather">` + html_circle + html_weather_info + `<div class="space"></div>` + `</div>`;

            html_circle = ""; 
            html_weather_info = ""; 
            count_temp = count;
        }
        else{
            break;
        }
    }

    document.querySelector(".weather-adjust").innerHTML = html;
    document.querySelector(".travel-spot-info").style.backgroundColor = "rgba(198, 195, 195, 0.382)";
}

if(value === '石梯坪'){
    document.querySelector('.travel-spot-info').style.display = 'flex';
    document.querySelector(".travel-spot-info").innerHTML = 
    `<div class="spot-picture">
            <img src="${travel_spot[7].img}" alt="石梯坪" class="spot-picture">
        </div>
        <div class="travel-spot-info-right">
            <div class="travel-spot-info-right-top-adjust">
                <div class="map">
                    <i class='bx bx-map' ></i>
                    <p>${travel_spot[7].address}</p> <!-- 顯示地址 -->
                </div>
                <p class="description">${travel_spot[7].description}</p> <!-- 顯示描述 -->
            </div>
            <div class="travel-spot-info-right-bottom-adjust">
                <a href="${travel_spot[7].google_maps_url}" class="google_maps_url" target="_blank">查看 Google 地圖</a> <!-- 顯示 Google 地圖網址 -->
                <button class="add-to-schedule-btn">
                    <span class="icon">+</span>
                    <span class="text">加入行程</span>
                </button>
            </div>
        </div>`;
    const addButton = document.querySelector(".add-to-schedule-btn");
    
    let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
    const spotInfo = {
        name: "石梯坪",
        img: travel_spot[7].img,
        address: travel_spot[7].address,
        google_maps_url: travel_spot[7].google_maps_url,
        description: travel_spot[7].description
    };
    
    const isAlreadyAdded = schedule.some(spot => spot.name === spotInfo.name);
    if (isAlreadyAdded) {
        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;
    }
    
    addButton.addEventListener("click", function() {
        
        if (isAlreadyAdded) {
            return;
        }

      
        schedule.push(spotInfo);
        localStorage.setItem("schedule", JSON.stringify(schedule));

        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;

        alert("已加入行程！");
    });


    
    const location_ = spot_weather.records.Locations[0].Location;
    const targetCity = "豐濱鄉";
    const locationIndex = location_.findIndex(Location => Location.LocationName === targetCity);
    const date_temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[0].StartTime.slice(5, 10);
    day[0].date_final = date_temp;
    let j =0;
    for(let i=0; i<32; i++){
        const date_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(5, 10);
        if(date_ !== day[j].date_final){
            j++;
            if (j > 4) { 
                j = 4;
            }
            day[j].date_final = date_;
        }
        day[j].date_count ++;
    }
    
    console.log(day)

    let html = "";
    let html_circle = "";
    let html_weather_info = "";

   
    let count = 0;
    let count_temp = 0;
    for(let n=0; n<5; n++){
        if(day[n].date_final !== ""){
            html_circle += `<div class="circle">
                        <p>${day[n].date_final}</p>
                        </div>
                       `;

            count += day[n].date_count;
            for(let i = count_temp; i< count; i++){
                const time = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(11, 16);
                const time_check = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime;
                const weather = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].ElementValue[0].Weather;
                const temp_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time;
                const temp_index = temp_.findIndex(Time => Time.DataTime === time_check)
                const temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time[temp_index].ElementValue[0].Temperature;
                html_weather_info += `<div class="weather-info">
                                        <p>${time}</p>
                                        ${weathericon(weather)}
                                        <p>${temp}°C</p>
                                    </div>
                                    `;
            }
            html += `<div id="weather">` + html_circle + html_weather_info + `<div class="space"></div>` + `</div>`;

            html_circle = ""; 
            html_weather_info = "";
            count_temp = count;
        }
        else{
            break;
        }
    }

    document.querySelector(".weather-adjust").innerHTML = html;
    document.querySelector(".travel-spot-info").style.backgroundColor = "rgba(198, 195, 195, 0.382)";
}

if(value === '新光兆豐休閒農場'){
    document.querySelector('.travel-spot-info').style.display = 'flex';
    document.querySelector(".travel-spot-info").innerHTML = 
    `<div class="spot-picture">
            <img src="${travel_spot[8].img}" alt="新光兆豐休閒農場" class="spot-picture">
        </div>
        <div class="travel-spot-info-right">
            <div class="travel-spot-info-right-top-adjust">
                <div class="map">
                    <i class='bx bx-map' ></i>
                    <p>${travel_spot[8].address}</p> <!-- 顯示地址 -->
                </div>
                <p class="description">${travel_spot[8].description}</p> <!-- 顯示描述 -->
            </div>
            <div class="travel-spot-info-right-bottom-adjust">
                <a href="${travel_spot[8].google_maps_url}" class="google_maps_url" target="_blank">查看 Google 地圖</a> <!-- 顯示 Google 地圖網址 -->
                <button class="add-to-schedule-btn">
                    <span class="icon">+</span>
                    <span class="text">加入行程</span>
                </button>
            </div>
        </div>`;

    const addButton = document.querySelector(".add-to-schedule-btn");
    
    let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
    const spotInfo = {
        name: "新光兆豐休閒農場",
        img: travel_spot[8].img,
        address: travel_spot[8].address,
        google_maps_url: travel_spot[8].google_maps_url,
        description: travel_spot[8].description
    };
    
    const isAlreadyAdded = schedule.some(spot => spot.name === spotInfo.name);
    if (isAlreadyAdded) {
       
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;
    }
   
        addButton.addEventListener("click", function() {
        if (isAlreadyAdded) {
            return;
        }

        
        schedule.push(spotInfo);
        localStorage.setItem("schedule", JSON.stringify(schedule));

       
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;

        alert("已加入行程！");
    });

    
    const location_ = spot_weather.records.Locations[0].Location;
    const targetCity = "鳳林鎮";
    const locationIndex = location_.findIndex(Location => Location.LocationName === targetCity);
    const date_temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[0].StartTime.slice(5, 10);
    day[0].date_final = date_temp;
    let j =0;
    for(let i=0; i<32; i++){
        const date_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(5, 10);
        if(date_ !== day[j].date_final){
            j++;
            if (j > 4) { 
                j = 4;
            }
            day[j].date_final = date_;
        }
        day[j].date_count ++;
    }
    
    console.log(day)

    let html = "";
    let html_circle = "";
    let html_weather_info = "";

    
    let count = 0;
    let count_temp = 0;
    for(let n=0; n<5; n++){
        if(day[n].date_final !== ""){
            html_circle += `<div class="circle">
                        <p>${day[n].date_final}</p>
                        </div>
                       `;

            count += day[n].date_count;
            for(let i = count_temp; i< count; i++){
                const time = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(11, 16);
                const time_check = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime;
                const weather = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].ElementValue[0].Weather;
                const temp_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time;
                const temp_index = temp_.findIndex(Time => Time.DataTime === time_check)
                const temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time[temp_index].ElementValue[0].Temperature;
                html_weather_info += `<div class="weather-info">
                                        <p>${time}</p>
                                        ${weathericon(weather)}
                                        <p>${temp}°C</p>
                                    </div>
                                    `;
            }
            html += `<div id="weather">` + html_circle + html_weather_info + `<div class="space"></div>` + `</div>`;

            html_circle = ""; 
            html_weather_info = ""; 
            count_temp = count;
        }
        else{
            break;
        }
    }

    document.querySelector(".weather-adjust").innerHTML = html;
    document.querySelector(".travel-spot-info").style.backgroundColor = "rgba(198, 195, 195, 0.382)";
}

if(value === '林田山業文化園區'){
    document.querySelector('.travel-spot-info').style.display = 'flex';
    document.querySelector(".travel-spot-info").innerHTML = 
    `<div class="spot-picture">
            <img src="${travel_spot[9].img}" alt="林田山業文化園區" class="spot-picture">
        </div>
        <div class="travel-spot-info-right">
            <div class="travel-spot-info-right-top-adjust">
                <div class="map">
                    <i class='bx bx-map' ></i>
                    <p>${travel_spot[9].address}</p> <!-- 顯示地址 -->
                </div>
                <p class="description">${travel_spot[9].description}</p> <!-- 顯示描述 -->
            </div>
            <div class="travel-spot-info-right-bottom-adjust">
                <a href="${travel_spot[9].google_maps_url}" class="google_maps_url" target="_blank">查看 Google 地圖</a> <!-- 顯示 Google 地圖網址 -->
                <button class="add-to-schedule-btn">
                    <span class="icon">+</span>
                    <span class="text">加入行程</span>
                </button>
            </div>
        </div>`;

    const addButton = document.querySelector(".add-to-schedule-btn");
    
    let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
    const spotInfo = {
        name: "林田山業文化園區",
        img: travel_spot[9].img,
        address: travel_spot[9].address,
        google_maps_url: travel_spot[9].google_maps_url,
        description: travel_spot[9].description
    };
    
    const isAlreadyAdded = schedule.some(spot => spot.name === spotInfo.name);
    if (isAlreadyAdded) {
        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;
    }
    
    addButton.addEventListener("click", function() {
       
        if (isAlreadyAdded) {
            return;
        }

        
        schedule.push(spotInfo);
        localStorage.setItem("schedule", JSON.stringify(schedule));

        
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;

        alert("已加入行程！");
    });

    
    const location_ = spot_weather.records.Locations[0].Location;
    const targetCity = "鳳林鎮";
    const locationIndex = location_.findIndex(Location => Location.LocationName === targetCity);
    const date_temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[0].StartTime.slice(5, 10);
    day[0].date_final = date_temp;
    let j =0;
    for(let i=0; i<32; i++){
        const date_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(5, 10);
        if(date_ !== day[j].date_final){
            j++;
            if (j > 4) { 
                j = 4;
            }
            day[j].date_final = date_;
        }
        day[j].date_count ++;
    }
    
    console.log(day)

    let html = "";
    let html_circle = "";
    let html_weather_info = "";

    
    let count = 0;
    let count_temp = 0;
    for(let n=0; n<5; n++){
        if(day[n].date_final !== ""){
            html_circle += `<div class="circle">
                        <p>${day[n].date_final}</p>
                        </div>
                       `;

            count += day[n].date_count;
            for(let i = count_temp; i< count; i++){
                const time = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(11, 16);
                const time_check = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime;
                const weather = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].ElementValue[0].Weather;
                const temp_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time;
                const temp_index = temp_.findIndex(Time => Time.DataTime === time_check)
                const temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time[temp_index].ElementValue[0].Temperature;
                html_weather_info += `<div class="weather-info">
                                        <p>${time}</p>
                                        ${weathericon(weather)}
                                        <p>${temp}°C</p>
                                    </div>
                                    `;
            }
            html += `<div id="weather">` + html_circle + html_weather_info + `<div class="space"></div>` + `</div>`;

            html_circle = ""; 
            html_weather_info = ""; 
            count_temp = count;
        }
        else{
            break;
        }
    }

    document.querySelector(".weather-adjust").innerHTML = html;
    document.querySelector(".travel-spot-info").style.backgroundColor = "rgba(198, 195, 195, 0.382)";
}
if(value === '四八高地'){
    document.querySelector('.travel-spot-info').style.display = 'flex';
    document.querySelector(".travel-spot-info").innerHTML = 
    `<div class="spot-picture">
            <img src="${travel_spot[10].img}" alt="四八高地" class="spot-picture">
        </div>
        <div class="travel-spot-info-right">
            <div class="travel-spot-info-right-top-adjust">
                <div class="map">
                    <i class='bx bx-map' ></i>
                    <p>${travel_spot[10].address}</p> <!-- 顯示地址 -->
                </div>
                <p class="description">${travel_spot[10].description}</p> <!-- 顯示描述 -->
            </div>
            <div class="travel-spot-info-right-bottom-adjust">
                <a href="${travel_spot[10].google_maps_url}" class="google_maps_url" target="_blank">查看 Google 地圖</a> <!-- 顯示 Google 地圖網址 -->
                <button class="add-to-schedule-btn">
                    <span class="icon">+</span>
                    <span class="text">加入行程</span>
                </button>
            </div>
        </div>`;

    const addButton = document.querySelector(".add-to-schedule-btn");
   
    let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
    const spotInfo = {
        name: "新光兆豐休閒農場",
        img: travel_spot[10].img,
        address: travel_spot[10].address,
        google_maps_url: travel_spot[10].google_maps_url,
        description: travel_spot[10].description
    };
    
    const isAlreadyAdded = schedule.some(spot => spot.name === spotInfo.name);
    if (isAlreadyAdded) {
       
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;
    }
    
    addButton.addEventListener("click", function() {
        
        if (isAlreadyAdded) {
            return;
        }

        
        schedule.push(spotInfo);
        localStorage.setItem("schedule", JSON.stringify(schedule));

       
        addButton.innerHTML = '<span class="icon">✔</span><span class="text">已加入</span>';
        addButton.disabled = true;

        alert("已加入行程！");
    });

    
    const location_ = spot_weather.records.Locations[0].Location;
    const targetCity = "鳳林鎮";
    const locationIndex = location_.findIndex(Location => Location.LocationName === targetCity);
    const date_temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[0].StartTime.slice(5, 10);
    day[0].date_final = date_temp;
    let j =0;
    for(let i=0; i<32; i++){
        const date_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(5, 10);
        if(date_ !== day[j].date_final){
            j++;
            if (j > 4) { 
                j = 4;
            }
            day[j].date_final = date_;
        }
        day[j].date_count ++;
    }
    
    console.log(day)

    let html = "";
    let html_circle = "";
    let html_weather_info = "";

   
    let count = 0;
    let count_temp = 0;
    for(let n=0; n<5; n++){
        if(day[n].date_final !== ""){
            html_circle += `<div class="circle">
                        <p>${day[n].date_final}</p>
                        </div>
                       `;

            count += day[n].date_count;
            for(let i = count_temp; i< count; i++){
                const time = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime.slice(11, 16);
                const time_check = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].StartTime;
                const weather = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[8].Time[i].ElementValue[0].Weather;
                const temp_ = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time;
                const temp_index = temp_.findIndex(Time => Time.DataTime === time_check)
                const temp = spot_weather.records.Locations[0].Location[locationIndex].WeatherElement[0].Time[temp_index].ElementValue[0].Temperature;
                html_weather_info += `<div class="weather-info">
                                        <p>${time}</p>
                                        ${weathericon(weather)}
                                        <p>${temp}°C</p>
                                    </div>
                                    `;
            }
            html += `<div id="weather">` + html_circle + html_weather_info + `<div class="space"></div>` + `</div>`;

            html_circle = ""; 
            html_weather_info = ""; 
            count_temp = count;
        }
        else{
            break;
        }
    }

    document.querySelector(".weather-adjust").innerHTML = html;
    document.querySelector(".travel-spot-info").style.backgroundColor = "rgba(198, 195, 195, 0.382)";
}

function weathericon(weather){
    console.log(weather);
    let icon = "";
    if(weather === "晴"){
        icon = "<i class='bx bx-sun' ></i>";
    }
    else if(weather === "短暫雨"){
        icon = "<i class='bx bx-cloud-drizzle' ></i>";
    }
    else if(weather === "多雲"){
        icon = "<i class='bx bx-cloud'></i>";
    }
    else if(weather === "陰"){
        icon = "<i class='bx bxs-cloud' ></i>";
    }
    return icon;
    }
}  