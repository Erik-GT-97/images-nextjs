import React, {useState, useEffect} from 'react'
import Card from '@components/Card'
import Loading from '@components/Loading'

const Anya  = () => {
    const [images,setImages] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      setLoading(true)
      window.fetch('/api/anya')
            .then(response => response.json())
            .then((data) => {
                setImages(data)
            }) 
      setLoading(false)   
    },[])
    return (
        <>
        {loading && <Loading></Loading>}
        {!loading &&
        <div className='container-cards'>
            {
              images.map(data => (
                  <Card key={data.id} img={data.image} />
              ))
            }
        </div>
        }
        </>
    )
}

export default Anya