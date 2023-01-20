import "../styles.css";
import { Outlet, Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <br />
      <div class="container">
        <div class="jumbotron text-center">
          <h1 class="display-4">Welcome to DataWatcher</h1>
          <p class="lead">
            DataWatcher is a powerful tool that provides real-time data analysis
            for website visitors, inventory, weather information and more. With
            our user-friendly interface, you can easily customize and track your
            data in real-time.
          </p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Weather Information</h5>
                <img
                  src="weather-image.jpg"
                  class="
                card-img-right"
                  alt="Weather Information"
                />
                <p class="card-text">
                  This feature allows you to check the current weather
                  conditions for different cities. You can get information such
                  as temperature, humidity, and current conditions with a click
                  of a button. Simply enter the name of your desired city and
                  get the current weather information.
                </p>

                <Link to="weather">
                  <button className="btn btn-danger">Check Weather</button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Digital Counting</h5>
                <img
                  src="digital-counter-image.png"
                  class="
                card-img-right"
                  alt="Weather Information"
                />
                <p class="card-text">
                  This feature allows you to count numbers in real-time. It is
                  easy to use and customizable, making it perfect for keeping
                  track of website visitors, inventory, or any other numerical
                  values. You can start, stop, reset, and adjust the counting
                  speed to suit your needs.
                </p>
                <Link to="counter">
                  <button className="btn btn-danger">Start Counting</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
