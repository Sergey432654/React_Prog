import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Caritem from '../home/car-item/Caritem'
import { useEffect } from 'react'
import { carService } from '../../../../service/car.service'
import { Link } from 'react-router-dom'


const CarDetail = () => {
    const { id } = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        if(!id) return 
        const fetchData = async () => {
            const data = await carService.getByID(id)

            setCar(data)
        }
        fetchData()
    }, [id])
  if(!car?.name) return <p>...Loading</p>
  return (
    <div>
    <Link color='white' to='/'>Back</Link>
    <div><Caritem car={car}/></div>
    </div>
  )
}

export default CarDetail