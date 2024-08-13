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

    const createNewCar = data =>{
        console.log(data)
        e.preventDefault()
        setCars(prev => [{id: prev.lenght +1 , ...data} , ...prev])
        setData(clearData)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(CreateCar)}>
            <input 
            placeholder='name'
            {...register('name' , {required: true })}
            />
            <input 
            placeholder="price"
            {...register('price' , {required: true })}
            />
            <input 
            placeholder="image" 
            {...register('image' , {required: true })}
            />

            <button className='btn'>Create</button>
        </form>
    )
}
export default CreateCar