import React, {useState, useEffect} from 'react'
import Card from '@components/Card'

const Anya  = () => {
    const [images,setImages] = useState([])

    useEffect(()=>{
      window.fetch('/api/anya')
            .then(response => response.json())
            .then((data) => {
                setImages(data)
            })    
    },[])
    return (
        <div className='container-cards'>
            {
              images.map(data => (
                  <Card key={data.id} img={data.image} />
              ))
            }
        </div>
    )
}

export default Anya