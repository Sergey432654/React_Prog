import axios from "axios"
export const carService ={
    async getAll(){
        const respons = await axios.get('http://localhost:3000/cars')

        
    return respons.data
    },
    async getByID(id){
        const respons = await axios.get(`http://localhost:3000/cars?id=${id}`)

        
    return respons.data[0]
},
}