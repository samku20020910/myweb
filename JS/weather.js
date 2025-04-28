
const fetchData = async () => {
    const url = 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-041?Authorization=rdec-key-123-45678-011121314';

    try {
        // 發送 GET 請求下載 JSON 資料
        const response = await axios.get(url);

        // 確認取得的資料
        console.log('資料已成功取得:');
        console.log(response.data);
        // 儲存資料到 localStorage
        localStorage.setItem('weatherData', JSON.stringify(response.data));
        console.log('資料已儲存於 localStorage');
    } catch (error) {
        console.error('串接資料時發生錯誤:', error.message);
    }
};

// 執行函數
fetchData();

const json_weather = localStorage.getItem('weatherData');
const spot_weather = JSON.parse(json_weather);
console.log(spot_weather);

//查看資料結構
// for(let i = 0; i<20; i++){
//     const data = spot_weather.records.locations[0].location[i];
//     console.log(data);
// }

//location[i]
// 0 鳳林鎮
// 1 卓溪鄉
// 2 花蓮市
// 3 萬榮鄉
// 4 秀林鄉
// 5 富里鄉
// 6 瑞穗鄉
// 7 豐濱鄉
// 8 光復鄉
// 9 壽豐鄉
// 10 吉安鄉
// 11 新城鄉
// 12 玉里鎮

//location.weatherElement[i]
//Array(11)
// 0: {elementName: 'PoP12h', description: '12小時降雨機率', time: Array(8)}
// 1: {elementName: 'Wx', description: '天氣現象', time: Array(32)}
// 2: {elementName: 'AT', description: '體感溫度', time: Array(32)}
// 3: {elementName: 'T', description: '溫度', time: Array(32)}
// 4: {elementName: 'RH', description: '相對濕度', time: Array(32)}
// 5: {elementName: 'CI', description: '舒適度指數', time: Array(32)}
// 6: {elementName: 'WeatherDescription', description: '天氣預報綜合描述', time: Array(32)}
// 7: {elementName: 'PoP6h', description: '6小時降雨機率', time: Array(16)}
// 8: {elementName: 'WS', description: '風速', time: Array(32)}
// 9: {elementName: 'WD', description: '風向', time: Array(32)}
// 10: {elementName: 'Td', description: '露點溫度', time: Array(32)}

//取得資料的用法
//const date = spot_weather.records.locations[0(不變)].location[2(會變，看景點在哪個鄉鎮)].weatherElement[1(不變)].time[i(for loop print all)].startTime(取日期)
//const time = spot_weather.records.locations[0(不變)].location[2(會變，看景點在哪個鄉鎮)].weatherElement[1(不變)].time[i(for loop print all)].startTime(取時間)
//const weather = spot_weather.records.locations[0(不變)].location[2(會變，看景點在哪個鄉鎮)].weatherElement[1(不變)].time[i(for loop print all)].elementValue[0(不變)].value(不變)
//const temp = spot_weather.records.locations[0(不變)].location[2(會變，看景點在哪個鄉鎮)].weatherElement[3(不變)].time[i(for loop print all)].elementValue[0(不變)].value(不變)

//i總共32筆

//取得資料(日期、時間、天氣狀況、溫度)
// const date = spot_weather.records.locations[0].location[2].weatherElement[1].time[1].startTime.slice(5, 10);
// const time = spot_weather.records.locations[0].location[2].weatherElement[1].time[1].startTime.slice(11, 16);
// const weather = spot_weather.records.locations[0].location[2].weatherElement[1].time[1].elementValue[0].value;
// const temp = spot_weather.records.locations[0].location[2].weatherElement[3].time[1].elementValue[0].value;

// console.log(date);
// console.log(time);
// console.log(weather);
// console.log(temp);