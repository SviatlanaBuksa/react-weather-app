import React from "react";
import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Krakow" />
        <hr />
        <footer>
          <small>
            This project was coded by Sviatlana Buksa and is{" "}
            <a
              href="https://github.com/SviatlanaBuksa/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub{" "}
            </a>
            and{" "}
            <a
              href="https://kaleidoscopic-gaufre-5a8b1e.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
