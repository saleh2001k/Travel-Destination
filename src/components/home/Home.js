import Footer from "../footer/Footer";
import Header from "../header/Header";
import ToursData from '../../data/db.json';
import Tours from "../tours/Tours";
function Home() {
  return (
    <div>
      <Header/>
      <Tours db={ToursData}/> 
      <Footer/>
    </div>
  );
}

export default Home; 