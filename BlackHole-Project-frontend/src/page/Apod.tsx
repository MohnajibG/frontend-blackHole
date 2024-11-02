import { useState, useEffect } from "react";
import axios from "axios";

import "../assets/styles/Apod.css";

interface ApodPageData {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
}

export const Apod: React.FC = () => {
  const [data, setData] = useState<ApodPageData | null>(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=44GNdiexpkZvAGrHLbRH2p1WkMRTmdhq31zdVauy"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="main-apod">
      <h1>Astronomy Picture of the Day</h1>
      <div></div>
      {data ? (
        <div>
          <h2>{data.title}</h2>

          <a href={data.hdurl} target="_blank">
            <img src={data.hdurl} alt="Apod Image" />
          </a>
          <div className="date-copyright">
            <h3>
              <span> Date:</span> {data.date}
            </h3>
            <h3>
              <span>Image Credit & Copyright:</span> {data.copyright}
            </h3>
          </div>
          <div className="explanation">
            <h3>Explanation:</h3>
            <p>{data.explanation}</p>

            <a
              className="link"
              href="https://apod.nasa.gov/apod/archivepix.html"
            >
              Archives
            </a>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};
