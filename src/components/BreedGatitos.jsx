import { useEffect, useState } from "react";

const BreedGatitos = () => {
  const [breed, setBreed] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://catfact.ninja/breeds');
        const data = await response.json();
        setBreed(data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    fetchData();
  }, []);

  console.log(breed);

  return (
    <div className="margen">
      {Array.isArray(breed.data) && breed.data.length > 0 ? (
        <ul className="listaBreed">
          {breed.data.map((item, index) => (
            <li key={index} className="infoBreed">
              <strong className="interior">Pattern:</strong> <p className="parrafoInterior">{item.pattern}</p>
              <strong className="interior">Breed:</strong> <p className="parrafoInterior">{item.breed}</p>
              <strong className="interior">Country:</strong><p className="parrafoInterior">{item.country}</p>  
              <strong className="interior">Origin:</strong> <p className="parrafoInterior">{item.origin}</p> 
              <strong className="interior">Coat:</strong> <p className="parrafoInterior">{item.coat}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>No se encontraron datos de razas de gatitos.</div>
      )}
    </div>
  );
}

export default BreedGatitos;