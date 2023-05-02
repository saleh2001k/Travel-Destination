import { useParams } from "react-router-dom";
import { useState } from 'react';
import './TourDetails.css';
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Data = require("../../data/db.json")

function TourDetails() {
  const { id } = useParams();
  const [view, setView] = useState(false);

  const filteredData = Data.filter((element) => element.id == id);
  const tourData = filteredData[0];

  const toggleView = () => {
    setView(!view);
  };

  return (
    
    <div className="container">
      <Header />
      <div className="tour-details">
        <h2>{tourData.name}</h2>
        <img className="img" src={tourData.image} alt={tourData.name} />
        <h3 style={{color: "white"}}> Price: {tourData.price} $💸</h3>
        <div>
          {view ? (
            <>
              <p className="info-p">{tourData.info}</p>
              <button onClick={toggleView}>Show less</button>
            </>
          ) : (
            <>
              <p className="info-p">{tourData.info.substring(0, 200)}</p>
              <button onClick={toggleView}>Show more</button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TourDetails;
