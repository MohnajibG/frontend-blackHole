import { useState, useEffect } from "react";
import axios from "axios";

import "../assets/styles/home.css";

interface HomePageData {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
}

export const Home: React.FC = () => {
  const [data, setData] = useState<HomePageData | null>(null);
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
    <main className="main-home">
      {data ? (
        <div>
          <h1>Astronomy Picture of the Day</h1>
          <h2>{data.title}</h2>
          <img src={data.hdurl} alt="" />
          <div className="date-copyright">
            <h3>Date: {data.date}</h3>
            <h3>Copyright: {data.copyright}</h3>
          </div>
          <div className="explanation">
            <h3>Explanation:</h3>
            <p>{data.explanation}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};
