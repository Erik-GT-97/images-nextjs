import React from 'react'
import Navbar from '../Navbar'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <footer>
                <a href='https://github.com/Erik-GT-97/images-nextjs' target='_blank'><img src='../../github.png'></img></a>
            </footer>
        </div>
    )
}

export default Layout