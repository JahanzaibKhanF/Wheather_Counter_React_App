import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const API_KEY = "3214bf514372f05e67e9693baf306e76";

const Weather = () => {
  const [city, setCity] = useState("karachi");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
        .then((response) => {
          setWeather(response.data);
          setError(null);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setError("Please Enter Correct City Name.");
          setWeather(null);
          setLoading(false);
        });
    }
  }, [city]);

  return (
    <div className="clouds-bg">
      <br />
      <br />

      <br />
      <h1 className="text-center text-white">Weather</h1>
      <br />
      <br />

      <Row>
        <Col sm={{ span: 6, offset: 3 }}>
          <div className="text-center weather_container">
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
              </Form.Group>
            </Form>
            {error && <p>{error}</p>}
            {loading && <p>Loading weather data...</p>}
            {weather && (
              <div>
                <h1 class="bi bi-clouds-fill ">
                  &nbsp;{(weather.main.temp - 273.15).toFixed(2)}°C
                </h1>
                <h4>{weather.weather[0].description}</h4>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Weather;
