import { useState } from "react";
import { fetchPhotos } from "../components/fetchPhotos";

interface Photo {
  id: number;
  img_src: string;
  camera: { name: string };
}
const CameraOptions = {
  Curiosity: [
    { abbreviation: "FHAZ", name: "Front Hazard Avoidance Camera" },
    { abbreviation: "RHAZ", name: "Rear Hazard Avoidance Camera" },
    { abbreviation: "MAST", name: "Mast Camera" },
    { abbreviation: "CHEMCAM", name: "Chemistry and Camera Complex" },
    { abbreviation: "MAHLI", name: "Mars Hand Lens Imager" },
    { abbreviation: "MARDI", name: "Mars Descent Imager" },
    { abbreviation: "NAVCAM", name: "Navigation Camera" },
  ],
  Opportunity: [
    { abbreviation: "FHAZ", name: "Front Hazard Avoidance Camera" },
    { abbreviation: "RHAZ", name: "Rear Hazard Avoidance Camera" },
    { abbreviation: "NAVCAM", name: "Navigation Camera" },
    { abbreviation: "PANCAM", name: "Panoramic Camera" },
    {
      abbreviation: "MINITES",
      name: "Miniature Thermal Emission Spectrometer",
    },
  ],
  Spirit: [
    { abbreviation: "FHAZ", name: "Front Hazard Avoidance Camera" },
    { abbreviation: "RHAZ", name: "Rear Hazard Avoidance Camera" },
    { abbreviation: "NAVCAM", name: "Navigation Camera" },
    { abbreviation: "PANCAM", name: "Panoramic Camera" },
    {
      abbreviation: "MINITES",
      name: "Miniature Thermal Emission Spectrometer",
    },
  ],
};

const Mars = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [params, setParams] = useState({
    sol: 1000,
    camera: "FHAZ",
    rover: "Curiosity", // Changez "curiosity" en "Curiosity"
  });
  const handleFetchPhotos = async () => {
    const fetchedPhotos = await fetchPhotos(params);
    if (fetchedPhotos) setPhotos(fetchedPhotos);
  };

  const handleRoverChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setParams({ ...params, rover: event.target.value });
  };

  const handleCameraChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setParams({ ...params, camera: event.target.value });
  };

  return (
    <div>
      <label>
        Rover:
        <select
          value={params.rover}
          onChange={handleRoverChange} // Utilisez handleRoverChange ici
        >
          {Object.keys(CameraOptions).map((rover) => (
            <option key={rover} value={rover}>
              {rover}
            </option>
          ))}
        </select>
      </label>

      <label>
        Camera:
        <select
          value={params.camera}
          onChange={handleCameraChange} // Utilisez handleCameraChange ici
        >
          {CameraOptions[params.rover].map((camera) => (
            <option key={camera.abbreviation} value={camera.abbreviation}>
              {camera.name}
            </option>
          ))}
        </select>
      </label>

      <button onClick={handleFetchPhotos}>Voir les photos</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.img_src}
            alt={photo.camera.name}
            style={{ width: "200px", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Mars;
