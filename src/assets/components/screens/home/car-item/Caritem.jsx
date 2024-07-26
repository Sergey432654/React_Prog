 import styles from '../Home.module.css'
 function Caritem({car}){
        return (
            <div key={car.id} className={styles.item}>
              <div className={styles.image} 
              style={{
              backgroundImage: `url(${car.image})` ,
              }} />
                <div className={styles.info}>
                <h2>{car.name}</h2>
                <p>{car.price}</p>
                <button>Read more</button>
                </div>
             </div>
        )
 }

 export default Caritem