import React, { useEffect, useState } from 'react'
import Card from '@components/Card'

const Home = () => {
    const [images,setImages] = useState([])

    useEffect(()=>{
      window.fetch('/api/elizabeth')
            .then(response => response.json())
            .then((data) => {
                setImages(data)
            })    
    },[])

    return (
        <div className='container-cards'>
            {
              images.map(data => (
                  <Card key={data.id} img={data.image}/>
              ))
            }
        </div>
    )
}

export default Home