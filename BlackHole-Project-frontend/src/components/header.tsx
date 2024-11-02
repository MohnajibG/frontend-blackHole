import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styles/Epic.css";

interface HeaderComponent {
  caption: string;
  date: string;
  image: string;
  identifier: string;
}

export const Header: React.FC = () => {
  const [data, setData] = useState<HeaderComponent[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.nasa.gov/EPIC/api/natural/images?api_key=44GNdiexpkZvAGrHLbRH2p1WkMRTmdhq31zdVauy"
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
    <main className="main-epic">
      <h1>Earth Polychromatic Imaging Camera</h1>
      <div className="items">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.identifier}>
              <p className="date"> {item.date}</p>
              <img
                src={`https://epic.gsfc.nasa.gov/archive/natural/${item.date.slice(
                  0,
                  4
                )}/${item.date.slice(5, 7)}/${item.date.slice(8, 10)}/png/${
                  item.image
                }.png`}
                alt={item.caption}
              />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
};
