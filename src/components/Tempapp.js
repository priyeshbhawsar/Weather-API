import React, { useEffect, useState } from "react";
import CloudIcon from '@mui/icons-material/Cloud';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState("mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=65d3cf7625f50bd0d3fd6858860a7f80`;
      const response = await fetch(url);

      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
               <CloudOutlinedIcon/>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min}°Cel | Max : {city.temp_min}°Cel
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three "></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
