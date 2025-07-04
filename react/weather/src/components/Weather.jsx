import './Weather.css'
import AMapLoader from '@amap/amap-jsapi-loader';
import { useEffect, useState } from 'react';

function Weather() {
    const [city, setCity] = useState('北京市')
    const [weather, setWeather] = useState({})
    const [futureWeather, setFutureWeather] = useState({})
    let img = {
        '晴': '/img/晴天.png',
        '多云': '/img/白天-晴间多云.png',
        '阴': '/img/阴天.png',
        '雷阵雨': '/img/雨天.png',
    }

    useEffect(() => {
        window._AMapSecurityConfig = {
            securityJsCode: "d72d03f643fed36942a3de7e78d9ed2d",
        };
        AMapLoader.load({
            key: "dc96db5ceb52f99488e89c51497f1653", // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
        })
        .then((AMap) => {
            // 高德地图插件已生效
            // 获取城市定位
            getLocalCity(AMap) 
            
        })
    },[])
    function getLocalCity(AMap) {
        AMap.plugin('AMap.CitySearch', function () {
            var citySearch = new AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                console.log(status);
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    console.log(result);
                    setCity(result.city)
                    getWeather(AMap, result.city)
                    getFutureWeather(AMap, result.city)
                }
            })
        })
    }
    function getWeather(AMap, myCity) {
        //加载天气查询插件
        AMap.plugin("AMap.Weather", function () {
            //创建天气查询实例
            var weather = new AMap.Weather();
            //执行实时天气信息查询
            weather.getLive(myCity, function (err, data) {
                console.log(err, data);
                //err 正确时返回 null
                //data 返回实时天气数据，返回数据见下表
                setWeather(data)
            });
        });
    }
    function getFutureWeather(AMap, myCity) {
        //加载天气查询插件
        AMap.plugin("AMap.Weather", function () {
            //创建天气查询实例
            var weather = new AMap.Weather();
            //执行实时天气信息查询
            weather.getForecast(myCity, function (err, data) {
                console.log(err, data);
                //err 正确时返回 null
                //data 返回天气预报数据，返回数据见下表
                setFutureWeather(data)
            });
        });
    }

    return (
        

        <div className="weather">
            <div className="container"></div>
            <div className="top">
                <div className="city">
                    <i className="iconfont icon-head100"></i>
                    {city}
                </div>
                <div className="changeCity">
                    <i className="iconfont icon-24gf-city4"> 切换城市</i>
                </div>
            </div>
            <div className="body">
                <div className="today">
                    <div className="temperature">
                        <div className="temp">{weather.temperature}℃</div>
                        <div className="feel">{weather.weather}</div>
                    </div>
                    <div className="detail">
                        <ul>
                            <li>
                                <i className="iconfont icon-shidu"></i>
                                <p className='category'>湿度</p>
                                <p className='value'>{weather.humidity}%</p>
                            </li>
                            <li>
                                <i className="iconfont icon-fengli"></i>
                                <p className='category'>风向</p>
                                <p className='value'>{weather.windDirection}</p>
                            </li>
                            <li>
                                <i className="iconfont icon-fenglijianceqi"></i>
                                <p className='category'>风力</p>
                                <p className='value'>{weather.windPower}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="future">
                    <div className="title">
                        三天天气预报
                    </div>
                    <ul className="futrue-list">
                        <li className="futrue-item">
                            <div className="week">周{futureWeather?.forecasts?.[1]?.week}</div>
                            <img src={img[futureWeather?.forecasts?.[1]?.dayWeather]} alt="天气图标" />
                            <div className="max-min">
                                <div className="max">{futureWeather?.forecasts?.[1]?.dayTemp}°</div>
                                <div className="min">/ {futureWeather?.forecasts?.[1]?.nightTemp}°</div>
                            </div>

                        </li>
                        <li className="futrue-item">
                            <div className="week">周{futureWeather?.forecasts?.[2]?.week}</div>
                            <img src={img[futureWeather?.forecasts?.[2]?.dayWeather]} alt="天气图标" />
                            <div className="max-min">
                                <div className="max">{futureWeather?.forecasts?.[2]?.dayTemp}°</div>
                                <div className="min">/ {futureWeather?.forecasts?.[2]?.nightTemp}°</div>
                            </div>
                        </li>
                        <li className="futrue-item">
                            <div className="week">周{futureWeather?.forecasts?.[3]?.week}</div>
                            <img src={img[futureWeather?.forecasts?.[3]?.dayWeather]} alt="天气图标" />
                            <div className="max-min">
                                <div className="max">{futureWeather?.forecasts?.[3]?.dayTemp}°</div>
                                <div className="min">/ {futureWeather?.forecasts?.[3]?.nightTemp}°</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="tendency">
                    <div className="title">
                        温度走势
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather