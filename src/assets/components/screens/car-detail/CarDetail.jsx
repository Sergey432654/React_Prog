import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Caritem from '../home/car-item/Caritem'
import { useEffect } from 'react'

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
  return (
    <div><Caritem car={car}/></div>
  )
}

export default CarDetail