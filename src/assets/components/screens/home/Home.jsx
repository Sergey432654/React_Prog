
 import Caritem from './car-item/Caritem'
 import CreateCar from './create-car-form/Createcar.jsx'
 import {cars as carsData} from './pens.data'
 import { useState } from 'react';
function Home() {
  const[cars , setCars] = useState(carsData);
  console.log(cars)
  return (
      <div>

        <h1>Catalog Penis</h1>
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
