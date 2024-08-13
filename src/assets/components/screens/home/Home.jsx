
 import Caritem from './car-item/Caritem'
 import CreateCar from './create-car-form/Createcar.jsx'
 import {cars as carsData} from './pens.data'
 import { useContext, useState } from 'react';
 import VideoPlayer from './Player';
 import { AuthContext } from '../../providers/AuchProvider';
function Home() {
  const[cars , setCars] = useState(carsData);
  console.log(cars)

  const{user, setUser} = useContext(AuthContext)

  return (
      <div>
        <h1>Catalog Penis</h1>
        {user ? (
        <>
          <h2>Welcome {user.name}!</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
        ) : (
          <button onClick={() => setUser({name: 'Max'})} >Login</button>
        )
      }
        <VideoPlayer/>
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
