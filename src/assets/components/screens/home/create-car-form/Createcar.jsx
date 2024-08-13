import styles from './createcarform.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { carService } from '../../../../../service/car.service';
import { useForm } from 'react-hook-form';
const clearData = {
    name: '' ,
    price: '' ,
    image: '' ,
};

const CreateCar = ({setCars}) => {
    const [data , setData] = useState([])

    const {register ,reset, handleSubmit} = useForm({
        mode: 'onChange' 
    })
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await carService.getAll()

            setCars(data)
        }
        fetchData()
    }, [])

    const createNewCar = e =>{
        e.preventDefault()
        setCars(prev => [{id: prev.lenght +1 , ...data} , ...prev])
        setData(clearData)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(createNewCar)}>
            <input 
            placeholder='name'
            onChange={e => setData(prev => ({...prev , name:e.target.value}))}
            value={data.name}
            />
            <input 
            placeholder="price"
            onChange={e => setData(prev =>({...prev , price:e.target.value}))}
            value={data.price}
            />
            <input 
            placeholder="image"
            onChange={e => setData(prev => ({...prev , image:e.target.value}))}
            value={data.image}
            />

            <button className='btn' onClick={e => createNewCar(e)}>Create</button>
        </form>
    )
}
export default CreateCar