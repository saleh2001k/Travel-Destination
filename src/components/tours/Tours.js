import './Tours.css'


function Tours(props) {
  return (
    <>
      {props.db.map((tour) => {
        return(
            <div className='tours'>
            <div className='tour' key={tour.id}>
                <h2>{tour.name}</h2>
                <img src={tour.image} alt={tour.name} />
                {/* <p>{tour.info}</p>
                <p>The average price of the trip: {tour.price} $</p> */}
            </div>
            </div>
            )
  
        }
     )
    }
    </>
  )
}
export default Tours;   