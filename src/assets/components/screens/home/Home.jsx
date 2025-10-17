
 import Caritem from './car-item/Caritem'
 import CreateCar from './create-car-form/Createcar.jsx'
 import {cars as carsData} from './pens.data'
 import { useContext, useState } from 'react';
 import { AuthContext } from '../../providers/AuchProvider';
import { useNavigate } from 'react-router-dom';
function Home() {
  const[cars , setCars] = useState(carsData);
  console.log(cars)

  const navigate = useNavigate();

  const{user, setUser} = useContext(AuthContext)
  const goAbout = () =>{
    navigate('/aunorization')
  }



  return (
      <div>
        <h1>Car Catalog</h1>
          <button onClick={goAbout}>Login</button>
        <CreateCar setCars={setCars} />
        <div>
          {cars.length ? (cars.map(car =>(
          <Caritem key= {car.id} car={car} />
          )))
             : (<p>Nothing</p>)}
        
      </div>
     </div>

        
  )
}
export default Home
