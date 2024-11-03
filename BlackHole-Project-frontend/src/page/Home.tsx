import { useState } from "react";
import axios from "axios";
import "../assets/styles/Home.css";
interface HomeData {
  title: string;
  url: string;
}

export const Home: React.FC = () => {
  const [data, setData] = useState<HomeData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async (query: string) => {
    try {
      const response = await axios.get(
        `https://images-api.nasa.gov/search?q=${query}`
      );
      const items = response.data.collection.items.map((item) => ({
        title: item.data[0].title,
        url: item.links ? item.links[0].href : "",
      }));
      setData(items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    fetchData(searchTerm);
  };

  return (
    <main className="main-home">
      <h1>NASA Image Search</h1>
      <div className="search-bar">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for NASA images..."
        />
        <button onClick={handleSearchSubmit}>Search</button>
      </div>
      <div className="items-home">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <img src={item.url} alt={item.title} />
            </div>
          ))
        ) : (
          <p>Search for images above.</p>
        )}
      </div>
    </main>
  );
};
