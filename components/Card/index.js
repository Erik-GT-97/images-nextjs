import React from 'react'
import styles  from './card.module.css'

const Card = ({img}) => {
    return (
        <div className={styles.card} >
            <img src={img}></img>
        </div>
    )
}

export default Card