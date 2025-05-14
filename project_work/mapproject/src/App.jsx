import { useEffect, useState } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import { fetchCities } from "../api/supadb.js";
import { fetchAqi } from "../api/airapi.js";
import AirTable from "./components/AirTable.jsx";
import { Bar, Line, Pie, Column } from "@ant-design/plots";
import MyChart from "./components/MyChart.jsx";

function App() {
  const [cities, setCities] = useState([]);
  const [aqiInfo, setAqiInfo] = useState({});

  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_KEY,
    libraries: ["clusterer", "services", "drawing"],
  });

  useEffect(() => {
    fetchCities().then((data) => {
      setCities(data);
    });
  }, []);

  const clickAqi = (city) => {
    fetchAqi(city.latitude, city.longitude).then((data) => {
      setAqiInfo(data);
    });
  };

  return (
    <>
      <h1>미세먼지</h1>
      <MyChart></MyChart>
      <Map
        center={{ lat: 35.8693, lng: 128.6062 }}
        level={7}
        style={{ width: "100%", height: "50vh" }}
      >
        {cities.map((city) => (
          <MapMarker
            key={city.id}
            position={{ lat: city.latitude, lng: city.longitude }}
            onClick={() => {
              clickAqi(city);
            }}
          ></MapMarker>
        ))}
      </Map>
      {/* { AirTable({...aqiInfo}) } */}
      <AirTable {...aqiInfo}></AirTable>
      {/* <Line {...config} /> */}
      <Line data={config.data} xField={config.xField} yField={config.yField} />
      <Bar data={config.data} xField={config.xField} yField={config.yField} />
      <Pie data={config.data} xField={config.xField} yField={config.yField} colorField={config.yField} angleField={config.yField}/>
      <DemoDefaultTooltip />
    </>
  );
}

export default App;
